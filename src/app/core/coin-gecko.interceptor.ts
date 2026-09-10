import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { retry, timer } from 'rxjs';
import { environment } from '../../environments/environment';

const COIN_GECKO_HOST = 'api.coingecko.com';
const MAX_RETRIES = 3;

/**
 * Cross-cutting handling for the CoinGecko public API:
 *
 *  - attaches the `x-cg-demo-api-key` header when a Demo key is configured
 *    (raises the rate limit from the shared keyless pool to a private quota);
 *  - transparently retries `429 Too Many Requests` and `5xx` responses with a
 *    backoff that honours the `Retry-After` header, so a transient rate limit
 *    no longer surfaces as "Service error" on first load.
 */
export const coinGeckoInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url.includes(COIN_GECKO_HOST)) {
    return next(req);
  }

  const key = environment.coinGecko?.demoApiKey;
  const authorized = key
    ? req.clone({ setHeaders: { 'x-cg-demo-api-key': key } })
    : req;

  return next(authorized).pipe(
    retry({
      count: MAX_RETRIES,
      delay: (error, retryCount) => {
        const status = error instanceof HttpErrorResponse ? error.status : 0;
        const retryable = status === 429 || (status >= 500 && status < 600);
        if (!retryable) {
          throw error;
        }
        const retryAfter = Number(
          error instanceof HttpErrorResponse
            ? error.headers.get('Retry-After')
            : null,
        );
        const waitMs = Number.isFinite(retryAfter) && retryAfter > 0
          ? Math.min(retryAfter * 1000, 60_000)
          : Math.min(1000 * 2 ** (retryCount - 1), 8000);
        return timer(waitMs);
      },
    }),
  );
};

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  coinGecko: {
    baseUrl: 'https://api.coingecko.com/api/v3',
    // Optional free CoinGecko "Demo" API key (https://www.coingecko.com/en/api).
    // Without a key the public API is limited to ~5-15 requests/minute per IP
    // and frequently returns HTTP 429, which is why the coin list sometimes
    // fails to load. With a Demo key you get ~30 req/min on a private quota.
    // Prefer setting it via the CG_DEMO_API_KEY build-time replacement rather
    // than committing a real key.
    demoApiKey: '',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

export const environment = {
  production: true,
  coinGecko: {
    baseUrl: 'https://api.coingecko.com/api/v3',
    // Set this in the Netlify UI as a build env var and inject it, or paste a
    // free CoinGecko Demo key here. Empty = keyless public API (heavily rate
    // limited, HTTP 429).
    demoApiKey: '',
  },
};

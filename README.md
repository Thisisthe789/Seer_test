# rsETH Seer Market Microsite

A Netlify-ready one-page website for the Seer market: “Will direct holders of rsETH on Ethereum mainnet suffer a direct loss due to the April 18 rsETH bridge hack on Kelp DAO?”

## Deploy on Netlify

1. Upload this folder, or the provided zip, to Netlify Drop.
2. Netlify will publish `index.html` and deploy the function in `netlify/functions/seer-market.js`.
3. The purchase panel fetches live market data from Seer through the Netlify function. The trade button opens the original Seer market page.

## Notes

- The X/debate cards are static public-source snippets. To make them fully live, add an X API bearer token and a Netlify function that calls the X API.
- The purchase panel estimates gross payout/profit from Seer odds. It does not execute trades, estimate slippage, or replace Seer’s own order preview.
- The resolution timer counts down to 2027-01-01 00:00:00 UTC, representing the end-of-2026 deadline.

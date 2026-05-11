# rsETH Seer Market Microsite

A Netlify-ready one-page website for the Seer market: “Will direct holders of rsETH on Ethereum mainnet suffer a direct loss due to the April 18 rsETH bridge hack on Kelp DAO?”

## Deploy on Netlify

1. Push the folder contents to a GitHub repository.
2. In Netlify, import the repository as a new site.
3. Use `.` as the publish directory. Netlify will detect the function in `netlify/functions`.
4. The purchase panel loads Seer odds when the page opens, and the trade button sends visitors to the original Seer market page.

## Notes

- The debate cards highlight selected public commentary relevant to the YES/NO market.
- The purchase panel estimates gross payout/profit from Seer odds. It does not execute trades, estimate slippage, or replace Seer’s own order preview.
- The resolution timer counts down to 2027-01-01 00:00:00 UTC, representing the end-of-2026 deadline.

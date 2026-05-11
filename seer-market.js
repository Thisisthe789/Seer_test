const SEER_FUNCTIONS = {
  getMarket: 'https://app.seer.pm/.netlify/functions/get-market',
  charts: 'https://app.seer.pm/.netlify/functions/markets-charts'
};

const MARKET = {
  chainId: 100,
  slug: 'will-direct-holders-of-rseth-on-ethereum-mainnet-suffer-a-direct-loss-due-to-the'
};

const headers = {
  'content-type': 'application/json; charset=utf-8',
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, OPTIONS',
  'access-control-allow-headers': 'content-type'
};

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  try {
    let body = {};
    if (event.body) {
      body = JSON.parse(event.body);
    }

    const action = body.action || 'market';

    if (action === 'charts') {
      if (!body.marketId || !/^0x[a-fA-F0-9]{40}$/.test(body.marketId)) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing or invalid marketId' }) };
      }
      const url = `${SEER_FUNCTIONS.charts}?ids=${encodeURIComponent(body.marketId)}`;
      const response = await fetch(url, { headers: { accept: 'application/json' } });
      const text = await response.text();
      return { statusCode: response.status, headers, body: text };
    }

    const payload = {
      chainId: MARKET.chainId,
      url: MARKET.slug
    };

    const response = await fetch(SEER_FUNCTIONS.getMarket, {
      method: 'POST',
      headers: { 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify(payload)
    });
    const text = await response.text();
    return { statusCode: response.status, headers, body: text };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message || 'Unknown Seer proxy error' })
    };
  }
};

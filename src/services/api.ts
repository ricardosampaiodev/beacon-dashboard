const BASE_URL = "https://api.coingecko.com/api/v3";

export const fetchTopCoins = async () => {
  const params = new URLSearchParams({
    vs_currency: "usd",
    order: "market_cap_desc",
    per_page: "30",
    page: "1",
    sparkline: "true",
    price_change_percentage: "24h",
  });

  const response = await fetch(`${BASE_URL}/coins/markets?${params}`);

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
};
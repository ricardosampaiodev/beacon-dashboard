export const formatCompactCurrency = (value: number | undefined | null) => {
  if (value === undefined || value === null || isNaN(value)) return '$0.00';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: "compact",
    compactDisplay: "short"
  }).format(value);
};

export const formatPercentage = (value: number | undefined | null) => {
  if (value === undefined || value === null || isNaN(value)) return '0.00%';
  return `${value > 0 ? '+' : ''}${value.toFixed(2)}%`;
};
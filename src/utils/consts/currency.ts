type Currency = {
  symbol: string;
  rate: number;
  code: 'USD' | 'BTN';
};

export const countryToCurrency: Record<string, Currency> = {
  BT: { symbol: 'Nu.', rate: 84, code: 'BTN' },
  US: { symbol: '$', rate: 1, code: 'USD' }, // Example: 1 USD ≈ 83 BTN
};

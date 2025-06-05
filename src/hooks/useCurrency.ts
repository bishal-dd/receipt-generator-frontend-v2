import { useEffect, useState } from 'react';
import { countryToCurrency } from '../utils/consts/currency';
async function getUserCountry() {
  try {
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();
    return data.country_code; // e.g., "US", "IN", "DE"
  } catch (e) {
    console.error('Location detection failed:', e);
    return 'US'; // fallback
  }
}

function useCurrency() {
  const [currency, setCurrency] = useState({
    symbol: '$',
    rate: 1,
    code: 'USD',
  });

  useEffect(() => {
    getUserCountry().then((code) => {
      const c = countryToCurrency[code] || {
        symbol: '$',
        rate: 1,
        code: 'USD',
      };
      setCurrency(c);
    });
  }, []);

  return currency;
}

export default useCurrency;

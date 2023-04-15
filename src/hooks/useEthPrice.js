import { useEffect, useState } from 'react';


function useEthPrice() {
  const [ethPrice, setEthPrice] = useState();

  useEffect(() => {
    const getEthPrice = async () => {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/ethereum'
      );
      const data = await response.json();
      setEthPrice(data.market_data.current_price.usd);
    };

    getEthPrice();
  }, []);

  return ethPrice;
}

export default useEthPrice;
import React from 'react';
import useEthPrice from '../hooks/useEthPrice';

const EthPrice = () => {
  const ethPrice  = useEthPrice();
  return (
    <div>
      <h3>Eth Price: {ethPrice} </h3>
    </div>
  );
}

export default EthPrice;
import React from 'react';
import useEthPrice from '../hooks/useEthPrice';
import './ethPrice.css';

const EthPrice = () => {
  const ethPrice = useEthPrice();
  return (
    <div>
      <div className="eth-price-container">
        <h3>Eth Price: ${ethPrice} </h3>

      </div>
    </div>
  );
};

export default EthPrice;
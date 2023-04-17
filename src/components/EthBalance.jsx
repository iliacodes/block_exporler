import { useState } from 'react';
import getEthBalance from '../hooks/getBalance';
import './ethBalance.css';


const EthBalance = () => {
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const ethBalance = await getEthBalance(address);
      setBalance(ethBalance.toString());
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="eth-balance-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="address">Enter an Ethereum address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
        <button type="submit">Get balance</button>
      </form>
      {balance !== null && (
        <p>
          The balance of {address} is <span></span> wei.
        </p>
      )}
    </div>
  );
};

export default EthBalance;

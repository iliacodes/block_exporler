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
      <form onSubmit={handleSubmit} style={{ fontWeight: 'bold', fontSize: '1.5rem' }} >
        <label htmlFor="address">
          <br/>

          Enter an Ethereum address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          style={{ height: '1.5rem', fontSize: '1.25rem' }}
        />
        <button type="submit"
        style={{ height: '2rem', fontSize: '1.25rem' }}>
          Get balance</button>
      </form>
      {balance !== null && (
        <p>
          <h2>The balance of {address} is <span></span> wei.</h2>
        </p>
      )}
    </div>
  );
};

export default EthBalance;

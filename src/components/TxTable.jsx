import { useState, useEffect } from 'react';
import useLastTenTxs from '../hooks/useLatestTxs';
import { Utils } from 'alchemy-sdk';
import './txTable.css'

const formatEther = (wei) => {
  return Utils.formatEther(wei);
};

const formatAddress = (address) => {
  return `${address.slice(0,5)}...${address.slice(-5)}`
}

const TxTable = () => {
  const [txs, setTxs] = useState([]);

  useEffect(() => {
    const fetchTxs = async () => {
      try {
        const getLastTenTxs = useLastTenTxs;
        const latestTxs = await getLastTenTxs();
        setTxs(latestTxs);
        console.log(latestTxs)
      } catch (error) {
        console.error(error);
      }
    };

    fetchTxs();
  }, []);

  return (
    <div className="tx-table-card">
      <h3>txs</h3>
      <table className="card-placement">
        <thead>
          <tr>
            <th>tx Hash</th>
            <th>From</th>
            <th>To</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {txs.map((tx) => (
            <tr key={tx}>
              <td>
                {formatAddress(tx.blockHash)}
              </td>
              <td>{formatAddress(tx.from)}</td>
              <td>{formatAddress(tx.to)}</td>
              <td>{formatEther(tx.value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TxTable;

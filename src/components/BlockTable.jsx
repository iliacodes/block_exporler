import { useState, useEffect } from 'react';
import useLatestBlocks from '../hooks/useLatestBlocks';
import './blockTable.css'
import { Utils } from 'alchemy-sdk';

const formatAddress = (address) => {
  return `${address.slice(0,5)}...${address.slice(-5)}`
}

const BlockTable = () => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const fetchBlocks = async () => {
      try {
        const getLatestBlocks = useLatestBlocks; 
        const latestBlocks = await getLatestBlocks();
        setBlocks(latestBlocks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlocks();
  }, []);

  const handleBlockClick = (blockNumber) => {
    window.location.href = `https://etherscan.io/block/${blockNumber}`;
  };

  return (
    <div className="block-table-card">
      <h3>Blocks</h3>
      <table className="card-placement">
        <thead>
          <tr>
            <th>Block Number</th>
            <th>Timestamp</th>
            <th>Miner</th>
          </tr>
        </thead>
        <tbody>
          {blocks.map((block) => (
            <tr key={block.number}>
              <td>
                <a href="#" onClick={() => handleBlockClick(block.number)}>
                  {block.number}
                </a>
              </td>
              <td>{block.timestamp}</td>
              <td>{formatAddress(block.miner)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlockTable;

import { useState, useEffect } from 'react';
import useLatestBlocks from '../hooks/useLatestBlocks';

const BlockTable = () => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const fetchBlocks = async () => {
      try {
        const getLatestBlocks = useLatestBlocks; // Import the hook as a function
        const latestBlocks = await getLatestBlocks(); // Call the hook here
        setBlocks(latestBlocks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlocks();
  }, []);

  return (
    <div>
      <h3>Block Info:</h3>
      <table>
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
              <td>{block.number}</td>
              <td>{block.timestamp}</td>
              <td>{block.miner}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlockTable;

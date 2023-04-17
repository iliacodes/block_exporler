import React from 'react';
import useBlockNumber from '../hooks/useBlockNumber'
import './blockInfo.css'

const BlockInfo = () => {
  const { data: blockNumber } = useBlockNumber();

  return (
    <div>
      <div className="block-info-container">

        <h3>Current block number: {blockNumber}</h3>
      </div>
    </div>
  );
}

export default BlockInfo;

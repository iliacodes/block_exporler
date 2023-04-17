import React from 'react';
import useBlockNumber from '../hooks/useBlockNumber'

const BlockInfo = () => {
  const { data: blockNumber } = useBlockNumber();

  return (
    <div>
        <p>Current block number: {blockNumber}</p>
    </div>
  );
}

export default BlockInfo;

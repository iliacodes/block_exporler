import { Alchemy, Network, Block } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import useBlockNumber from './useBlockNumber';

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

function useBlock() {
  const [block, setBlock] = useState();
  const { data: blockNumber = 0 } = useBlockNumber();

  useEffect(() => {
    const getBlock = async () => {
      if (!blockNumber) {
        return;
      }
      const block = await alchemy.core.getBlockByNumber(blockNumber);
      setBlock(block);
    };

    getBlock();

  }, [blockNumber]);

  return block;

}

export default useBlock;
import { Alchemy } from 'alchemy-sdk';
import { useEffect, useState } from 'react';

const alchemy = new Alchemy(settings);

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};


function useBlockNumber () {
  const [blockNumber, setBlockNumber] = useState(0);

  useEffect(() => {
    const getBlockNumber = async () => {
      setBlockNumber(await alchemy.core.getBlockNumber());
    };

    getBlockNumber();

    const intervalId = setInterval(getblockNumber, 1000*60);
    return () => clearInterval(intervalId);

  }, []);

  return {data: blockNumber};
}

export default useBlockNumber;
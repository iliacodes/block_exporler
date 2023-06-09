import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

function useBlockNumber () {
  const [blockNumber, setBlockNumber] = useState(0);

  useEffect(() => {
    const getBlockNumber = async () => {
      setBlockNumber(await alchemy.core.getBlockNumber());
    };

    getBlockNumber();

    const intervalId = setInterval(getBlockNumber, 1000*120);
    return () => clearInterval(intervalId);

  }, []);

  return {data: blockNumber};
}

export default useBlockNumber;

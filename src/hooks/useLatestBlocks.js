import * as Alchemy from "@alch/alchemy-web3";
import { useEffect, useState } from "react";
import { useBlockNumber } from "./useBlockNumber";

import dotenv from 'dotenv'
dotenv.config();

const alchemy = new Alchemy(settings);


const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

function useLatestBlocks() {
  const [blocks, setBlocks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState();

  const { data: blockNumber = 0 } = useBlockNumber();

  useEffect(() => {
    const fetchBlocks = async () => {
      try {
        const newBlocks = [];
        let latestBlockNumber = await alchemy.getLatestBlockNumber();

        if (latestBlockNumber <= 0) {
          setBlocks(newBlocks);
          setLoading(false);
          return;
        }

        for (let i = 0; i < 10; i++) {
          latestBlockNumber -= 1;
          const block = await alchemy.getBlock(latestBlockNumber);
          newBlocks.push(block);
        }

        setBlocks(newBlocks);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchBlocks();
  }, [blockNumber]);

  return { blocks, isLoading, error };
};

export default useLatestBlocks;
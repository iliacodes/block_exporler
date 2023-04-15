import * as Alchemy from "@alch/alchemy-web3";
import { useEffect, useState } from "react";
import { useBlockNumber } from "./useBlockNumber";

function useLatestBlocks() {
  const [blocks, setBlocks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState();

  const { data: blockNumber = 0 } = useBlockNumber();

  useEffect(() => {
    const fetchBlocks = async () => {
      try {
        const newBlocks = [];
        let latestBlockNumber = await Alchemy.getLatestBlockNumber();

        if (latestBlockNumber <= 0) {
          setBlocks(newBlocks);
          setLoading(false);
          return;
        }

        for (let i = 0; i < 10; i++) {
          latestBlockNumber -= 1;
          const block = await Alchemy.getBlock(latestBlockNumber);
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
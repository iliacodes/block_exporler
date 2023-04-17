import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from "react";
import useBlockNumber from "./useBlockNumber";

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);


export const useLatestBlocks = async () => {
  const latestBlocks = [];
  const latestBlock = await alchemy.core.getBlockNumber();
  let block = latestBlock;
  while (block > latestBlock - 10) {
    const _block = await alchemy.core.getBlock(block);
    latestBlocks.push(_block);
    block--;
  }
  return latestBlocks;
};

export default useLatestBlocks;

import { Alchemy, Network } from 'alchemy-sdk';

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);


export const useLastTenTxs = async () => {
  const lastTenTxs = [];
  const lastBlock = await alchemy.core.getBlockNumber();
  const block = await alchemy.core.getBlock(lastBlock);
  const txs = block.transactions;

  for (let tx of txs.slice(0,10)) {
    const tx_data = await alchemy.transact.getTransaction(tx)
    lastTenTxs.push(tx_data);
  }

  return lastTenTxs;
}

export default useLastTenTxs;

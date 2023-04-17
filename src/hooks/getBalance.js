import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY, 
  network: Network.ETH_MAINNET, 
};

const alchemy = new Alchemy(settings);

const getEthBalance = async (address) => {
  const balance = await alchemy.core.getBalance(address, "latest");
  return balance;
}

export default getEthBalance;
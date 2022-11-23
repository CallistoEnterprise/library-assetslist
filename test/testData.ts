import fs from 'fs';
import { IMAGE_TRACKING_EXCLUSIONS, LOCAL_COINS_PATH } from '../src/constants';
import { MAINNET_TOKENS, MAINNET_NFTS } from '../src/chains/mainnet';
import { TESTNET_TOKENS, TESTNET_NFTS } from '../src/chains/testnet';

export const jsonCollections = [
  {
    assets: MAINNET_TOKENS,
    isNFT: false,
    chainId: 820,
    toString: () => 'Mainnet Tokens',
  },
  {
    assets: MAINNET_NFTS,
    isNFT: true,
    chainId: 820,
    toString: () => 'Mainnet NFTs',
  },
  {
    assets: TESTNET_TOKENS,
    isNFT: false,
    chainId: 20729,
    toString: () => 'Testnet Tokens',
  },
  {
    assets: TESTNET_NFTS,
    isNFT: true,
    chainId: 20729,
    toString: () => 'Testnet NFTs',
  },
];

const getAllFiles = (dir: string, results: string[] = []) => {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    if (!IMAGE_TRACKING_EXCLUSIONS.find(entry => entry === file)) {
      const filePath = dir + '/' + file;

      if (fs.statSync(filePath).isDirectory()) {
        getAllFiles(filePath, results);
      } else {
        results.push(filePath);
      }
    }
  });

  return results;
};

export const sourceImages = getAllFiles(LOCAL_COINS_PATH);

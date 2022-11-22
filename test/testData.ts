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

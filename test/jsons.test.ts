import Web3 from 'web3';
import fs from 'fs';
import { BASE_DOMAIN, BASE_FULL_URL, BASE_EXTENSION } from '../src/constants';
import { MAINNET_TOKENS, MAINNET_NFTS } from '../src/chains/mainnet';
import { TESTNET_TOKENS, TESTNET_NFTS } from '../src/chains/testnet';

const data = [
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

describe.each(data)('JSON validation - %s', ({ assets, isNFT, chainId }) => {
  it('does not contain duplicate names or addresses', () => {
    for (let i = 0; i < assets.length; i++) {
      for (let j = 0; j < assets.length; j++) {
        if (i !== j) {
          expect(assets[i].name.toLowerCase()).not.toBe(
            assets[j].name.toLowerCase()
          );

          // Symbol can be identical for two ERC standards

          expect(assets[i].address.toLowerCase()).not.toBe(
            assets[j].address.toLowerCase()
          );
        }
      }
    }
  });

  it('does contain all required fields', () => {
    for (let item of assets) {
      expect(item.name.trim()).not.toBe('');
      expect(item.symbol.trim()).not.toBe('');

      if (isNFT) expect(item.image.trim()).toBe('');
      else expect(item.image.trim()).not.toBe('');
    }
  });

  it('does not contain invalid address', () => {
    for (let item of assets) {
      expect(Web3.utils.isAddress(item.address) && item.address).toBe(
        item.address
      );
    }
  });

  it('image address has correct format', () => {
    if (!isNFT) {
      for (let item of assets) {
        expect(item.image).toBe(
          BASE_FULL_URL + chainId + '/' + item.address + BASE_EXTENSION
        );
      }
    }
  });

  it('image source exists', () => {
    if (!isNFT) {
      for (let item of assets) {
        const localPath = item.image.replace(BASE_DOMAIN, './public/');
        expect(fs.existsSync(localPath) && item.address).toBe(item.address);
      }
    }
  });
});

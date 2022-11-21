import Web3 from 'web3';
import { MAINNET_TOKENS, MAINNET_NFTS } from '../src/chains/mainnet';
import { TESTNET_TOKENS, TESTNET_NFTS } from '../src/chains/testnet';

const data = [
  {
    assets: MAINNET_TOKENS,
    isNFT: false,
    toString: () => 'Mainnet Tokens',
  },
  {
    assets: MAINNET_NFTS,
    isNFT: true,
    toString: () => 'Mainnet NFTs',
  },
  {
    assets: TESTNET_TOKENS,
    isNFT: false,
    toString: () => 'Testnet Tokens',
  },
  {
    assets: TESTNET_NFTS,
    isNFT: true,
    toString: () => 'Testnet NFTs',
  },
];

describe.each(data)('JSON validation - %s', ({ assets, isNFT }) => {
  it('does not contain duplicate names or addresses', () => {
    for (let i = 0; i < assets.length; i++) {
      for (let j = 0; j < assets.length; j++) {
        if (i !== j) {
          expect(assets[i].name.toLowerCase()).not.toBe(
            assets[j].name.toLowerCase()
          );
          //expect(assets[i].symbol.toLowerCase()).not.toBe(
          //  assets[j].symbol.toLowerCase()
          //); // COMMENTED OUT - CAN BE IDENTICAL FOR TWO ERC STANDARDS
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
      expect(Web3.utils.isAddress(item.address)).toBe(true);
    }
  });
});

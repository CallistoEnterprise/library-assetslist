import Web3 from 'web3';
import fs from 'fs';
import {
  REMOTE_DOMAIN_URL,
  BASE_IMAGE_EXTENSION,
} from '../src/constants';
import { jsonCollections } from './testData';
import { AssetType } from '../src/types';

describe.each(jsonCollections)(
  'JSON validation - %s',
  ({ assets, isNFT }) => {
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

    it('each does contain all required fields', () => {
      for (let item of assets) {
        expect(item.name.trim()).not.toBe('');
        expect(item.symbol.trim()).not.toBe('');
        expect(item.audit).toBeDefined();
        expect(item.audit.isAudited).toBeDefined();

        if (isNFT) expect(item.image.trim()).toBe('');
        else expect(item.image.trim()).not.toBe('');
      }
    });

    it('each does not contain invalid address', () => {
      for (let item of assets) {
        if(item.category === AssetType.NATIVE) continue
        expect(Web3.utils.isAddress(item.address) && item.address).toBe(
          item.address
        );
      }
    });

    it('each image address has correct format', () => {
      if (!isNFT) {
        for (let item of assets) {
          if(item.category === AssetType.NATIVE) continue
          
          expect(item.image).toContain(BASE_IMAGE_EXTENSION)
        }
      }
    });

    it('each image source exists', () => {
      if (!isNFT) {
        for (let item of assets) {
          const localPath = item.image.replace(REMOTE_DOMAIN_URL, './public');
          expect(fs.existsSync(localPath) && item.address).toBe(item.address);
        }
      }
    });
  }
);

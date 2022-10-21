import type { Asset, AssetNFT } from '../types'
import { AssetType } from '../types'

export const TESTNET_TOKENS: Asset[] = [
  {
    name: 'Soy-ERC223',
    symbol: 'SOY',
    address: '0x4c20231BCc5dB8D805DB9197C84c8BA8287CbA92',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/207290x/4c20231BCc5dB8D805DB9197C84c8BA8287CbA92.png',
    category: AssetType.ERC223,
    isVerified: false,
  },
  {
    name: 'Callisto Enterprise',
    symbol: 'CLOE',
    address: '0xF247c669E08837129965fF3cBcaC9E3695A9684B',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/207290x/F247c669E08837129965fF3cBcaC9E3695A9684B.png',
    category: AssetType.ERC223,
    isVerified: false,
  },
  {
    name: 'Coinary Token',
    symbol: 'CYT',
    address: '0x0fA3Aab74949a4F43261EB38E3c29E126CAF4864',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/207290x/0fA3Aab74949a4F43261EB38E3c29E126CAF4864.png',
    category: AssetType.ERC223,
    isVerified: false,
  },
  {
    name: 'Bulls USD',
    symbol: 'BUSDT',
    address: '0xAB99622d19298EC2BEAB50EFF91A9b6F46Af747C',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/207290x/AB99622d19298EC2BEAB50EFF91A9b6F46Af747C.png',
    category: AssetType.ERC223,
    isVerified: false,
  },
  {
    name: 'Wrapped TWT',
    symbol: 'ccTWT',
    address: '0xCC099e75152ACCda96d54FAbaf6e333ca44AD86e',
    decimals: 18,
    image: 'https://app.soy.finance/https://asset.callisto.network/images/coins/207290x/CC099e75152ACCda96d54FAbaf6e333ca44AD86e.png',
    category: AssetType.ERC223,
    isVerified: false,
  },
]

export const TESTNET_NFTS: AssetNFT[] = [
  {
    name: 'Artefin',
    collectionName: 'Artefin',
    symbol: 'ART',
    address: '0xcc7b3206C88cd494d21841364989c5bfee5Cbaca',
    decimals: 0,
    image: '',
    category: AssetType.CALLISTONFT,
    isVerified: true,
    placeholderId: 'properties/1',
    placeholderName: 'metadata/0/name',
    placeholderTitle: 'metadata/0/edition',
    placeholderDescription: 'metadata/0/description',
    placeholderMedia: 'metadata/0/image_preview',
  },
]

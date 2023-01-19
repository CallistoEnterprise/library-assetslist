import type { Asset, AssetNFT } from '../types'
import { AssetType } from '../types'

export const TESTNET_TOKENS: Asset[] = [
  {
    name: 'Callisto Network',
    symbol: 'CLO',
    address: '0x0000000000000000000000000000000000000001',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/clo.png',
    category: AssetType.NATIVE,
    audit: {
    isAudited: false,
  },
    platforms: ['hub','soy'],
    projectUrl: 'https://callisto.network/'
  },
  {
    name: 'Wrapped TCLO',
    symbol: 'WTCLO',
    address: '0xbd2D3BCe975FD72E44A73cC8e834aD1B8441BdDa',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/clo.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: true,
    },
    platforms: ['hub','soy'],
    projectUrl: 'https://callisto.network/'
  },

  {
    name: 'Soy-ERC223',
    symbol: 'SOY',
    address: '0x4c20231BCc5dB8D805DB9197C84c8BA8287CbA92',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/soy.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy'],
    projectUrl: 'https://soy.finance/'
  },
  {
    name: 'Callisto Enterprise',
    symbol: 'CLOE',
    address: '0xF247c669E08837129965fF3cBcaC9E3695A9684B',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/cloe.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy'],
    projectUrl: 'https://callisto.network/'
  },
  {
    name: 'Bulls USD',
    symbol: 'BUSDT',
    address: '0xAB99622d19298EC2BEAB50EFF91A9b6F46Af747C',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/busdt.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy'],
    projectUrl: 'https://bullsinvesting.club/'
  },
  {
    name: 'Teramite token',
    symbol: 'TMT',
    address: '0xB4dDe88Fd2D7Cf5AA0880fa2Ec893124Cbbe0FA3',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/tmt.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy'],
    projectUrl: '',
  },
  {
    name: 'CatCoin',
    symbol: 'cat',
    address: '0xEd385a41AB79625973617E43d6F591a5F3668716',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/cat.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy'],
    projectUrl: ''
  },
  {
    name: 'DaeDalus',
    symbol: 'dad',
    address: '0xb1f1b49ed2bE5FaE8Bd07d6CD462D81578f950bd',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/dad.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy'],
    projectUrl: ''
  },
  {
    name: 'Artemis',
    symbol: 'ART',
    address: '0xBb311da561ACE7e7329Bcd9A79aA3cd98BE14F8D',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/art.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy'],
    projectUrl: ''
  },
  {
    name: 'MOON',
    symbol: 'MNN',
    address: '0x0DD4011b77A138A1969c11c3d87496B955F7BAF6',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/mnn.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy'],
    projectUrl: ''
  },
  {
    name: 'Fitter',
    symbol: 'FTR',
    address: '0x996fc789002EfB99fd735c23DC77AA3CD89Fd56d',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/ftr.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy'],
    projectUrl: ''
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
    audit: {
      isAudited: false,
    },
    platforms: ['hub'],
    projectUrl: 'https://nft.artefin.cz/',
    placeholderId: 'properties/1',
    placeholderName: 'metadata/0/name',
    placeholderTitle: 'metadata/0/edition',
    placeholderDescription: 'metadata/0/description',
    placeholderMedia: 'metadata/0/image_preview',
    placeholderContent: 'metadata/nft_content',
  },
  {
    name: 'Mucha',
    collectionName: 'Mucha freemint',
    symbol: 'AME',
    address: '0xA90e3Aa4ee96923caaD00850a3d065728EFE658B',
    decimals: 0,
    image: '',
    category: AssetType.CALLISTONFT,
    audit: {
      isAudited: false,
    },
    platforms: ['hub'],
    projectUrl: 'https://nft.muchaemotion.com/',
    placeholderId: 'properties/1',
    placeholderName: 'metadata/name',
    placeholderTitle: 'metadata/edition',
    placeholderDescription: 'metadata/description',
    placeholderMedia: 'metadata/image_preview',
    placeholderContent: 'metadata/nft_content',
  },
]

import type { Asset, AssetNFT } from '../types'
import { AssetType } from '../types'

export const TESTNET_TOKENS: Asset[] = [
  {
    name: 'Callisto Network',
    symbol: 'TCLO',
    address: '0xbd2D3BCe975FD72E44A73cC8e834aD1B8441BdDa',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/20729/0xbd2D3BCe975FD72E44A73cC8e834aD1B8441BdDa.png',
    category: AssetType.NATIVE,
    audit: {
      isAudited: true,
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: 'https://callisto.network/',
  },
  // {
  //   name: 'Wrapped Callisto Network',
  //   symbol: 'WTCLO',
  //   address: '0xbd2D3BCe975FD72E44A73cC8e834aD1B8441BdDa',
  //   decimals: 18,
  //   image: 'https://asset.callisto.network/images/coins/20729/0xbd2D3BCe975FD72E44A73cC8e834aD1B8441BdDa.png',
  //   category: AssetType.ERC223,
  //   isVerified: true,
  // },
  {
    name: 'Soy-ERC223',
    symbol: 'SOY',
    address: '0x4c20231BCc5dB8D805DB9197C84c8BA8287CbA92',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/20729/0x4c20231BCc5dB8D805DB9197C84c8BA8287CbA92.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: 'https://soy.finance/',
  },
  {
    name: 'Callisto Enterprise',
    symbol: 'CLOE',
    address: '0xF247c669E08837129965fF3cBcaC9E3695A9684B',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/20729/0xF247c669E08837129965fF3cBcaC9E3695A9684B.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: 'https://callisto.network/',
  },
  {
    name: 'Bulls USD',
    symbol: 'BUSDT',
    address: '0xAB99622d19298EC2BEAB50EFF91A9b6F46Af747C',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/20729/0xAB99622d19298EC2BEAB50EFF91A9b6F46Af747C.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: '',
  },
  {
    name: 'Teramite token',
    symbol: 'TMT',
    address: '0xB4dDe88Fd2D7Cf5AA0880fa2Ec893124Cbbe0FA3',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/20729/0xB4dDe88Fd2D7Cf5AA0880fa2Ec893124Cbbe0FA3.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: '',
  
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
    platforms: ['hub','soy','bridge'],
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
    platforms: ['hub','soy','bridge'],
    projectUrl: 'https://nft.muchaemotion.com/',
    placeholderId: 'properties/1',
    placeholderName: 'metadata/name',
    placeholderTitle: 'metadata/edition',
    placeholderDescription: 'metadata/description',
    placeholderMedia: 'metadata/image_preview',
    placeholderContent: 'metadata/nft_content',
  },
]

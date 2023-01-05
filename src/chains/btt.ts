import type { Asset, AssetNFT } from '../types'
import { AssetType } from '../types'

export const BTT_TOKENS: Asset[] = [
  {
    name: 'BitTorrent',
    symbol: 'BTT',
    address: '0x0000000000000000000000000000000000000003',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/btt.png',
    category: AssetType.NATIVE,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: 'https://bt.io/'
  },
  {
    name: 'Wrapped BTT',
    symbol: 'WBTT',
    address: '0x33e85f0e26600a6644b6c910639B0bc7a99fd34e',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/btt.png',
    category: AssetType.ERC20,
    audit: {
      isAudited: false,
    },
    platforms: ['soy','bridge'],
    projectUrl: 'https://bt.io/'
  },
  {
    name: 'Wrapped CLO',
    symbol: 'ccCLO',
    address: '0xCcbf1C9E8b4f2cDF3Bfba1098b8f56f97d219D53',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/clo.png',
    category: AssetType.ERC20,
    audit: {
      isAudited: false,
    },
    platforms: ['soy','bridge'],
    projectUrl: 'https://callisto.network/'
  },
  {
    name: 'Wrapped ETC',
    symbol: 'ccETC',
    address: '0xCc944bF3e76d483e41CC6154d5196E2e5d348fB0',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/etc.png',
    category: AssetType.ERC20,
    audit: {
      isAudited: false,
    },
    platforms: ['soy','bridge'],
    projectUrl: 'https://ethereumclassic.org/'
  },
  {
    name: 'Wrapped CLOE',
    symbol: 'ccCLOE',
    address: '0xCC20d1B86bf1b80d4b9F0C19B138E17034457271',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/cloe.png',
    category: AssetType.ERC20,
    audit: {
      isAudited: false,
    },
    platforms: ['soy','bridge'],
    projectUrl: 'https://callistoenterprise.com/'
  },
  {
    name: 'Bulls USD',
    symbol: 'BUSDT',
    address: '0xCC78D0A86B0c0a3b32DEBd773Ec815130F9527CF',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/busdt.png',
    category: AssetType.ERC20,
    audit: {
      isAudited: false,
    },
    platforms: ['soy','bridge'],
    projectUrl: 'https://bullsinvesting.club/'
  },
  {
    name: 'Wrapped SOY',
    symbol: 'SOY',
    address: '0xcC00860947035a26Ffe24EcB1301ffAd3a89f910',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/soy.png',
    category: AssetType.ERC20,
    audit: {
      isAudited: false,
    },
    platforms: ['soy','bridge'],
    projectUrl: 'https://soy.finance/'
  },
  {
    name: 'BNB',
    symbol: 'BNB',
    address: '0x185a4091027E2dB459a2433F85f894dC3013aeB5',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/bnb.png',
    category: AssetType.ERC20,
    audit: {
      isAudited: false,
    },
    platforms: ['soy'],
    projectUrl: 'https://www.binance.com/'
  },
  {
    name: 'ETH',
    symbol: 'ETH',
    address: '0x1249C65AfB11D179FFB3CE7D4eEDd1D9b98AD006',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/eth.png',
    category: AssetType.ERC20,
    audit: {
      isAudited: false,
    },
    platforms: ['soy'],
    projectUrl: 'https://ethereum.org/'
  },
]

export const BTT_NFTS: AssetNFT[] = []

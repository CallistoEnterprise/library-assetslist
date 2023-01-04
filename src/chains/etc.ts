import type { Asset, AssetNFT } from '../types'
import { AssetType } from '../types'

export const ETC_TOKENS: Asset[] = [
  {
    name: 'ETC',
    symbol: 'ETC',
    address: '0x0000000000000000000000000000000000000005',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/etc.png',
    category: AssetType.NATIVE,
    audit: {
      isAudited: false,
    },
    platforms: ['soy','bridge'],
    projectUrl: 'https://ethereumclassic.org/'
  },
  {
    name: 'Wrapped ETC',
    symbol: 'WETC',
    address: '0x35e9A89e43e45904684325970B2E2d258463e072',
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
    name: 'Wrapped CLOE',
    symbol: 'ccCLOE',
    address: '0x09c4a1ACAE1b591C63691B8E62F46E2F0eD9A0F9',
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
    address: '0xCC48CD0B4a6f50b8f8bf0f9b80eD7881fA547968',
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
    address: '0xcC67D978Ddf07971D9050d2b424f36f6C1a15893',
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
    name: 'Wrapped BNB',
    symbol: 'BNB',
    address: '0xcC653d74E087D35577049AB23e2141D619D95AEe',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/bnb.png',
    category: AssetType.ERC20,
    audit: {
      isAudited: false,
    },
    platforms: ['soy','bridge'],
    projectUrl: 'https://www.binance.com/'
  },
  {
    name: 'Wrapped ETH',
    symbol: 'ETH',
    address: '0xcc74b43F5092B9Dd0A4a86c85794C7d19ff10d88',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/eth.png',
    category: AssetType.ERC20,
    audit: {
      isAudited: false,
    },
    platforms: ['soy','bridge'],
    projectUrl: 'https://ethereum.org/'
  },
]

export const ETC_NFTS: AssetNFT[] = []

import { Asset, AssetNFT, AuditRiskLevel } from '../types'
import { AssetType } from '../types'

export const BSC_TOKENS: Asset[] = [
  {
    name: 'Binance coin',
    symbol: 'BNB',
    address: '0x0000000000000000000000000000000000000007',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/bnb.png',
    category: AssetType.NATIVE,
    audit: {
      isAudited: false,
    },
    platforms: ['bridge'],
    projectUrl: 'https://binance.com/'
  },
  // Will be enabled with BSC chain on app.soy.finance
  // {
  //   name: 'Wrapped BNB',
  //  symbol: 'BNB',
  //  address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  //  decimals: 18,
  //  image: 'https://asset.callisto.network/images/coins/bnb.png',
  //  category: AssetType.ERC20,
  //  audit: {
  //    isAudited: false,
  //  },
  //  platforms: ['bridge'],
  //  projectUrl: 'https://binance.com/'
  // },
  {
    name: 'Wrapped CLO',
    symbol: 'WCLO',
    address: '0xF5AD6F6EDeC824C7fD54A66d241a227F6503aD3a',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/clo.png',
    category: AssetType.ERC20,
    audit: {
      isAudited: false,
    },
    platforms: ['bridge'],
    projectUrl: 'https://callisto.network/'
  },
  {
    name: 'Tether',
    symbol: 'USDT',
    address: '0x55d398326f99059fF775485246999027B3197955',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/usdt.png',
    category: AssetType.ERC20,
    audit: {
      isAudited: false,
    },
    platforms: ['bridge'],
    projectUrl: 'https://tether.to/'
  },
  {
    name: 'Wrapped CAKE',
    symbol: 'ccCAKE',
    address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/cake.png',
    category: AssetType.ERC20,
    audit: {
      isAudited: false,
    },
    platforms: ['bridge'],
    projectUrl: 'https://pancakeswap.finance/'
  },
  {
    name: 'Wrapped TWT',
    symbol: 'ccTWT',
    address: '0x4B0F1812e5Df2A09796481Ff14017e6005508003',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/twt.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: true,
      reportUrl: 'https://callisto.network/trust-wallet-token-security-audit-report/',
      riskLevel: AuditRiskLevel.Low
    },
    platforms: ['bridge'],
    projectUrl: 'https://trustwallet.com/'
  },
  {
    name: 'Wrapped WSG',
    symbol: 'ccWSG',
    address: '0xA58950F05FeA2277d2608748412bf9F802eA4901',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/wsg.png',
    category: AssetType.ERC20,
    audit: {
      isAudited: false,
    },
    platforms: ['bridge'],
    projectUrl: 'https://wsg.gg/'
  },
  {
    name: 'Wrapped REEF',
    symbol: 'ccREEF',
    address: '0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/reef.png',
    category: AssetType.ERC20,
    audit: {
      isAudited: false,
    },
    platforms: ['bridge'],
    projectUrl: 'https://reef.io/'
  },
  {
    name: 'Wrapped BAKE',
    symbol: 'ccBAKE',
    address: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/bake.png',
    category: AssetType.ERC20,
    audit: {
      isAudited: false,
    },
    platforms: ['bridge'],
    projectUrl: 'https://www.bakeryswap.org/'
  },
  {
    name: 'Wrapped RACA',
    symbol: 'ccRACA',
    address: '0x12BB890508c125661E03b09EC06E404bc9289040',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/raca.png',
    category: AssetType.ERC20,
    audit: {
      isAudited: false,
    },
    platforms: ['bridge'],
    projectUrl: 'https://www.raca3.com/'
  },
  {
    name: 'Wrapped LINA',
    symbol: 'ccLINA',
    address: '0x762539b45A1dCcE3D36d080F74d1AED37844b878',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/lina.png',
    category: AssetType.ERC20,
    audit: {
      isAudited: true,
      reportUrl: 'https://callisto.network/linear-token-security-audit-report/',
      riskLevel: AuditRiskLevel.Low
    },
    platforms: ['bridge'],
    projectUrl: 'https://linear.finance/'
  },
  {
    name: 'Wrapped TON',
    symbol: 'ccTON',
    address: '0x76A797A59Ba2C17726896976B7B3747BfD1d220f',
    decimals: 9,
    image: 'https://asset.callisto.network/images/coins/ton.png',
    category: AssetType.ERC20,
    audit: {
      isAudited: false,
    },
    platforms: ['bridge'],
    projectUrl: 'https://ton.org/'
  },
  {
    name: 'Wrapped XMS',
    symbol: 'ccXMS',
    address: '0x7859B01BbF675d67Da8cD128a50D155cd881B576',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/xms.png',
    category: AssetType.ERC20,
    audit: {
      isAudited: false,
    },
    platforms: ['bridge'],
    projectUrl: 'https://marsecosystem.com/'
  },
  {
    name: 'Wrapped BBT',
    symbol: 'ccBBT',
    address: '0xD48474E7444727bF500a32D5AbE01943f3A59A64',
    decimals: 8,
    image: 'https://asset.callisto.network/images/coins/bbt.png',
    category: AssetType.ERC20,
    audit: {
      isAudited: false,
    },
    platforms: ['bridge'],
    projectUrl: 'https://bitbook.net/'
  },
  {
    name: 'Wrapped ANTEX',
    symbol: 'ccANTEX',
    address: '0xCA1aCAB14e85F30996aC83c64fF93Ded7586977C',
    decimals: 8,
    image: 'https://asset.callisto.network/images/coins/antex.png',
    category: AssetType.ERC20,
    audit: {
      isAudited: false,
    },
    platforms: ['bridge'],
    projectUrl: 'https://antex.org/'
  },
  {
    name: 'Wrapped ZOO',
    symbol: 'ccZOO',
    address: '0x1D229B958D5DDFca92146585a8711aECbE56F095',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/zoo.png',
    category: AssetType.ERC20,
    audit: {
      isAudited: false,
    },
    platforms: ['bridge'],
    projectUrl: 'https://zoogame.finance/'
  },
  {
    name: 'Wrapped BCOIN',
    symbol: 'ccBCOIN',
    address: '0x00e1656e45f18ec6747F5a8496Fd39B50b38396D',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/bcoin.png',
    category: AssetType.ERC20,
    audit: {
      isAudited: false,
    },
    platforms: ['bridge'],
    projectUrl: 'https://bombcrypto.io/'
  },
  ]

export const BSC_NFTS: AssetNFT[] = [ 
]

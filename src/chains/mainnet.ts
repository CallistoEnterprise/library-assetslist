import type { Asset, AssetNFT } from '../types'
import { AssetType } from '../types'

export const MAINNET_TOKENS: Asset[] = [
  {
    name: 'Callisto Network',
    symbol: 'CLO',
    address: '0x0000000000000000000000000000000000000001',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/clo.png',
    category: AssetType.NATIVE,
    audit: {
      isAudited: true,
    },
    platforms: ['soy','bridge'],
    projectUrl: 'https://callisto.network/'
  },
  {
    name: 'Wrapped CLO',
    symbol: 'WCLO',
    address: '0xF5AD6F6EDeC824C7fD54A66d241a227F6503aD3a',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/clo.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: true,
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: 'https://callisto.network/'
  },
  {
    name: 'Callisto Enterprise',
    symbol: 'CLOE',
    address: '0x1eAa43544dAa399b87EEcFcC6Fa579D5ea4A6187',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/cloe.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: true,
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: 'https://callisto.network/'
  },
  {
    name: 'Bulls USD',
    symbol: 'BUSDT',
    address: '0xbf6c50889d3a620eb42C0F188b65aDe90De958c4',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/busdt.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: true,
      reportUrl: 'https://callisto.network/bulls-usd-busdt-security-audit/',
      riskLevel: 'SAFE'
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: ''
  },
  {
    name: 'Wrapped BNB (ERC20)',
    symbol: 'ccBNB',
    address: '0xCC78D0A86B0c0a3b32DEBd773Ec815130F9527CF',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/bnb.png',
    category: AssetType.ERC20,
    audit: {
      isAudited: true,
      reportUrl: 'https://callisto.network/binance-token-bnb-security-audit/',
      riskLevel: 'LOW'
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: ''
  },
  {
    name: 'Wrapped ETH (ERC20)',
    symbol: 'ccETH',
    address: '0xcC00860947035a26Ffe24EcB1301ffAd3a89f910',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/eth.png',
    category: AssetType.ERC20,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: ''
  },
  {
    name: 'Wrapped ETC',
    symbol: 'ccETC',
    address: '0xCCc766f97629a4E14b3af8C91EC54f0b5664A69F',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/etc.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: ''
  },
  {
    name: 'Soy-ERC223',
    symbol: 'SOY',
    address: '0x9FaE2529863bD691B4A7171bDfCf33C7ebB10a65',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/soy.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: true,
      reportUrl: 'https://callisto.network/soy-finance-soy-security-audit/',
      riskLevel: 'LOW'
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: 'https://soy.finance/'
  },
  {
    name: 'Wrapped BNB(ERC223)',
    symbol: 'ccBNB',
    address: '0xcCDe29903E621Ca12DF33BB0aD9D1ADD7261Ace9',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/bnb.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: true,
      reportUrl: 'https://callisto.network/binance-token-bnb-security-audit/',
      riskLevel: 'LOW'
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: ''
  },
  {
    name: 'Wrapped ETH(ERC223)',
    symbol: 'ccETH',
    address: '0xcC208c32Cc6919af5d8026dAB7A3eC7A57CD1796',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/eth.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: 'https://ethereum.org'
  },
  {
    name: 'Wrapped CAKE',
    symbol: 'ccCAKE',
    address: '0xCC2D45F7fE1b8864a13F5D552345eB3f5a005FEd',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/cake.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: ''
  },
  {
    name: 'Wrapped TWT',
    symbol: 'ccTWT',
    address: '0xCC099e75152ACCda96d54FAbaf6e333ca44AD86e',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/twt.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: true,
      reportUrl: 'https://callisto.network/trust-wallet-token-security-audit-report/',
      riskLevel: 'LOW'
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: ''
  },
  {
    name: 'Wrapped WSG',
    symbol: 'ccWSG',
    address: '0xccEbb9f0EE6D720DebccEE42f52915037f774A70',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/wsg.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: ''
  },
  {
    name: 'Wrapped REEF',
    symbol: 'ccREEF',
    address: '0xCc1530716A7eBecFdc7572eDCbF01766f042155c',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/reef.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: ''
  },
  {
    name: 'Wrapped BAKE',
    symbol: 'ccBAKE',
    address: '0xCCeC9F26F52E8e0D1d88365004f4F475f5274279',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/bake.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: ''
  },
  {
    name: 'Wrapped SHIB',
    symbol: 'ccSHIB',
    address: '0xccA4F2ED7Fc093461c13f7F5d79870625329549A',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/shib.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: true,
      reportUrl: 'https://callisto.network/shiba-inu-token-security-audit-report/',
      riskLevel: 'LOW'
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: ''
  },
  {
    name: 'Wrapped RACA',
    symbol: 'ccRACA',
    address: '0xCC8B04c0f7d0797B3BD6b7BE8E0061ac0c3c0A9b',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/raca.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: ''
  },
  {
    name: 'Wrapped LINA',
    symbol: 'ccLINA',
    address: '0xCC10A4050917f771210407DF7A4C048e8934332c',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/lina.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: true,
      reportUrl: 'https://callisto.network/linear-token-security-audit-report/',
      riskLevel: 'LOW'
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: ''
  },
  {
    name: 'Wrapped TON',
    symbol: 'ccTON',
    address: '0xCC50D400042177B9DAb6bd31ede73aE8e1ED6F08',
    decimals: 9,
    image: 'https://asset.callisto.network/images/coins/ton.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: ''
  },
  {
    name: 'Wrapped XMS',
    symbol: 'ccXMS',
    address: '0xcc45afedd2065EDcA770801055d1E376473a871B',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/xms.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: ''
  },
  {
    name: 'Wrapped FTM',
    symbol: 'ccFTM',
    address: '0xcc50aB63766660C6C1157B8d6A5D51ceA82Dff34',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/ftm.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: true,
      reportUrl: 'https://callisto.network/fantom-token-security-audit-report/',
      riskLevel: 'LOW'
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: ''
  },
  {
    name: 'Wrapped BTT',
    symbol: 'ccBTT',
    address: '0xCc99C6635Fae4DAcF967a3fc2913ab9fa2b349C3',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/btt.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: ''
  },
  {
    name: 'Wrapped BBT',
    symbol: 'ccBBT',
    address: '0xcCCaC2f22752bbe77D4DAb4e9421F2AC6c988427',
    decimals: 8,
    image: 'https://asset.callisto.network/images/coins/bbt.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: ''
  },
  {
    name: 'Wrapped ANTEX',
    symbol: 'ccANTEX',
    address: '0xCCd792f5D06b73685a1b54A32fE786346cAd1894',
    decimals: 8,
    image: 'https://asset.callisto.network/images/coins/antex.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: ''
  },
  {
    name: 'Wrapped ZOO',
    symbol: 'ccZOO',
    address: '0xCC9aFcE1e164fC2b381A3a104909e2D9E52cfB5D',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/820/zoo.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: ''
  },
  {
    name: 'Wrapped BCOIN',
    symbol: 'ccBCOIN',
    address: '0xcC6e7E97A46B6F0eD3bC81518Fc816da78F7cb65',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/bcoin.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: ''
  },
  {
    name: 'VIPSVERSE Token',
    symbol: 'VVT',
    address: '0x9f9b6DD3DEDB4D2e6C679bCb8782f546400e9A53',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/vvt.png',
    category: AssetType.ERC223,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: ''
  },
]

export const MAINNET_NFTS: AssetNFT[] = [
  {
    name: 'Mucha',
    collectionName: 'Mucha',
    symbol: 'AME',
    address: '0xd0725743f665B8041DcfbB0c4B55bbC3679Fb033',
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
  {
    name: 'Artefin',
    collectionName: 'Artefin',
    symbol: 'ART',
    address: '0x69c878B44fb427cd084125Ce3b76a8Ee4685E78c',
    decimals: 0,
    image: '',
    category: AssetType.CALLISTONFT,
    audit: {
      isAudited: false,
    },
    platforms: ['hub'],
    projectUrl: 'https://nft.artefin.cz/',
placeholderName
  : 'metadata/name',
    placeholderTitle: 'metadata/edition',
    placeholderDescription: 'metadata/description',
    placeholderMedia: 'metadata/image_preview',
    placeholderContent: 'metadata/nft_content',
  },
  {
    name: 'Callisto Charity',
    collectionName: 'Callisto Charity',
    symbol: 'CCNFT',
    address: '0x096194aa4dFd64b506630149B921015170753a11',
    decimals: 0,
    image: '',
    category: AssetType.CALLISTONFT,
    audit: {
      isAudited: false,
    },
    platforms: ['hub'],
    projectUrl: 'https://app.soy.finance/nft',
placeholderName
  : 'metadata/name',
    placeholderTitle: 'metadata/edition',
    placeholderDescription: 'metadata/description',
    placeholderMedia: 'metadata/image_preview',
    placeholderContent: 'metadata/nft_content',
  },
  {
    name: 'CAR',
    collectionName: 'Power Car',
    symbol: 'CAR',
    address: '0xE830AFDAe4Dba5b3b6c6b3506138C373Eb6CE73C',
    decimals: 0,
    image: '',
    category: AssetType.ERC721,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: 'https://power-c.ar/'
  },
  {
    name: 'BlogPetz',
    collectionName: 'BlogPetz',
    symbol: 'BPC',
    address: '0x4B0d959e551E55aF9c89CE96C0c7755c189aD622',
    decimals: 0,
    image: '',
    category: AssetType.ERC721,
    audit: {
      isAudited: false,
    },
    platforms: ['hub','soy','bridge'],
    projectUrl: ''
  },
]

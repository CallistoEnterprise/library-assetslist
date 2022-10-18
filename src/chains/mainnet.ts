import type { Asset, AssetNFT } from '../types'
import { AssetType } from '../types'

export const MAINNET_TOKENS: Asset[] = [
  {
    name: 'Callisto Enterprise',
    symbol: 'CLOE',
    address: '0x1eAa43544dAa399b87EEcFcC6Fa579D5ea4A6187',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/0x1eAa43544dAa399b87EEcFcC6Fa579D5ea4A6187.png',
    category: AssetType.ERC223,
    isVerified: false,
  },
  {
    name: 'Bulls USD',
    symbol: 'BUSDT',
    address: '0xbf6c50889d3a620eb42C0F188b65aDe90De958c4',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/0xbf6c50889d3a620eb42C0F188b65aDe90De958c4.png',
    category: AssetType.ERC223,
    isVerified: false,
  },
  {
    name: 'Wrapped BNB (ERC20)',
    symbol: 'ccBNB',
    address: '0xCC78D0A86B0c0a3b32DEBd773Ec815130F9527CF',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/0xCC78D0A86B0c0a3b32DEBd773Ec815130F9527CF.png',
    category: AssetType.ERC20,
    isVerified: false,
  },
  {
    name: 'Wrapped ETH (ERC20)',
    symbol: 'ccETH',
    address: '0xcC00860947035a26Ffe24EcB1301ffAd3a89f910',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/0xcC00860947035a26Ffe24EcB1301ffAd3a89f910.png',
    category: AssetType.ERC20,
    isVerified: false,
  },
  {
    name: 'Wrapped ETC',
    symbol: 'ccETC',
    address: '0xCCc766f97629a4E14b3af8C91EC54f0b5664A69F',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/0xCCc766f97629a4E14b3af8C91EC54f0b5664A69F.png',
    category: AssetType.ERC223,
    isVerified: false,
  },
  {
    name: 'Soy-ERC223',
    symbol: 'SOY',
    address: '0x9FaE2529863bD691B4A7171bDfCf33C7ebB10a65',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/0x9FaE2529863bD691B4A7171bDfCf33C7ebB10a65.png',
    category: AssetType.ERC223,
    isVerified: true,
  },
  {
    name: 'Wrapped BNB(ERC223)',
    symbol: 'ccBNB',
    address: '0xcCDe29903E621Ca12DF33BB0aD9D1ADD7261Ace9',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/0xcCDe29903E621Ca12DF33BB0aD9D1ADD7261Ace9.png',
    category: AssetType.ERC223,
    isVerified: false,
  },
  {
    name: 'Wrapped ETH(ERC223)',
    symbol: 'ccETH',
    address: '0xcC208c32Cc6919af5d8026dAB7A3eC7A57CD1796',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/0xcC208c32Cc6919af5d8026dAB7A3eC7A57CD1796.png',
    category: AssetType.ERC223,
    isVerified: false,
  },
  {
    name: 'Wrapped CAKE',
    symbol: 'ccCAKE',
    address: '0xCC2D45F7fE1b8864a13F5D552345eB3f5a005FEd',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/0xCC2D45F7fE1b8864a13F5D552345eB3f5a005FEd.png',
    category: AssetType.ERC223,
    isVerified: false,
  },
  {
    name: 'Wrapped TWT',
    symbol: 'ccTWT',
    address: '0xCC099e75152ACCda96d54FAbaf6e333ca44AD86e',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/0xCC099e75152ACCda96d54FAbaf6e333ca44AD86e.png',
    category: AssetType.ERC223,
    isVerified: false,
  },
  {
    name: 'Wrapped WSG',
    symbol: 'ccWSG',
    address: '0xccEbb9f0EE6D720DebccEE42f52915037f774A70',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/0xccEbb9f0EE6D720DebccEE42f52915037f774A70.png',
    category: AssetType.ERC223,
    isVerified: false,
  },
  {
    name: 'Wrapped REEF',
    symbol: 'ccREEF',
    address: '0xCc1530716A7eBecFdc7572eDCbF01766f042155c',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/0xCc1530716A7eBecFdc7572eDCbF01766f042155c.png',
    category: AssetType.ERC223,
    isVerified: false,
  },
  {
    name: 'Wrapped BAKE',
    symbol: 'ccBAKE',
    address: '0xCCeC9F26F52E8e0D1d88365004f4F475f5274279',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/0xCCeC9F26F52E8e0D1d88365004f4F475f5274279.png',
    category: AssetType.ERC223,
    isVerified: false,
  },
  {
    name: 'Wrapped SHIB',
    symbol: 'ccSHIB',
    address: '0xccA4F2ED7Fc093461c13f7F5d79870625329549A',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/0xccA4F2ED7Fc093461c13f7F5d79870625329549A.png',
    category: AssetType.ERC223,
    isVerified: false,
  },
  {
    name: 'Wrapped RACA',
    symbol: 'ccRACA',
    address: '0xCC8B04c0f7d0797B3BD6b7BE8E0061ac0c3c0A9b',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/0xCC8B04c0f7d0797B3BD6b7BE8E0061ac0c3c0A9b.png',
    category: AssetType.ERC223,
    isVerified: false,
  },
  {
    name: 'Wrapped LINA',
    symbol: 'ccLINA',
    address: '0xCC10A4050917f771210407DF7A4C048e8934332c',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/0xCC10A4050917f771210407DF7A4C048e8934332c.png',
    category: AssetType.ERC223,
    isVerified: false,
  },
  {
    name: 'Wrapped TON',
    symbol: 'ccTON',
    address: '0xCC50D400042177B9DAb6bd31ede73aE8e1ED6F08',
    decimals: 9,
    image: 'https://asset.callisto.network/images/coins/0xCC50D400042177B9DAb6bd31ede73aE8e1ED6F08.png',
    category: AssetType.ERC223,
    isVerified: false,
  },
  {
    name: 'Wrapped XMS',
    symbol: 'ccXMS',
    address: '0xcc45afedd2065EDcA770801055d1E376473a871B',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/0xcc45afedd2065EDcA770801055d1E376473a871B.png',
    category: AssetType.ERC223,
    isVerified: false,
  },
  {
    name: 'Wrapped FTM',
    symbol: 'ccFTM',
    address: '0xcc50aB63766660C6C1157B8d6A5D51ceA82Dff34',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/0xcc50aB63766660C6C1157B8d6A5D51ceA82Dff34.png',
    category: AssetType.ERC223,
    isVerified: false,
  },
  {
    name: 'Wrapped BTT',
    symbol: 'ccBTT',
    address: '0xCc99C6635Fae4DAcF967a3fc2913ab9fa2b349C3',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/0xCc99C6635Fae4DAcF967a3fc2913ab9fa2b349C3.png',
    category: AssetType.ERC223,
    isVerified: false,
  },
  {
    name: 'Wrapped BBT',
    symbol: 'ccBBT',
    address: '0xcCCaC2f22752bbe77D4DAb4e9421F2AC6c988427',
    decimals: 8,
    image: 'https://asset.callisto.network/images/coins/0xcCCaC2f22752bbe77D4DAb4e9421F2AC6c988427.png',
    category: AssetType.ERC223,
    isVerified: false,
  },
  {
    name: 'Wrapped ANTEX',
    symbol: 'ccANTEX',
    address: '0xCCd792f5D06b73685a1b54A32fE786346cAd1894',
    decimals: 8,
    image: 'https://asset.callisto.network/images/coins/0xCCd792f5D06b73685a1b54A32fE786346cAd1894.png',
    category: AssetType.ERC223,
    isVerified: false,
  },
  {
    name: 'Wrapped ZOO',
    symbol: 'ccZOO',
    address: '0xCC9aFcE1e164fC2b381A3a104909e2D9E52cfB5D',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/0xCC9aFcE1e164fC2b381A3a104909e2D9E52cfB5D.png',
    category: AssetType.ERC223,
    isVerified: false,
  },
  {
    name: 'Wrapped BCOIN',
    symbol: 'ccBCOIN',
    address: '0xcC6e7E97A46B6F0eD3bC81518Fc816da78F7cb65',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/0xcC6e7E97A46B6F0eD3bC81518Fc816da78F7cb65.png',
    category: AssetType.ERC223,
    isVerified: false,
  },
  {
    name: 'VIPSVERSE Token',
    symbol: 'VVT',
    address: '0x9f9b6DD3DEDB4D2e6C679bCb8782f546400e9A53',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/820/0x9f9b6DD3DEDB4D2e6C679bCb8782f546400e9A53.png',
    category: AssetType.ERC223,
    isVerified: false,
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
    isVerified: true,
    placeholderId: 'properties/1',
    placeholderName: 'metadata/name',
    placeholderTitle: 'metadata/edition',
    placeholderDescription: 'metadata/description',
    placeholderMedia: 'metadata/image_ipfs',
  },
  {
    name: 'Artefin',
    collectionName: 'Artefin',
    symbol: 'ART',
    address: '0x69c878B44fb427cd084125Ce3b76a8Ee4685E78c',
    decimals: 0,
    image: '',
    category: AssetType.CALLISTONFT,
    isVerified: true,
    placeholderName: 'metadata/name',
    placeholderTitle: 'metadata/edition',
    placeholderDescription: 'metadata/description',
    placeholderMedia: 'metadata/image_ipfs',
  },
  {
    name: 'Callisto Charity',
    collectionName: 'Callisto Charity',
    symbol: 'CCNFT',
    address: '0x096194aa4dFd64b506630149B921015170753a11',
    decimals: 0,
    image: '',
    category: AssetType.CALLISTONFT,
    isVerified: true,
    placeholderName: 'metadata/name',
    placeholderTitle: 'metadata/edition',
    placeholderDescription: 'metadata/description',
    placeholderMedia: 'metadata/image_ipfs',
  },
  {
    name: 'CAR',
    collectionName: 'Power Car',
    symbol: 'CAR',
    address: '0xE830AFDAe4Dba5b3b6c6b3506138C373Eb6CE73C',
    decimals: 0,
    image: '',
    category: AssetType.ERC721,
    isVerified: true,
  },
]

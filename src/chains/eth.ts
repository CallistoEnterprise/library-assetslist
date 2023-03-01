import { Asset, AssetNFT, AuditRiskLevel } from '../types'
import { AssetType } from '../types'

export const ETH_TOKENS: Asset[] = [
  {
    name: 'ETH',
    symbol: 'ETH',
    address: '0x0000000000000000000000000000000000000006',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/eth.png',
    category: AssetType.NATIVE,
    audit: {
      isAudited: false,
    },
    platforms: ['bridge'],
    projectUrl: 'https://ethereum.org/'
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
    platforms: ['bridge'],
    projectUrl: 'https://callisto.network/'
  },
  {
    name: 'Tether',
    symbol: 'USDT',
    address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
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
    name: 'Wrapped FTM',
    symbol: 'ccFTM',
    address: '0x4E15361FD6b4BB609Fa63C81A2be19d873717870',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/ftm.png',
    category: AssetType.ERC20,
    audit: {
      isAudited: true,
      reportUrl: 'https://callisto.network/fantom-token-security-audit-report/',
      riskLevel: AuditRiskLevel.Low
    },
    platforms: ['bridge'],
    projectUrl: 'http://fantom.foundation/'
  },
  {
    name: 'SHIB',
    symbol: 'SHIB',
    address: '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/shib.png',
    category: AssetType.ERC20,
    audit: {
      isAudited: true,
      reportUrl: 'https://callisto.network/shiba-inu-token-security-audit-report/',
      riskLevel: AuditRiskLevel.Low
    },
    platforms: ['bridge'],
    projectUrl: 'https://shibatoken.com/'
  },
]

export const ETH_NFTS: AssetNFT[] = []

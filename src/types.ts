export enum ChainId {
  Mainnet = 820,
  Testnet = 20729,
  BTT = 199,
  BSC = 56,
  ETC = 61,
  ETH = 1,
}


export enum AssetType {
  NATIVE = 0,
  ERC20 = 20,
  ERC223 = 223,
  ERC721 = 721,
  ERC1155 = 1155,
  CALLISTONFT = 1,
}

export enum AuditRiskLevel {
  Safe = 'SAFE',
  Low = 'LOW',
  Medium = 'MED',
  High = 'HIGH',
  Critical = 'CRITICAL'
}

export interface Asset {
  address: string
  category: AssetType
  name: string
  symbol: string
  image: string
  audit: AssetAudit
  decimals: number
  platforms: string[]
  projectUrl: string
}

export interface AssetNFT extends Asset {
  collectionName: string
  placeholderName?: string
  placeholderId?: string
  placeholderTitle?: string
  placeholderDescription?: string
  placeholderMedia?: string
  placeholderContent?: string
}


export interface AssetAudit {
  isAudited: boolean
  reportUrl?: string
  riskLevel?: AuditRiskLevel
}
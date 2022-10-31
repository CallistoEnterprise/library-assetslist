export enum ChainId {
  Mainnet = 820,
  Testnet = 20729,
  BTT = 199,
  BSC = 56,
  ETC = 61,
}

export enum AssetType {
  ERC20 = 20,
  ERC223 = 223,
  ERC721 = 721,
  ERC1155 = 1155,
  CALLISTONFT = 1,
}

export interface Asset {
  address: string
  category: AssetType
  name: string
  symbol: string
  image: string
  isVerified: boolean
  decimals: number
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

import { BSC_NFTS, BSC_TOKENS } from './chains/bsc'
import { BTT_NFTS, BTT_TOKENS } from './chains/btt'
import { ETC_NFTS, ETC_TOKENS } from './chains/etc'
import { ETH_NFTS, ETH_TOKENS } from './chains/eth'
import { MAINNET_NFTS, MAINNET_TOKENS } from './chains/mainnet'
import { TESTNET_NFTS, TESTNET_TOKENS } from './chains/testnet'
import { Asset, AssetNFT, AssetType, ChainId, AssetAudit } from './types'

const TOKENLIST: { [key in ChainId]: Asset[] } = {
  [ChainId.Mainnet]: MAINNET_TOKENS,
  [ChainId.Testnet]: TESTNET_TOKENS,
  [ChainId.BTT]: BTT_TOKENS,
  [ChainId.BSC]: BSC_TOKENS,
  [ChainId.ETC]: ETC_TOKENS,
  [ChainId.ETH]: ETH_TOKENS,
}

const NFTLIST: { [key in ChainId]: AssetNFT[] } = {
  [ChainId.Mainnet]: MAINNET_NFTS,
  [ChainId.Testnet]: TESTNET_NFTS,
  [ChainId.BTT]: BTT_NFTS,
  [ChainId.BSC]: BSC_NFTS,
  [ChainId.ETC]: ETC_NFTS,
  [ChainId.ETH]: ETH_NFTS,
}

/**
 * Utility function to find and return a token based on its address and chainId.
 * 
 * @param address Address hash
 * @param chainId Chain ID out of AssetSupportedChainId enum
 * @returns Asset type, undefined if not found.
 */
const getToken = (address: string, chainId = ChainId.Mainnet) => {
  return TOKENLIST[chainId].find((entry) => entry.address.toLowerCase() === address.toLowerCase())
};

/**
 * Utility function to find and return an NFT based on its address and chainId.
 * 
 * @param address Address hash
 * @param chainId Chain ID out of AssetSupportedChainId enum
 * @returns AssetNFT type, undefined if not found.
 */
const getNFT = (address: string, chainId = ChainId.Mainnet) => {
  return NFTLIST[chainId].find((entry) => entry.address.toLowerCase() === address.toLowerCase())
};

export {
  TOKENLIST as CallistoTokenList,
  NFTLIST as CallistoNftList,
  getToken as getCallistoToken,
  getNFT as getCallistoNFT,
  Asset as CallistoAsset,
  AssetNFT as CallistoAssetNFT,
  AssetType as CallistoAssetType,
  ChainId as CallistoAssetChainId,
  AssetAudit as CallistoAssetAudit
}

import { MAINNET_NFTS, MAINNET_TOKENS } from './chains/mainnet'
import { TESTNET_NFTS, TESTNET_TOKENS } from './chains/testnet'
import { Asset, AssetNFT, AssetType, ChainId, AssetSupportedChainId } from './types'

const TOKENLIST: { [key in AssetSupportedChainId]: Asset[]} = {
  [ChainId.Mainnet]: MAINNET_TOKENS,
  [ChainId.Testnet]: TESTNET_TOKENS,
}

const NFTLIST: { [key in AssetSupportedChainId]: AssetNFT[]} = {
  [ChainId.Mainnet]: MAINNET_NFTS,
  [ChainId.Testnet]: TESTNET_NFTS,
}

/**
 * Utility function to find and return a token based on its address and chainId.
 * 
 * @param address Address hash
 * @param chainId Chain ID out of AssetSupportedChainId enum
 * @returns Asset type, undefined if not found.
 */
const getToken = (address:string, chainId = AssetSupportedChainId.Mainnet) => {
  return TOKENLIST[chainId].find((entry) => entry.address.toLowerCase() === address.toLowerCase())
};

/**
 * Utility function to find and return an NFT based on its address and chainId.
 * 
 * @param address Address hash
 * @param chainId Chain ID out of AssetSupportedChainId enum
 * @returns AssetNFT type, undefined if not found.
 */
const getNFT = (address:string, chainId = AssetSupportedChainId.Mainnet) => {
  return NFTLIST[chainId].find((entry) => entry.address.toLowerCase() === address.toLowerCase())
};

export { TOKENLIST, NFTLIST, getToken, getNFT, Asset, AssetNFT, AssetType, AssetSupportedChainId }

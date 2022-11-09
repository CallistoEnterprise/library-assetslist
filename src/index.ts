import { MAINNET_NFTS, MAINNET_TOKENS } from './chains/mainnet'
import { TESTNET_NFTS, TESTNET_TOKENS } from './chains/testnet'
import { Asset, AssetNFT, AssetType, ChainId, AssetSupportedChainId } from './types'

const TOKENLIST: { [key in AssetSupportedChainId]: Asset[]} = {
  [ChainId.Mainnet]: MAINNET_TOKENS,
  [ChainId.Testnet]: TESTNET_TOKENS,
}

const NFTLIST: { [key in AssetSupportedChainId]: Asset[]} = {
  [ChainId.Mainnet]: MAINNET_NFTS,
  [ChainId.Testnet]: TESTNET_NFTS,
}


export { TOKENLIST, NFTLIST, Asset, AssetNFT, AssetType }

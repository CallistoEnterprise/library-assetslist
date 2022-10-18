import { CALLISTO_CHAIN_ID } from '@callisto-enterprise/chain-constants'
import { MAINNET_NFTS, MAINNET_TOKENS } from './chains/mainnet'
import { TESTNET_NFTS, TESTNET_TOKENS } from './chains/testnet'
import type { Asset, AssetNFT } from './types'

const TOKENLIST: Record<number, Asset[]> = {
  [CALLISTO_CHAIN_ID.Mainnet]: MAINNET_TOKENS,
  [CALLISTO_CHAIN_ID.Testnet]: TESTNET_TOKENS,
}

const NFTLIST: Record<number, AssetNFT[]> = {
  [CALLISTO_CHAIN_ID.Mainnet]: MAINNET_NFTS,
  [CALLISTO_CHAIN_ID.Testnet]: TESTNET_NFTS,
}

export { TOKENLIST, NFTLIST, Asset, AssetNFT }

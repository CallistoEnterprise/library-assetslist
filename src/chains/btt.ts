import type { Asset, AssetNFT } from '../types'
import { AssetType } from '../types'

export const BTT_TOKENS: Asset[] = [
  {
    name: 'Wrapped CLO',
    symbol: 'WCLO',
    address: '0xF5AD6F6EDeC824C7fD54A66d241a227F6503aD3a',
    decimals: 18,
    image: 'https://asset.callisto.network/images/coins/199/0xF5AD6F6EDeC824C7fD54A66d241a227F6503aD3a.png',
    category: AssetType.ERC20,
    audit: {
      isAudited: false,
    },
    platforms: ['soy','bridge'],
    projectUrl: 'https://callisto.network/'
  },
]

export const BTT_NFTS: AssetNFT[] = []

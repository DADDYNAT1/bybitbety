// Token and project constants
export const TOKEN_ADDRESS = '0xe5542Dd8359D3F26119A0599914aDC94F6A5BA63'
export const CHAIN_ID = 5000 // Mantle Network

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/bybit_official',
  telegram: 'https://t.me/BybitEnglish',
  discord: 'https://discord.gg/bybit',
  website: 'https://www.bybit.com',
}

export const DEX_LINKS = {
  dexscreener: `https://dexscreener.com/mantle/${TOKEN_ADDRESS}`,
  uniswap: `https://app.uniswap.org/#/swap?outputCurrency=${TOKEN_ADDRESS}`,
  etherscan: `https://explorer.mantle.xyz/token/${TOKEN_ADDRESS}`,
}

export const TOKENOMICS = {
  totalSupply: '1,000,000,000',
  distribution: [
    { label: 'Community', percentage: 40, color: '#F7A600' },
    { label: 'Liquidity Pool', percentage: 30, color: '#FF6B35' },
    { label: 'Development', percentage: 15, color: '#6366F1' },
    { label: 'Marketing', percentage: 10, color: '#8B5CF6' },
    { label: 'Team', percentage: 5, color: '#EC4899' },
  ]
}

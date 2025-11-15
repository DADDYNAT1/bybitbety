import { useState, useEffect } from 'react'

export const useDexscreener = (tokenAddress) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${tokenAddress}`)
        
        if (!response.ok) {
          throw new Error('Failed to fetch token data')
        }

        const result = await response.json()
        setData(result.pairs?.[0] || null)
        setError(null)
      } catch (err) {
        setError(err.message)
        setData(null)
      } finally {
        setLoading(false)
      }
    }

    if (tokenAddress && tokenAddress !== '0x0000000000000000000000000000000000000000') {
      fetchData()
      // Refresh every 30 seconds
      const interval = setInterval(fetchData, 30000)
      return () => clearInterval(interval)
    }
  }, [tokenAddress])

  return { data, loading, error }
}

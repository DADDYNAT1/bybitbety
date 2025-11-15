import { motion } from 'framer-motion'
import { useDexscreener } from '../hooks/useDexscreener'
import { TOKEN_ADDRESS } from '../utils/constants'
import { FaChartLine, FaArrowUp, FaArrowDown } from 'react-icons/fa'
import { useEffect } from 'react'

const LiveChart = () => {
  const { data, loading, error } = useDexscreener(TOKEN_ADDRESS)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://dexscreener.com/widget/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section className="py-20 px-4 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
            <FaChartLine className="inline mr-4" />
            Live Token Chart
          </h2>

          <div className="card-gradient rounded-3xl p-8 border border-bety-yellow/20">
            {/* DexScreener Embedded Chart */}
            <div
              id="dexscreener-embed"
              style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}
            >
              <iframe
                src={`https://dexscreener.com/mantle/${TOKEN_ADDRESS}?embed=1&theme=dark&trades=0&info=0`}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  top: 0,
                  left: 0,
                  border: 0
                }}
              />
            </div>

            {/* Quick Stats Below Chart */}
            {data && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="bg-gray-900/50 p-4 rounded-xl text-center">
                  <p className="text-gray-400 text-xs mb-1">Price</p>
                  <p className="text-lg font-bold text-bety-yellow">
                    ${Number(data.priceUsd || 0).toFixed(8)}
                  </p>
                </div>

                <div className="bg-gray-900/50 p-4 rounded-xl text-center">
                  <p className="text-gray-400 text-xs mb-1">24h Change</p>
                  <p className={`text-lg font-bold ${
                    data.priceChange?.h24 >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {data.priceChange?.h24 >= 0 ? '+' : ''}
                    {Number(data.priceChange?.h24 || 0).toFixed(2)}%
                  </p>
                </div>

                <div className="bg-gray-900/50 p-4 rounded-xl text-center">
                  <p className="text-gray-400 text-xs mb-1">24h Volume</p>
                  <p className="text-lg font-bold text-white">
                    ${Number(data.volume?.h24 || 0).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </p>
                </div>

                <div className="bg-gray-900/50 p-4 rounded-xl text-center">
                  <p className="text-gray-400 text-xs mb-1">Liquidity</p>
                  <p className="text-lg font-bold text-white">
                    ${Number(data.liquidity?.usd || 0).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LiveChart

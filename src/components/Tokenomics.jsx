import { motion } from 'framer-motion'
import { TOKENOMICS } from '../utils/constants'

const Tokenomics = () => {
  return (
    <section className="py-20 px-4 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
            Tokenomics
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Pie Chart Visual */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Simple circular representation */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-bety-yellow via-bety-orange to-bety-purple shadow-2xl flex items-center justify-center">
                  <div className="w-3/5 h-3/5 rounded-full bg-gray-900 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-bety-yellow">{TOKENOMICS.totalSupply}</p>
                      <p className="text-gray-400 text-sm mt-2">Total Supply</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Distribution List */}
            <div className="space-y-4">
              {TOKENOMICS.distribution.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card-gradient p-6 rounded-xl border border-gray-700 hover:border-bety-yellow/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-lg font-semibold">{item.label}</span>
                    </div>
                    <span className="text-2xl font-bold" style={{ color: item.color }}>
                      {item.percentage}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-gradient p-6 rounded-xl text-center border border-gray-700"
            >
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2 text-bety-yellow">Liquidity Locked</h3>
              <p className="text-gray-400">LP tokens locked for 1 year minimum</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-gradient p-6 rounded-xl text-center border border-gray-700"
            >
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-2 text-bety-yellow">Contract Verified</h3>
              <p className="text-gray-400">Fully audited and verified on Etherscan</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card-gradient p-6 rounded-xl text-center border border-gray-700"
            >
              <div className="text-4xl mb-4">🚫</div>
              <h3 className="text-xl font-bold mb-2 text-bety-yellow">No Team Tokens</h3>
              <p className="text-gray-400">Fair launch, no private sale</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Tokenomics

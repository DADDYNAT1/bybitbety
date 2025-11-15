import { motion } from 'framer-motion'
import { FaCopy, FaExternalLinkAlt } from 'react-icons/fa'
import { useState } from 'react'
import { TOKEN_ADDRESS, DEX_LINKS } from '../utils/constants'

const TokenInfo = () => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(TOKEN_ADDRESS)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-gradient rounded-3xl p-8 md:p-12 border border-bety-yellow/20 shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gradient">
            Token Information
          </h2>

          {/* Contract Address */}
          <div className="mb-8">
            <label className="text-gray-400 text-sm mb-2 block">Contract Address</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={TOKEN_ADDRESS}
                readOnly
                className="flex-1 bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white font-mono text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={copyToClipboard}
                className="px-6 py-3 bg-bety-yellow text-black font-bold rounded-lg flex items-center gap-2 hover:bg-bety-orange transition-colors"
              >
                <FaCopy /> {copied ? 'Copied!' : 'Copy'}
              </motion.button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              href={DEX_LINKS.dexscreener}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-600 to-green-500 p-6 rounded-xl flex items-center justify-between hover:shadow-lg transition-shadow"
            >
              <span className="font-bold">DexScreener</span>
              <FaExternalLinkAlt />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              href={DEX_LINKS.uniswap}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-600 to-pink-500 p-6 rounded-xl flex items-center justify-between hover:shadow-lg transition-shadow"
            >
              <span className="font-bold">Buy on Uniswap</span>
              <FaExternalLinkAlt />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              href={DEX_LINKS.etherscan}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 rounded-xl flex items-center justify-between hover:shadow-lg transition-shadow"
            >
              <span className="font-bold">Etherscan</span>
              <FaExternalLinkAlt />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TokenInfo

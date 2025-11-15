import { motion } from 'framer-motion'
import { FaRocket, FaChartLine } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Bety Logo/Image - Placeholder */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center mb-8"
          >
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-bety-yellow to-bety-orange opacity-30 z-10"></div>
              <img
                src="/images/bety-icon.png"
                alt="Bety"
                className="w-full h-full object-cover scale-110 translate-x-4"
              />
            </div>
          </motion.div>

          {/* Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-gradient glow">BETY</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The Official Mascot Token of <span className="text-bety-yellow font-bold">Bybit Exchange</span>
          </p>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Join the community-driven movement bringing Bety to life on the blockchain
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="https://app.printr.money/trade/0x07e052148d935a744e8b3a19bf97671cfbcdaed7869ac8b67dbf08fb35f5a781?chain=mantle"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-bety-yellow to-bety-orange text-black font-bold rounded-full text-lg flex items-center gap-2 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <FaRocket /> Buy Bety Now
            </motion.a>

            <motion.a
              href="https://dexscreener.com/mantle/0xe5542Dd8359D3F26119A0599914aDC94F6A5BA63"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-bety-yellow text-white font-bold rounded-full text-lg flex items-center gap-2 hover:bg-white/20 transition-colors"
            >
              <FaChartLine /> View Chart
            </motion.a>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-bety-yellow rounded-full flex justify-center">
              <div className="w-1 h-3 bg-bety-yellow rounded-full mt-2"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

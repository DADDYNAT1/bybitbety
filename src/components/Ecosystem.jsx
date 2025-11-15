import { motion } from 'framer-motion'

const Ecosystem = () => {
  return (
    <section className="py-20 px-4 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gradient">
            Powered By 🤝
          </h2>

          {/* Partner Logos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-bety-orange to-bety-yellow opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition-opacity duration-300"></div>
              <div className="relative rounded-3xl shadow-2xl border-4 border-bety-orange overflow-hidden aspect-[16/9]">
                <img
                  src="/images/bybit.jpg"
                  alt="Bybit"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-center mt-6 text-2xl font-bold text-bety-orange">Bybit</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-bety-orange to-bety-yellow opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition-opacity duration-300"></div>
              <div className="relative rounded-3xl shadow-2xl border-4 border-bety-orange overflow-hidden aspect-[16/9]">
                <img
                  src="/images/mantle.jpg"
                  alt="Mantle Network"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-center mt-6 text-2xl font-bold text-bety-orange">Mantle Network</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-bety-orange to-bety-yellow opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition-opacity duration-300"></div>
              <div className="relative rounded-3xl shadow-2xl border-4 border-bety-orange overflow-hidden aspect-[16/9]">
                <img
                  src="/images/printr.jpg"
                  alt="Printr"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-center mt-6 text-2xl font-bold text-bety-orange">Printr</h3>
            </motion.div>
          </div>

          {/* Description Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-amber-900/40 to-orange-900/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-bety-orange/50"
          >
            <p className="text-center text-xl md:text-2xl">
              🚀 <span className="font-bold text-bety-yellow">BETY</span> is built on{' '}
              <span className="font-bold text-bety-orange">Mantle Network</span> and powered by{' '}
              <span className="font-bold text-bety-orange">Printr</span>, with support from{' '}
              <span className="font-bold text-bety-orange">Bybit</span>!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Ecosystem

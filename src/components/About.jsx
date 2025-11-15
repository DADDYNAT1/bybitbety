import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
            Meet Bety
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image - Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden border-2 border-bety-yellow/30">
                <img
                  src="/images/iced out bety.PNG"
                  alt="Iced Out Bety"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -z-10 top-10 left-10 w-full h-full bg-bety-yellow/10 rounded-3xl blur-3xl"></div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Bety is more than just a mascot – she's the contrarian that everyone wrote off. While everyone flocked the "billi" meme she has always kept her eye on the prize - the tortoise beats the hare everytime. Slow and steady.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Join a group of holders who believe in the power of community-driven tokens and the future of Bybit!
              </p>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 bg-gradient-to-r from-bety-yellow/10 to-bety-orange/10 border-2 border-bety-yellow/30 rounded-2xl p-8"
              >
                <p className="text-2xl md:text-3xl font-bold text-center">
                  <span className="text-gradient">Bety is 100% driven by the community</span>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

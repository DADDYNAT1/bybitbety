import { motion } from 'framer-motion'
import { FaTwitter, FaTelegram, FaDiscord, FaGithub } from 'react-icons/fa'
import { SOCIAL_LINKS } from '../utils/constants'

const socialPlatforms = [
  { name: 'Twitter', icon: FaTwitter, link: 'https://x.com/i/communities/1989380515565064410', color: '#1DA1F2' },
  { name: 'Telegram', icon: FaTelegram, link: 'https://t.me/bety_mantle', color: '#0088cc' },
]

const Community = () => {
  return (
    <section className="py-20 px-4 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gradient">
            Join the Bety Community
          </h2>
          
          <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Be part of something special. Connect with thousands of Bety holders worldwide.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
            {socialPlatforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card-gradient p-8 rounded-2xl border-2 border-gray-700 hover:border-opacity-100 transition-all cursor-pointer group"
                style={{ '--hover-color': platform.color }}
              >
                <div className="text-center space-y-4">
                  <div 
                    className="text-6xl mx-auto w-20 h-20 flex items-center justify-center rounded-full transition-colors"
                    style={{ color: platform.color }}
                  >
                    <platform.icon />
                  </div>
                  <h3 className="text-2xl font-bold">{platform.name}</h3>
                  <p className="text-gray-400">Join our community</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="card-gradient p-12 rounded-3xl border-2 border-bety-yellow/30 text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Ready to Join Bety?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Don't miss out on the next big community token. Get your Bety tokens today!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-gradient-to-r from-bety-yellow to-bety-orange text-black font-bold rounded-full text-xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              Buy Bety Now
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Community

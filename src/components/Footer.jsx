import { FaTwitter, FaTelegram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black/50 border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://x.com/i/communities/1989380515565064410"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-bety-yellow hover:text-black transition-colors"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://t.me/bety_mantle"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-bety-yellow hover:text-black transition-colors"
          >
            <FaTelegram size={20} />
          </a>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p className="mb-2">
            © {new Date().getFullYear()} Bety Token. All rights reserved.
          </p>
          <p className="text-xs max-w-4xl mx-auto">
            Disclaimer: Cryptocurrency investments carry risk. This is not financial advice. 
            Do your own research before investing. Bety is a community-driven project and is not 
            officially affiliated with Bybit Exchange.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { motion } from 'framer-motion'
import Hero from './components/Hero'
import LiveChart from './components/LiveChart'
import About from './components/About'
import Ecosystem from './components/Ecosystem'
import Community from './components/Community'
import Footer from './components/Footer'
import ParticleBackground from './components/animations/ParticleBackground'
import FlyingBety from './components/animations/FlyingBety'

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white overflow-hidden">
      <ParticleBackground />
      <FlyingBety />

      <div className="relative z-10">
        <Hero />
        <LiveChart />
        <About />
        <Ecosystem />
        <Community />
        <Footer />
      </div>
    </div>
  )
}

export default App

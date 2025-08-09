import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { ClubhouseSection } from './components/ClubhouseSection'
import { GallerySection } from './components/GallerySection'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ClubhouseSection />
      <GallerySection />
      <Footer />
    </div>
  )
}

export default App
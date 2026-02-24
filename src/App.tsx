import { lazy, Suspense } from 'react'
import Navigation from './components/Navigation'
import LoadingFallback from './components/LoadingFallback'

const HeroSection = lazy(() => import('./sections/HeroSection'))
const AboutSection = lazy(() => import('./sections/AboutSection'))
const SkillsSection = lazy(() => import('./sections/SkillsSection'))

const ContactSection = lazy(() => import('./sections/ContactSection'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <div className="bg-primary text-white min-h-screen overflow-x-hidden">
      <Navigation />

      <Suspense fallback={<LoadingFallback />}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />

        <ContactSection />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App

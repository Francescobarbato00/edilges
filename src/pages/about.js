import { useState, useEffect } from 'react'
import AboutHero from './components/AboutHero'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import Header from './components/Header'
import HeaderMobile from './components/HeaderMobile'
import MissionSection from './components/MissionSection'
import Offices from './components/Offices'
import OurStorySection from './components/OurStorySection'
import TeamSection from './components/TeamSection'
import ValuesSection from './components/ValuesSection'

export default function About() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {isMobile ? <HeaderMobile /> : <Header />}
      <main>
        <AboutHero />
        <OurStorySection />
        <ValuesSection />
        <MissionSection />
        <Offices />
        <TeamSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  )
}

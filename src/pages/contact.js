import { useState, useEffect } from 'react'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Header from './components/Header'
import HeaderMobile from './components/HeaderMobile'
import SimpleFAQSection from './components/SimpleFAQSection'
import SingleOfficeSection from './components/SingleOfficeSection'
import SocialMediaSection from './components/SocialMediaSection'

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {isMobile ? <HeaderMobile /> : <Header />}
      <main>
        <ContactSection />
        <SimpleFAQSection />
        <SingleOfficeSection />
        <SocialMediaSection />
        <Footer />
      </main>
    </>
  )
}

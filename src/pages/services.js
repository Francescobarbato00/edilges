import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import HeaderMobile from './components/HeaderMobile'
import ServicesGrid from './components/ServicesGrid'
import ServicesHero from './components/ServicesHero'

export default function Services() {
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
        <ServicesHero />
        <ServicesGrid />
        <Footer />
      </main>
    </>
  )
}

import { useState, useEffect } from 'react'
import BlogSection from './components/BlogSection'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import Header from './components/Header'
import HeaderMobile from './components/HeaderMobile'
import Hero from './components/Hero'
import Mission from './components/Mission'
import RecentWorks from './components/RecentWorks'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import TrustedBy from './components/TrustedBy'

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(() => {
    // Controlla se siamo sul client per poter usare window
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? <HeaderMobile /> : <Header />}
      <main>
        <Hero />
        {/* Altri contenuti della pagina */}
        <Services />
        <TrustedBy />
        <Mission />
        <CallToAction />
        <RecentWorks />
        <Testimonials />
        <BlogSection />
        <Footer />
      </main>
    </>
  );
}

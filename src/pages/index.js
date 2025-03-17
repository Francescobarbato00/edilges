// src/pages/index.js
import BlogSection from './components/BlogSection'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Mission from './components/Mission'
import RecentWorks from './components/RecentWorks'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import TrustedBy from './components/TrustedBy'

export default function HomePage() {
  return (
    <>
      <Header />
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
  )
}

import AboutHero from './components/AboutHero'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import Header from './components/Header'
import MissionSection from './components/MissionSection'
import Offices from './components/Offices'
import OurStorySection from './components/OurStorySection'
import TeamSection from './components/TeamSection'
import ValuesSection from './components/ValuesSection'

export default function About() {
  return (
    <>
      <Header />
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

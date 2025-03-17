import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Header from './components/Header'
import SimpleFAQSection from './components/SimpleFAQSection'
import SingleOfficeSection from './components/SingleOfficeSection'
import SocialMediaSection from './components/SocialMediaSection'

export default function Contact() {
  return (
    <>
      <Header />
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

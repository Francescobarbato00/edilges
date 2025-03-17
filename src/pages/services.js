import Footer from './components/Footer'
import Header from './components/Header'
import ServicesGrid from './components/ServicesGrid'
import ServicesHero from './components/ServicesHero'

export default function Services() {
  return (
    <>
      <Header />
      <main>
      <ServicesHero />
      <ServicesGrid />
      <Footer />
      </main>
    </>
  )
}

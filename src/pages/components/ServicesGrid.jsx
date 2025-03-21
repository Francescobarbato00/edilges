// src/components/ServicesGrid.jsx
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function ServicesGrid() {
  const [isMobile, setIsMobile] = useState(false)
  const [isSmallMobile, setIsSmallMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      setIsSmallMobile(width < 480)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Dati per le 6 card
  const services = [
    {
      icon: '/1.svg',
      title: 'Remodel construction',
      description:
        'Venenatis sollicitudin posuere elit consequat et enim neque tortor amet dictum tempor leo facilisis aliquet viverra scelerisque eleifend viverra.'
    },
    {
      icon: '/2.svg',
      title: 'General contracting',
      description:
        'Venenatis sollicitudin posuere elit consequat et enim neque tortor amet dictum tempor leo facilisis aliquet viverra scelerisque eleifend viverra.'
    },
    {
      icon: '/3.svg',
      title: 'Project planning',
      description:
        'Venenatis sollicitudin posuere elit consequat et enim neque tortor amet dictum tempor leo facilisis aliquet viverra scelerisque eleifend viverra.'
    },
    {
      icon: '/4.svg',
      title: 'Space planning',
      description:
        'Venenatis sollicitudin posuere elit consequat et enim neque tortor amet dictum tempor leo facilisis aliquet viverra scelerisque eleifend viverra.'
    },
    {
      icon: '/5.svg',
      title: 'Exterior design',
      description:
        'Venenatis sollicitudin posuere elit consequat et enim neque tortor amet dictum tempor leo facilisis aliquet viverra scelerisque eleifend viverra.'
    },
    {
      icon: '/6.svg',
      title: 'Decoration paints',
      description:
        'Venenatis sollicitudin posuere elit consequat et enim neque tortor amet dictum tempor leo facilisis aliquet viverra scelerisque eleifend viverra.'
    }
  ]

  // Definiamo la griglia in base al breakpoint:
  const gridTemplateColumns = isSmallMobile
    ? '1fr'
    : isMobile
    ? 'repeat(2, 1fr)'
    : 'repeat(3, 1fr)'

  // Adattiamo il padding della sezione e il gap della griglia
  const sectionPadding = isMobile ? '2rem 0' : '4rem 0'
  const gridGap = isMobile ? '1rem' : '2rem'

  return (
    <section style={{ backgroundColor: '#f8f9fb', padding: sectionPadding }}>
      <div
        style={{
          maxWidth: '1340px',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'grid',
          gridTemplateColumns: gridTemplateColumns,
          gap: gridGap
        }}
      >
        {services.map((item, idx) => (
          <ServiceCard
            key={idx}
            icon={item.icon}
            title={item.title}
            description={item.description}
            isMobile={isMobile}
          />
        ))}
      </div>
    </section>
  )
}

/**
 * Singola card con:
 * - icona (SVG)
 * - titolo
 * - testo descrittivo
 * - link "Learn more →"
 *
 * Prop isMobile: booleano per adattare dimensioni e spaziature su dispositivi mobili
 */
function ServiceCard({ icon, title, description, isMobile }) {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: '1rem',
        boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
        padding: isMobile ? '1.5rem' : '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: isMobile ? '0.75rem' : '1rem'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '0.75rem' : '1rem' }}>
        {/* Icona (40px x 40px) */}
        <div style={{ width: '40px', height: '40px', position: 'relative' }}>
          <Image src={icon} alt={title} layout="fill" objectFit="contain" />
        </div>
        {/* Titolo */}
        <h3
          style={{
            fontFamily: 'Thicccboi, sans-serif',
            fontWeight: 500,
            fontSize: isMobile ? '20px' : '24px',
            lineHeight: isMobile ? '26px' : '30px',
            margin: 0
          }}
        >
          {title}
        </h3>
        {/* Testo descrittivo */}
        <p
          style={{
            fontFamily: 'Thicccboi, sans-serif',
            fontWeight: 400,
            fontSize: isMobile ? '16px' : '18px',
            lineHeight: isMobile ? '22px' : '28px',
            color: '#555',
            margin: 0
          }}
        >
          {description}
        </p>
      </div>
      {/* Link "Learn more →" */}
      <div style={{ textAlign: 'right', marginTop: isMobile ? '0.5rem' : '1rem' }}>
        <a
          href="#"
          style={{
            fontFamily: 'Thicccboi, sans-serif',
            fontWeight: 500,
            fontSize: isMobile ? '14px' : '16px',
            lineHeight: isMobile ? '20px' : '24px',
            color: '#171717',
            textDecoration: 'none'
          }}
        >
          Learn more →
        </a>
      </div>
    </div>
  )
}

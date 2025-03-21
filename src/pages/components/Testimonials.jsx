// src/components/Testimonials.jsx
import { useState, useEffect } from 'react'

export default function Testimonials() {
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

  // -- Stili sezione
  const sectionStyle = {
    backgroundColor: '#f8f9fb',
    // Riduciamo un po' il padding su mobile
    padding: isMobile ? '2rem 0' : '4rem 0'
  }

  // -- Wrapper principale
  const wrapperStyle = {
    maxWidth: '1340px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }

  // -- Header
  const headerStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: isMobile ? 'center' : 'space-between',
    flexWrap: 'wrap',
    gap: '1rem',
    textAlign: isMobile ? 'center' : 'left'
  }

  // -- Colonna sinistra: Titoli
  const leftColStyle = {
    flex: '1 1 500px',
    minWidth: '300px'
  }

  // -- Stile del label "TESTIMONIALS"
  const labelStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '20px',
    margin: '0 0 0.5rem',
    color: '#666'
  }

  // -- Stile del titolo principale
  const titleStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 500,
    // Riduciamo dimensione e lineHeight su mobile
    fontSize: isMobile ? '36px' : '58px',
    lineHeight: isMobile ? '42px' : '65px',
    margin: 0
  }

  // -- Colonna destra: bottone
  const rightColStyle = {
    flex: '0 0 auto'
  }

  const buttonStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    padding: '0.75rem 1.5rem',
    borderRadius: '9999px',
    border: 'none',
    backgroundColor: '#0072F5',
    color: '#fff',
    cursor: 'pointer'
  }

  // -- Grid delle card testimonial
  // 1 colonna sotto i 480px, 2 colonne tra 480px e 768px, 4 colonne sopra i 768px
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isSmallMobile
      ? '1fr'
      : isMobile
      ? 'repeat(2, 1fr)'
      : 'repeat(4, 1fr)',
    gap: '1.5rem'
  }

  return (
    <section style={sectionStyle}>
      <div style={wrapperStyle}>
        {/* Header */}
        <div style={headerStyle}>
          {/* Colonna sinistra: Titolo */}
          <div style={leftColStyle}>
            <p style={labelStyle}>TESTIMONIALS</p>
            <h2 style={titleStyle}>
              What our <span style={{ color: '#0072F5' }}>clients</span> say
              <br /> about us
            </h2>
          </div>

          {/* Colonna destra: Bottone */}
          <div style={rightColStyle}>
            <button style={buttonStyle}>
              Get a free quote →
            </button>
          </div>
        </div>

        {/* Container card testimonial */}
        <div style={gridStyle}>
          <TestimonialCard
            text="Nunc vehicula odio neque, eget cursus magna bibendum at. Maecenas vitae felis ante."
            name="Andy Smith"
            location="Los Angeles, CA"
          />
          <TestimonialCard
            text="Ut sagittis at odio aliquam tempus odio tellus at ornare nisi quis pulvinar urna."
            name="Hannah Baker"
            location="Los Angeles, CA"
          />
          <TestimonialCard
            text="Sed tortor feugiat vulputate nibh amet pharetra quam in a in suspendisse laoreet convallis."
            name="Liam Spencer"
            location="New York, NY"
          />
          <TestimonialCard
            text="Aliquet cursus aliquam enim tellus mattis molestie ut enim fermentum nunc tellus."
            name="Sophie Moore"
            location="San Francisco, CA"
          />
        </div>
      </div>
    </section>
  )
}

/**
 * Componente singolo per una card testimonial.
 * - text: testo della recensione
 * - name: nome dell'autore
 * - location: città / stato
 */
function TestimonialCard({ text, name, location }) {
  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '1rem',
    padding: '2rem',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '1rem'
  }

  const textStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '28px',
    margin: 0,
    color: '#333'
  }

  const nameStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '28px',
    margin: '0 0 0.25rem'
  }

  const locationStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    margin: 0,
    color: '#666'
  }

  return (
    <div style={cardStyle}>
      {/* Testo */}
      <p style={textStyle}>
        {text}
      </p>

      {/* Nome e location */}
      <div>
        <h4 style={nameStyle}>{name}</h4>
        <p style={locationStyle}>{location}</p>
      </div>
    </div>
  )
}

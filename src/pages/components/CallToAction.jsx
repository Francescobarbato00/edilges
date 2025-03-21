// src/components/CallToAction.jsx
import { useState, useEffect } from 'react'

export default function CallToAction() {
  const [isMobile, setIsMobile] = useState(false)
  const [isSmallMobile, setIsSmallMobile] = useState(false)
  const [hoverArrow, setHoverArrow] = useState(false)

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

  // Stile del contenitore con sfondo immagine
  const containerStyle = {
    position: 'relative',
    borderRadius: '1.5rem',
    overflow: 'hidden',
    background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/getin.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: isMobile ? '2rem' : '3rem'
  }

  // Wrapper per il contenuto interno (usa flex in modalità row o column)
  const contentWrapperStyle = {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: isMobile ? 'center' : 'space-between',
    alignItems: 'center',
    gap: isMobile ? '1.5rem' : '2rem',
    color: '#fff',
    textAlign: isMobile ? 'center' : 'left'
  }

  // Stili per le colonne
  const leftColumnStyle = {
    flex: '1 1 300px',
    minWidth: '250px'
  }
  const rightColumnStyle = {
    flex: '1 1 300px',
    minWidth: '250px'
  }

  // Stili per il testo della label in alto
  const labelStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 600,
    fontSize: isSmallMobile ? '12px' : '14px',
    lineHeight: '20px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    margin: '0 0 1rem',
    opacity: 0.8
  }

  // Stile per il titolo principale
  const headingStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 400,
    fontSize: isMobile ? '2rem' : '3rem',
    lineHeight: '1.2',
    margin: 0
  }

  // Stile per il testo a destra
  const rightTextStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 400,
    fontSize: isSmallMobile ? '16px' : '18px',
    lineHeight: isSmallMobile ? '24px' : '28px',
    margin: '0 0 1.5rem',
    opacity: 0.9
  }

  // Stile per il pulsante principale
  const primaryButtonStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 500,
    fontSize: isSmallMobile ? '16px' : '18px',
    lineHeight: '24px',
    padding: isSmallMobile ? '0.5rem 1rem' : '0.75rem 1.5rem',
    borderRadius: '9999px',
    border: 'none',
    backgroundColor: '#0072F5',
    color: '#fff',
    cursor: 'pointer'
  }

  // Stile per il pulsante freccia con effetto hover
  const arrowButtonStyle = {
    width: isSmallMobile ? '40px' : '48px',
    height: isSmallMobile ? '40px' : '48px',
    borderRadius: '9999px',
    border: '1px solid #fff',
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: isSmallMobile ? '16px' : '18px',
    cursor: 'pointer',
    transition: 'transform 0.3s',
    transform: hoverArrow ? 'rotate(20deg) scale(1.15)' : 'none'
  }

  return (
    <section style={{ backgroundColor: '#f8f9fb', padding: isMobile ? '2rem 0' : '4rem 0' }}>
      <div style={{ maxWidth: '1340px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={containerStyle}>
          <div style={contentWrapperStyle}>
            {/* Colonna sinistra */}
            <div style={leftColumnStyle}>
              <p style={labelStyle}>GET IN TOUCH</p>
              <h2 style={headingStyle}>
                Time to take action? <br />
                Get a quote today.
              </h2>
            </div>
            {/* Colonna destra */}
            <div style={rightColumnStyle}>
              <p style={rightTextStyle}>
                Sed facilisi sed habitant morbi felis fermentum suspendisse fermentum purus. Fringilla ipsum faucibus
                ut eget purus id.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: isMobile ? 'center' : 'flex-start' }}>
                <button style={primaryButtonStyle}>Get a free quote</button>
                <button
                  onMouseEnter={() => setHoverArrow(true)}
                  onMouseLeave={() => setHoverArrow(false)}
                  style={arrowButtonStyle}
                >
                  ↗
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

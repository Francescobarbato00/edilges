// src/components/ServicesHero.jsx
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function ServicesHero() {
  // Stato per gestire l'effetto di ingresso
  const [visible, setVisible] = useState(false)
  // Stato per la responsività
  const [isMobile, setIsMobile] = useState(false)
  const [isSmallMobile, setIsSmallMobile] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

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

  // Stili di animazione per l’intero contenitore
  const containerStyle = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease'
  }

  // Altezza del blocco di background: 500px su desktop, 300px su mobile, 220px su schermi molto piccoli
  const backgroundHeight = isMobile ? (isSmallMobile ? '220px' : '300px') : '500px'

  // Riduzione dimensioni del titolo su mobile
  const titleFontSize = isSmallMobile ? '1.8rem' : isMobile ? '2.2rem' : '3rem'
  const titleMaxWidth = isMobile ? '100%' : '60%'
  const titleMargin = isMobile ? '0.5rem 0' : 0

  // Riduzione dimensioni dei bottoni
  const buttonFontSize = isSmallMobile ? '0.8rem' : isMobile ? '0.9rem' : '1rem'
  const buttonPadding = isSmallMobile
    ? '0.5rem 1rem'
    : isMobile
    ? '0.65rem 1.25rem'
    : '0.75rem 1.5rem'

  // Contenitore bottoni: centrato su mobile
  const buttonContainerStyle = {
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'center',
    justifyContent: isMobile ? 'center' : 'flex-start'
  }

  // Modifica della posizione dell'overlay: su mobile l'overlay è centrato
  const overlayStyle = {
    position: 'absolute',
    bottom: isMobile ? '1rem' : '2rem',
    left: isMobile ? '1rem' : '2rem',
    right: isMobile ? '1rem' : '2rem',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: isMobile ? 'center' : 'flex-end',
    justifyContent: isMobile ? 'center' : 'space-between',
    flexWrap: 'wrap',
    textAlign: 'center'
  }

  return (
    <section style={{ backgroundColor: '#f8f9fb', padding: isMobile ? '2rem 0' : '4rem 0' }}>
      <div
        style={{
          maxWidth: '1340px',
          margin: '0 auto',
          padding: '0 1rem',
          borderRadius: '1rem',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          ...containerStyle
        }}
      >
        {/* Contenitore con sfondo #041A2E e altezza responsive */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: backgroundHeight,
            backgroundColor: '#041A2E',
            borderRadius: '1rem'
          }}
        >
          {/* Immagine servizi.svg molto grande, scalata su mobile */}
          <div
            style={{
              position: 'absolute',
              top: isMobile ? '-2rem' : '1rem',
              right: isMobile ? '-2rem' : '1rem',
              width: isMobile ? '1200px' : '2000px',
              height: isMobile ? '600px' : '1000px'
            }}
          >
            <Image
              src="/servizi.svg"
              alt="Services illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Testo e bottoni sovrapposti */}
        <div style={overlayStyle}>
          {/* Titolo grande */}
          <h1
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontSize: titleFontSize,
              lineHeight: '1.2',
              margin: titleMargin,
              color: '#fff',
              maxWidth: titleMaxWidth
            }}
          >
            A team of experts <br /> ready to help you
          </h1>

          {/* Contenitore bottoni */}
          <div style={buttonContainerStyle}>
            <HoverButton
              label="Get in touch"
              bgColor="#0072F5"
              textColor="#fff"
              fontSize={buttonFontSize}
              padding={buttonPadding}
            />
            <HoverButton
              label="↗"
              bgColor="#0072F5"
              textColor="#fff"
              circle
              fontSize={buttonFontSize}
              padding={buttonPadding}
            />
            <HoverButton
              label="Contact us"
              bgColor="transparent"
              textColor="#fff"
              border="1px solid #fff"
              fontSize={buttonFontSize}
              padding={buttonPadding}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Bottone riutilizzabile con effetto hover "scale up"
 *
 * Props:
 * - label: testo o simbolo del bottone
 * - bgColor: colore di sfondo
 * - textColor: colore del testo
 * - circle: se true, bottone circolare
 * - border: stile di bordo opzionale
 * - fontSize: dimensione del font
 * - padding: padding interno
 */
function HoverButton({ label, bgColor, textColor, circle, border, fontSize, padding }) {
  const [hover, setHover] = useState(false)

  const style = {
    fontFamily: 'Thicccboi, sans-serif',
    fontSize: fontSize || '1rem',
    padding: padding || (circle ? '0.75rem' : '0.75rem 1.5rem'),
    borderRadius: '9999px',
    border: border || 'none',
    backgroundColor: bgColor,
    color: textColor,
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s',
    transform: hover ? 'scale(1.08)' : 'scale(1)'
  }

  return (
    <button
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {label}
    </button>
  )
}

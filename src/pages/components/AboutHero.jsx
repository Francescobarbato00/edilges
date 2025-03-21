// src/components/AboutHero.jsx
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function AboutHero() {
  // Stato per l'effetto di ingresso e per la responsività
  const [visible, setVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isSmallMobile, setIsSmallMobile] = useState(false)
  // Stato per scurire l'immagine al hover
  const [hoverImg, setHoverImg] = useState(false)

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

  // Stili di animazione per il fade/slide
  const containerStyle = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease'
  }

  // Altezza dell'immagine: 500px su desktop, 300px su mobile, 220px su schermi molto piccoli
  const imageHeight = isMobile ? (isSmallMobile ? '220px' : '300px') : '500px'
  // Dimensione del titolo: scalata per schermi piccoli
  const h1FontSize = isSmallMobile ? '1.8rem' : isMobile ? '2.2rem' : '3rem'
  const h1LineHeight = isSmallMobile ? '2.2rem' : isMobile ? '2.6rem' : '1.2'
  // Dimensione e padding dei bottoni
  const buttonFontSize = isSmallMobile ? '0.8rem' : isMobile ? '0.9rem' : '1rem'
  const buttonPadding = isSmallMobile ? '0.5rem 1rem' : isMobile ? '0.65rem 1.25rem' : '0.75rem 1.5rem'

  return (
    <section style={{ backgroundColor: '#f8f9fb', padding: isMobile ? '1.5rem 0' : '4rem 0' }}>
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
        {/* Contenitore immagine */}
        <div
          style={{ position: 'relative', width: '100%', height: imageHeight }}
          onMouseEnter={() => setHoverImg(true)}
          onMouseLeave={() => setHoverImg(false)}
        >
          <Image
            src="/about.jpg" // Sostituisci con la tua immagine
            alt="Construction site"
            layout="fill"
            objectFit="cover"
            style={{
              borderRadius: '1rem',
              filter: hoverImg ? 'brightness(0.75)' : 'brightness(0.85)',
              transition: 'filter 0.3s'
            }}
          />
        </div>

        {/* Testo e bottoni sovrapposti */}
        <div
          style={{
            position: 'absolute',
            bottom: isMobile ? '1rem' : '2rem',
            left: isMobile ? '1rem' : '2rem',
            right: isMobile ? '1rem' : '2rem',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            textAlign: 'center'
          }}
        >
          {/* Titolo */}
          <h1
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontSize: h1FontSize,
              lineHeight: h1LineHeight,
              margin: isMobile ? '0.5rem 0' : 0,
              color: '#fff',
              width: isMobile ? '100%' : '60%'
            }}
          >
            A team of experts <br /> ready to help you
          </h1>

          {/* Bottoni */}
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginTop: isMobile ? '1rem' : 0 }}>
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
 * Bottone riutilizzabile con effetto hover (scale up)
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
    borderRadius: circle ? '9999px' : '9999px',
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

// src/components/ServicesHero.jsx
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function ServicesHero() {
  // Stato per gestire l'effetto di ingresso
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Quando il componente si monta, settiamo visible a true (fade + slide)
    setVisible(true)
  }, [])

  // Stili di animazione per l’intero contenitore
  const containerStyle = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease'
  }

  return (
    <section style={{ backgroundColor: '#f8f9fb', padding: '4rem 0' }}>
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
        {/* Contenitore con sfondo #041A2E e altezza fissa (500px) */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '500px',
            backgroundColor: '#041A2E',
            borderRadius: '1rem'
          }}
        >
          {/* Immagine servizi.svg molto più grande (400x400) */}
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              width: '2000px',
              height: '1000px'
            }}
          >
            <Image
              src="/servizi.svg" // Sostituisci con il tuo file in /public
              alt="Services illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Testo e bottoni sovrapposti (in basso) */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '2rem',
            right: '2rem',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
          }}
        >
          {/* Titolo grande */}
          <h1
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontSize: '3rem',
              lineHeight: '1.2',
              margin: 0,
              color: '#fff',
              maxWidth: '60%'
            }}
          >
            A team of experts <br /> ready to help you
          </h1>

          {/* Contenitore bottoni */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {/* Bottone 1 */}
            <HoverButton label="Get in touch" bgColor="#0072F5" textColor="#fff" />
            {/* Bottone freccia */}
            <HoverButton label="↗" bgColor="#0072F5" textColor="#fff" circle />
            {/* Bottone "Contact us" con bordo bianco */}
            <HoverButton
              label="Contact us"
              bgColor="transparent"
              textColor="#fff"
              border="1px solid #fff"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Bottone riutilizzabile con hover "scale up"
 * - label: testo (o simbolo) del bottone
 * - bgColor: colore di sfondo
 * - textColor: colore testo
 * - circle: se true, bottone circolare
 * - border: stile di bordo opzionale
 */
function HoverButton({ label, bgColor, textColor, circle, border }) {
  const [hover, setHover] = useState(false)

  const style = {
    fontFamily: 'Thicccboi, sans-serif',
    fontSize: '1rem',
    padding: circle ? '0.75rem' : '0.75rem 1.5rem',
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

// src/components/ContactSection.jsx
import { useState, useEffect } from 'react'

export default function ContactSection() {
  // Stato per l'animazione di ingresso
  const [visible, setVisible] = useState(false)
  // Stato per la responsività
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Avvia l'animazione di ingresso
    setVisible(true)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Stili per l'animazione del form
  const formColumnStyle = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateX(0)' : 'translateX(-30px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease'
  }

  // Impostiamo la griglia: 2 colonne su desktop, 1 colonna su mobile
  const gridTemplateColumns = isMobile ? '1fr' : '1fr 1fr'
  const gridGap = isMobile ? '1rem' : '2rem'
  const sectionPadding = isMobile ? '2rem 0' : '4rem 0'

  // Sezione per l'immagine (adattata per mobile)
  const imageColumnStyle = {
    borderRadius: '1rem',
    overflow: 'hidden',
    minHeight: isMobile ? '300px' : '500px',
    display: 'flex'
  }

  return (
    <section style={{ backgroundColor: '#f8f9fb', padding: sectionPadding }}>
      <div
        style={{
          maxWidth: '1340px',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'grid',
          gridTemplateColumns: gridTemplateColumns,
          gap: gridGap,
          alignItems: 'stretch'
        }}
      >
        {/* Colonna sinistra: Form (titolo, testo e form) */}
        <div style={{ ...formColumnStyle, display: 'flex', flexDirection: 'column' }}>
          {/* Titolo */}
          <h1
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 500,
              fontSize: isMobile ? '36px' : '58px',
              lineHeight: isMobile ? '42px' : '65px',
              margin: '0 0 1rem'
            }}
          >
            Contact us!
          </h1>
          {/* Testo introduttivo */}
          <p
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 400,
              fontSize: isMobile ? '16px' : '18px',
              lineHeight: isMobile ? '22px' : '28px',
              color: '#666',
              margin: '0 0 2rem'
            }}
          >
            Lorem ipsum dolor sit amet consectetur vitae et quam sed nunc accumsan 
            nec scelerisque auctor placerat eu diam.
          </p>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: isMobile ? '1rem' : '1.5rem 2rem',
              flex: 1,
              marginBottom: '2rem'
            }}
          >
            {/* Full name */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 400,
                  fontSize: isMobile ? '14px' : '16px',
                  marginBottom: '0.5rem',
                  color: '#666'
                }}
              >
                Full name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontSize: isMobile ? '14px' : '16px',
                  padding: '0.5rem',
                  border: 'none',
                  borderBottom: '1px solid #ccc',
                  outline: 'none'
                }}
              />
            </div>

            {/* Email address */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 400,
                  fontSize: isMobile ? '14px' : '16px',
                  marginBottom: '0.5rem',
                  color: '#666'
                }}
              >
                Email address
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontSize: isMobile ? '14px' : '16px',
                  padding: '0.5rem',
                  border: 'none',
                  borderBottom: '1px solid #ccc',
                  outline: 'none'
                }}
              />
            </div>

            {/* Phone number */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 400,
                  fontSize: isMobile ? '14px' : '16px',
                  marginBottom: '0.5rem',
                  color: '#666'
                }}
              >
                Phone number
              </label>
              <input
                type="tel"
                placeholder="(123) 456 - 789"
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontSize: isMobile ? '14px' : '16px',
                  padding: '0.5rem',
                  border: 'none',
                  borderBottom: '1px solid #ccc',
                  outline: 'none'
                }}
              />
            </div>

            {/* Subject */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 400,
                  fontSize: isMobile ? '14px' : '16px',
                  marginBottom: '0.5rem',
                  color: '#666'
                }}
              >
                Subject
              </label>
              <input
                type="text"
                placeholder="ex. General construction"
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontSize: isMobile ? '14px' : '16px',
                  padding: '0.5rem',
                  border: 'none',
                  borderBottom: '1px solid #ccc',
                  outline: 'none'
                }}
              />
            </div>

            {/* Message (span su 2 colonne) */}
            <div style={{ gridColumn: isMobile ? '1 / 2' : '1 / 3', display: 'flex', flexDirection: 'column' }}>
              <label
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 400,
                  fontSize: isMobile ? '14px' : '16px',
                  marginBottom: '0.5rem',
                  color: '#666'
                }}
              >
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontSize: isMobile ? '14px' : '16px',
                  padding: '0.5rem',
                  border: 'none',
                  borderBottom: '1px solid #ccc',
                  outline: 'none',
                  resize: 'none'
                }}
              />
            </div>
          </form>

          {/* Bottoni in basso */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              type="submit"
              style={{
                fontFamily: 'Thicccboi, sans-serif',
                fontWeight: 500,
                fontSize: isMobile ? '16px' : '18px',
                lineHeight: '24px',
                padding: isMobile ? '0.65rem 1.25rem' : '0.75rem 1.5rem',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: '#0072F5',
                color: '#fff',
                cursor: 'pointer'
              }}
            >
              Receive the call
            </button>
            <button
              style={{
                width: isMobile ? '40px' : '48px',
                height: isMobile ? '40px' : '48px',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: '#0072F5',
                color: '#fff',
                fontSize: isMobile ? '16px' : '18px',
                cursor: 'pointer'
              }}
            >
              ↗
            </button>
          </div>
        </div>

        {/* Colonna destra: Immagine (si adatta in altezza in base al form) */}
        <div style={imageColumnStyle}>
          <img
            src="/contact.jpg"
            alt="Construction worker"
            style={{
              width: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>
    </section>
  )
}

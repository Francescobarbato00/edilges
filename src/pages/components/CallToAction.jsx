// src/components/CallToAction.jsx
import { useState } from 'react'

export default function CallToAction() {
  // Stato per gestire l'hover sulla freccia (se vuoi farlo inline con onMouseEnter/onMouseLeave)
  const [hoverArrow, setHoverArrow] = useState(false)

  return (
    <section style={{ backgroundColor: '#f8f9fb', padding: '4rem 0' }}>
      <div
        style={{
          maxWidth: '1340px',
          margin: '0 auto',
          padding: '0 1rem'
        }}
      >
        <div
          style={{
            // Contenitore con immagine di sfondo e overlay scuro di default
            position: 'relative',
            borderRadius: '1.5rem',
            overflow: 'hidden',
            // Usando un linear-gradient per scurire l'immagine di default
            background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/getin.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Contenuto (testi + bottoni) */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '3rem',
              color: '#fff',
              gap: '2rem'
            }}
          >
            {/* Colonna sinistra */}
            <div style={{ flex: '1 1 300px', minWidth: '250px' }}>
              <p
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  margin: '0 0 1rem',
                  opacity: 0.8
                }}
              >
                GET IN TOUCH
              </p>
              <h2
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 400,
                  fontSize: '3rem',
                  lineHeight: '1.2',
                  margin: 0
                }}
              >
                Time to take action? <br />
                Get a quote today.
              </h2>
            </div>

            {/* Colonna destra */}
            <div style={{ flex: '1 1 300px', minWidth: '250px' }}>
              <p
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '28px',
                  margin: '0 0 1.5rem',
                  opacity: 0.9
                }}
              >
                Sed facilisi sed habitant morbi felis fermentum suspendisse fermentum
                purus. Fringilla ipsum faucibus ut eget purus id.
              </p>

              {/* Bottoni */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  style={{
                    fontFamily: 'Thicccboi, sans-serif',
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '24px',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '9999px',
                    border: 'none',
                    backgroundColor: '#0072F5',
                    color: '#fff',
                    cursor: 'pointer'
                  }}
                >
                  Get a free quote
                </button>

                {/* Pulsante freccia con effetto hover (rotate/scale) */}
                <button
                  onMouseEnter={() => setHoverArrow(true)}
                  onMouseLeave={() => setHoverArrow(false)}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '9999px',
                    border: '1px solid #fff',
                    backgroundColor: 'transparent',
                    color: '#fff',
                    fontSize: '18px',
                    cursor: 'pointer',
                    transition: 'transform 0.3s',
                    // Se hoverArrow è true, applichiamo una trasformazione
                    transform: hoverArrow ? 'rotate(20deg) scale(1.15)' : 'none'
                  }}
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

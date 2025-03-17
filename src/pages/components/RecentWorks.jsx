// src/components/RecentWorks.jsx
import { useState } from 'react'

export default function RecentWorks() {
  // Elenco progetti di esempio (sostituisci immagini/titoli con i tuoi)
  const projects = [
    {
      number: '01',
      title: 'Kitchen remodeling in Hollywood Hills, CA',
      image: '/prova1.jpg'
    },
    {
      number: '02',
      title: 'Living room design in Beverly Hills, CA',
      image: '/prova2.jpg'
    },
    {
      number: '03',
      title: 'Outdoor patio renovation in Malibu, CA',
      image: '/prova3.jpg'
    }
  ]

  // Stato per l’indice del progetto corrente
  const [currentIndex, setCurrentIndex] = useState(0)

  // Funzioni per cambiare progetto
  const handlePrev = () => {
    setCurrentIndex(prev => (prev + projects.length - 1) % projects.length)
  }
  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % projects.length)
  }

  // Progetto attualmente visibile
  const currentProject = projects[currentIndex]

  return (
    <section style={{ backgroundColor: '#f8f9fb', padding: '4rem 0' }}>
      <div
        style={{
          maxWidth: '1340px',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem'
        }}
      >
        {/* Colonna sinistra: titoli e link */}
        <div style={{ flex: '1 1 400px', minWidth: '300px' }}>
          <p
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '20px',
              margin: '0 0 0.5rem',
              color: '#666'
            }}
          >
            RECENT WORKS
          </p>
          <h2
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 500,
              fontSize: '58px',
              lineHeight: '65px',
              margin: '0 0 1.5rem'
            }}
          >
            Take a look at <br /> our most recent{' '}
            <span style={{ color: '#0072F5' }}>projects</span>
          </h2>
          <a
            href="#"
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              textDecoration: 'none',
              color: '#171717'
            }}
          >
            Browse portfolio →
          </a>
        </div>

        {/* Colonna destra: card immagine + frecce + testo sovrapposto */}
        <div
          style={{
            flex: '1 1 400px',
            minWidth: '300px',
            position: 'relative'
          }}
        >
          {/* Card con immagine di sfondo */}
          <div
            style={{
              borderRadius: '1rem',
              overflow: 'hidden',
              position: 'relative',
              width: '100%',
              height: '500px', // Altezza fissa di esempio, modifica a piacere
              backgroundImage: `url("${currentProject.image}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Overlay sfumato (opzionale) */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '50%',
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)'
              }}
            />

            {/* Testo sovrapposto in basso */}
            <div
              style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                color: '#fff'
              }}
            >
              <p
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 500,
                  fontSize: '22px',
                  lineHeight: '33px',
                  margin: '0 0 0.5rem',
                  color: '#0072F5'
                }}
              >
                {currentProject.number}
              </p>
              <h3
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 400,
                  fontSize: '24px',
                  lineHeight: '30px',
                  margin: 0
                }}
              >
                {currentProject.title}
              </h3>
            </div>
          </div>

          {/* Freccia sinistra */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              top: '50%',
              left: '-2rem',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '9999px',
              border: 'none',
              backgroundColor: '#0072F5',
              color: '#fff',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >
            ←
          </button>

          {/* Freccia destra */}
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              top: '50%',
              right: '-2rem',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '9999px',
              border: 'none',
              backgroundColor: '#0072F5',
              color: '#fff',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

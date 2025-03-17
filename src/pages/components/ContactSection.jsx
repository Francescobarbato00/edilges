// src/components/ContactSection.jsx
import { useState, useEffect } from 'react'

export default function ContactSection() {
  // Stato per l'animazione di ingresso
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Quando il componente si monta, settiamo visible a true per far partire la transizione
    setVisible(true)
  }, [])

  // Stili di animazione per la colonna di sinistra (form)
  const formColumnStyle = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateX(0)' : 'translateX(-30px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease'
  }

  return (
    <section style={{ backgroundColor: '#f8f9fb', padding: '4rem 0' }}>
      <div
        style={{
          maxWidth: '1340px',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',  // 2 colonne
          gap: '2rem',
          alignItems: 'stretch'            // Fa in modo che entrambe le colonne abbiano la stessa altezza
        }}
      >
        {/* Colonna sinistra: Titolo + testo + form (con animazione) */}
        <div style={{ ...formColumnStyle, display: 'flex', flexDirection: 'column' }}>
          {/* Titolo */}
          <h1
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 500,
              fontSize: '58px',
              lineHeight: '65px',
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
              fontSize: '18px',
              lineHeight: '28px',
              color: '#666',
              margin: '0 0 2rem'
            }}
          >
            Lorem ipsum dolor sit amet consectetur vitae et quam sed nunc accumsan 
            nec scelerisque auctor placerat eu diam.
          </p>

          {/* Form (riempie lo spazio verticale disponibile) */}
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem 2rem', // row gap / col gap
              flex: 1,           // Occupa lo spazio rimanente
              marginBottom: '2rem'
            }}
          >
            {/* Full name */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
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
                  fontSize: '16px',
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
                  fontSize: '16px',
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
                  fontSize: '16px',
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
                  fontSize: '16px',
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
                  fontSize: '16px',
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
                  fontSize: '16px',
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
                  fontSize: '16px',
                  padding: '0.5rem',
                  border: 'none',
                  borderBottom: '1px solid #ccc',
                  outline: 'none'
                }}
              />
            </div>

            {/* Message (span su 2 colonne) */}
            <div style={{ gridColumn: '1 / 3', display: 'flex', flexDirection: 'column' }}>
              <label
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
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
                  fontSize: '16px',
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
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              type="submit"
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
              Receive the call
            </button>
            <button
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: '#0072F5',
                color: '#fff',
                fontSize: '18px',
                cursor: 'pointer'
              }}
            >
              ↗
            </button>
          </div>
        </div>

        {/* Colonna destra: Immagine (stessa altezza del form, grazie a align-items: stretch) */}
        <div
          style={{
            borderRadius: '1rem',
            overflow: 'hidden',
            minHeight: '500px',  // Altezza minima per stabilizzare
            display: 'flex'
          }}
        >
          <img
            src="/contact.jpg" // Sostituisci con il tuo file o URL
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

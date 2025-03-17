// src/components/Hero.jsx

import Image from 'next/image'

export default function Hero() {
  return (
    <section style={{ backgroundColor: '#f8f9fb', padding: '4rem 0' }}>
      {/* RIGA 1: Titolo a sinistra, testo + bottoni a destra */}
      <div
        style={{
          maxWidth: '1340px',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap' // Per gestire schermi stretti
        }}
      >
        {/* Colonna sinistra: Titolo */}
        <div style={{ flex: '0 0 50%', minWidth: '300px' }}>
          <h1
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 500,
              fontSize: '84px',
              lineHeight: '94px',
              margin: 0
            }}
          >
            Unlock success <br /> with our contracts
          </h1>
        </div>

        {/* Colonna destra: Testo + bottoni */}
        <div
          style={{
            flex: '0 0 50%',
            minWidth: '300px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginTop: '1rem'
          }}
        >
          <p
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 500,
              fontSize: '22px',
              lineHeight: '33px',
              marginBottom: '2rem',
              maxWidth: '500px'
            }}
          >
            Pellentesque sapien in consequat bibendum mattis amet molestie gravida 
            neque venenatis nibh purus est orci mauris.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {/* Bottone 1 */}
            <button
              style={{
                fontFamily: 'Thicccboi, sans-serif',
                fontWeight: 600,
                fontSize: '24px',
                lineHeight: '30px',
                padding: '1rem 2rem',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: '#0072F5',
                color: '#fff',
                cursor: 'pointer'
              }}
            >
              Get a free quote &nbsp; →
            </button>
            {/* Bottone 2 */}
            <button
              style={{
                fontFamily: 'Thicccboi, sans-serif',
                fontWeight: 600,
                fontSize: '24px',
                lineHeight: '30px',
                padding: '1rem 2rem',
                borderRadius: '9999px',
                border: '1px solid #0072F5',
                backgroundColor: 'transparent',
                color: '#0072F5',
                cursor: 'pointer'
              }}
            >
              Contact us
            </button>
          </div>
        </div>
      </div>

      {/* RIGA 2: Immagine sotto, stessa larghezza (1340px) */}
      <div
        style={{
          maxWidth: '1340px',
          margin: '3rem auto 0',
          padding: '0 1rem'
        }}
      >
        <Image
          src="/hero.jpg"
          alt="Construction worker measuring"
          width={1340}
          height={600}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '0.5rem',
            objectFit: 'cover'
          }}
        />
      </div>
    </section>
  )
}

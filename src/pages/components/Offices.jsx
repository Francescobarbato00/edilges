// src/components/Offices.jsx

export default function Offices() {
    return (
      <section style={{ backgroundColor: '#f8f9fb', padding: '4rem 0' }}>
        <div
          style={{
            maxWidth: '1340px',
            margin: '0 auto',
            padding: '0 1rem'
          }}
        >
          {/* Contenitore principale con borderRadius e overflow nascosto */}
          <div
            style={{
              position: 'relative',
              borderRadius: '1.5rem',
              overflow: 'hidden'
            }}
          >
            {/* Immagine di sfondo (riempie tutto il contenitore) */}
            <img
              src="/prova.jpg" // Sostituisci con il tuo path o URL
              alt="Office background"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
  
            {/* Box bianco compatto */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '5%',  // Quanto spostarlo da sinistra
                width: '45%', // Larghezza box
                transform: 'translateY(-50%)',
                backgroundColor: '#fff',
                borderRadius: '1.5rem',
                padding: '3rem',
                boxSizing: 'border-box',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
              }}
            >
              {/* OUR OFFICES */}
              <p
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '20px',
                  margin: '0 0 1rem',
                  color: '#666'
                }}
              >
                OUR OFFICES
              </p>
  
              {/* Titolo principale */}
              <h2
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 500,
                  fontSize: '58px',
                  lineHeight: '65px',
                  margin: '0 0 1.5rem'
                }}
              >
                Visit our <span style={{ color: '#0072F5' }}>offices</span> <br />
                around the globe
              </h2>
  
              {/* Località */}
              <h3
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 500,
                  fontSize: '32px',
                  margin: '0 0 0.5rem'
                }}
              >
                Los Angeles, CA
              </h3>
  
              {/* Testo descrittivo */}
              <p
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 400,
                  fontSize: '22px',
                  lineHeight: '33px',
                  margin: '0 0 1.5rem',
                  color: '#555'
                }}
              >
                Sit odio fames sed donec fermentum libero aliquam montes vulputate
                volutpat ac odio.
              </p>
  
              {/* Email */}
              <p
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 400,
                  fontSize: '18px',
                  margin: '0 0 2rem',
                  color: '#0072F5'
                }}
              >
                losangeles@builders.com
              </p>
  
              {/* Due pulsanti circolari (frecce) */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                {/* Freccia destra */}
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
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
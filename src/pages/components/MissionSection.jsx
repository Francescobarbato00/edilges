// src/components/MissionSection.jsx

export default function MissionSection() {
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
          {/* Colonna sinistra */}
          <div
            style={{
              flex: '1',
              minWidth: '200px',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-start'
            }}
          >
            {/* Testo "OUR MISSION" in alto */}
            <p
              style={{
                fontFamily: 'Thicccboi, sans-serif',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '20px',
                color: '#666',
                margin: 0
              }}
            >
              OUR MISSION
            </p>
          </div>
  
          {/* Colonna destra */}
          <div style={{ flex: '2', minWidth: '300px' }}>
            {/* Titolo grande */}
            <h2
              style={{
                fontFamily: 'Thicccboi, sans-serif',
                fontWeight: 500,
                fontSize: '58px',
                lineHeight: '65px',
                margin: '0 0 1rem'
              }}
            >
              Our mission is to deliver <br />
              high quality <span style={{ color: '#0072F5' }}>work</span>
            </h2>
  
            {/* Paragrafo descrittivo */}
            <p
              style={{
                fontFamily: 'Thicccboi, sans-serif',
                fontWeight: 400,
                fontSize: '22px',
                lineHeight: '33px',
                color: '#555',
                margin: '0 0 2rem'
              }}
            >
              Ante mauris tristique fusce etiam sed a gravida fermentum velit bibendum
              scelerisque fames quam eu in in molestie at vel id interdum duis eu et
              pharetra mattis magna dui in sagittis eget congue praesent malesuada
              ante ullamcorper porttitor.
            </p>
  
            {/* Bottoni */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              {/* Bottone "Get a free quote" */}
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
  
              {/* Bottone circolare con freccia */}
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
        </div>
      </section>
    )
  }
  
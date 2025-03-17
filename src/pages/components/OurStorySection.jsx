// src/components/OurStorySection.jsx

export default function OurStorySection() {
    return (
      <section style={{ backgroundColor: '#f8f9fb', padding: '4rem 0' }}>
        <div
          style={{
            maxWidth: '1340px',
            margin: '0 auto',
            padding: '0 1rem'
          }}
        >
          {/* Titolo in alto */}
          <div style={{ marginBottom: '1.5rem' }}>
            {/* "OUR STORY" */}
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
              OUR STORY
            </p>
            {/* Titolo grande */}
            <h2
              style={{
                fontFamily: 'Thicccboi, sans-serif',
                fontWeight: 500,
                fontSize: '58px',
                lineHeight: '65px',
                margin: 0
              }}
            >
              An exceptional{' '}
              <span style={{ color: '#0072F5' }}>quality</span> <br />
              that can’t be beaten
            </h2>
          </div>
  
          {/* Linea divisoria */}
          <hr
            style={{
              border: 'none',
              borderTop: '1px solid #e0e0e0',
              margin: '0 0 2rem'
            }}
          />
  
          {/* Sezione a 2 colonne: Numeri (sx) e Testo (dx) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              columnGap: '3rem',
              rowGap: '2rem'
            }}
          >
            {/* Colonna sinistra: i numeri */}
            <div>
              {/* TEAM MEMBER */}
              <div style={{ marginBottom: '2rem' }}>
                <p
                  style={{
                    fontFamily: 'Thicccboi, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    margin: 0,
                    color: '#999'
                  }}
                >
                  TEAM MEMBER
                </p>
                <h3
                  style={{
                    fontFamily: 'Thicccboi, sans-serif',
                    fontWeight: 400,
                    fontSize: '88px',
                    lineHeight: '98px',
                    margin: '0',
                    color: '#111'
                  }}
                >
                  65<span style={{ color: '#0072F5' }}>+</span>
                </h3>
              </div>
  
              {/* SUCCESSFUL PROJECT */}
              <div>
                <p
                  style={{
                    fontFamily: 'Thicccboi, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    margin: 0,
                    color: '#999'
                  }}
                >
                  SUCCESSFUL PROJECT
                </p>
                <h3
                  style={{
                    fontFamily: 'Thicccboi, sans-serif',
                    fontWeight: 400,
                    fontSize: '88px',
                    lineHeight: '98px',
                    margin: '0',
                    color: '#111'
                  }}
                >
                  350<span style={{ color: '#0072F5' }}>+</span>
                </h3>
              </div>
            </div>
  
            {/* Colonna destra: Testo e link */}
            <div>
              <p
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 500,
                  fontSize: '22px',
                  lineHeight: '33px',
                  margin: '0 0 1.5rem',
                  color: '#555'
                }}
              >
                Ut eu urna turpis erat ut cras urna ac. Condimentum urna diam tristique
                in accumsan. Congue id integer aliquet amet viverra vitae aenean.
                Varius nisi orci et aliquam velit ipsum placerat amet vulputate.
              </p>
              <p
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 500,
                  fontSize: '22px',
                  lineHeight: '33px',
                  margin: '0 0 2rem',
                  color: '#555'
                }}
              >
                Diam nulla venenatis orci amet leo a et ultrices. Nibh porta id faucibus
                pulvinar. Est feugiat placerat non nec vel facilisis amet vulputate
                tortor. Cursus neque tempus curabitur luctus enim ullamcorper eu quam.
              </p>
              <a
                href="#"
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 500,
                  fontSize: '22px',
                  lineHeight: '33px',
                  color: '#0072F5',
                  textDecoration: 'none'
                }}
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
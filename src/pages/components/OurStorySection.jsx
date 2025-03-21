// src/components/OurStorySection.jsx
import { useState, useEffect } from 'react'

export default function OurStorySection() {
  const [isMobile, setIsMobile] = useState(false)
  const [isSmallMobile, setIsSmallMobile] = useState(false)

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

  // Definisce dimensioni e spaziature in base al breakpoint
  const titleFontSize = isMobile ? '36px' : '58px'
  const titleLineHeight = isMobile ? '42px' : '65px'
  const numberFontSize = isMobile ? '48px' : '88px'
  const numberLineHeight = isMobile ? '58px' : '98px'
  const paragraphFontSize = isMobile ? '18px' : '22px'
  const paragraphLineHeight = isMobile ? '27px' : '33px'
  const gridColumnGap = isMobile ? '1rem' : '3rem'
  const gridRowGap = isMobile ? '1.5rem' : '2rem'
  const sectionPadding = isMobile ? '2rem 0' : '4rem 0'
  const headerMarginBottom = isMobile ? '1rem' : '1.5rem'

  return (
    <section style={{ backgroundColor: '#f8f9fb', padding: sectionPadding }}>
      <div
        style={{
          maxWidth: '1340px',
          margin: '0 auto',
          padding: '0 1rem'
        }}
      >
        {/* Titolo in alto */}
        <div style={{ marginBottom: headerMarginBottom }}>
          {/* "OUR STORY" */}
          <p
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 600,
              fontSize: isMobile ? '14px' : '16px',
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
              fontSize: titleFontSize,
              lineHeight: titleLineHeight,
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
            margin: isMobile ? '0 0 1.5rem' : '0 0 2rem'
          }}
        />

        {/* Sezione a 2 colonne: Numeri (sx) e Testo (dx) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            columnGap: gridColumnGap,
            rowGap: gridRowGap
          }}
        >
          {/* Colonna sinistra: i numeri */}
          <div>
            {/* TEAM MEMBER */}
            <div style={{ marginBottom: isMobile ? '1.5rem' : '2rem' }}>
              <p
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 400,
                  fontSize: isMobile ? '14px' : '16px',
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
                  fontSize: numberFontSize,
                  lineHeight: numberLineHeight,
                  margin: 0,
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
                  fontSize: isMobile ? '14px' : '16px',
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
                  fontSize: numberFontSize,
                  lineHeight: numberLineHeight,
                  margin: 0,
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
                fontSize: paragraphFontSize,
                lineHeight: paragraphLineHeight,
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
                fontSize: paragraphFontSize,
                lineHeight: paragraphLineHeight,
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
                fontSize: paragraphFontSize,
                lineHeight: paragraphLineHeight,
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

// src/components/SingleOfficeSection.jsx
import { useState, useEffect } from 'react'

export default function SingleOfficeSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Adattiamo i valori in base al breakpoint
  const sectionPadding = isMobile ? '2rem 0' : '4rem 0'
  const gapValue = isMobile ? '1rem' : '2rem'
  const titleFontSize = isMobile ? '36px' : '58px'
  const titleLineHeight = isMobile ? '42px' : '65px'
  const boxPadding = isMobile ? '1.5rem' : '2rem'
  const boxTitleFontSize = isMobile ? '28px' : '36px'
  const boxTitleLineHeight = isMobile ? '35px' : '45px'
  const descriptionFontSize = isMobile ? '16px' : '18px'
  const descriptionLineHeight = isMobile ? '24px' : '28px'
  const infoLabelFontSize = isMobile ? '14px' : '16px'
  const infoValueFontSize = isMobile ? '16px' : '18px'

  return (
    <section style={{ backgroundColor: '#f8f9fb', padding: sectionPadding }}>
      <div
        style={{
          maxWidth: '1340px',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: gapValue
        }}
      >
        {/* Colonna sinistra: Titolo */}
        <div style={{ flex: isMobile ? '1 1 100%' : '1 1 400px', minWidth: '300px' }}>
          <p
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 600,
              fontSize: infoLabelFontSize,
              lineHeight: '20px',
              color: '#666',
              margin: '0 0 0.5rem'
            }}
          >
            OUR OFFICES
          </p>
          <h2
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 500,
              fontSize: titleFontSize,
              lineHeight: titleLineHeight,
              margin: 0
            }}
          >
            Visit our offices around <br />
            the <span style={{ color: '#0072F5' }}>globe</span>
          </h2>
        </div>

        {/* Colonna destra: Box con informazioni */}
        <div style={{ flex: isMobile ? '1 1 100%' : '2', minWidth: '300px' }}>
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '1rem',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              padding: boxPadding,
              position: 'relative'
            }}
          >
            {/* Titolo box */}
            <h3
              style={{
                fontFamily: 'Thicccboi, sans-serif',
                fontWeight: 500,
                fontSize: boxTitleFontSize,
                lineHeight: boxTitleLineHeight,
                margin: '0 0 0.5rem'
              }}
            >
              Hollywood Hills
            </h3>
            {/* Descrizione */}
            <p
              style={{
                fontFamily: 'Thicccboi, sans-serif',
                fontWeight: 400,
                fontSize: descriptionFontSize,
                lineHeight: descriptionLineHeight,
                color: '#555',
                margin: '0 0 1rem'
              }}
            >
              Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor 
              condimentum lacinia quis vel eros laoreet id donec ultricies tincidunt arcu.
            </p>
            {/* Divider */}
            <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: isMobile ? '0.5rem 0' : '1rem 0' }} />

            {/* Email / phone */}
            <div style={{ display: 'flex', gap: gapValue, marginBottom: isMobile ? '0.5rem' : '1rem' }}>
              {/* Email */}
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontFamily: 'Thicccboi, sans-serif',
                    fontWeight: 400,
                    fontSize: infoLabelFontSize,
                    color: '#666',
                    margin: 0
                  }}
                >
                  Email address
                </p>
                <p
                  style={{
                    fontFamily: 'Thicccboi, sans-serif',
                    fontWeight: 400,
                    fontSize: infoValueFontSize,
                    margin: 0
                  }}
                >
                  hollywood@builders.com
                </p>
              </div>
              {/* Phone */}
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontFamily: 'Thicccboi, sans-serif',
                    fontWeight: 400,
                    fontSize: infoLabelFontSize,
                    color: '#666',
                    margin: 0
                  }}
                >
                  Phone Number
                </p>
                <p
                  style={{
                    fontFamily: 'Thicccboi, sans-serif',
                    fontWeight: 400,
                    fontSize: infoValueFontSize,
                    margin: 0
                  }}
                >
                  (212) 760 - 892
                </p>
              </div>
            </div>
            {/* Address */}
            <div>
              <p
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 400,
                  fontSize: infoLabelFontSize,
                  color: '#666',
                  margin: 0
                }}
              >
                Address
              </p>
              <p
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 400,
                  fontSize: infoValueFontSize,
                  margin: 0
                }}
              >
                Av 23, St 44 - Hollywood Hills
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

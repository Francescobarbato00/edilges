// src/components/TrustedBy.jsx
import { useState, useEffect } from 'react'

export default function TrustedBy() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const containerStyle = {
    maxWidth: '1340px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: isMobile ? 'center' : 'flex-start',
    gap: '1rem'
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
    gap: '2rem',
    maxWidth: isMobile ? '100%' : '900px',
    marginLeft: isMobile ? '0' : '2rem',
    marginTop: isMobile ? '2rem' : '0',
    justifyItems: 'center'
  }

  return (
    <section style={{ backgroundColor: '#f8f9fb', padding: '4rem 0' }}>
      <div style={containerStyle}>
        {/* Colonna sinistra: "TRUSTED BY" */}
        <div style={{ flex: '0 0 auto' }}>
          <p
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '20px',
              color: '#666',
              margin: 0,
              textAlign: isMobile ? 'center' : 'left'
            }}
          >
            TRUSTED BY
          </p>
        </div>

        {/* Colonna destra: griglia di logo card */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: isMobile ? 'center' : 'flex-end'
          }}
        >
          <div style={gridStyle}>
            {['Startup', 'Institute', 'Enterprise', 'Company', 'Agency', 'Venture'].map(label => (
              <LogoCard key={label} label={label} isMobile={isMobile} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function LogoCard({ label, isMobile }) {
  const baseStyle = {
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: isMobile ? '1.5rem 1rem' : '2rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    transition: 'box-shadow 0.3s, transform 0.3s',
    cursor: 'pointer',
    minWidth: isMobile ? '140px' : '180px',
    minHeight: isMobile ? '100px' : '120px'
  }

  const iconStyle = {
    width: isMobile ? '28px' : '32px',
    height: isMobile ? '28px' : '32px',
    marginBottom: isMobile ? '0.5rem' : '0.75rem',
    backgroundColor: '#e2e2e2',
    borderRadius: '6px'
  }

  const labelStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 500,
    fontSize: isMobile ? '16px' : '18px',
    lineHeight: isMobile ? '20px' : '24px',
    color: '#333',
    textAlign: 'center'
  }

  return (
    <div
      style={baseStyle}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 8px 15px rgba(0,0,0,0.1)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div style={iconStyle} />
      <span style={labelStyle}>{label}</span>
    </div>
  )
}

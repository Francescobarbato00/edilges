// src/components/MissionSection.jsx
import { useState, useEffect } from 'react'

export default function MissionSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Stili adattabili in base al breakpoint
  const sectionStyle = {
    backgroundColor: '#f8f9fb',
    padding: isMobile ? '2rem 0' : '4rem 0'
  }

  const containerStyle = {
    maxWidth: '1340px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    flexWrap: 'wrap',
    gap: isMobile ? '1rem' : '2rem'
  }

  // Su mobile, le colonne vengono impilate
  const leftColumnStyle = {
    flex: isMobile ? '1 1 100%' : '1',
    minWidth: isMobile ? '100%' : '200px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: isMobile ? 'center' : 'flex-start'
  }

  const rightColumnStyle = {
    flex: isMobile ? '1 1 100%' : '2',
    minWidth: isMobile ? '100%' : '300px'
  }

  const missionLabelStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 600,
    fontSize: isMobile ? '14px' : '16px',
    lineHeight: '20px',
    color: '#666',
    margin: 0
  }

  const titleStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 500,
    fontSize: isMobile ? '36px' : '58px',
    lineHeight: isMobile ? '42px' : '65px',
    margin: isMobile ? '0 0 0.75rem' : '0 0 1rem'
  }

  const paragraphStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 400,
    fontSize: isMobile ? '18px' : '22px',
    lineHeight: isMobile ? '27px' : '33px',
    color: '#555',
    margin: isMobile ? '0 0 1.5rem' : '0 0 2rem'
  }

  const buttonStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 500,
    fontSize: isMobile ? '16px' : '18px',
    lineHeight: '24px',
    padding: isMobile ? '0.65rem 1.25rem' : '0.75rem 1.5rem',
    borderRadius: '9999px',
    border: 'none',
    backgroundColor: '#0072F5',
    color: '#fff',
    cursor: 'pointer'
  }

  const circleButtonStyle = {
    width: isMobile ? '40px' : '48px',
    height: isMobile ? '40px' : '48px',
    borderRadius: '9999px',
    border: 'none',
    backgroundColor: '#0072F5',
    color: '#fff',
    fontSize: isMobile ? '16px' : '18px',
    cursor: 'pointer'
  }

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* Colonna sinistra: Label "OUR MISSION" */}
        <div style={leftColumnStyle}>
          <p style={missionLabelStyle}>OUR MISSION</p>
        </div>

        {/* Colonna destra: Titolo, paragrafo e bottoni */}
        <div style={rightColumnStyle}>
          <h2 style={titleStyle}>
            Our mission is to deliver <br />
            high quality <span style={{ color: '#0072F5' }}>work</span>
          </h2>
          <p style={paragraphStyle}>
            Ante mauris tristique fusce etiam sed a gravida fermentum velit bibendum
            scelerisque fames quam eu in in molestie at vel id interdum duis eu et
            pharetra mattis magna dui in sagittis eget congue praesent malesuada
            ante ullamcorper porttitor.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button style={buttonStyle}>Get a free quote</button>
            <button style={circleButtonStyle}>↗</button>
          </div>
        </div>
      </div>
    </section>
  )
}

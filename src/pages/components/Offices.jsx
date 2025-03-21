// src/components/Offices.jsx
import { useState, useEffect } from 'react'

export default function Offices() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Stili generali della sezione
  const sectionStyle = {
    backgroundColor: '#f8f9fb',
    padding: isMobile ? '2rem 0' : '4rem 0'
  }

  const containerStyle = {
    maxWidth: '1340px',
    margin: '0 auto',
    padding: '0 1rem'
  }

  const imageContainerStyle = {
    position: 'relative',
    borderRadius: '1.5rem',
    overflow: 'hidden'
  }

  // Overlay: su desktop viene posizionato lateralmente, su mobile centrato in basso
  const overlayStyleDesktop = {
    position: 'absolute',
    top: '50%',
    left: '5%',
    width: '45%',
    transform: 'translateY(-50%)',
    backgroundColor: '#fff',
    borderRadius: '1.5rem',
    padding: '3rem',
    boxSizing: 'border-box',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  }

  const overlayStyleMobile = {
    position: 'absolute',
    bottom: '1rem',
    left: '50%',
    width: '90%',
    transform: 'translateX(-50%)',
    backgroundColor: '#fff',
    borderRadius: '1.5rem',
    padding: '1.5rem',
    boxSizing: 'border-box',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  }

  const overlayStyle = isMobile ? overlayStyleMobile : overlayStyleDesktop

  // Tipografia e spaziature adattate
  const headerTextStyle = {
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
    margin: isMobile ? '0 0 1rem' : '0 0 1.5rem'
  }

  const officeNameStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 500,
    fontSize: isMobile ? '24px' : '32px',
    margin: '0 0 0.5rem'
  }

  const descriptionStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 400,
    fontSize: isMobile ? '16px' : '22px',
    lineHeight: isMobile ? '24px' : '33px',
    margin: isMobile ? '0 0 1rem' : '0 0 1.5rem',
    color: '#555'
  }

  const emailStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 400,
    fontSize: isMobile ? '14px' : '18px',
    margin: isMobile ? '0 0 1.5rem' : '0 0 2rem',
    color: '#0072F5'
  }

  const buttonStyle = {
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
        <div style={imageContainerStyle}>
          {/* Immagine di sfondo */}
          <img
            src="/prova.jpg"
            alt="Office background"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block'
            }}
          />
          {/* Overlay con informazioni */}
          <div style={overlayStyle}>
            <p style={headerTextStyle}>OUR OFFICES</p>
            <h2 style={titleStyle}>
              Visit our <span style={{ color: '#0072F5' }}>offices</span> <br />
              around the globe
            </h2>
            <h3 style={officeNameStyle}>Los Angeles, CA</h3>
            <p style={descriptionStyle}>
              Sit odio fames sed donec fermentum libero aliquam montes vulputate volutpat ac odio.
            </p>
            <p style={emailStyle}>losangeles@builders.com</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button style={buttonStyle}>→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

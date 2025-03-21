// src/components/Mission.jsx
import { useState, useEffect } from 'react'

export default function Mission() {
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

  // Altezza del contenitore immagine: maggiore su desktop, ridotta su mobile
  const imageContainerStyle = {
    position: 'relative',
    borderRadius: '1.5rem',
    overflow: 'hidden',
    height: isMobile ? '300px' : '500px'
  }

  // Stile per l'immagine: copre interamente il contenitore
  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  }

  // Overlay in desktop: posizionato in modo assoluto sull'immagine
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

  // Overlay in mobile: posizionato fuori dall'immagine per far vedere anche lo sfondo
  const overlayStyleMobile = {
    backgroundColor: '#fff',
    borderRadius: '1.5rem',
    padding: isSmallMobile ? '1.5rem' : '2rem',
    boxSizing: 'border-box',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    marginTop: '1rem'
  }

  // Stili condivisi per i testi, adattati in base al breakpoint
  const missionLabelStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 600,
    fontSize: isSmallMobile ? '12px' : isMobile ? '14px' : '16px',
    lineHeight: '20px',
    color: '#666',
    margin: '0 0 1rem'
  }

  const headingStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 500,
    fontSize: isMobile ? '32px' : '58px',
    lineHeight: isMobile ? '38px' : '65px',
    margin: '0 0 1.5rem'
  }

  const paragraphStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 400,
    fontSize: isMobile ? '18px' : '22px',
    lineHeight: isMobile ? '27px' : '33px',
    margin: '0 0 2rem',
    color: '#555'
  }

  const linkStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#171717',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.25rem'
  }

  // Funzione che restituisce il contenuto dell'overlay
  const OverlayContent = () => (
    <>
      <p style={missionLabelStyle}>OUR MISSION</p>
      <h2 style={headingStyle}>
        Our <span style={{ color: '#0072F5' }}>mission</span> is to deliver <br />
        high quality work
      </h2>
      <p style={paragraphStyle}>
        Faucibus phasellus malesuada leo faucibus ante mauris sed dui tortor quisque dolor mi sagittis
        pellentesque eget semper ultrices sit semper pulvinar dolor pellentesque fringilla duis.
      </p>
      <a href="#" style={linkStyle}>
        Learn more →
      </a>
    </>
  )

  return (
    <section style={{ backgroundColor: '#f8f9fb', padding: '4rem 0' }}>
      <div style={{ maxWidth: '1340px', margin: '0 auto', padding: '0 1rem' }}>
        {/* Contenitore immagine */}
        <div style={imageContainerStyle}>
          <img src="/mission.jpg" alt="Worker building a wall" style={imageStyle} />
          {/* Su desktop l'overlay è posizionato sopra l'immagine */}
          { !isMobile && (
            <div style={overlayStyleDesktop}>
              <OverlayContent />
            </div>
          )}
        </div>
        {/* Su mobile l'overlay viene mostrato fuori dal contenitore dell'immagine */}
        { isMobile && (
          <div style={overlayStyleMobile}>
            <OverlayContent />
          </div>
        )}
      </div>
    </section>
  )
}

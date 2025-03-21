// src/components/Footer.jsx
import { useState, useEffect } from 'react'

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Stili per la parte superiore del footer
  const topFooterStyle = {
    maxWidth: '1340px',
    margin: '0 auto',
    padding: isMobile ? '1.5rem 1rem' : '2rem 1rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: isMobile ? 'center' : 'space-between',
    gap: isMobile ? '1rem' : '2rem'
  }

  // Stili per i link (usati nelle liste MENU e SERVIZI)
  const linkStyle = {
    color: '#666',
    textDecoration: 'none',
    fontSize: isMobile ? '0.8rem' : '0.9rem'
  }

  // Stili per la colonna centrale e destra (MENU e SERVIZI)
  const colStyle = {
    flex: '1 1 150px',
    minWidth: '150px'
  }

  // Stile per il logo e descrizione a sinistra
  const leftColStyle = {
    flex: '1 1 300px',
    minWidth: '280px',
    textAlign: isMobile ? 'center' : 'left'
  }

  // Stile per il placeholder del logo
  const logoPlaceholderStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1rem'
  }

  const logoIconStyle = {
    width: '40px',
    height: '40px',
    border: '2px solid #0072F5',
    backgroundColor: 'transparent',
    clipPath: 'polygon(0 100%, 0 0, 50% 0, 50% 30%, 100% 30%, 100% 100%)'
  }

  const logoTextStyle = {
    margin: 0,
    fontSize: '1rem'
  }

  const logoSubTextStyle = {
    margin: 0,
    fontSize: '0.9rem',
    color: '#666'
  }

  // Stile per la descrizione
  const descriptionStyle = {
    fontSize: isMobile ? '0.8rem' : '0.9rem',
    lineHeight: '1.5',
    color: '#555'
  }

  // Stile per il gruppo social
  const socialGroupStyle = {
    marginTop: '1rem',
    display: 'flex',
    gap: '1rem',
    justifyContent: isMobile ? 'center' : 'flex-start'
  }

  const socialIconStyle = {
    width: '36px',
    height: '36px',
    borderRadius: '9999px',
    backgroundColor: '#0072F5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  }

  // Stili per la parte inferiore del footer (linea e copyright)
  const bottomFooterStyle = {
    maxWidth: '1340px',
    margin: '0 auto',
    padding: '1rem 1rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#666',
    fontSize: isMobile ? '0.7rem' : '0.8rem',
    textAlign: isMobile ? 'center' : 'left'
  }

  return (
    <footer style={{ backgroundColor: '#fff', color: '#333', marginTop: '4rem' }}>
      {/* Parte superiore */}
      <div style={topFooterStyle}>
        {/* Colonna sinistra: Logo, descrizione e social */}
        <div style={leftColStyle}>
          <div style={logoPlaceholderStyle}>
            <div style={logoIconStyle} />
            <div>
              <h2 style={logoTextStyle}>EDILGES</h2>
              <p style={logoSubTextStyle}>DITTA EDILE</p>
            </div>
          </div>
          <p style={descriptionStyle}>
            Impresa edile specializzata nella manutenzione ordinaria e straordinaria, nella ristrutturazione, nel consolidamento, nel recupero e nel restauro conservativo.
          </p>
          <div style={socialGroupStyle}>
            {/* Icona Facebook */}
            <div style={socialIconStyle}>
              <span style={{ color: '#fff', fontSize: '1.2rem' }}>f</span>
            </div>
            {/* Icona Instagram */}
            <div style={socialIconStyle}>
              <span style={{ color: '#fff', fontSize: '1.2rem' }}>i</span>
            </div>
            {/* Icona LinkedIn */}
            <div style={socialIconStyle}>
              <span style={{ color: '#fff', fontSize: '1.2rem' }}>in</span>
            </div>
          </div>
        </div>

        {/* Colonna centrale: MENU */}
        <div style={colStyle}>
          <h3 style={{ fontSize: isMobile ? '0.8rem' : '0.9rem', color: '#0072F5', marginBottom: '1rem' }}>
            MENU
          </h3>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, lineHeight: '1.8' }}>
            <li>
              <a href="#" style={linkStyle}>Chi siamo</a>
            </li>
            <li>
              <a href="#" style={linkStyle}>Servizi</a>
            </li>
            <li>
              <a href="#" style={linkStyle}>Lavori</a>
            </li>
            <li>
              <a href="#" style={linkStyle}>Contattaci</a>
            </li>
            <li>
              <a href="#" style={linkStyle}>Lavora con noi</a>
            </li>
          </ul>
        </div>

        {/* Colonna destra: SERVIZI */}
        <div style={colStyle}>
          <h3 style={{ fontSize: isMobile ? '0.8rem' : '0.9rem', color: '#0072F5', marginBottom: '1rem' }}>
            SERVIZI
          </h3>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, lineHeight: '1.8' }}>
            <li>
              <a href="#" style={linkStyle}>Ristrutturazione</a>
            </li>
            <li>
              <a href="#" style={linkStyle}>Restauro</a>
            </li>
            <li>
              <a href="#" style={linkStyle}>Manutenzione</a>
            </li>
            <li>
              <a href="#" style={linkStyle}>Riqualificazioni</a>
            </li>
            <li>
              <a href="#" style={linkStyle}>Rifacimento tetti</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Riga divisoria */}
      <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: 0 }} />

      {/* Parte inferiore */}
      <div style={bottomFooterStyle}>
        <div>P. IVA 1234567890 – C.F. 123456789</div>
        <div>© 2025 Edil Company. Tutti i diritti riservati.</div>
      </div>
    </footer>
  )
}

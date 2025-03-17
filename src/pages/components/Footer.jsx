// src/components/Footer.jsx

export default function Footer() {
    return (
      <footer style={{ backgroundColor: '#fff', color: '#333', marginTop: '4rem' }}>
        {/* Parte superiore del footer */}
        <div
          style={{
            maxWidth: '1340px',
            margin: '0 auto',
            padding: '2rem 1rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '2rem'
          }}
        >
          {/* Colonna sinistra: logo, descrizione, social */}
          <div style={{ flex: '1 1 300px', minWidth: '280px' }}>
            {/* Logo + testo "EDILGES DITTA EDILE" (placeholder) */}
            <div style={{ marginBottom: '1rem' }}>
              {/* Icona segnaposto simile a un edificio */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    border: '2px solid #0072F5',   // Cornice blu
                    backgroundColor: 'transparent',
                    clipPath:
                      'polygon(0 100%, 0 0, 50% 0, 50% 30%, 100% 30%, 100% 100%)'
                  }}
                />
                <div>
                  <h2 style={{ margin: 0, fontSize: '1rem' }}>EDILGES</h2>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>DITTA EDILE</p>
                </div>
              </div>
            </div>
  
            {/* Descrizione */}
            <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: '#555' }}>
              Impresa edile specializzata nella manutenzione ordinaria e straordinaria, 
              nella ristrutturazione, nel consolidamento, nel recupero e nel restauro conservativo.
            </p>
  
            {/* Social */}
            <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
              {/* Icone segnaposto social (fb, ig, in) */}
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '9999px',
                  backgroundColor: '#0072F5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                {/* Placeholder icona FB */}
                <span style={{ color: '#fff', fontSize: '1.2rem' }}>f</span>
              </div>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '9999px',
                  backgroundColor: '#0072F5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                {/* Placeholder icona IG */}
                <span style={{ color: '#fff', fontSize: '1.2rem' }}>i</span>
              </div>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '9999px',
                  backgroundColor: '#0072F5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                {/* Placeholder icona LinkedIn */}
                <span style={{ color: '#fff', fontSize: '1.2rem' }}>in</span>
              </div>
            </div>
          </div>
  
          {/* Colonna centrale: MENU */}
          <div style={{ flex: '1 1 150px', minWidth: '150px' }}>
            <h3
              style={{
                fontSize: '0.9rem',
                color: '#0072F5',   // Titolo blu
                marginBottom: '1rem'
              }}
            >
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
          <div style={{ flex: '1 1 150px', minWidth: '150px' }}>
            <h3
              style={{
                fontSize: '0.9rem',
                color: '#0072F5',   // Titolo blu
                marginBottom: '1rem'
              }}
            >
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
  
        {/* Parte inferiore (P.IVA e copyright) */}
        <div
          style={{
            maxWidth: '1340px',
            margin: '0 auto',
            padding: '1rem 1rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#666',
            fontSize: '0.8rem'
          }}
        >
          <div>P. IVA 1234567890 – C.F. 123456789</div>
          <div>© 2025 Edil Company. Tutti i diritti riservati.</div>
        </div>
      </footer>
    )
  }
  
  // Stile per i link nel footer
  const linkStyle = {
    color: '#666',
    textDecoration: 'none',
    fontSize: '0.9rem'
  }
  
// src/components/TrustedBy.jsx

export default function TrustedBy() {
    return (
      <section style={{ backgroundColor: '#f8f9fb', padding: '4rem 0' }}>
        <div
          style={{
            maxWidth: '1340px',
            margin: '0 auto',
            padding: '0 1rem',
            display: 'flex',
            alignItems: 'flex-start'
          }}
        >
          {/* Colonna sinistra: "TRUSTED BY" */}
          <div style={{ flex: '0 0 auto' }}>
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
              TRUSTED BY
            </p>
          </div>
  
          {/* Colonna destra: griglia box più a destra e più grandi */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'flex-end' // sposta la griglia a destra
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)', // 3 colonne
                gap: '2rem',                           // spazio tra i box
                maxWidth: '900px',                     // larghezza massima griglia
                marginLeft: '2rem'                     // spazio fra la scritta e la griglia
              }}
            >
              <LogoCard label="Startup" />
              <LogoCard label="Institute" />
              <LogoCard label="Enterprise" />
              <LogoCard label="Company" />
              <LogoCard label="Agency" />
              <LogoCard label="Venture" />
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  /**
   * Componente singolo per il box: icona + label.
   * Box più grande, con corner arrotondati e ombra leggera.
   */
  function LogoCard({ label }) {
    return (
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '16px',
          minHeight: '120px',
          minWidth: '180px',
          padding: '2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
          transition: 'box-shadow 0.3s, transform 0.3s',
          cursor: 'pointer'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = '0 8px 15px rgba(0,0,0,0.1)'
          e.currentTarget.style.transform = 'translateY(-2px)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        {/* Icona segnaposto più grande */}
        <div
          style={{
            width: '32px',
            height: '32px',
            marginBottom: '0.75rem',
            backgroundColor: '#e2e2e2',
            borderRadius: '6px'
          }}
        />
        {/* Nome del box */}
        <span
          style={{
            fontFamily: 'Thicccboi, sans-serif',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '24px',
            color: '#333',
            textAlign: 'center'
          }}
        >
          {label}
        </span>
      </div>
    )
  }
  
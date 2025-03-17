// src/components/TeamSection.jsx

export default function TeamSection() {
    return (
      <section style={{ backgroundColor: '#f8f9fb', padding: '4rem 0' }}>
        <div
          style={{
            maxWidth: '1340px',
            margin: '0 auto',
            padding: '0 1rem'
          }}
        >
          {/* Sezione con titolo e bottoni */}
          <div style={{ marginBottom: '2rem' }}>
            <p
              style={{
                fontFamily: 'Thicccboi, sans-serif',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '20px',
                color: '#666',
                margin: '0 0 0.5rem'
              }}
            >
              OUR TEAM
            </p>
            <h2
              style={{
                fontFamily: 'Thicccboi, sans-serif',
                fontWeight: 500,
                fontSize: '58px',
                lineHeight: '65px',
                margin: '0 0 1.5rem'
              }}
            >
              The amazing <span style={{ color: '#0072F5' }}>team</span> <br />
              behind Builders
            </h2>
  
            {/* Bottoni */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <button
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '24px',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '9999px',
                  border: 'none',
                  backgroundColor: '#0072F5',
                  color: '#fff',
                  cursor: 'pointer'
                }}
              >
                Join us
              </button>
              <button
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '9999px',
                  border: 'none',
                  backgroundColor: '#0072F5',
                  color: '#fff',
                  fontSize: '18px',
                  cursor: 'pointer'
                }}
              >
                ↗
              </button>
            </div>
          </div>
  
          {/* Sezione card in basso */}
          <div
            style={{
              display: 'flex',
              gap: '2rem',
              flexWrap: 'wrap'
            }}
          >
            {/* Card Edoardo */}
            <TeamCard
              name="Edoardo Zanini"
              role="CEO & Founder"
              imageUrl="/modello.jpg"
            />
            {/* Card Dario */}
            <TeamCard
              name="Dario Zanini"
              role="Lead Project Manager"
              imageUrl="/modello.jpg"
            />
          </div>
        </div>
      </section>
    )
  }
  
  /**
   * Card singola del Team
   * - name: Nome persona (es. "Edoardo Zanini")
   * - role: Ruolo (es. "CEO & Founder")
   * - imageUrl: URL immagine (es. "/edoardo.jpg")
   */
  function TeamCard({ name, role, imageUrl }) {
    return (
      <div
        style={{
          width: '350px',        // Card più grande
          borderRadius: '1rem',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          flex: '0 0 auto'
        }}
      >
        {/* Immagine di sfondo */}
        <img
          src={imageUrl}
          alt={name}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block'
          }}
        />
        {/* Overlay graduale */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50%',
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)'
          }}
        />
  
        {/* Testo (ruolo + nome) */}
        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            left: '1rem',
            color: '#fff'
          }}
        >
          <p
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              margin: '0 0 0.25rem'
            }}
          >
            {role}
          </p>
          <h3
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 500,
              fontSize: '18px',
              margin: 0
            }}
          >
            {name}
          </h3>
        </div>
  
        {/* Bottone freccia rotondo */}
        <button
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            width: '36px',
            height: '36px',
            borderRadius: '9999px',
            border: 'none',
            backgroundColor: '#0072F5',
            color: '#fff',
            fontSize: '16px',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
          }}
        >
          →
        </button>
      </div>
    )
  }
  
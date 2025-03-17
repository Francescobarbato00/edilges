// src/components/Mission.jsx

export default function Mission() {
    return (
      <section style={{ backgroundColor: '#f8f9fb', padding: '4rem 0' }}>
        <div
          style={{
            maxWidth: '1340px',
            margin: '0 auto',
            padding: '0 1rem'
          }}
        >
          {/* Contenitore principale con borderRadius e overflow nascosto */}
          <div
            style={{
              position: 'relative',
              borderRadius: '1.5rem',
              overflow: 'hidden'
            }}
          >
            {/* Immagine di sfondo (riempie tutto il contenitore) */}
            <img
              src="/mission.jpg" // Sostituisci con il tuo path o URL
              alt="Worker building a wall"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
  
            {/* Box bianco compatto, spostato verso destra */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '5%',               // Offset da sinistra per spostarlo a destra
                width: '45%',             // Larghezza del box (modificabile a piacere)
                transform: 'translateY(-50%)',
                backgroundColor: '#fff',
                borderRadius: '1.5rem',
                padding: '3rem',
                boxSizing: 'border-box',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
              }}
            >
              {/* OUR MISSION */}
              <p
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '20px',
                  margin: '0 0 1rem',
                  color: '#666'
                }}
              >
                OUR MISSION
              </p>
  
              {/* Titolo principale */}
              <h2
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 500,
                  fontSize: '58px',
                  lineHeight: '65px',
                  margin: '0 0 1.5rem'
                }}
              >
                Our <span style={{ color: '#0072F5' }}>mission</span> is to deliver <br />
                high quality work
              </h2>
  
              {/* Testo descrittivo */}
              <p
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 400,
                  fontSize: '22px',
                  lineHeight: '33px',
                  margin: '0 0 2rem',
                  color: '#555'
                }}
              >
                Faucibus phasellus malesuada leo faucibus ante mauris sed dui tortor 
                quisque dolor mi sagittis pellentesque eget semper ultrices sit semper 
                pulvinar dolor pellentesque fringilla duis.
              </p>
  
              {/* Link "Learn more ->" */}
              <a
                href="#"
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#171717',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem'
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
  
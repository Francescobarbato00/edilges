// src/components/SingleOfficeSection.jsx

export default function SingleOfficeSection() {
    return (
      <section style={{ backgroundColor: '#f8f9fb', padding: '4rem 0' }}>
        <div
          style={{
            maxWidth: '1340px',
            margin: '0 auto',
            padding: '0 1rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem'
          }}
        >
          {/* Colonna sinistra: Titolo */}
          <div style={{ flex: '1 1 400px', minWidth: '300px' }}>
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
              OUR OFFICES
            </p>
            <h2
              style={{
                fontFamily: 'Thicccboi, sans-serif',
                fontWeight: 500,
                fontSize: '58px', // "Visit our offices around the globe"
                lineHeight: '65px',
                margin: 0
              }}
            >
              Visit our offices around <br />
              the <span style={{ color: '#0072F5' }}>globe</span>
            </h2>
          </div>
  
          {/* Colonna destra: Singolo box */}
          <div style={{ flex: '2', minWidth: '300px' }}>
            <div
              style={{
                backgroundColor: '#fff',
                borderRadius: '1rem',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                padding: '2rem',
                position: 'relative'
              }}
            >
              {/* Titolo box */}
              <h3
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 500,
                  fontSize: '36px',
                  lineHeight: '45px',
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
                  fontSize: '18px',
                  lineHeight: '28px',
                  color: '#555',
                  margin: '0 0 1rem'
                }}
              >
                Ornare arcu dui vivamus arcu felis bibendum ut tristique et tortor 
                condimentum lacinia quis vel eros laoreet id donec ultricies tincidunt arcu.
              </p>
              {/* Divider */}
              <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '1rem 0' }} />
  
              {/* Email / phone / address */}
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                {/* Email */}
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontFamily: 'Thicccboi, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
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
                      fontSize: '18px',
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
                      fontSize: '16px',
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
                      fontSize: '18px',
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
                    fontSize: '16px',
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
                    fontSize: '18px',
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
  
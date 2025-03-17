// src/components/Testimonials.jsx

export default function Testimonials() {
    return (
      <section style={{ backgroundColor: '#f8f9fb', padding: '4rem 0' }}>
        <div
          style={{
            maxWidth: '1340px',
            margin: '0 auto',
            padding: '0 1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}
        >
          {/* Header: "TESTIMONIALS" e "What our clients say about us", + bottone a destra */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            {/* Colonna sinistra: Titolo */}
            <div style={{ flex: '1 1 500px', minWidth: '300px' }}>
              <p
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '20px',
                  margin: '0 0 0.5rem',
                  color: '#666'
                }}
              >
                TESTIMONIALS
              </p>
              <h2
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 500,
                  fontSize: '58px',
                  lineHeight: '65px',
                  margin: 0
                }}
              >
                What our <span style={{ color: '#0072F5' }}>clients</span> say 
                <br /> about us
              </h2>
            </div>
  
            {/* Colonna destra: Bottone */}
            <div style={{ flex: '0 0 auto' }}>
              <button
                style={{
                  fontFamily: 'Thicccboi, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '24px',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '9999px',
                  border: 'none',
                  backgroundColor: '#0072F5',
                  color: '#fff',
                  cursor: 'pointer'
                }}
              >
                Get a free quote →
              </button>
            </div>
          </div>
  
          {/* Container card testimonial */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)', // 4 card per riga
              gap: '1.5rem',
              // Se vuoi che le card si adattino meglio su schermi stretti, puoi usare gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
            }}
          >
            <TestimonialCard
              text="Nunc vehicula odio neque, eget cursus magna bibendum at. Maecenas vitae felis ante."
              name="Andy Smith"
              location="Los Angeles, CA"
            />
            <TestimonialCard
              text="Ut sagittis at odio aliquam tempus odio tellus at ornare nisi quis pulvinar urna."
              name="Hannah Baker"
              location="Los Angeles, CA"
            />
            <TestimonialCard
              text="Sed tortor feugiat vulputate nibh amet pharetra quam in a in suspendisse laoreet convallis."
              name="Liam Spencer"
              location="New York, NY"
            />
            <TestimonialCard
              text="Aliquet cursus aliquam enim tellus mattis molestie ut enim fermentum nunc tellus."
              name="Sophie Moore"
              location="San Francisco, CA"
            />
          </div>
        </div>
      </section>
    )
  }
  
  /**
   * Componente singolo per una card testimonial.
   * - text: testo della recensione
   * - name: nome dell'autore
   * - location: città / stato
   */
  function TestimonialCard({ text, name, location }) {
    return (
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '1rem',
          padding: '2rem',
          boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '1rem'
        }}
      >
        {/* Testo */}
        <p
          style={{
            fontFamily: 'Thicccboi, sans-serif',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '28px',
            margin: 0,
            color: '#333'
          }}
        >
          {text}
        </p>
  
        {/* Nome e location */}
        <div>
          <h4
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 500,
              fontSize: '18px',
              lineHeight: '28px',
              margin: '0 0 0.25rem'
            }}
          >
            {name}
          </h4>
          <p
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              margin: 0,
              color: '#666'
            }}
          >
            {location}
          </p>
        </div>
      </div>
    )
  }
  
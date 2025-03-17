// src/components/ValuesSection.jsx
import Image from 'next/image'

export default function ValuesSection() {
  return (
    <section style={{ backgroundColor: '#f8f9fb', padding: '4rem 0' }}>
      <div
        style={{
          maxWidth: '1340px',
          margin: '0 auto',
          padding: '0 1rem'
        }}
      >
        {/* Header della sezione */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            marginBottom: '2rem'
          }}
        >
          {/* "OUR VALUES" a sinistra */}
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
            OUR VALUES
          </p>
          {/* Titolo grande su due righe */}
          <h2
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 500,
              fontSize: '58px',
              lineHeight: '65px',
              margin: 0
            }}
          >
            The values that drive <br />
            <span style={{ color: '#0072F5' }}>everything</span> we do
          </h2>
        </div>

        {/* Griglia di 6 card: 3 per riga, 2 righe */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            marginBottom: '2rem'
          }}
        >
          {/* Card 1: Quality */}
          <ValueCard
            icon="/1.svg"
            title="Quality"
            text="Quam mi lectus dolor viverra. In et turpis nisl non tellus nec."
          />
          {/* Card 2: Commitment */}
          <ValueCard
            icon="/2.svg"
            title="Commitment"
            text="Ipsum lorem augue ultricies amet adipiscing nec sit."
          />
          {/* Card 3: Innovation */}
          <ValueCard
            icon="/3.svg"
            title="Innovation"
            text="Et ultrices in pulvinar viverra ut velit. Cursus enim ut."
          />

          {/* Card 4: Openness */}
          <ValueCard
            icon="/4.svg"
            title="Openness"
            text="Ac in enim pretium vestibulum in at eu sem lectus. Egestas."
          />
          {/* Card 5: Growth */}
          <ValueCard
            icon="/5.svg"
            title="Growth"
            text="Quam mi lectus dolor viverra. In et turpis nisl non tellus nec."
          />
          {/* Card 6: Leadership */}
          <ValueCard
            icon="/6.svg"
            title="Leadership"
            text="Tellus convallis pellentesque a id sapien mollis. Faucibus."
          />
        </div>

        {/* Link "Contact us →" in basso a destra */}
        <div style={{ textAlign: 'right' }}>
          <a
            href="#"
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '30px',
              color: '#0072F5',
              textDecoration: 'none'
            }}
          >
            Contact us →
          </a>
        </div>
      </div>
    </section>
  )
}

/**
 * Singolo "card" con icona (SVG) + titolo + testo
 * - icon: path dell'SVG (es. "/1.svg")
 * - title: titolo (48px)
 * - text: testo (22px)
 */
function ValueCard({ icon, title, text }) {
  return (
    <div
      style={{
        backgroundColor: 'transparent',
        borderRadius: '0.5rem',
        padding: '1rem 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        borderBottom: '1px solid #e0e0e0' // Sottile linea in basso
      }}
    >
      {/* Icona SVG */}
      <div style={{ width: '48px', height: '48px', position: 'relative' }}>
        <Image
          src={icon}
          alt={`${title} icon`}
          layout="fill"
          objectFit="contain"
        />
      </div>
      {/* Titolo (48px) */}
      <h3
        style={{
          fontFamily: 'Thicccboi, sans-serif',
          fontWeight: 500,
          fontSize: '48px',
          lineHeight: '60px',
          margin: 0,
          color: '#111'
        }}
      >
        {title}
      </h3>
      {/* Testo (22px) */}
      <p
        style={{
          fontFamily: 'Thicccboi, sans-serif',
          fontWeight: 500,
          fontSize: '22px',
          lineHeight: '33px',
          margin: 0,
          color: '#555'
        }}
      >
        {text}
      </p>
    </div>
  )
}

// src/components/ServicesGrid.jsx
import Image from 'next/image'

export default function ServicesGrid() {
  // Dati per le 6 card
  const services = [
    {
      icon: '/1.svg',
      title: 'Remodel construction',
      description:
        'Venenatis sollicitudin posuere elit consequat et enim neque tortor amet dictum tempor leo facilisis aliquet viverra scelerisque eleifend viverra.'
    },
    {
      icon: '/2.svg',
      title: 'General contracting',
      description:
        'Venenatis sollicitudin posuere elit consequat et enim neque tortor amet dictum tempor leo facilisis aliquet viverra scelerisque eleifend viverra.'
    },
    {
      icon: '/3.svg',
      title: 'Project planning',
      description:
        'Venenatis sollicitudin posuere elit consequat et enim neque tortor amet dictum tempor leo facilisis aliquet viverra scelerisque eleifend viverra.'
    },
    {
      icon: '/4.svg',
      title: 'Space planning',
      description:
        'Venenatis sollicitudin posuere elit consequat et enim neque tortor amet dictum tempor leo facilisis aliquet viverra scelerisque eleifend viverra.'
    },
    {
      icon: '/5.svg',
      title: 'Exterior design',
      description:
        'Venenatis sollicitudin posuere elit consequat et enim neque tortor amet dictum tempor leo facilisis aliquet viverra scelerisque eleifend viverra.'
    },
    {
      icon: '/6.svg',
      title: 'Decoration paints',
      description:
        'Venenatis sollicitudin posuere elit consequat et enim neque tortor amet dictum tempor leo facilisis aliquet viverra scelerisque eleifend viverra.'
    }
  ]

  return (
    <section style={{ backgroundColor: '#f8f9fb', padding: '4rem 0' }}>
      <div
        style={{
          maxWidth: '1340px',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem'
        }}
      >
        {services.map((item, idx) => (
          <ServiceCard
            key={idx}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}

/**
 * Singola card con:
 * - icona (SVG)
 * - titolo
 * - testo descrittivo
 * - link "Learn more →"
 */
function ServiceCard({ icon, title, description }) {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: '1rem',
        boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '1rem'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* Icona (2rem x 2rem) */}
        <div style={{ width: '40px', height: '40px', position: 'relative' }}>
          <Image src={icon} alt={title} layout="fill" objectFit="contain" />
        </div>

        {/* Titolo */}
        <h3
          style={{
            fontFamily: 'Thicccboi, sans-serif',
            fontWeight: 500,
            fontSize: '24px',
            lineHeight: '30px',
            margin: 0
          }}
        >
          {title}
        </h3>

        {/* Testo descrittivo */}
        <p
          style={{
            fontFamily: 'Thicccboi, sans-serif',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '28px',
            color: '#555',
            margin: 0
          }}
        >
          {description}
        </p>
      </div>

      {/* Link "Learn more →" */}
      <div style={{ textAlign: 'right', marginTop: '1rem' }}>
        <a
          href="#"
          style={{
            fontFamily: 'Thicccboi, sans-serif',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
            color: '#171717',
            textDecoration: 'none'
          }}
        >
          Learn more →
        </a>
      </div>
    </div>
  )
}

// src/components/SocialMediaSection.jsx
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn, FaPinterestP } from 'react-icons/fa'

export default function SocialMediaSection() {
  // Esempio di dati social
  const socialCards = [
    {
      icon: <FaInstagram />,
      name: 'Instagram',
      description: 'Et ultrices in pulvinar viverra viverra ut velit. Cursus enim ut.'
    },
    {
      icon: <FaTwitter />,
      name: 'Twitter',
      description: 'Ipsum lorem augue ultricies amet adipiscing nec sit.'
    },
    {
      icon: <FaFacebookF />,
      name: 'Facebook',
      description: 'Urna maecenas tellus pharetra ullamcorper sem sapien amet.'
    },
    {
      icon: <FaYoutube />,
      name: 'Youtube',
      description: 'Tellus convallis pellentesque a id sapien mollis. Faucibus.'
    },
    {
      icon: <FaLinkedinIn />,
      name: 'LinkedIn',
      description: 'Quam mi lectus dolor viverra. In et turpis nisl non tellus nec.'
    },
    {
      icon: <FaPinterestP />,
      name: 'Pinterest',
      description: 'Sed vulputate tellus hendrerit urna ultricies tristique.'
    }
  ]

  return (
    <section style={{ backgroundColor: '#f8f9fb', padding: '4rem 0' }}>
      <div
        style={{
          maxWidth: '1340px',
          margin: '0 auto',
          padding: '0 1rem'
        }}
      >
        {/* Header sezione: Titolo a sinistra, link "About us" a destra */}
        <div style={{ position: 'relative', marginBottom: '2rem' }}>
          {/* "FOLLOW US" in alto a sinistra */}
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
            FOLLOW US
          </p>
          {/* Titolo grande */}
          <h2
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 500,
              fontSize: '58px', // "Follow our work on social media"
              lineHeight: '65px',
              margin: 0
            }}
          >
            Follow our work on <br />
            <span style={{ color: '#0072F5' }}>social</span> media
          </h2>

          {/* Link "About us →" in alto a destra */}
          <a
            href="#"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              textDecoration: 'none',
              color: '#171717'
            }}
          >
            About us →
          </a>
        </div>

        {/* Griglia di 6 card (3 colonne x 2 righe, per esempio) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem'
          }}
        >
          {socialCards.map((item, idx) => (
            <SocialCard
              key={idx}
              icon={item.icon}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * SocialCard: singola card con icona blu, titolo (48px), testo (22px)
 */
function SocialCard({ icon, name, description }) {
  return (
    <div
      style={{
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        borderBottom: '1px solid #e0e0e0',
        paddingBottom: '1rem'
      }}
    >
      {/* Icona blu (2rem) */}
      <div style={{ fontSize: '2rem', color: '#0072F5' }}>{icon}</div>

      {/* Titolo (48px) */}
      <h3
        style={{
          fontFamily: 'Thicccboi, sans-serif',
          fontWeight: 500,
          fontSize: '48px',
          lineHeight: '60px',
          margin: '0',
          color: '#111'
        }}
      >
        {name}
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
        {description}
      </p>
    </div>
  )
}

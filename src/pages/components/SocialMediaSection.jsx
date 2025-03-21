// src/components/SocialMediaSection.jsx
import { useState, useEffect } from 'react'
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn, FaPinterestP } from 'react-icons/fa'

export default function SocialMediaSection() {
  const [isMobile, setIsMobile] = useState(false)
  const [isSmallMobile, setIsSmallMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      setIsSmallMobile(width < 480)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Desktop default: padding "4rem 0"
  // Su mobile riduciamo padding, centriamo il testo e modifichiamo la griglia
  const sectionPadding = isMobile ? '2rem 0' : '4rem 0'

  // Header styles: su desktop rimangono invariati
  const headerContainerStyle = {
    position: 'relative',
    marginBottom: isMobile ? '1.5rem' : '2rem',
    textAlign: isMobile ? 'center' : 'left'
  }

  const followUsStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '20px',
    color: '#666',
    margin: '0 0 0.5rem'
  }

  // Titolo: su desktop 58px/65px, su mobile ridotto a 36px/42px
  const titleStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 500,
    fontSize: isMobile ? '36px' : '58px',
    lineHeight: isMobile ? '42px' : '65px',
    margin: 0
  }

  // Link "About us →": su desktop posizionato assolutamente, su mobile normale block
  const aboutLinkStyle = isMobile
    ? {
        display: 'block',
        marginTop: '0.5rem',
        fontFamily: 'Thicccboi, sans-serif',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',
        textDecoration: 'none',
        color: '#171717'
      }
    : {
        position: 'absolute',
        top: 0,
        right: 0,
        fontFamily: 'Thicccboi, sans-serif',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',
        textDecoration: 'none',
        color: '#171717'
      }

  // Griglia: desktop usa 3 colonne; se isMobile vero, 2 colonne; se schermo molto piccolo, 1 colonna
  const gridTemplateColumns = isSmallMobile
    ? '1fr'
    : isMobile
    ? 'repeat(2, 1fr)'
    : 'repeat(3, 1fr)'

  const gridGap = isMobile ? '1rem' : '2rem'

  return (
    <section style={{ backgroundColor: '#f8f9fb', padding: sectionPadding }}>
      <div style={{ maxWidth: '1340px', margin: '0 auto', padding: '0 1rem' }}>
        {/* Header sezione */}
        <div style={headerContainerStyle}>
          <p style={followUsStyle}>FOLLOW US</p>
          <h2 style={titleStyle}>
            Follow our work on <br />
            <span style={{ color: '#0072F5' }}>social</span> media
          </h2>
          <a href="#" style={aboutLinkStyle}>
            About us →
          </a>
        </div>

        {/* Griglia di Social Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: gridTemplateColumns, gap: gridGap }}>
          {socialCards.map((item, idx) => (
            <SocialCard key={idx} icon={item.icon} name={item.name} description={item.description} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </section>
  )
}

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

/**
 * SocialCard: singola card con icona, titolo e descrizione.
 * Le dimensioni desktop restano invariati: Titolo 48px e testo 22px.
 * Se isMobile è true, si riducono proporzionalmente.
 */
function SocialCard({ icon, name, description, isMobile }) {
  const titleFontSize = isMobile ? '32px' : '48px'
  const titleLineHeight = isMobile ? '40px' : '60px'
  const textFontSize = isMobile ? '18px' : '22px'
  const textLineHeight = isMobile ? '26px' : '33px'
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
      {/* Icona blu */}
      <div style={{ fontSize: isMobile ? '1.75rem' : '2rem', color: '#0072F5' }}>{icon}</div>

      {/* Titolo */}
      <h3
        style={{
          fontFamily: 'Thicccboi, sans-serif',
          fontWeight: 500,
          fontSize: titleFontSize,
          lineHeight: titleLineHeight,
          margin: 0,
          color: '#111'
        }}
      >
        {name}
      </h3>

      {/* Testo descrittivo */}
      <p
        style={{
          fontFamily: 'Thicccboi, sans-serif',
          fontWeight: 500,
          fontSize: textFontSize,
          lineHeight: textLineHeight,
          margin: 0,
          color: '#555'
        }}
      >
        {description}
      </p>
    </div>
  )
}

// src/components/ValuesSection.jsx
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function ValuesSection() {
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

  // Adattamento font e spaziature in base al breakpoint
  const headerFontSize = isMobile ? '14px' : '16px'
  const headerMarginBottom = isMobile ? '1rem' : '1.5rem'
  const titleFontSize = isMobile ? '36px' : '58px'
  const titleLineHeight = isMobile ? '42px' : '65px'

  // Per le card dei valori:
  const cardTitleFontSize = isMobile ? '36px' : '48px'
  const cardTitleLineHeight = isMobile ? '44px' : '60px'
  const cardTextFontSize = isMobile ? '18px' : '22px'
  const cardTextLineHeight = isMobile ? '27px' : '33px'
  
  // Griglia: 3 colonne su desktop, 2 su mobile, 1 su schermi molto piccoli
  const gridTemplateColumns = isSmallMobile
    ? '1fr'
    : isMobile
    ? 'repeat(2, 1fr)'
    : 'repeat(3, 1fr)'

  return (
    <section style={{ backgroundColor: '#f8f9fb', padding: isMobile ? '2rem 0' : '4rem 0' }}>
      <div
        style={{
          maxWidth: '1340px',
          margin: '0 auto',
          padding: '0 1rem'
        }}
      >
        {/* Header della sezione */}
        <div style={{ marginBottom: headerMarginBottom }}>
          {/* "OUR VALUES" */}
          <p
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 600,
              fontSize: headerFontSize,
              lineHeight: '20px',
              margin: '0 0 0.5rem',
              color: '#666'
            }}
          >
            OUR VALUES
          </p>
          {/* Titolo grande */}
          <h2
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 500,
              fontSize: titleFontSize,
              lineHeight: titleLineHeight,
              margin: 0
            }}
          >
            The values that drive <br />
            <span style={{ color: '#0072F5' }}>everything</span> we do
          </h2>
        </div>

        {/* Linea divisoria */}
        <hr
          style={{
            border: 'none',
            borderTop: '1px solid #e0e0e0',
            margin: isMobile ? '0 0 1.5rem' : '0 0 2rem'
          }}
        />

        {/* Griglia di card */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: gridTemplateColumns,
            gap: isMobile ? '1rem' : '2rem',
            marginBottom: isMobile ? '1.5rem' : '2rem'
          }}
        >
          {/* Card 1: Quality */}
          <ValueCard
            icon="/1.svg"
            title="Quality"
            text="Quam mi lectus dolor viverra. In et turpis nisl non tellus nec."
            cardTitleFontSize={cardTitleFontSize}
            cardTitleLineHeight={cardTitleLineHeight}
            cardTextFontSize={cardTextFontSize}
            cardTextLineHeight={cardTextLineHeight}
          />
          {/* Card 2: Commitment */}
          <ValueCard
            icon="/2.svg"
            title="Commitment"
            text="Ipsum lorem augue ultricies amet adipiscing nec sit."
            cardTitleFontSize={cardTitleFontSize}
            cardTitleLineHeight={cardTitleLineHeight}
            cardTextFontSize={cardTextFontSize}
            cardTextLineHeight={cardTextLineHeight}
          />
          {/* Card 3: Innovation */}
          <ValueCard
            icon="/3.svg"
            title="Innovation"
            text="Et ultrices in pulvinar viverra ut velit. Cursus enim ut."
            cardTitleFontSize={cardTitleFontSize}
            cardTitleLineHeight={cardTitleLineHeight}
            cardTextFontSize={cardTextFontSize}
            cardTextLineHeight={cardTextLineHeight}
          />
          {/* Card 4: Openness */}
          <ValueCard
            icon="/4.svg"
            title="Openness"
            text="Ac in enim pretium vestibulum in at eu sem lectus. Egestas."
            cardTitleFontSize={cardTitleFontSize}
            cardTitleLineHeight={cardTitleLineHeight}
            cardTextFontSize={cardTextFontSize}
            cardTextLineHeight={cardTextLineHeight}
          />
          {/* Card 5: Growth */}
          <ValueCard
            icon="/5.svg"
            title="Growth"
            text="Quam mi lectus dolor viverra. In et turpis nisl non tellus nec."
            cardTitleFontSize={cardTitleFontSize}
            cardTitleLineHeight={cardTitleLineHeight}
            cardTextFontSize={cardTextFontSize}
            cardTextLineHeight={cardTextLineHeight}
          />
          {/* Card 6: Leadership */}
          <ValueCard
            icon="/6.svg"
            title="Leadership"
            text="Tellus convallis pellentesque a id sapien mollis. Faucibus."
            cardTitleFontSize={cardTitleFontSize}
            cardTitleLineHeight={cardTitleLineHeight}
            cardTextFontSize={cardTextFontSize}
            cardTextLineHeight={cardTextLineHeight}
          />
        </div>

        {/* Link "Contact us →" */}
        <div style={{ textAlign: isMobile ? 'center' : 'right' }}>
          <a
            href="#"
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 600,
              fontSize: isMobile ? '20px' : '24px',
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
 * Card singola con icona (SVG) + titolo + testo
 * Props extra per adattare font e lineHeight in base al breakpoint:
 * - cardTitleFontSize, cardTitleLineHeight, cardTextFontSize, cardTextLineHeight
 */
function ValueCard({ icon, title, text, cardTitleFontSize, cardTitleLineHeight, cardTextFontSize, cardTextLineHeight }) {
  return (
    <div
      style={{
        backgroundColor: 'transparent',
        borderRadius: '0.5rem',
        padding: '1rem 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        borderBottom: '1px solid #e0e0e0'
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
      {/* Titolo */}
      <h3
        style={{
          fontFamily: 'Thicccboi, sans-serif',
          fontWeight: 500,
          fontSize: cardTitleFontSize,
          lineHeight: cardTitleLineHeight,
          margin: 0,
          color: '#111'
        }}
      >
        {title}
      </h3>
      {/* Testo */}
      <p
        style={{
          fontFamily: 'Thicccboi, sans-serif',
          fontWeight: 500,
          fontSize: cardTextFontSize,
          lineHeight: cardTextLineHeight,
          margin: 0,
          color: '#555'
        }}
      >
        {text}
      </p>
    </div>
  )
}

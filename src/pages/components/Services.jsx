// src/components/Services.jsx
import { useState, useEffect } from 'react'

export default function Services() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Stili condizionali per header
  const headerTitleStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 500,
    fontSize: isMobile ? '32px' : '58px',
    lineHeight: isMobile ? '40px' : '65px',
    margin: 0,
    color: '#171717'
  }

  // Stile per il container header
  const headerContainerStyle = {
    maxWidth: '1340px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: isMobile ? 'flex-start' : 'space-between',
    alignItems: 'flex-start',
    gap: '1rem'
  }

  // Stile per il grid dei servizi
  const gridStyle = {
    maxWidth: '1340px',
    margin: '2rem auto 0',
    padding: '0 1rem',
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
    columnGap: '2rem',
    rowGap: '2rem'
  }

  // Stili per link header
  const linkContainerStyle = {
    display: 'flex',
    justifyContent: isMobile ? 'flex-start' : 'flex-end',
    minWidth: '200px'
  }

  const linkStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    textDecoration: 'none',
    color: '#171717',
    marginTop: '0.5rem',
    whiteSpace: 'nowrap'
  }

  return (
    <section style={{ backgroundColor: '#f8f9fb', padding: '4rem 0' }}>
      {/* Header */}
      <div style={headerContainerStyle}>
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
            OUR SERVICES
          </p>
          <h2 style={headerTitleStyle}>
            A comprehensive <br />
            set of <span style={{ color: '#0072F5' }}>services</span>
          </h2>
        </div>

        <div style={linkContainerStyle}>
          <a href="#" style={linkStyle}>
            Browse all services &nbsp; →
          </a>
        </div>
      </div>

      {/* Elenco servizi */}
      <div style={gridStyle}>
        {[
          ['01', 'Remodel construction', 'Velit sagittis fringilla neque dolor id et ac eu mattis ipsum morbi est morbi enim.'],
          ['02', 'General contracting', 'Phasellus orci nullam orci ultrices vulputate at sodales tempor malesuada libero.'],
          ['03', 'Project planning', 'Egestas integer sollicitudin volutpat duis mauris pulvinar molestie neque nibh.'],
          ['04', 'Space planning', 'Eget vitae non habitant blandit in in eu pellentesque nulla facilisis leo donec.'],
          ['05', 'Exterior design', 'Sed massa morbi turpis enim sed suspendisse massa ut a ultrices ut nisi in tellus.'],
          ['06', 'Interior design', 'Sed massa morbi turpis enim sed suspendisse massa ut a ultrices ut nisi in tellus.']
        ].map(([number, title, text]) => (
          <ServiceItem
            key={number}
            number={number}
            title={title}
            text={text}
            isMobile={isMobile}
          />
        ))}
      </div>
    </section>
  )
}

/**
 * Componente singolo per ogni "blocco servizio".
 */
function ServiceItem({ number, title, text, isMobile }) {
  const [hover, setHover] = useState(false)

  const containerStyle = {
    borderLeft: `1px solid ${hover ? '#0072F5' : '#e0e0e0'}`,
    paddingLeft: '2rem',
    transition: 'border-color 0.3s',
    cursor: 'pointer'
  }

  const titleStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 500,
    fontSize: isMobile ? '32px' : '48px',
    lineHeight: isMobile ? '40px' : '60px',
    margin: '0 0 1rem',
    color: hover ? '#0072F5' : '#171717',
    textDecoration: hover ? 'underline' : 'none',
    transition: 'color 0.3s, text-decoration 0.3s'
  }

  return (
    <div
      style={containerStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <p
        style={{
          fontFamily: 'Thicccboi, sans-serif',
          fontWeight: 500,
          fontSize: '22px',
          lineHeight: '33px',
          color: '#0072F5',
          margin: '0 0 0.5rem'
        }}
      >
        {number}
      </p>
      <h3 style={titleStyle}>{title}</h3>
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

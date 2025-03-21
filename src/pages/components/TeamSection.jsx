// src/components/TeamSection.jsx
import { useState, useEffect } from 'react'

export default function TeamSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Stili per la sezione
  const sectionStyle = {
    backgroundColor: '#f8f9fb',
    padding: isMobile ? '2rem 0' : '4rem 0'
  }

  const containerStyle = {
    maxWidth: '1340px',
    margin: '0 auto',
    padding: '0 1rem'
  }

  // Header: titolo e bottoni
  const headerStyle = {
    marginBottom: isMobile ? '1.5rem' : '2rem',
    textAlign: isMobile ? 'center' : 'left'
  }

  const labelStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '20px',
    color: '#666',
    margin: '0 0 0.5rem'
  }

  const titleStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 500,
    fontSize: isMobile ? '36px' : '58px',
    lineHeight: isMobile ? '42px' : '65px',
    margin: 0
  }

  const buttonContainerStyle = {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    justifyContent: isMobile ? 'center' : 'flex-start',
    marginTop: isMobile ? '1rem' : '1.5rem'
  }

  const mainButtonStyle = {
    fontFamily: 'Thicccboi, sans-serif',
    fontWeight: 500,
    fontSize: isMobile ? '16px' : '18px',
    lineHeight: '24px',
    padding: isMobile ? '0.65rem 1.25rem' : '0.75rem 1.5rem',
    borderRadius: '9999px',
    border: 'none',
    backgroundColor: '#0072F5',
    color: '#fff',
    cursor: 'pointer'
  }

  const circleButtonStyle = {
    width: isMobile ? '40px' : '48px',
    height: isMobile ? '40px' : '48px',
    borderRadius: '9999px',
    border: 'none',
    backgroundColor: '#0072F5',
    color: '#fff',
    fontSize: isMobile ? '16px' : '18px',
    cursor: 'pointer'
  }

  // Container delle card
  const cardsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: isMobile ? '1rem' : '2rem',
    justifyContent: isMobile ? 'center' : 'flex-start'
  }

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* Sezione con titolo e bottoni */}
        <div style={headerStyle}>
          <p style={labelStyle}>OUR TEAM</p>
          <h2 style={titleStyle}>
            The amazing <span style={{ color: '#0072F5' }}>team</span> <br />
            behind Builders
          </h2>
          <div style={buttonContainerStyle}>
            <button style={mainButtonStyle}>Join us</button>
            <button style={circleButtonStyle}>↗</button>
          </div>
        </div>

        {/* Sezione card */}
        <div style={cardsContainerStyle}>
          {/* Card Edoardo */}
          <TeamCard
            name="Edoardo Zanini"
            role="CEO & Founder"
            imageUrl="/modello.jpg"
            isMobile={isMobile}
          />
          {/* Card Dario */}
          <TeamCard
            name="Dario Zanini"
            role="Lead Project Manager"
            imageUrl="/modello.jpg"
            isMobile={isMobile}
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
 * - isMobile: booleano per adattamenti responsive
 */
function TeamCard({ name, role, imageUrl, isMobile }) {
  const cardWidth = isMobile ? '90%' : '350px'
  return (
    <div
      style={{
        width: cardWidth,
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
            fontSize: isMobile ? '12px' : '14px',
            margin: '0 0 0.25rem'
          }}
        >
          {role}
        </p>
        <h3
          style={{
            fontFamily: 'Thicccboi, sans-serif',
            fontWeight: 500,
            fontSize: isMobile ? '16px' : '18px',
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
          width: isMobile ? '32px' : '36px',
          height: isMobile ? '32px' : '36px',
          borderRadius: '9999px',
          border: 'none',
          backgroundColor: '#0072F5',
          color: '#fff',
          fontSize: isMobile ? '14px' : '16px',
          cursor: 'pointer',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
        }}
      >
        →
      </button>
    </div>
  )
}

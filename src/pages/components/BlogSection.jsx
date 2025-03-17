// src/components/BlogSection.jsx
import { useState } from 'react'

export default function BlogSection() {
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
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          {/* Colonna sinistra: "OUR BLOG" e titolo */}
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
              OUR BLOG
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
              Latest news & <span style={{ color: '#0072F5' }}>articles</span>
            </h2>
          </div>

          {/* Colonna destra: link "Browse all articles" */}
          <div style={{ flex: '0 0 auto' }}>
            <a
              href="#"
              style={{
                fontFamily: 'Thicccboi, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                textDecoration: 'none',
                color: '#171717'
              }}
            >
              Browse all articles →
            </a>
          </div>
        </div>

        {/* Sezione card: 1 grande a sinistra, 2 piccole a destra */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '1.5rem'
          }}
        >
          {/* Card grande */}
          <BigArticleCard />

          {/* Colonna destra: 2 card più piccole */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <SmallArticleCard
              title="Clever DIY home improvements you can do during the pandemic"
              category="Construction"
              date="Apr 24, 2024"
            />
            <SmallArticleCard
              title="25 color trends designers can't wait to see in 2025"
              category="Design"
              date="Apr 24, 2024"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* Card grande con immagine + overlay e pulsante freccia */
function BigArticleCard() {
  // Stato hover per la card grande (per ingrandire e scurire l’immagine)
  const [hover, setHover] = useState(false)

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        borderRadius: '1rem',
        overflow: 'hidden',
        backgroundColor: '#fff',
        boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
        transform: hover ? 'scale(1.02)' : 'scale(1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
    >
      {/* Immagine di sfondo */}
      <img
        src="/blog.jpg"
        alt="Paint roller"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          transition: 'opacity 0.3s',
          opacity: hover ? 0.95 : 1
        }}
      />
      {/* Overlay sfumato in basso */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '40%',
          background:
            'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)'
        }}
      />

      {/* Pulsante freccia in alto a destra */}
      <button
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          width: '44px',
          height: '44px',
          borderRadius: '9999px',
          border: 'none',
          backgroundColor: '#0072F5',
          color: '#fff',
          fontSize: '16px',
          cursor: 'pointer',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.15)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)'
        }}
      >
        ↗
      </button>

      {/* Corpo card grande (testo in basso) */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '1rem 1.5rem',
          backgroundColor: '#fff',
          borderBottomLeftRadius: '1rem',
          borderBottomRightRadius: '1rem'
        }}
      >
        <h3
          style={{
            fontFamily: 'Thicccboi, sans-serif',
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '30px',
            margin: '0 0 1rem'
          }}
        >
          12 designers tricks for picking <br /> the perfect home color palette
        </h3>
        {/* Tag + data */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '20px',
              color: '#fff',
              backgroundColor: '#0072F5',
              borderRadius: '9999px',
              padding: '0.25rem 0.75rem'
            }}
          >
            Remodeling
          </span>
          <span
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '20px',
              color: '#666'
            }}
          >
            Apr 24, 2024
          </span>
        </div>
      </div>
    </div>
  )
}

/* Card piccola per articoli sulla destra */
function SmallArticleCard({ title, category, date }) {
  const [hover, setHover] = useState(false)

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: '1rem',
        backgroundColor: '#fff',
        padding: '1.5rem',
        position: 'relative',
        boxShadow: hover
          ? '0 6px 12px rgba(0,0,0,0.1)'
          : '0 2px 5px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        transition: 'box-shadow 0.3s, transform 0.3s',
        transform: hover ? 'scale(1.02)' : 'scale(1)'
      }}
    >
      {/* Titolo */}
      <h3
        style={{
          fontFamily: 'Thicccboi, sans-serif',
          fontWeight: 400,
          fontSize: '20px',
          lineHeight: '28px',
          margin: 0
        }}
      >
        {title}
      </h3>
      {/* Tag + data */}
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <span
          style={{
            fontFamily: 'Thicccboi, sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '20px',
            color: '#fff',
            backgroundColor: '#0072F5',
            borderRadius: '9999px',
            padding: '0.25rem 0.75rem'
          }}
        >
          {category}
        </span>
        <span
          style={{
            fontFamily: 'Thicccboi, sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '20px',
            color: '#666'
          }}
        >
          {date}
        </span>
      </div>
      {/* Pulsante freccia (cerchio) */}
      <button
        style={{
          position: 'absolute',
          bottom: '1rem',
          right: '1rem',
          width: '40px',
          height: '40px',
          borderRadius: '9999px',
          border: 'none',
          backgroundColor: '#0072F5',
          color: '#fff',
          fontSize: '16px',
          cursor: 'pointer',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.15)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)'
        }}
      >
        ↗
      </button>
    </div>
  )
}

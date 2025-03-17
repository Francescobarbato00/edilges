// src/components/Header.jsx

import Link from 'next/link'

export default function Header() {
  return (
    <>
      {/* TOP BAR */}
      <div style={{ backgroundColor: '#f2f4f8', color: '#555', fontSize: '0.9rem' }}>
        <div
          style={{
            maxWidth: '1340px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '2rem',
            padding: '0.5rem 1rem'
          }}
        >
          {/* Indirizzo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <span style={{ color: '#0072F5', fontSize: '1rem' }}></span>
            <span>Via di Vitinia, 100 | 00140 Vitinia (RM)</span>
          </div>
          {/* Telefono */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <span style={{ color: '#0072F5', fontSize: '1rem' }}></span>
            <span>013 123 12 123</span>
          </div>
          {/* Email */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <span style={{ color: '#0072F5', fontSize: '1rem' }}></span>
            <span>info@edilges.it</span>
          </div>
        </div>
      </div>

      {/* HEADER PRINCIPALE */}
      <header style={{ backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <div
          style={{
            maxWidth: '1340px',
            height: '70px',
            margin: '0 auto',
            padding: '0 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Logo + Brand (EDILGES) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Placeholder logo simile a un edificio */}
            <div
              style={{
                width: '40px',
                height: '40px',
                border: '2px solid #0072F5',
                backgroundColor: 'transparent',
                clipPath: 'polygon(0 100%, 0 0, 50% 0, 50% 30%, 100% 30%, 100% 100%)'
              }}
            />
            <div>
              <h2
                style={{
                  margin: 0,
                  fontFamily: 'Thicccboi, sans-serif',
                  fontSize: '1.2rem',
                  color: '#333'
                }}
              >
                EDILGES
              </h2>
              <p
                style={{
                  margin: 0,
                  fontFamily: 'Thicccboi, sans-serif',
                  fontSize: '0.9rem',
                  color: '#666'
                }}
              >
                DITTA EDILE
              </p>
            </div>
          </div>

          {/* Menu di navigazione */}
          <nav>
            <ul
              style={{
                display: 'flex',
                alignItems: 'center',
                listStyle: 'none',
                margin: 0,
                padding: 0
              }}
            >
              {['Home', 'About', 'Services', 'Contact'].map((item, idx) => (
                <li key={idx} style={{ margin: '0 1rem', position: 'relative' }}>
                  <Link
                    href={
                      item === 'Home'
                        ? '/'
                        : item === 'About'
                        ? '/about'
                        : item === 'Services'
                        ? '/services'
                        : '/contact'
                    }
                    legacyBehavior
                  >
                    <a
                      style={{
                        fontFamily: 'Thicccboi, sans-serif',
                        fontSize: '1rem',
                        color: '#333',
                        textDecoration: 'none',
                        transition: 'border-bottom 0.3s',
                        borderBottom: '2px solid transparent'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderBottom = '2px solid #0072F5'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderBottom = '2px solid transparent'
                      }}
                    >
                      {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottoni CTA */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            {/* Bottone "Get a free quote" (NO underline) */}
            <button
              style={{
                fontFamily: 'Thicccboi, sans-serif',
                fontSize: '1rem',
                padding: '0.75rem 1.5rem',
                borderRadius: '9999px',
                border: '2px solid #0072F5',
                backgroundColor: 'transparent',
                color: '#0072F5',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#0072F5'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#0072F5'
              }}
            >
              Get a free quote
            </button>

            {/* Bottone con icona telefono (NO underline) */}
            <button
              style={{
                fontFamily: 'Thicccboi, sans-serif',
                fontSize: '1rem',
                padding: '0.75rem 1.5rem',
                borderRadius: '9999px',
                border: '2px solid #0072F5',
                backgroundColor: 'transparent',
                color: '#0072F5',
                cursor: 'pointer',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#0072F5'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#0072F5'
              }}
            >
              <span style={{ fontSize: '1.2rem' }}></span>
              Call us
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

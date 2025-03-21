// src/components/HeaderMobile.jsx

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Blocca lo scroll del body quando il menu è aperto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Funzione per gestire l'apertura/chiusura del menu
  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }

  return (
    <>
      {/* Header Mobile */}
      <header style={{ backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div
            style={{
              width: '30px',
              height: '30px',
              border: '2px solid #0072F5',
              backgroundColor: 'transparent',
              clipPath: 'polygon(0 100%, 0 0, 50% 0, 50% 30%, 100% 30%, 100% 100%)'
            }}
          />
          <h2 style={{ margin: 0, fontFamily: 'Thicccboi, sans-serif', fontSize: '1rem', color: '#333' }}>EDILGES</h2>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}
          aria-label="Toggle menu"
        >
          <span style={{ width: '25px', height: '3px', backgroundColor: '#0072F5', display: 'block' }} />
          <span style={{ width: '25px', height: '3px', backgroundColor: '#0072F5', display: 'block' }} />
          <span style={{ width: '25px', height: '3px', backgroundColor: '#0072F5', display: 'block' }} />
        </button>
      </header>

      {/* Menu Overlay */}
      <div
        style={{
          position: 'fixed',
          top: menuOpen ? 0 : '-100%',
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'top 0.5s ease',
          zIndex: 9999
        }}
      >
        {/* Bottone per chiudere il menu */}
        <button
          onClick={toggleMenu}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer'
          }}
          aria-label="Close menu"
        >
          &times;
        </button>
        {/* Link di navigazione */}
        <nav>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'center' }}>
            {['Home', 'About', 'Services', 'Contact'].map((item, idx) => (
              <li key={idx} style={{ margin: '1rem 0' }}>
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
                    onClick={toggleMenu}
                    style={{
                      fontFamily: 'Thicccboi, sans-serif',
                      fontSize: '1.2rem',
                      color: '#0072F5',
                      textDecoration: 'none',
                      transition: 'color 0.3s'
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#005bb5')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#0072F5')}
                  >
                    {item}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

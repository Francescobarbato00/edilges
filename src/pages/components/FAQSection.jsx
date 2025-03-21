// src/components/FAQSection.jsx
import { useState, useEffect } from 'react'

export default function FAQSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section style={{ backgroundColor: '#f8f9fb', padding: isMobile ? '2rem 0' : '4rem 0' }}>
      <div
        style={{
          maxWidth: '1340px',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '1rem' : '2rem'
        }}
      >
        {/* Colonna sinistra */}
        <div
          style={{
            flex: isMobile ? '1 1 100%' : '0 0 300px',
            position: isMobile ? 'static' : 'sticky',
            top: isMobile ? 'auto' : '4rem',
            alignSelf: isMobile ? 'center' : 'flex-start',
            textAlign: isMobile ? 'center' : 'left'
          }}
        >
          <p
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 600,
              fontSize: isMobile ? '14px' : '16px',
              lineHeight: '20px',
              color: '#666',
              margin: '0 0 0.5rem'
            }}
          >
            FAQS
          </p>
          <h2
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 500,
              fontSize: isMobile ? '36px' : '58px',
              lineHeight: isMobile ? '42px' : '65px',
              margin: 0
            }}
          >
            Frequently asked <br />
            <span style={{ color: '#0072F5' }}>questions</span>
          </h2>
        </div>

        {/* Colonna destra: FAQ */}
        <div style={{ flex: '1', marginTop: isMobile ? '1rem' : '0' }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {faqs.map((item, idx) => (
              <FAQItem
                key={idx}
                number={String(idx + 1).padStart(2, '0')}
                question={item.question}
                answer={item.answer}
                isMobile={isMobile}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

const faqs = [
  {
    question: 'How many years of experience does Builders has?',
    answer:
      'We have over 10 years of experience in the construction industry, delivering high-quality projects to our clients.'
  },
  {
    question: 'How big is your team of contractors?',
    answer:
      'Our team consists of more than 50 skilled contractors and professionals.'
  },
  {
    question: 'Do you have case studies of past successful projects?',
    answer:
      'Yes, we have a portfolio showcasing our past projects and their outcomes.'
  },
  {
    question: 'What kind of services do you offer?',
    answer: 'We specialize in construction, remodeling, and more...'
  }
]

/**
 * FAQItem - singolo elemento FAQ (accordion)
 * - number: stringa con il numero (es. "01")
 * - question: testo della domanda
 * - answer: testo della risposta
 * - isMobile: booleano per adattare font e spaziature
 */
function FAQItem({ number, question, answer, isMobile }) {
  const [open, setOpen] = useState(false)

  // Dimensioni adattate in base al breakpoint
  const numberFontSize = isMobile ? '18px' : '22px'
  const questionFontSize = isMobile ? '24px' : '36px'
  const questionLineHeight = isMobile ? '30px' : '45px'
  const answerFontSize = isMobile ? '16px' : '18px'
  const answerLineHeight = isMobile ? '22px' : '28px'

  return (
    <li
      style={{
        borderBottom: '1px solid #e0e0e0',
        padding: isMobile ? '0.75rem 0' : '1rem 0',
        cursor: 'pointer'
      }}
      onClick={() => setOpen(!open)}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* Numero */}
        <span
          style={{
            fontFamily: 'Thicccboi, sans-serif',
            fontWeight: 500,
            fontSize: numberFontSize,
            lineHeight: '33px',
            color: '#0072F5'
          }}
        >
          {number}
        </span>
        {/* Domanda */}
        <span
          style={{
            fontFamily: 'Thicccboi, sans-serif',
            fontWeight: 500,
            fontSize: questionFontSize,
            lineHeight: questionLineHeight,
            color: '#333',
            flex: 1
          }}
        >
          {question}
        </span>
        {/* Indicatore + / – */}
        <span style={{ fontSize: '1.5rem', color: '#999' }}>
          {open ? '–' : '+'}
        </span>
      </div>

      {/* Risposta (visibile se open=true) */}
      {open && (
        <p
          style={{
            marginTop: '1rem',
            fontFamily: 'Thicccboi, sans-serif',
            fontWeight: 400,
            fontSize: answerFontSize,
            lineHeight: answerLineHeight,
            color: '#555'
          }}
        >
          {answer}
        </p>
      )}
    </li>
  )
}

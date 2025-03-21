// src/components/SimpleFAQSection.jsx
import { useState, useEffect } from 'react'

export default function SimpleFAQSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Dimensioni adattate in base al breakpoint
  const sectionPadding = isMobile ? '2rem 0' : '4rem 0'
  const faqLabelFontSize = isMobile ? '14px' : '16px'
  const titleFontSize = isMobile ? '36px' : '58px'
  const titleLineHeight = isMobile ? '42px' : '65px'

  return (
    <section style={{ backgroundColor: '#f8f9fb', padding: sectionPadding }}>
      <div
        style={{
          maxWidth: '1340px',
          margin: '0 auto',
          padding: '0 1rem'
        }}
      >
        {/* Header: su desktop, "FAQS" era posizionato in alto a destra; su mobile viene posizionato sopra il titolo e centrato */}
        <div style={{ marginBottom: isMobile ? '1.5rem' : '2rem', textAlign: isMobile ? 'center' : 'left' }}>
          {isMobile && (
            <p
              style={{
                fontFamily: 'Thicccboi, sans-serif',
                fontWeight: 600,
                fontSize: faqLabelFontSize,
                lineHeight: '20px',
                color: '#666',
                margin: '0 0 0.5rem'
              }}
            >
              FAQS
            </p>
          )}
          <h2
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 500,
              fontSize: titleFontSize,
              lineHeight: titleLineHeight,
              margin: 0
            }}
          >
            Frequently asked <br />
            <span style={{ color: '#0072F5' }}>questions</span>
          </h2>
          {/* Su desktop, posizioniamo il label "FAQS" in alto a destra */}
          {!isMobile && (
            <p
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                fontFamily: 'Thicccboi, sans-serif',
                fontWeight: 600,
                fontSize: faqLabelFontSize,
                lineHeight: '20px',
                color: '#666',
                margin: 0
              }}
            >
              FAQS
            </p>
          )}
        </div>

        {/* Elenco FAQ */}
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {faqs.map((item, idx) => (
            <FAQItem
              key={idx}
              index={idx + 1}
              question={item.question}
              answer={item.answer}
              isMobile={isMobile}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

const faqs = [
  {
    question: 'How many years of experience does Builders X have?',
    answer:
      'Builders X has over 10 years of experience in the construction industry, delivering high-quality projects to our clients.'
  },
  {
    question: 'How big is your team of contractors?',
    answer:
      'Our team consists of more than 50 skilled contractors and professionals, each specialized in different aspects of construction.'
  },
  {
    question: 'How many years of experience does Builders X has?',
    answer:
      'We have extensive experience gained through a wide range of projects, from small renovations to large commercial builds.'
  },
  {
    question: 'Do you have case studies of past successful projects?',
    answer:
      'Yes, we maintain a portfolio showcasing our completed projects, highlighting the challenges faced and solutions provided.'
  }
]

/**
 * FAQItem - singolo elemento FAQ (accordion)
 * - index: numero (es. "01")
 * - question: testo della domanda
 * - answer: testo della risposta
 * - isMobile: booleano per adattare dimensioni e spaziature
 */
function FAQItem({ index, question, answer, isMobile }) {
  const [open, setOpen] = useState(false)

  // Dimensioni adattate in base al breakpoint
  const numberFontSize = isMobile ? '18px' : '22px'
  const questionFontSize = isMobile ? '24px' : '36px'
  const questionLineHeight = isMobile ? '30px' : '45px'
  const answerFontSize = isMobile ? '16px' : '18px'
  const answerLineHeight = isMobile ? '22px' : '28px'
  const itemPadding = isMobile ? '0.75rem 0' : '1rem 0'

  return (
    <li
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '1px solid #e0e0e0',
        padding: itemPadding,
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
          {String(index).padStart(2, '0')}
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

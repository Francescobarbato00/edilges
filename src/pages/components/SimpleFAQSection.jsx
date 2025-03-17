// src/components/SimpleFAQSection.jsx
import { useState } from 'react'

export default function SimpleFAQSection() {
  // FAQ hardcoded con domande e risposte
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

  return (
    <section style={{ backgroundColor: '#f8f9fb', padding: '4rem 0' }}>
      <div
        style={{
          maxWidth: '1340px',
          margin: '0 auto',
          padding: '0 1rem'
        }}
      >
        {/* Contenitore per titolo e "FAQS" in alto a destra */}
        <div style={{ position: 'relative', marginBottom: '2rem' }}>
          {/* "FAQS" in alto a destra */}
          <p
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '20px',
              color: '#666',
              margin: 0
            }}
          >
            FAQS
          </p>
          {/* Titolo grande */}
          <h2
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 500,
              fontSize: '58px', // "Frequently asked questions"
              lineHeight: '65px',
              margin: 0
            }}
          >
            Frequently asked <br />
            <span style={{ color: '#0072F5' }}>questions</span>
          </h2>
        </div>

        {/* Elenco FAQ */}
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {faqs.map((item, idx) => (
            <FAQItem
              key={idx}
              index={idx + 1}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

/**
 * FAQItem: singolo elemento FAQ con domanda e risposta "hardcoded"
 * - index: numero (1, 2, 3, ecc.)
 * - question: testo della domanda (36px)
 * - answer: testo della risposta
 */
function FAQItem({ index, question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <li
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '1px solid #e0e0e0',
        padding: '1rem 0',
        cursor: 'pointer'
      }}
      onClick={() => setOpen(!open)}
    >
      {/* Riga domanda */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* Numero in blu (22px) */}
        <span
          style={{
            fontFamily: 'Thicccboi, sans-serif',
            fontWeight: 500,
            fontSize: '22px',
            lineHeight: '33px',
            color: '#0072F5'
          }}
        >
          {String(index).padStart(2, '0')}
        </span>
        {/* Domanda (36px) */}
        <span
          style={{
            fontFamily: 'Thicccboi, sans-serif',
            fontWeight: 500,
            fontSize: '36px',
            lineHeight: '45px',
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
            fontSize: '18px',
            lineHeight: '28px',
            color: '#555'
          }}
        >
          {answer}
        </p>
      )}
    </li>
  )
}

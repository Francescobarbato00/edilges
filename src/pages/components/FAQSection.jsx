// src/components/FAQSection.jsx
import { useState } from 'react'

export default function FAQSection() {
  // Esempio di FAQ: 4 voci
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

  return (
    <section style={{ backgroundColor: '#f8f9fb', padding: '4rem 0' }}>
      <div
        style={{
          maxWidth: '1340px',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'flex',
          gap: '2rem'
        }}
      >
        {/* Colonna sinistra (sticky) */}
        <div
          style={{
            flex: '0 0 300px',
            position: 'sticky',
            top: '4rem',
            alignSelf: 'flex-start'
          }}
        >
          <p
            style={{
              fontFamily: 'Thicccboi, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
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
              fontSize: '58px', // "Frequently asked questions"
              lineHeight: '65px',
              margin: 0
            }}
          >
            Frequently asked <br />
            <span style={{ color: '#0072F5' }}>questions</span>
          </h2>
        </div>

        {/* Colonna destra: FAQ */}
        <div style={{ flex: 1, marginTop: '2rem' }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {faqs.map((item, idx) => (
              <FAQItem
                key={idx}
                number={String(idx + 1).padStart(2, '0')}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/**
 * FAQItem - singolo elemento FAQ (accordion)
 * - number: stringa col numero (es. "01")
 * - question: testo della domanda (36px)
 * - answer: testo della risposta
 */
function FAQItem({ number, question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <li
      style={{
        borderBottom: '1px solid #e0e0e0',
        padding: '1rem 0',
        cursor: 'pointer'
      }}
      onClick={() => setOpen(!open)}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* Numero (22px) */}
        <span
          style={{
            fontFamily: 'Thicccboi, sans-serif',
            fontWeight: 500,
            fontSize: '22px',
            lineHeight: '33px',
            color: '#0072F5'
          }}
        >
          {number}
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

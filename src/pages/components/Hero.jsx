// src/components/Hero.jsx

import Image from 'next/image'

export default function Hero() {
  return (
    <>
      <section className="hero">
        {/* RIGA 1: Titolo e testo/bottoni */}
        <div className="hero-top">
          {/* Colonna sinistra: Titolo */}
          <div className="hero-title">
            <h1>
              Unlock success <br /> with our contracts
            </h1>
          </div>
          {/* Colonna destra: Testo + bottoni */}
          <div className="hero-content">
            <p>
              Pellentesque sapien in consequat bibendum mattis amet molestie gravida neque
              venenatis nibh purus est orci mauris.
            </p>
            <div className="buttons">
              {/* Bottone 1 */}
              <button className="btn-primary">
                Get a free quote &nbsp; →
              </button>
              {/* Bottone 2 */}
              <button className="btn-secondary">
                Contact us
              </button>
            </div>
          </div>
        </div>

        {/* RIGA 2: Immagine */}
        <div className="hero-image">
          <Image
            src="/hero.jpg"
            alt="Construction worker measuring"
            width={1340}
            height={600}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '0.5rem',
              objectFit: 'cover'
            }}
          />
        </div>
      </section>

      <style jsx>{`
        .hero {
          background-color: #f8f9fb;
          padding: 4rem 0;
        }
        .hero-top {
          max-width: 1340px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }
        .hero-title {
          flex: 0 0 50%;
          min-width: 300px;
        }
        .hero-title h1 {
          font-family: 'Thicccboi, sans-serif';
          font-weight: 500;
          font-size: 84px;
          line-height: 94px;
          margin: 0;
        }
        .hero-content {
          flex: 0 0 50%;
          min-width: 300px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-top: 1rem;
        }
        .hero-content p {
          font-family: 'Thicccboi, sans-serif';
          font-weight: 500;
          font-size: 22px;
          line-height: 33px;
          margin-bottom: 2rem;
          max-width: 500px;
        }
        .buttons {
          display: flex;
          gap: 1rem;
        }
        .btn-primary {
          font-family: 'Thicccboi, sans-serif';
          font-weight: 600;
          font-size: 24px;
          line-height: 30px;
          padding: 1rem 2rem;
          border-radius: 9999px;
          border: none;
          background-color: #0072F5;
          color: #fff;
          cursor: pointer;
        }
        .btn-secondary {
          font-family: 'Thicccboi, sans-serif';
          font-weight: 600;
          font-size: 24px;
          line-height: 30px;
          padding: 1rem 2rem;
          border-radius: 9999px;
          border: 1px solid #0072F5;
          background-color: transparent;
          color: #0072F5;
          cursor: pointer;
        }
        .hero-image {
          max-width: 1340px;
          margin: 3rem auto 0;
          padding: 0 1rem;
        }

        /* Media Queries per dispositivi mobile */
        @media (max-width: 768px) {
          .hero-top {
            flex-direction: column;
            align-items: flex-start;
          }
          .hero-title,
          .hero-content {
            flex: 0 0 100%;
          }
          .hero-title h1 {
            font-size: 48px;
            line-height: 56px;
          }
          .hero-content p {
            font-size: 18px;
            line-height: 27px;
            max-width: 100%;
          }
          .buttons {
            flex-direction: column;
            gap: 1rem;
          }
          .btn-primary,
          .btn-secondary {
            font-size: 20px;
            padding: 0.75rem 1.5rem;
          }
        }
      `}</style>
    </>
  )
}

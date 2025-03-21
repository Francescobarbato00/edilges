// src/components/RecentWorks.jsx
import { useState } from 'react'

export default function RecentWorks() {
  // Elenco progetti di esempio
  const projects = [
    {
      number: '01',
      title: 'Kitchen remodeling in Hollywood Hills, CA',
      image: '/prova1.jpg'
    },
    {
      number: '02',
      title: 'Living room design in Beverly Hills, CA',
      image: '/prova2.jpg'
    },
    {
      number: '03',
      title: 'Outdoor patio renovation in Malibu, CA',
      image: '/prova3.jpg'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex(prev => (prev + projects.length - 1) % projects.length)
  }
  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % projects.length)
  }

  const currentProject = projects[currentIndex]

  return (
    <section className="recent-works">
      <div className="inner-container">
        <div className="info-section">
          <h4>RECENT WORKS</h4>
          <h2>
            Take a look at <br /> our most recent <span>projects</span>
          </h2>
          <a href="#">Browse portfolio →</a>
        </div>
        <div className="card-section">
          <div
            className="card"
            style={{ backgroundImage: `url(${currentProject.image})` }}
          >
            <div className="overlay" />
            <div className="card-text">
              <span>{currentProject.number}</span>
              <h3>{currentProject.title}</h3>
            </div>
          </div>
          <div className="arrows">
            <button onClick={handlePrev} className="arrow-btn">
              ←
            </button>
            <button onClick={handleNext} className="arrow-btn">
              →
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .recent-works {
          background-color: #f8f9fb;
          padding: 4rem 1rem;
        }
        .inner-container {
          max-width: 1340px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }
        .info-section {
          flex: 1;
          min-width: 300px;
        }
        .info-section h4 {
          font-family: 'Thicccboi', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #666;
          margin-bottom: 0.5rem;
        }
        .info-section h2 {
          font-family: 'Thicccboi', sans-serif;
          font-size: 48px;
          font-weight: 500;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }
        .info-section h2 span {
          color: #0072f5;
        }
        .info-section a {
          font-family: 'Thicccboi', sans-serif;
          font-size: 16px;
          color: #171717;
          text-decoration: none;
        }
        .card-section {
          flex: 1;
          min-width: 300px;
          display: flex;
          flex-direction: column;
        }
        .card {
          position: relative;
          height: 500px;
          background-size: cover;
          background-position: center;
          border-radius: 1rem;
          overflow: hidden;
        }
        .overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.6) 100%
          );
        }
        .card-text {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          color: #fff;
        }
        .card-text span {
          font-family: 'Thicccboi', sans-serif;
          font-size: 22px;
          font-weight: 500;
          color: #0072f5;
          display: block;
          margin-bottom: 0.5rem;
        }
        .card-text h3 {
          font-family: 'Thicccboi', sans-serif;
          font-size: 24px;
          font-weight: 400;
          margin: 0;
        }
        .arrows {
          margin-top: 1rem;
          display: flex;
          justify-content: space-between;
        }
        .arrow-btn {
          background-color: #0072f5;
          border: none;
          color: #fff;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          font-size: 20px;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .inner-container {
            flex-direction: column;
            align-items: center;
          }
          .info-section {
            text-align: center;
          }
          .info-section h2 {
            font-size: 36px;
          }
          .card {
            height: 300px;
          }
          .arrow-btn {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }
          .arrows {
            width: 100%;
            justify-content: space-around;
          }
        }
      `}</style>
    </section>
  )
}

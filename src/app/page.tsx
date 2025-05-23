"use client";
// src/app/page.tsx

export default function ComingSoon() {
  return (
    <>
      <main className="coming-soon-main">
        <h1 className="coming-soon-title">Próximamente...</h1>
        <p className="coming-soon-desc">
          Estamos trabajando en algo especial para la comunidad presbiteriana.
        </p>
        <p className="coming-soon-sub">
          Volvé pronto para descubrir nuevos recursos, artículos y reflexiones.
        </p>
      </main>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap');
        .coming-soon-main {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #fef3c7;
          text-align: center;
          padding: 2rem;
        }
        .coming-soon-title {
          font-size: 2.5rem;
          font-weight: 900;
          color: #92400e;
          margin-bottom: 1rem;
          font-family: 'Nunito', Arial, sans-serif;
          letter-spacing: -1px;
        }
        .coming-soon-desc {
          margin-top: 0.5rem;
          font-size: 1.125rem;
          color: #b45309;
          font-weight: 700;
          font-family: 'Nunito', Arial, sans-serif;
        }
        .coming-soon-sub {
          margin-top: 1rem;
          color: #a16207;
          font-weight: 400;
          font-family: 'Nunito', Arial, sans-serif;
        }
      `}</style>
    </>
  );
}
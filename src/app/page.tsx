// src/app/page.tsx

export default function ComingSoon() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 text-center p-8">
      <div className="bg-white/80 rounded-xl shadow-lg px-8 py-12 max-w-lg w-full border border-amber-200">
        <h1 className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-4 font-serif tracking-tight">
          Próximamente...
        </h1>
        <p className="mt-2 text-lg text-amber-700 font-medium font-serif">
          Estamos trabajando en algo especial para la comunidad presbiteriana.
        </p>
        <p className="mt-4 text-amber-600 font-light">
          Volvé pronto para descubrir nuevos recursos, artículos y reflexiones.
        </p>
        <div className="mt-8 flex justify-center">
          <svg
            className="w-12 h-12 text-amber-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v18m0 0l-4-4m4 4l4-4"
            />
          </svg>
        </div>
        <p className="mt-4 text-xs text-amber-500">Iglesia Presbiteriana</p>
      </div>
    </main>
  );
}
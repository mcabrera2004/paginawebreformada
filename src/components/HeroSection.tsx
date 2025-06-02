import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/presbyterian.jpg"
          alt="Fondo teología reformada"
          fill
          className="object-cover w-full h-full blur-none"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Explorando la Teología Reformada
        </h1>
        <p className="mb-8 max-w-2xl text-lg md:text-xl drop-shadow">
          Un repositorio de artículos, libros y recursos para profundizar en la comprensión de las doctrinas reformadas y la fe histórica de la iglesia.
        </p>
        {/* 
        <input
          type="text"
          placeholder="Buscar artículos, libros, recursos..."
          className="w-full max-w-md px-4 py-2 rounded shadow text-black"
        />
        */}
        <div className="w-full max-w-md px-4 py-3 rounded shadow bg-white/10 border border-white/20">
          <span className="block text-lg md:text-xl font-semibold mb-1">¿Quiénes Somos?</span>
          <span className="text-base">
            Somos una comunidad dedicada a compartir contenido útil y relevante sobre cristianismo y presbiterianismo, con un enfoque especial en acercar las enseñanzas de autores reformados ortodoxos al mundo hispanohablante. Nuestro objetivo es ofrecer recursos, artículos y reflexiones que ayuden a comprender y vivir la fe de manera profunda y práctica.
          </span>
        </div>
      </div>
    </section>
  );
}
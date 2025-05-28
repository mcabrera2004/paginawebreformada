import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black/60">
      <Image
        src="/presbyterian.jpg"
        alt="Fondo teología reformada"
        fill
        className="object-cover -z-10"
        priority
      />
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Explorando la Teología Reformada
        </h1>
        <p className="mb-8 max-w-2xl text-lg md:text-xl drop-shadow">
          Un repositorio de artículos, libros y recursos para profundizar en la comprensión de las doctrinas reformadas y la fe histórica de la iglesia.
        </p>
        <input
          type="text"
          placeholder="Buscar artículos, libros, recursos..."
          className="w-full max-w-md px-4 py-2 rounded shadow text-black"
        />
      </div>
    </section>
  );
}
"use client";
import Image from "next/image";

export default function ComingSoon() {
  return (
    <main className="coming-soon-main" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: 24,
          left: 24,
          width: "25vw",
          maxWidth: 150,
          minWidth: 70,
          aspectRatio: "1 / 1",
        }}
      >
        <Image
          src="/logo.png"
          alt="Logo"
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 600px) 50vw, 110px"
          priority
        />
      </div>
      <h1 className="coming-soon-title">Próximamente...</h1>
      <p className="coming-soon-desc">
        Estamos trabajando en algo especial para la comunidad reformada.
      </p>
      <p className="coming-soon-sub">
        Vuelve pronto para descubrir nuevos recursos, artículos, libros y reflexiones.
      </p>
    </main>
  );
}
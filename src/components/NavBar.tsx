"use client";
import { useEffect, useState } from "react";

export function NavBar() {
  const [solid, setSolid] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSolid(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cierra el menú lateral si el ancho de pantalla supera 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  // Solo un ítem: Inicio, que lleva a la raíz "/"
  const menuItems = (
    <>
      <a className="text-white block py-2" href="/">Inicio</a>
    </>
  );

  return (
    <>
      <nav
        className={`fixed top-0 w-full h-[58px] transition-colors duration-200 text-white tracking-wide z-50`}
        style={{ backgroundColor: solid ? "rgb(53, 35, 23)" : "transparent" }}
      >
        <div className="max-w-[1200px] w-full mx-auto px-[25px] h-full flex items-center">
          <div className="font-black">
            <a className="text-white" href="/">Presbiterianismo.com</a>
          </div>
          {/* Menú para pantallas grandes */}
          <div className="ml-auto hidden md:flex space-x-5">
            {menuItems}
          </div>
          {/* Botón de hamburguesa para pantallas pequeñas */}
          <button
            className="ml-auto md:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Contenedor del menú lateral siempre renderizado para permitir la transición */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ transitionProperty: "opacity" }}
      >
        {/* Overlay para cerrar el menú al hacer clic fuera */}
        <div
          className="absolute inset-0 bg-black opacity-50"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
        {/* Menú lateral con animación de deslizamiento */}
        <div
          className={`absolute top-0 left-0 h-full w-64 bg-[rgb(53,35,23)] text-white p-4 transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ transitionProperty: "transform" }}
        >
          {/* Botón de cerrar (cruz) */}
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Cerrar menú"
          >
            &times;
          </button>
          <nav className="flex flex-col mt-10">
            {menuItems}
          </nav>
        </div>
      </div>
    </>
  );
}
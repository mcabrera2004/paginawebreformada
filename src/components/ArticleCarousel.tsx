'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

type Article = {
  id: string;
  title: string;
  image: string;
  slug: string;
  excerpt: string;
};

interface ArticleCarouselProps {
  articles: Article[];
}

export const ArticleCarousel: React.FC<ArticleCarouselProps> = ({ articles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Función para actualizar el índice cuando se hace scroll manualmente
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 330 + 24; // Ancho de tarjeta + gap
      const newIndex = Math.round(container.scrollLeft / cardWidth);
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 330 + 24; // Ancho de tarjeta + gap
      const newIndex = Math.max(currentIndex - 1, 0);
      
      setCurrentIndex(newIndex);
      container.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 330 + 24; // Ancho de tarjeta + gap
      const maxIndex = Math.max(articles.length - 2, 0); // Mostrar máximo 2 tarjetas
      const newIndex = Math.min(currentIndex + 1, maxIndex);
      
      setCurrentIndex(newIndex);
      container.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  if (!articles || articles.length === 0) {
    return (
      <div className="w-full flex justify-center items-center h-64">
        <p className="text-gray-500">No hay artículos disponibles</p>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-full mx-auto">
      {/* Contenedor del carrusel */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scroll-smooth pl-4 pr-0 hide-scrollbar"
        onScroll={handleScroll}
      >
        <div className="flex gap-6" style={{ width: `${articles.length * (330 + 24)}px` }}>
          {articles.map((article) => (
            <Link
              href={`/${article.slug}`}
              key={article.id}
              className="flex-none w-[330px] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              style={{ height: '380px' }}
            >
              <div className="w-full h-[240px] overflow-hidden rounded-t-lg relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-3/5 pointer-events-none">
                  <h3 className="font-semibold text-lg px-4 pb-4 pt-8 absolute bottom-0 text-white line-clamp-3">
                    {article.title}
                  </h3>
                </div>
              </div>
              <div className="p-4 h-[140px] overflow-hidden">
                <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Controles de navegación en la parte inferior */}
      <div className="flex justify-center mt-4 gap-4">
        <button
          onClick={scrollLeft}
          disabled={currentIndex === 0}
          className={`w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-200 ${
            currentIndex === 0
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-gray-50 hover:shadow-xl'
          }`}
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={scrollRight}
          disabled={currentIndex >= Math.max(articles.length - 2, 0)}
          className={`w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-200 ${
            currentIndex >= Math.max(articles.length - 2, 0)
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-gray-50 hover:shadow-xl'
          }`}
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};
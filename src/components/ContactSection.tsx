export function ContactSection() {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Mantente en Contacto
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            ¿Tienes preguntas sobre la fe reformada o sugerencias para nuestro repositorio? 
            Nos encantaría escucharte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Correo Electrónico</h3>
              <a 
                href="mailto:main@presbiterianismo.com" 
                className="text-blue-600 hover:text-blue-800 transition-colors text-lg"
              >
                main@presbiterianismo.com
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Repositorio Reformado</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Artículos, libros y recursos para profundizar en la fe reformada.
                </p>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Artículos teológicos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Libros reformados</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Recursos gratuitos</span>
                </div>
              </div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-purple-200 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
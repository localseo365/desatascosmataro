import React from 'react';

const images = [
  {
    before: "https://plus.unsplash.com/premium_photo-1664299069577-11579b487e6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    after: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=1974&auto=format&fit=crop",
    title: "Limpieza de Tuberías"
  },
  {
    before: "https://plus.unsplash.com/premium_photo-1661884973994-d7625e52631a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    after: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1974&auto=format&fit=crop",
    title: "Reparación de Desagües"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Antes y Después
          </h2>
          <p className="text-lg text-gray-600">
            Resultados que hablan por sí mismos
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">{image.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-2">Antes</p>
                  <img
                    src={image.before}
                    alt={`Antes - ${image.title}`}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-2">Después</p>
                  <img
                    src={image.after}
                    alt={`Después - ${image.title}`}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "María García",
    text: "Excelente servicio de emergencia. Llegaron en 30 minutos y resolvieron el problema rápidamente.",
    rating: 5
  },
  {
    name: "Juan Pérez",
    text: "Muy profesionales y precios justos. Recomiendo totalmente sus servicios de mantenimiento.",
    rating: 5
  },
  {
    name: "Ana Martínez",
    text: "Gran trabajo en la reparación de nuestro sistema de tuberías. Todo funciona perfectamente ahora.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Opiniones de Clientes
          </h2>
          <p className="text-lg text-gray-600">
            Lo que dicen nuestros clientes sobre nuestro servicio
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <p className="font-medium text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
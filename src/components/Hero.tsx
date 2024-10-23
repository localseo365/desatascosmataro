import React from 'react';
import { Phone } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-blue-700">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover mix-blend-multiply filter brightness-50"
          src="https://images.unsplash.com/photo-1719754522973-0df0412be05e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Servicio profesional de fontanería y desatascos en Mataró"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Desatascos Mataró JMassa
        </h1>
        <p className="mt-6 text-xl text-gray-100 max-w-3xl">
          Empresa líder en servicios profesionales de fontanería y desatascos en Mataró y el Maresme. Más de 40 años de experiencia resolviendo problemas de tuberías, desagües y sistemas de alcantarillado. Servicio de calidad garantizado con los mejores profesionales y la tecnología más avanzada del sector.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="tel:605843775"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            <Phone className="w-5 h-5 mr-2" />
            605 843 775
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 transition-colors"
          >
            Solicitar Presupuesto Gratuito
          </a>
        </div>
      </div>
    </div>
  );
}
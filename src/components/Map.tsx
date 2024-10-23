import React from 'react';
import { MapPin } from 'lucide-react';

export default function Map() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Área de Servicio en Mataró y Alrededores
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              Ofrecemos nuestros servicios de desatascos y fontanería en Mataró y toda la comarca del Maresme. Nuestra ubicación estratégica nos permite dar una respuesta rápida en:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Mataró</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Argentona</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Vilassar de Mar</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Premià de Mar</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Arenys de Mar</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Canet de Mar</span>
              </div>
            </div>
            <p className="text-gray-600">
              Nuestro compromiso es ofrecer un servicio rápido y eficiente en toda la zona. Contamos con varias unidades móviles completamente equipadas para atender cualquier emergencia o servicio programado en el menor tiempo posible. También realizamos servicios en otras localidades del Maresme bajo consulta.
            </p>
          </div>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47894.77290853536!2d2.4033366!3d41.5381574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4b5c98a0a7291%3A0x50f7f15373c6840!2sMatar%C3%B3%2C%20Barcelona!5e0!3m2!1sen!2ses!4v1709934567890!5m2!1sen!2ses"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de servicio"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
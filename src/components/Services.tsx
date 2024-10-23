import React from 'react';
import { Droplets, Wrench, Camera, ShieldCheck, Clock, Container } from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Desatascos y Limpieza',
    description: 'Servicio profesional de desatascos mediante las últimas tecnologías en hidrolimpieza a alta presión. Eliminamos eficazmente atascos en tuberías, desagües, alcantarillas y fosas sépticas. Utilizamos equipos especializados para garantizar una limpieza profunda sin dañar sus instalaciones. Ideal para comunidades de vecinos, industrias y particulares.'
  },
  {
    icon: Container,
    title: 'Mantenimiento de Tuberías',
    description: 'Programa completo de mantenimiento preventivo para sistemas de tuberías. Incluye inspección regular, limpieza programada y tratamientos anti-raíces. Prevenimos obstrucciones y detectamos problemas potenciales antes de que se conviertan en emergencias costosas. Servicio especialmente recomendado para hoteles, restaurantes e industrias.'
  },
  {
    icon: Wrench,
    title: 'Reparaciones Especializadas',
    description: 'Reparación profesional de todo tipo de averías en sistemas de fontanería y alcantarillado. Desde pequeñas fugas hasta rehabilitación completa de tuberías sin obras mediante tecnología sin zanja. Solucionamos problemas de bajantes, arquetas, colectores y acometidas. Garantizamos reparaciones duraderas con los mejores materiales del mercado.'
  },
  {
    icon: Camera,
    title: 'Inspección con Cámara TV',
    description: 'Diagnóstico preciso mediante cámaras de última generación con grabación en HD. Localizamos exactamente el problema en sus tuberías, evitando obras innecesarias. Incluye informe detallado con imágenes y recomendaciones. Ideal para certificaciones de estado de instalaciones y detección de fugas ocultas.'
  },
  {
    icon: ShieldCheck,
    title: 'Impermeabilización Profesional',
    description: 'Soluciones efectivas contra humedades y filtraciones utilizando productos de alta calidad. Tratamos terrazas, cubiertas, fachadas y sótanos. Aplicamos sistemas impermeabilizantes de última generación con garantía de resultados. Incluye diagnóstico previo y estudio de la mejor solución para cada caso.'
  },
  {
    icon: Clock,
    title: 'Servicios de Emergencia',
    description: 'Respuesta rápida a emergencias de fontanería de lunes a viernes de 7h a 18h. Equipo profesional preparado para actuar ante inundaciones, atascos graves o roturas de tuberías. Disponemos de unidades móviles equipadas con toda la maquinaria necesaria para resolver cualquier emergencia.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Servicios Profesionales de Fontanería y Desatascos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            En Desatascos Mataró JMassa ofrecemos soluciones integrales para todas sus necesidades de fontanería y mantenimiento de instalaciones. Con más de 40 años de experiencia en el sector, garantizamos un servicio profesional, rápido y eficaz. Utilizamos tecnología de última generación y contamos con personal altamente cualificado para asegurar los mejores resultados.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir Desatascos Mataró JMassa?
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <li className="flex items-start">
              <ShieldCheck className="w-5 h-5 text-blue-600 mr-2 mt-1" />
              <span>Empresa homologada con todas las certificaciones necesarias</span>
            </li>
            <li className="flex items-start">
              <ShieldCheck className="w-5 h-5 text-blue-600 mr-2 mt-1" />
              <span>Personal técnico altamente cualificado y en formación continua</span>
            </li>
            <li className="flex items-start">
              <ShieldCheck className="w-5 h-5 text-blue-600 mr-2 mt-1" />
              <span>Maquinaria y equipos de última generación</span>
            </li>
            <li className="flex items-start">
              <ShieldCheck className="w-5 h-5 text-blue-600 mr-2 mt-1" />
              <span>Presupuestos detallados sin compromiso</span>
            </li>
            <li className="flex items-start">
              <ShieldCheck className="w-5 h-5 text-blue-600 mr-2 mt-1" />
              <span>Garantía de satisfacción en todos nuestros trabajos</span>
            </li>
            <li className="flex items-start">
              <ShieldCheck className="w-5 h-5 text-blue-600 mr-2 mt-1" />
              <span>Seguro de responsabilidad civil</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
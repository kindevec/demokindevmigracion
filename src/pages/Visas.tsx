import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Users, Building, ArrowRight, CheckCircle2 } from 'lucide-react';

const visaTypes = [
  {
    id: 'trabajo',
    title: 'Visas de Trabajo (Skilled Worker)',
    icon: Briefcase,
    description: 'Para profesionales calificados que cuentan con una oferta laboral o buscan residir por sus propios méritos profesionales.',
    requirements: [
      'Oferta laboral válida (si aplica)',
      'Demostración de experiencia profesional (3-5 años)',
      'Certificación de nivel de idioma',
      'Evaluación de títulos académicos'
    ]
  },
  {
    id: 'estudio',
    title: 'Visas de Estudiante',
    icon: GraduationCap,
    description: 'Orientada a jóvenes y adultos que desean cursar estudios de educación superior, maestrías o doctorados en el exterior.',
    requirements: [
      'Carta de aceptación de la institución',
      'Solvencia económica demostrable',
      'Seguro médico internacional',
      'Pasaporte vigente'
    ]
  },
  {
    id: 'familia',
    title: 'Reunificación Familiar',
    icon: Users,
    description: 'Para ciudadanos o residentes permanentes que desean traer a su cónyuge, hijos o padres a vivir con ellos legalmente.',
    requirements: [
      'Certificados de matrimonio / nacimiento',
      'Prueba de estatus migratorio del patrocinador',
      'Demostración de capacidad económica',
      'Historial de relación comprobable'
    ]
  },
  {
    id: 'inversion',
    title: 'Visas de Inversionista',
    icon: Building,
    description: 'Para empresarios que desean iniciar operaciones o invertir un capital sustancial en el país de destino.',
    requirements: [
      'Plan de negocios detallado',
      'Origen lícito de fondos',
      'Creación de empleos locales (según el país)',
      'Inversión mínima requerida cumplida'
    ]
  }
];

export default function Visas() {
  return (
    <div className="py-12 md:py-24 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Portafolio de Servicios</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" style={{ textWrap: 'balance' }}>
            Tipos de Visado y Requisitos
          </h1>
          <p className="text-lg text-slate-600">
            Cada perfil es único. Conoce las opciones migratorias más populares y los requisitos generales para cada programa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visaTypes.map((visa, index) => {
            const Icon = visa.icon;
            return (
              <motion.div 
                key={visa.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-primary/5 p-4 rounded-2xl">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">{visa.title}</h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">{visa.description}</p>
                    
                    <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      Requisitos Principales
                    </h3>
                    <ul className="space-y-3 mb-8">
                      {visa.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600">
                          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>

                    <a 
                      href={`https://wa.me/593991952889?text=Hola,%20deseo%20asesoría%20sobre%20la%20Visa%20de%20${visa.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors group"
                    >
                      Consultar este visado
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

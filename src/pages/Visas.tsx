import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, GraduationCap, Home as HomeIcon, Laptop, Landmark, Clock, FileText, CheckCircle2, ArrowRight, X, Send } from 'lucide-react';

interface VisaProgram {
  id: string;
  title: string;
  category: string;
  countries: string;
  timeframe: string;
  description: string;
  icon: ReactNode;
  features: string[];
  requirements: string[];
  highlight: boolean;
}

const visaPrograms: VisaProgram[] = [
  {
    id: 'work-express',
    title: 'Visado de Trabajo Especializado',
    category: 'Trabajo',
    countries: 'Canadá, Alemania, Australia',
    timeframe: '3 a 6 meses',
    description: 'Para profesionales calificados, ingenieros, tecnólogos y talentos en salud o TI que buscan una oferta laboral formal o permiso de trabajo.',
    icon: <Briefcase size={26} strokeWidth={1.5} className="gold-accent" />,
    features: ['Patrocinio corporativo y LMIA', 'Permiso Abierto para Cónyuge', 'Vía directa hacia la Residencia Permanente', 'Homologación técnica y académica'],
    requirements: [
      'Título Profesional o Técnico verificado (WES / Anabin)',
      'Demostración de experiencia laboral (Mínimo 1-2 años)',
      'Nivel de idioma intermedio (IELTS / B2 Alemán o Inglés)',
      'Certificados de antecedentes penales limpios'
    ],
    highlight: true
  },
  {
    id: 'study-postgrad',
    title: 'Visado de Estudio y Posgrado',
    category: 'Estudio',
    countries: 'Canadá, España, Australia, Alemania',
    timeframe: '2 a 4 meses',
    description: 'Estudia en universidades y colleges internacionales de primer nivel con permiso de trabajo durante y después de graduarte (PGWP).',
    icon: <GraduationCap size={26} strokeWidth={1.5} className="gold-accent" />,
    features: ['Permiso laboral de 20h/semana', 'PGWP de hasta 3 años post-graduación', 'Opción de viajar con familia/dependientes', 'Becas parciales y financiamiento'],
    requirements: [
      'Carta de Aceptación (LOA) de institución acreditada (DLI)',
      'Demostración de fondos de manutención y matrícula',
      'Certificado de suficiencia de idioma',
      'Pasaporte vigente'
    ],
    highlight: false
  },
  {
    id: 'digital-nomad',
    title: 'Visa Nómada Digital & Teletrabajo',
    category: 'Nómada Digital',
    countries: 'España, Portugal, Grecia',
    timeframe: '1 a 3 meses',
    description: 'Trabaja remotamente para empresas extranjeras o como freelancer mientras vives en el sur de Europa con beneficios fiscales.',
    icon: <Laptop size={26} strokeWidth={1.5} className="gold-accent" />,
    features: ['Acreditación de ingresos remotos', 'Renovación de hasta 5 años', 'Libre tránsito por espacio Schengen', 'Beneficio fiscal Impuesto Beckham'],
    requirements: [
      'Contrato laboral remoto o clientes internacionales',
      'Ingresos mínimos acreditables (~$2,500 - $3,000 USD/mes)',
      'Seguro médico privado con cobertura completa',
      'Carecer de antecedentes penales'
    ],
    highlight: false
  },
  {
    id: 'family-reunification',
    title: 'Reagrupación & Residencia Familiar',
    category: 'Residencia',
    countries: 'Estados Unidos, Canadá, España',
    timeframe: '4 a 12 meses',
    description: 'Reúnete legalmente con tu cónyuge, hijos o padres residentes en el extranjero con plenos derechos civiles y de salud.',
    icon: <HomeIcon size={26} strokeWidth={1.5} className="gold-accent" />,
    features: ['Patrocinio conyugal de residente/ciudadano', 'Permisos de trabajo automáticos', 'Acceso a sistema público de salud', 'Ruta hacia la ciudadanía'],
    requirements: [
      'Prueba de vínculo familiar legítimo (Partidas / Certificados)',
      'Solvencia económica del patrocinador en el país de destino',
      'Exámenes médicos aprobados',
      'Verificación consular de antecedentes'
    ],
    highlight: false
  },
  {
    id: 'investor-golden',
    title: 'Residencia por Inversión (Golden Visa)',
    category: 'Inversión',
    countries: 'Estados Unidos (EB-5), España, Portugal',
    timeframe: '6 a 12 meses',
    description: 'Obtén residencia permanente para ti y tu familia mediante inversión inmobiliaria o desarrollo empresarial estratégico.',
    icon: <Landmark size={26} strokeWidth={1.5} className="gold-accent" />,
    features: ['Sin requisito estricto de residencia física', 'Inclusión de cónyuge e hijos dependientes', 'Extensión a residencia permanente', 'Libre movilidad comercial'],
    requirements: [
      'Demostración del origen lícito de los fondos',
      'Monto de inversión según regulación local',
      'Apertura de cuenta bancaria internacional',
      'Inexistencia de antecedentes penales'
    ],
    highlight: false
  }
];

export default function Visas() {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [selectedVisaModal, setSelectedVisaModal] = useState<VisaProgram | null>(null);

  const categories = ['Todas', 'Trabajo', 'Estudio', 'Nómada Digital', 'Residencia', 'Inversión'];

  const filteredVisas = selectedCategory === 'Todas' 
    ? visaPrograms 
    : visaPrograms.filter(v => v.category === selectedCategory);

  return (
    <section id="visas" className="w-full py-16 md:py-24 bg-cream text-navy font-sans border-t border-navy/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-gold block">Programas Migratorios Oficiales</span>
          <h1 className="text-4xl md:text-5xl font-serif italic text-navy">Catálogo de Visados Internacionales</h1>
          <p className="text-sm md:text-base opacity-75 leading-relaxed">
            Sistemas de inmigración estructurados para profesionales, estudiantes y familias. Selecciona una categoría para examinar requisitos y vías de aplicación.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all ${
                selectedCategory === cat 
                  ? 'bg-navy text-gold border border-gold shadow-md' 
                  : 'bg-white text-navy border border-gray-200 hover:border-gold/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Visas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVisas.map((visa, index) => (
            <motion.div
              key={visa.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`glass-card p-8 flex flex-col justify-between h-full group hover:border-gold transition-all relative ${visa.highlight ? 'border-gold shadow-lg' : ''}`}
            >
              {visa.highlight && (
                <span className="absolute top-4 right-4 bg-navy text-gold text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 border border-gold/40">
                  Más Solicitada
                </span>
              )}

              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="w-12 h-12 bg-navy/5 border border-gold/30 rounded-sm flex items-center justify-center">
                    {visa.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-navy/60 flex items-center gap-1">
                    <Clock size={12} className="gold-accent" /> {visa.timeframe}
                  </span>
                </div>
                
                <h3 className="text-base font-bold uppercase tracking-wider mb-2 text-navy">{visa.title}</h3>
                <p className="text-xs text-gold font-bold uppercase tracking-wider mb-4">Destinos: {visa.countries}</p>
                
                <p className="text-xs opacity-70 leading-relaxed mb-6">
                  {visa.description}
                </p>

                <div className="space-y-2.5 mb-8 pt-4 border-t border-navy/10">
                  {visa.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="gold-accent shrink-0 mt-0.5" />
                      <span className="text-xs text-navy/80 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-navy/10 mt-auto">
                <button
                  onClick={() => setSelectedVisaModal(visa)}
                  className="w-full py-2.5 border border-navy/20 text-navy font-bold uppercase tracking-widest text-[11px] text-center hover:border-gold hover:text-gold transition-colors rounded-sm flex items-center justify-center gap-2"
                >
                  <FileText size={14} />
                  <span>Ver Requisitos Detallados</span>
                </button>

                <a
                  href={`https://wa.me/593991952889?text=Hola%2C%20deseo%20evaluar%20mi%20perfil%20para%20el%20${encodeURIComponent(visa.title)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-navy text-white font-bold uppercase tracking-widest text-[11px] text-center hover:bg-navy/90 transition-colors rounded-sm flex items-center justify-center gap-2 group"
                >
                  <span>Evaluación de Perfil</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Requirements Modal */}
        <AnimatePresence>
          {selectedVisaModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-cream border-2 border-gold max-w-2xl w-full p-8 rounded-sm shadow-2xl relative max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedVisaModal(null)}
                  className="absolute top-4 right-4 p-2 text-navy/60 hover:text-navy hover:bg-navy/5 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-navy border border-gold rounded-sm">
                    {selectedVisaModal.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gold block">Ficha Técnica</span>
                    <h3 className="text-xl font-serif font-bold text-navy">{selectedVisaModal.title}</h3>
                  </div>
                </div>

                <div className="bg-navy/5 p-4 rounded-sm text-xs space-y-1 mb-6 text-navy/80">
                  <p><strong>Destinos Disponibles:</strong> {selectedVisaModal.countries}</p>
                  <p><strong>Tiempo Estimado Consular:</strong> {selectedVisaModal.timeframe}</p>
                </div>

                <h4 className="text-xs font-bold uppercase tracking-widest text-navy mb-4 flex items-center gap-2">
                  <FileText size={16} className="gold-accent" />
                  <span>Requisitos Documentales Clave</span>
                </h4>

                <ul className="space-y-3 mb-8">
                  {selectedVisaModal.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs text-navy/80 font-medium bg-white p-3 border border-navy/10 rounded-sm">
                      <span className="w-5 h-5 rounded-full bg-navy text-gold font-bold text-[10px] flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/593991952889?text=Hola%2C%20tengo%20consultas%20sobre%20los%20requisitos%20para%20${encodeURIComponent(selectedVisaModal.title)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3.5 bg-[#25D366] text-white font-bold uppercase tracking-widest text-xs text-center rounded-sm hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={14} />
                    <span>Consultar por WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSelectedVisaModal(null)}
                    className="px-6 py-3.5 border border-navy/20 text-navy font-bold uppercase tracking-widest text-xs text-center rounded-sm hover:bg-navy/5 transition-colors"
                  >
                    Cerrar
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

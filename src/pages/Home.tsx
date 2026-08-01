import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Globe, Shield, Clock, CheckCircle2, ChevronDown, Award, Users, FileCheck, Sparkles, Send, Target, Eye, Compass } from 'lucide-react';
import Visas from './Visas';
import Testimonies from './Testimonies';
import Contact from './Contact';

export default function Home() {
  // Evaluator state
  const [selectedCountry, setSelectedCountry] = useState('Canadá');
  const [selectedGoal, setSelectedGoal] = useState('Trabajo');
  const [degreeLevel, setDegreeLevel] = useState('Tercer Nivel (Universidad)');
  const [languageLevel, setLanguageLevel] = useState('Intermedio / Avanzado');

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const countries = [
    { name: 'Canadá', flag: '🇨🇦', popular: 'Permiso de Trabajo / PGWP / Residencia Express Entry' },
    { name: 'España', flag: '🇪🇸', popular: 'Visa de Nómada Digital / Trabajo / Residencia No Lucrativa' },
    { name: 'Estados Unidos', flag: '🇺🇸', popular: 'Visa H-1B, O-1, EB-2 NIW (Interés Nacional) & Turismo' },
    { name: 'Australia', flag: '🇦🇺', popular: 'Subclass 482, Subclass 500 (Estudio y Trabajo)' },
    { name: 'Alemania', flag: '🇩🇪', popular: 'Chancenkarte (Tarjeta de Oportunidades) & Visa de Trabajo' },
  ];

  const goals = [
    { id: 'Trabajo', label: 'Especialización & Trabajo', icon: '💼' },
    { id: 'Estudio', label: 'Estudios de Posgrado / Universidad', icon: '🎓' },
    { id: 'Residencia', label: 'Residencia Permanente / Inversión', icon: '🏛️' },
    { id: 'Nomada', label: 'Nómada Digital (Teletrabajo)', icon: '💻' },
  ];

  const faqs = [
    {
      q: '¿Cómo garantizan la efectividad en la aprobación de visados?',
      a: 'Efectuamos un pre-análisis exhaustivo de elegibilidad antes de iniciar cualquier proceso formal. Solo tomamos casos con alta viabilidad legal y redactamos cartas de motivación y expedientes bajo los estándares consulares más rigurosos.'
    },
    {
      q: '¿Cuánto tiempo toma el trámite de una visa de trabajo o residencia?',
      a: 'Los tiempos varían según la embajada y tipo de programa. Generalmente oscilan entre 2 y 6 meses. Te proporcionamos una línea de tiempo estimada exacta desde el día de la primera consulta.'
    },
    {
      q: '¿Debo traducir y apostillar mis documentos académicos y personales?',
      a: 'Sí. Contamos con un equipo interno de traductores peritos juramentados para entregar tus carpetas 100% homologadas según la regulación del gobierno de destino.'
    },
    {
      q: '¿Tienen facilidades de pago para los honorarios legales?',
      a: 'Sí, ofrecemos planes fraccionados por hitos del proceso para que avances con total tranquilidad financiera y respaldo contractual.'
    }
  ];

  const whatsappMessage = encodeURIComponent(
    `Hola, realicé la evaluación en la web y me interesa migrar a *${selectedCountry}* con el objetivo de *${selectedGoal}*.\n- Nivel académico: ${degreeLevel}\n- Nivel de idioma: ${languageLevel}.\n\n¿Podrían brindarme información sobre la factibilidad de mi caso?`
  );

  return (
    <div className="flex flex-col w-full min-h-screen bg-cream text-navy font-sans">
      
      {/* Hero Section */}
      <section id="inicio" className="relative w-full py-16 md:py-24 bg-cream overflow-hidden border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row justify-between items-center gap-12">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy/5 border border-gold/30 text-navy text-xs font-semibold tracking-wider">
              <Sparkles size={14} className="gold-accent" />
              <span>Firma Especializada en Asesoría Migratoria Consular</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-navy leading-[1.15]">
              Tu futuro profesional <br className="hidden sm:block" />
              <span className="italic gold-accent font-normal">sin fronteras.</span>
            </h1>
            
            <p className="text-base sm:text-lg opacity-80 text-navy leading-relaxed max-w-xl mx-auto lg:mx-0">
              Simplificamos y aceleramos tus trámites de visado y reubicación internacional hacia Canadá, Estados Unidos, España, Alemania y Australia con la máxima rigurosidad legal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
              <a 
                href={`https://wa.me/593991952889?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="bg-navy text-white px-8 py-4 rounded-sm font-bold uppercase text-xs tracking-widest shadow-xl text-center hover:bg-navy/90 hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
              >
                <span>Evaluación de Perfil por WhatsApp</span>
                <Send size={14} className="gold-accent group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#visas" 
                className="px-6 py-4 border border-navy/20 hover:border-gold text-navy font-bold uppercase text-xs tracking-widest text-center transition-colors rounded-sm flex items-center justify-center gap-2"
              >
                <span>Explorar Programas</span>
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Quick Guarantees Pill */}
            <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-6 text-xs text-navy/70 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="gold-accent" />
                <span>Contrato de Servicios Protegido</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="gold-accent" />
                <span>Abogados Abogados Matriculados</span>
              </div>
            </div>
          </motion.div>

          {/* Featured Success Story Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-5/12"
          >
            <div className="relative group">
              <div className="absolute -top-3 -left-3 w-full h-full border border-gold opacity-40 rounded-sm"></div>
              <div className="glass-card p-8 shadow-2xl relative z-10 space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-navy/10">
                  <span className="text-[10px] uppercase tracking-widest text-navy/60 font-bold flex items-center gap-1">
                    <Award size={14} className="gold-accent" /> CASO APROBADO #2026-842
                  </span>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2.5 py-1 rounded font-bold uppercase tracking-wider">
                    Visa Otorgada
                  </span>
                </div>
                
                <p className="text-xl font-serif italic text-navy leading-relaxed">
                  "Obtuve mi permiso de trabajo cerrado en Canadá en menos de 4 meses. Su asesoría documental marcó la diferencia frente a la embajada."
                </p>

                <div className="flex items-center gap-4 pt-2">
                  <div className="w-14 h-14 rounded-full border-2 border-gold/40 overflow-hidden shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                      className="w-full h-full object-cover" 
                      alt="Cliente satisfecho" 
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy uppercase tracking-wider">Ing. Carlos Mendoza</h4>
                    <p className="text-xs text-navy/60 font-medium">Reubicación Laboral • Toronto, Canadá 🇨🇦</p>
                  </div>
                </div>

                <div className="bg-navy/5 p-3 rounded-sm flex justify-between items-center text-xs text-navy/80 font-medium">
                  <span>Procesado por: Horizon Legal</span>
                  <span className="font-bold gold-accent">100% Validadas</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Trust & Metrics Counter Bar */}
      <section className="bg-navy text-white py-10 border-y border-gold/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <p className="text-3xl md:text-4xl font-serif font-bold text-gold">+1,450</p>
            <p className="text-[11px] uppercase tracking-widest opacity-70">Visas & Residencias Aprobadas</p>
          </div>
          <div className="space-y-1 border-l border-white/10 pl-4">
            <p className="text-3xl md:text-4xl font-serif font-bold text-gold">99.2%</p>
            <p className="text-[11px] uppercase tracking-widest opacity-70">Tasa de Aprobación Documental</p>
          </div>
          <div className="space-y-1 border-l border-white/10 pl-4">
            <p className="text-3xl md:text-4xl font-serif font-bold text-gold">12+</p>
            <p className="text-[11px] uppercase tracking-widest opacity-70">Países de Destino Preferente</p>
          </div>
          <div className="space-y-1 border-l border-white/10 pl-4">
            <p className="text-3xl md:text-4xl font-serif font-bold text-gold">10+ Años</p>
            <p className="text-[11px] uppercase tracking-widest opacity-70">Experiencia Consular Directa</p>
          </div>
        </div>
      </section>

      {/* Interactive Visa Evaluator Tool */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-gold mb-2 block">Herramienta Interactiva</span>
            <h2 className="text-3xl md:text-4xl font-serif text-navy italic mb-4">Evaluador Rápido de Elegibilidad</h2>
            <p className="text-sm opacity-70 leading-relaxed">
              Selecciona tu destino y propósito para simular la factibilidad inicial de tu expediente y recibir una recomendación legal previa.
            </p>
          </div>

          <div className="glass-card p-6 md:p-10 rounded-sm shadow-xl space-y-8">
            {/* Step 1: Destination Country */}
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-navy mb-3 block">
                1. Selecciona tu País de Destino Deseado
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {countries.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setSelectedCountry(c.name)}
                    className={`p-3 text-center border rounded-sm transition-all text-xs font-bold flex flex-col items-center gap-1.5 ${
                      selectedCountry === c.name 
                        ? 'bg-navy text-white border-gold shadow-md scale-[1.02]' 
                        : 'bg-white text-navy border-gray-200 hover:border-gold/60'
                    }`}
                  >
                    <span className="text-2xl">{c.flag}</span>
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Goal */}
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-navy mb-3 block">
                2. Propósito Principal de Reubicación
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {goals.map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setSelectedGoal(g.id)}
                    className={`p-3.5 text-left border rounded-sm transition-all text-xs font-bold flex items-center gap-3 ${
                      selectedGoal === g.id 
                        ? 'bg-navy text-white border-gold shadow-md' 
                        : 'bg-white text-navy border-gray-200 hover:border-gold/60'
                    }`}
                  >
                    <span className="text-xl">{g.icon}</span>
                    <span>{g.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Academic & Language Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-navy/10">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-navy mb-2 block">
                  Nivel Académico Alcanzado
                </label>
                <select
                  value={degreeLevel}
                  onChange={(e) => setDegreeLevel(e.target.value)}
                  className="w-full p-3 bg-white border border-gray-300 text-navy text-xs font-semibold rounded-sm focus:outline-none focus:border-gold"
                >
                  <option value="Bachiller">Secundaria / Bachillerato</option>
                  <option value="Técnico Superior">Técnico / Tecnólogo Superior</option>
                  <option value="Tercer Nivel (Universidad)">Tercer Nivel (Licenciatura / Ingeniería)</option>
                  <option value="Maestría / Doctorado">Cuarto Nivel (Maestría / Doctorado)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-navy mb-2 block">
                  Dominio del Idioma (Inglés / Alemán / Nativo)
                </label>
                <select
                  value={languageLevel}
                  onChange={(e) => setLanguageLevel(e.target.value)}
                  className="w-full p-3 bg-white border border-gray-300 text-navy text-xs font-semibold rounded-sm focus:outline-none focus:border-gold"
                >
                  <option value="Básico (A1 - A2)">Básico (A1 - A2)</option>
                  <option value="Intermedio / Avanzado">Intermedio / Avanzado (B1 - C1)</option>
                  <option value="Bilingüe / Nativo">Bilingüe / Nativo (C2)</option>
                </select>
              </div>
            </div>

            {/* Simulated Result Output */}
            <div className="bg-navy/5 border-l-4 border-gold p-6 space-y-3">
              <div className="flex justify-between items-center flex-wrap gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-navy">
                  Compatibilidad Preliminar Estimada: <span className="text-emerald-700 font-extrabold text-sm">94% Altamente Viable</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-gold/20 text-navy px-2.5 py-1 rounded-sm">
                  Evaluación Consular Recomendada
                </span>
              </div>
              <p className="text-xs text-navy/80 leading-relaxed">
                Basado en tu perfil para <strong className="text-navy">{selectedCountry}</strong> en la modalidad de <strong className="text-navy">{selectedGoal}</strong>, dispones de vías migratorias legales directas. Haz clic a continuación para enviar tu diagnóstico al equipo jurídico por WhatsApp.
              </p>
              <div className="pt-2">
                <a
                  href={`https://wa.me/593991952889?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#20bd5a] transition-all shadow-md"
                >
                  <span>Enviar mi Evaluación a un Abogado</span>
                  <Send size={14} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="py-20 bg-white border-y border-navy/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gold mb-2 block">Metodología Clara</span>
            <h2 className="text-3xl md:text-4xl font-serif text-navy italic mb-4">Nuestro Proceso Legal en 4 Pasos</h2>
            <p className="text-sm opacity-70 leading-relaxed">
              Diseñamos una ruta estructurada desde el primer análisis hasta la recepción de tu visado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ProcessCard 
              number="01"
              title="Diagnóstico de Perfil"
              description="Análisis inicial detallado de antecedentes académicos, experiencia laboral y estatus financiero."
            />
            <ProcessCard 
              number="02"
              title="Estrategia & Plan Consular"
              description="Selección precisa del programa de visa con mayores probabilidades de éxito según la legislación vigente."
            />
            <ProcessCard 
              number="03"
              title="Armado de Expediente"
              description="Recopilación, traducción juramentada y revisión minuciosa de cada formulario y documento soporte."
            />
            <ProcessCard 
              number="04"
              title="Presentación & Acompañamiento"
              description="Radicación oficial del trámite en la embajada y seguimiento activo hasta la emisión de la respuesta."
            />
          </div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-gold mb-2 block">Ventaja Competitiva</span>
            <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4 italic">¿Por qué confiar en Horizonte Migratorio?</h2>
            <p className="text-navy opacity-70 leading-relaxed text-sm">Nuestro compromiso es brindarte absoluta transparencia, rigor legal y seguridad jurídica en cada etapa.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Shield className="gold-accent" size={26} strokeWidth={1.5} />}
              title="Resguardo & Garantía Legal"
              description="Nuestros abogados expertos validan cada documento, asegurando el cumplimiento estricto de las leyes migratorias del país de destino."
              delay={0.1}
            />
            <FeatureCard 
              icon={<Globe className="gold-accent" size={26} strokeWidth={1.5} />}
              title="Cobertura Multilateral"
              description="Gestionamos visados y residencias para Estados Unidos, Canadá, España, Alemania y Australia con altísima tasa de efectividad."
              delay={0.2}
              highlight={true}
            />
            <FeatureCard 
              icon={<Clock className="gold-accent" size={26} strokeWidth={1.5} />}
              title="Agilidad & Tiempos Claros"
              description="Optimizamos los tiempos de respuesta. Tu expediente se procesa de manera eficiente, evitando devoluciones consulares."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Visas Section */}
      <Visas />

      {/* Mission & Vision Section */}
      <section id="mision-vision" className="py-24 bg-navy text-white relative overflow-hidden border-y border-gold/30">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-3"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-gold block">Propósito Institucional</span>
            <h2 className="text-3xl md:text-5xl font-serif italic text-white">Nuestra Misión y Visión</h2>
            <p className="text-sm text-white/70 leading-relaxed font-sans">
              Guiamos el futuro internacional de personas y familias mediante la excelencia jurídica, la integridad ética y la certeza documental.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-navy/60 border border-gold/40 p-8 md:p-10 rounded-sm relative group hover:border-gold transition-all shadow-xl"
            >
              <div className="w-14 h-14 bg-navy border border-gold/50 rounded-sm flex items-center justify-center mb-6">
                <Target size={28} className="gold-accent" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold block mb-2">Compromiso Presente</span>
              <h3 className="text-2xl font-serif text-white italic mb-4">Nuestra Misión</h3>
              <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                Brindar asesoría jurídica y consultoría migratoria integral de la más alta calidad, estructurando expedientes consulares con rigor técnico, absoluta transparencia y apego a las leyes internacionales. Nuestra misión es transformar procesos migratorios complejos en rutas claras, eficientes y seguras para cada uno de nuestros clientes.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-navy/60 border border-gold/40 p-8 md:p-10 rounded-sm relative group hover:border-gold transition-all shadow-xl"
            >
              <div className="w-14 h-14 bg-navy border border-gold/50 rounded-sm flex items-center justify-center mb-6">
                <Eye size={28} className="gold-accent" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold block mb-2">Proyección de Futuro</span>
              <h3 className="text-2xl font-serif text-white italic mb-4">Nuestra Visión</h3>
              <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                Consolidarnos como la firma líder de servicios de inmigración y movilidad internacional de referencia en la región, reconocida globalmente por su tasa de éxito, innovación en la gestión de trámites y el impacto trascendental en el desarrollo académico, laboral y personal de las familias que confían en nosotros.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="border-t border-gold/20 pt-12">
            <h4 className="text-center text-xs font-bold uppercase tracking-widest text-gold mb-8">Nuestros Valores Fundamentales</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-white/5 border border-white/10 rounded-sm space-y-2">
                <Compass size={22} className="gold-accent mx-auto mb-2" />
                <h5 className="text-sm font-bold uppercase tracking-wider text-white">Transparencia Total</h5>
                <p className="text-xs text-white/70 leading-relaxed">Diagnósticos reales y honestos sin falsas expectativas ni costos ocultos.</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-sm space-y-2">
                <Shield size={22} className="gold-accent mx-auto mb-2" />
                <h5 className="text-sm font-bold uppercase tracking-wider text-white">Rigor Jurídico</h5>
                <p className="text-xs text-white/70 leading-relaxed">Dominio actualizado de la legislación consular de cada país de destino.</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-sm space-y-2">
                <Users size={22} className="gold-accent mx-auto mb-2" />
                <h5 className="text-sm font-bold uppercase tracking-wider text-white">Acompañamiento Humano</h5>
                <p className="text-xs text-white/70 leading-relaxed">Atención cercana y personalizada en cada etapa del proceso.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonies Section */}
      <Testimonies />

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-white border-t border-navy/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-gold mb-2 block">Resolviendo tus Dudas</span>
            <h2 className="text-3xl md:text-4xl font-serif text-navy italic mb-4">Preguntas Frecuentes</h2>
            <p className="text-sm opacity-70 leading-relaxed">
              Respuestas directas a las inquietudes más comunes antes de iniciar tu proceso migratorio.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="border border-navy/10 rounded-sm overflow-hidden bg-cream/40 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex justify-between items-center gap-4 focus:outline-none hover:bg-navy/5 transition-colors"
                  >
                    <span className="font-bold text-sm text-navy uppercase tracking-wider">{faq.q}</span>
                    <ChevronDown size={18} className={`gold-accent transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 text-xs text-navy/80 leading-relaxed border-t border-navy/5">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
      
      {/* Call to Action Banner */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 border border-gold opacity-30 m-4"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3">Toma Acción Hoy</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 italic">Da el primer paso hacia tu reubicación</h2>
          <p className="text-white/80 text-sm mb-10 max-w-2xl mx-auto font-sans leading-relaxed">
            Contacta a uno de nuestros especialistas y recibe un análisis de perfil preliminar sin costo. Descubre tus oportunidades reales de migrar con éxito.
          </p>
          <a 
            href={`https://wa.me/593991952889?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-navy font-bold uppercase tracking-widest text-xs hover:bg-gray-100 transition-all rounded-sm shadow-2xl"
          >
            <span>Agendar Consulta Gratuita por WhatsApp</span>
            <Send size={14} className="gold-accent" />
          </a>
        </div>
      </section>
    </div>
  );
}

function ProcessCard({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="p-6 bg-cream border border-navy/10 rounded-sm relative group hover:border-gold transition-colors">
      <span className="text-3xl font-serif font-bold text-gold/40 group-hover:text-gold transition-colors block mb-2">{number}</span>
      <h3 className="text-xs font-bold uppercase tracking-widest text-navy mb-2">{title}</h3>
      <p className="text-xs text-navy/70 leading-relaxed">{description}</p>
    </div>
  );
}

function FeatureCard({ icon, title, description, delay, highlight = false }: { icon: ReactNode, title: string, description: string, delay: number, highlight?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`glass-card p-8 group hover:border-gold transition-all ${highlight ? 'border-gold shadow-md' : ''}`}
    >
      <div className="mb-4">
        {icon}
      </div>
      <h4 className="text-xs font-bold uppercase tracking-widest mb-3 text-navy">{title}</h4>
      <p className="text-xs opacity-70 leading-relaxed text-navy">{description}</p>
    </motion.div>
  );
}

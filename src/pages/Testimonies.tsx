import { useState } from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, MapPin, Send, MessageSquareQuote } from 'lucide-react';

interface Testimony {
  id: number;
  name: string;
  profession: string;
  origin: string;
  destination: string;
  destCode: string;
  program: string;
  year: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonies: Testimony[] = [
  {
    id: 842,
    name: 'Ing. Carlos Mendoza',
    profession: 'Ingeniero de Software',
    origin: 'Colombia 🇨🇴',
    destination: 'Canadá 🇨🇦',
    destCode: 'Canadá',
    program: 'Permiso de Trabajo / PGWP',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
    quote: 'Gracias a Horizonte Migratorio obtuve mi visa de trabajo en tiempo récord. El equipo legal fue sumamente transparente y me acompañaron hasta el día de mi llegada a Toronto.',
    rating: 5
  },
  {
    id: 791,
    name: 'Andrea & Roberto Gómez',
    profession: 'Familia Emprendedora',
    origin: 'Ecuador 🇪🇨',
    destination: 'España 🇪🇸',
    destCode: 'España',
    program: 'Residencia No Lucrativa / Nómada Digital',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=800&auto=format&fit=crop',
    quote: 'Logramos la residencia legal en Madrid para toda nuestra familia. Lo que parecía un laberinto burocrático lleno de requisitos, ellos lo convirtieron en un camino estructurado y seguro.',
    rating: 5
  },
  {
    id: 654,
    name: 'Dra. Sofía Valdés',
    profession: 'Médica Especialista',
    origin: 'México 🇲🇽',
    destination: 'Australia 🇦🇺',
    destCode: 'Australia',
    program: 'Visa de Estudio & Especialización (Subclass 500)',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    quote: 'Mi sueño de hacer un posgrado en Sydney se cumplió. Me asesoraron no solo con la visa, sino en cómo proyectar mi perfil para la acreditación profesional posterior.',
    rating: 5
  },
  {
    id: 588,
    name: 'Lic. Javier Domínguez',
    profession: 'Gerente Financiero',
    origin: 'Perú 🇵🇪',
    destination: 'Estados Unidos 🇺🇸',
    destCode: 'Estados Unidos',
    program: 'Visa EB-2 NIW / Trabajo Especializado',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    quote: 'Tras un rechazo previo intentando la aplicación por mi cuenta, acudí a Horizonte. Corrigieron el enfoque del expediente y logramos la aprobación sin contratiempos.',
    rating: 5
  },
  {
    id: 512,
    name: 'Arq. Mateo Silva',
    profession: 'Arquitecto & Diseñador',
    origin: 'Chile 🇨🇱',
    destination: 'Alemania 🇩🇪',
    destCode: 'Alemania',
    program: 'Chancenkarte (Búsqueda de Empleo)',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    quote: 'Me ayudaron con la convalidación de mi título ante el ministerio alemán y la redacción del portafolio. Hoy ya trabajo en Berlín con contrato indefinido.',
    rating: 5
  }
];

export default function Testimonies() {
  const [selectedFilter, setSelectedFilter] = useState('Todos');

  const filterOptions = ['Todos', 'Canadá', 'España', 'Estados Unidos', 'Australia', 'Alemania'];

  const filteredTestimonies = selectedFilter === 'Todos'
    ? testimonies
    : testimonies.filter(t => t.destCode === selectedFilter);

  return (
    <section id="testimonios" className="w-full py-16 md:py-24 bg-cream text-navy font-sans border-t border-navy/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-gold block">Casos Reales Verificados</span>
          <h1 className="text-4xl md:text-5xl font-serif italic text-navy">Historias de Éxito Migratorio</h1>
          <p className="text-sm md:text-base opacity-75 leading-relaxed">
            Testimonios transparentes de profesionales y familias que alcanzaron su visa y residencia internacional con el acompañamiento de nuestro equipo jurídico.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterOptions.map((country) => (
            <button
              key={country}
              onClick={() => setSelectedFilter(country)}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all ${
                selectedFilter === country 
                  ? 'bg-navy text-gold border border-gold shadow-md' 
                  : 'bg-white text-navy border border-gray-200 hover:border-gold/60'
              }`}
            >
              {country}
            </button>
          ))}
        </div>

        {/* Testimonies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredTestimonies.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 flex flex-col justify-between group hover:border-gold transition-all relative rounded-sm shadow-md"
            >
              <div>
                <div className="flex justify-between items-center pb-4 mb-4 border-b border-navy/10">
                  <div className="flex items-center gap-1.5 text-xs text-navy/60 font-bold uppercase tracking-wider">
                    <ShieldCheck size={16} className="gold-accent" />
                    <span>Expediente #{item.id}</span>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2.5 py-1 rounded font-bold uppercase tracking-wider">
                    Visa Consular Aprobada
                  </span>
                </div>

                <div className="flex items-center gap-1 mb-4 text-gold">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-sm sm:text-base font-serif italic text-navy/90 leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-navy/10 flex items-center justify-between flex-wrap gap-4 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/40 shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-navy">{item.name}</h4>
                    <p className="text-[11px] text-navy/60 font-medium">{item.profession}</p>
                    <p className="text-[10px] text-gold font-bold uppercase tracking-wider mt-0.5">{item.program}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-bold text-navy flex items-center gap-1 justify-end">
                    <MapPin size={12} className="gold-accent" />
                    <span>{item.origin} ➔ {item.destination}</span>
                  </span>
                  <span className="text-[10px] text-navy/50 font-medium uppercase tracking-wider">Año {item.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive CTA Banner */}
        <div className="bg-navy text-white p-8 md:p-12 rounded-sm border border-gold/30 text-center space-y-6 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <MessageSquareQuote size={40} className="gold-accent mx-auto" />
            <h3 className="text-2xl md:text-3xl font-serif italic text-white">¿Quieres ser nuestro próximo caso de éxito?</h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Solicita un estudio previo de viabilidad sin costo para conocer tus alternativas reales de visado.
            </p>
            <a
              href="https://wa.me/593991952889?text=Hola%2C%20vi%20sus%20casos%20de%20%C3%A9xito%20y%20quisiera%20evaluar%20mi%20perfil."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white text-navy px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-gold hover:text-navy transition-all shadow-xl"
            >
              <span>Consultar mi Perfil por WhatsApp</span>
              <Send size={14} className="gold-accent" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonios = [
  {
    id: 1,
    name: "Carlos Mendoza",
    from: "Colombia",
    to: "Canadá",
    text: "Horizonte Migratorio hizo que mi proceso de Express Entry fuera completamente transparente. Resolvieron todas mis dudas y en menos de un año ya estaba establecido en Toronto con mi familia. ¡Altamente recomendados!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    id: 2,
    name: "Laura y Miguel",
    from: "Ecuador",
    to: "España",
    text: "Nuestra visa no lucrativa fue aprobada en tiempo récord. Su asesoría legal nos ahorró muchísimos dolores de cabeza con la documentación. El acompañamiento es real y humano.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?w=150&h=150&fit=crop"
  },
  {
    id: 3,
    name: "Sofía Arango",
    from: "México",
    to: "Australia",
    text: "El sueño de estudiar y trabajar en Sídney se hizo realidad gracias a ustedes. Me guiaron desde la inscripción en el college hasta el momento en que me aprobaron la Student Visa.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  },
  {
    id: 4,
    name: "Javier Vargas",
    from: "Perú",
    to: "Estados Unidos",
    text: "Pensé que el trámite para mi visa de inversionista E2 sería una pesadilla burocrática. El equipo estructuró mi caso a la perfección y me brindó seguridad en todo momento.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
  }
];

export default function Testimonios() {
  return (
    <div className="py-12 md:py-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Casos de Éxito</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" style={{ textWrap: 'balance' }}>
            Historias Reales de Migración
          </h1>
          <p className="text-lg text-slate-600">
            Nada nos llena de más orgullo que ver a nuestros clientes cumplir sus metas en nuevos destinos.
          </p>
        </motion.div>

        {/* CSS Scroll Snap Carousel para móvil / Grid en Desktop */}
        <div className="flex overflow-x-auto pb-8 -mx-6 px-6 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:pb-0 md:px-0 snap-x snap-mandatory gap-6 scroll-smooth">
          {testimonios.map((testimonio, i) => (
            <motion.div 
              key={testimonio.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 min-w-[85vw] md:min-w-0 snap-center shrink-0 flex flex-col relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-100 -z-0" />
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonio.rating)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-slate-700 text-lg leading-relaxed mb-8 flex-grow relative z-10" style={{ textWrap: 'pretty' }}>
                "{testimonio.text}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10 mt-auto pt-6 border-t border-slate-50">
                <img 
                  src={testimonio.image} 
                  alt={`Foto de ${testimonio.name}`} 
                  className="w-14 h-14 rounded-full object-cover shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonio.name}</h4>
                  <p className="text-sm text-slate-500 font-medium">
                    De <span className="text-primary">{testimonio.from}</span> a <span className="text-primary">{testimonio.to}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contacto() {
  return (
    <div className="py-12 md:py-24 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Ponte en Contacto</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" style={{ textWrap: 'balance' }}>
            Inicia tu Proceso Hoy Mismo
          </h1>
          <p className="text-lg text-slate-600">
            Completa el formulario para una evaluación preliminar de tu perfil o contáctanos directamente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Formulario */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Formulario de Evaluación</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="text-sm font-medium text-slate-700">Nombre Completo *</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" 
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Correo Electrónico *</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:ring-red-500" 
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="telefono" className="text-sm font-medium text-slate-700">Teléfono (WhatsApp)</label>
                  <input 
                    type="tel" 
                    id="telefono" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" 
                    placeholder="+593 999 999 999"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="destino" className="text-sm font-medium text-slate-700">País de Destino</label>
                  <select 
                    id="destino" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white"
                  >
                    <option value="">Selecciona un país...</option>
                    <option value="can">Canadá</option>
                    <option value="usa">Estados Unidos</option>
                    <option value="esp">España</option>
                    <option value="aus">Australia</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="mensaje" className="text-sm font-medium text-slate-700">Cuéntanos sobre tu caso *</label>
                <textarea 
                  id="mensaje" 
                  required 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none field-sizing-content" 
                  placeholder="Explica brevemente tu objetivo migratorio..."
                  style={{ fieldSizing: 'content' } as any}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-light transition-colors shadow-md shadow-primary/20"
              >
                Enviar Solicitud de Evaluación
              </button>
            </form>
          </motion.div>

          {/* Info de Contacto */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Información Directa</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Si prefieres atención inmediata, no dudes en escribirnos por WhatsApp o visitarnos en nuestras oficinas (previa cita).
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">WhatsApp / Llamadas</h3>
                  <a href="https://wa.me/593991952889" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary transition-colors">
                    +593 99 195 2889
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Correo Electrónico</h3>
                  <a href="mailto:asesoria@horizontemigratorio.com" className="text-slate-600 hover:text-primary transition-colors">
                    asesoria@horizontemigratorio.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Oficina Central</h3>
                  <p className="text-slate-600">
                    Av. Principal y Calle Secundaria<br />
                    Edificio Corporativo, Piso 4<br />
                    Quito, Ecuador
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Horario de Atención</h3>
                  <p className="text-slate-600">
                    Lunes a Viernes: 09:00 AM - 18:00 PM<br />
                    Sábados: 10:00 AM - 14:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

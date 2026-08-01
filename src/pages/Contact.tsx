import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2, Building2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    destination: 'Canadá',
    visaType: 'Trabajo',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const whatsappText = encodeURIComponent(
      `Hola Horizonte Migratorio,\nMi nombre es *${formData.fullName}*.\n- Correo: ${formData.email}\n- Teléfono: ${formData.phone}\n- Destino de interés: *${formData.destination}*\n- Tipo de Visa: *${formData.visaType}*\n- Mensaje: ${formData.message}`
    );

    // Redirect to WhatsApp with prefilled message
    window.open(`https://wa.me/593991952889?text=${whatsappText}`, '_blank');
  };

  return (
    <section id="contacto" className="w-full py-16 md:py-24 bg-cream text-navy font-sans border-t border-navy/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-gold block">Atención Personalizada</span>
          <h1 className="text-4xl md:text-5xl font-serif italic text-navy">Contáctanos & Agenda tu Cita</h1>
          <p className="text-sm md:text-base opacity-75 leading-relaxed">
            Nuestro equipo de abogados y consultores migratorios está disponible para examinar tu caso de forma confidencial y directa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Office Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-6 md:p-8 space-y-6 rounded-sm shadow-md">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gold flex items-center gap-2">
                <Building2 size={16} />
                <span>Oficina Principal Quito</span>
              </h3>

              <div className="space-y-5 text-xs text-navy/80">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-navy/5 border border-gold/30 rounded-sm shrink-0">
                    <MapPin size={18} className="gold-accent" />
                  </div>
                  <div>
                    <strong className="block text-navy uppercase tracking-wider text-[11px] mb-0.5">Ubicación Físico-Consular</strong>
                    <p className="leading-relaxed">
                      Av. República de El Salvador y Moscú<br />
                      Edificio Prisma, Piso 7, Oficina 702<br />
                      Quito, Ecuador
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-navy/5 border border-gold/30 rounded-sm shrink-0">
                    <Phone size={18} className="gold-accent" />
                  </div>
                  <div>
                    <strong className="block text-navy uppercase tracking-wider text-[11px] mb-0.5">Línea Directa & WhatsApp</strong>
                    <a href="https://wa.me/593991952889" target="_blank" rel="noreferrer" className="hover:text-gold font-bold text-navy">
                      +593 99 195 2889
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-navy/5 border border-gold/30 rounded-sm shrink-0">
                    <Mail size={18} className="gold-accent" />
                  </div>
                  <div>
                    <strong className="block text-navy uppercase tracking-wider text-[11px] mb-0.5">Correo Corporativo</strong>
                    <a href="mailto:contacto@horizontemigratorio.com" className="hover:text-gold text-navy">
                      contacto@horizontemigratorio.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-navy/5 border border-gold/30 rounded-sm shrink-0">
                    <Clock size={18} className="gold-accent" />
                  </div>
                  <div>
                    <strong className="block text-navy uppercase tracking-wider text-[11px] mb-0.5">Horarios de Atención</strong>
                    <p className="leading-relaxed">
                      Lunes a Viernes: 09:00 AM - 06:00 PM<br />
                      Sábados: Cita previa telefónica
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Callout Banner */}
            <div className="bg-navy text-white p-6 rounded-sm border border-gold/30 space-y-3 relative overflow-hidden shadow-lg">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold block">Respuesta Inmediata</span>
              <h4 className="text-base font-serif italic text-white">¿Prefieres chatear en tiempo real?</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                Nuestros asesores responden tus inquietudes de lunes a domingo mediante nuestra línea de atención directa por WhatsApp.
              </p>
              <a 
                href="https://wa.me/593991952889?text=Hola%2C%20quisiera%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#20bd5a] transition-all"
              >
                <span>Abrir Chat de WhatsApp</span>
                <Send size={12} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact & Lead Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-white border border-navy/10 p-8 md:p-10 rounded-sm shadow-xl space-y-6"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-1">Formulario de Solicitud</span>
              <h3 className="text-2xl font-serif italic text-navy">Envíanos los Datos de tu Consulta</h3>
              <p className="text-xs text-navy/70 leading-relaxed mt-1">
                Completa el formulario y te conectaremos inmediatamente con un abogado especialista según tu país de destino.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-navy mb-1 block">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Ej. María Elena Torres"
                    className="w-full p-3 bg-cream border border-gray-300 text-xs text-navy rounded-sm focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-navy mb-1 block">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+593 99 123 4567"
                    className="w-full p-3 bg-cream border border-gray-300 text-xs text-navy rounded-sm focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-navy mb-1 block">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ejemplo@correo.com"
                    className="w-full p-3 bg-cream border border-gray-300 text-xs text-navy rounded-sm focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-navy mb-1 block">
                    País de Destino
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full p-3 bg-cream border border-gray-300 text-xs text-navy rounded-sm focus:outline-none focus:border-gold font-medium"
                  >
                    <option value="Canadá">Canadá 🇨🇦</option>
                    <option value="España">España 🇪🇸</option>
                    <option value="Estados Unidos">Estados Unidos 🇺🇸</option>
                    <option value="Alemania">Alemania 🇩🇪</option>
                    <option value="Australia">Australia 🇦🇺</option>
                    <option value="Otro Destino">Otro Destino 🌍</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-navy mb-1 block">
                  Tipo de Visa / Interés
                </label>
                <select
                  value={formData.visaType}
                  onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
                  className="w-full p-3 bg-cream border border-gray-300 text-xs text-navy rounded-sm focus:outline-none focus:border-gold font-medium"
                >
                  <option value="Trabajo">Visa de Trabajo / Especialización</option>
                  <option value="Estudio">Visa de Estudio (Universidad / Maestría)</option>
                  <option value="Nómada Digital">Visa Nómada Digital / Teletrabajo</option>
                  <option value="Residencia Familiar">Reagrupación Familiar</option>
                  <option value="Inversión">Golden Visa / Inversión</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-navy mb-1 block">
                  Detalles adicionales de tu consulta
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Escribe brevemente tu profesión, nivel de estudios o dudas principales..."
                  className="w-full p-3 bg-cream border border-gray-300 text-xs text-navy rounded-sm focus:outline-none focus:border-gold"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-navy text-white text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-navy transition-all duration-300 rounded-sm shadow-lg flex items-center justify-center gap-2 group"
              >
                <span>Enviar Consulta y Conectar por WhatsApp</span>
                <Send size={14} className="gold-accent group-hover:translate-x-1 transition-transform" />
              </button>

              {submitted && (
                <div className="p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold rounded-sm flex items-center gap-2 animate-in fade-in">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>¡Formulario procesado! Se ha generado tu mensaje a WhatsApp.</span>
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

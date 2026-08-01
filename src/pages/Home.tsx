import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Shield, Globe2, Briefcase, GraduationCap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/30 text-accent-light text-sm font-semibold mb-6 tracking-wide">
              Especialistas en Migración Internacional
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ textWrap: 'balance' }}>
              Tu nuevo comienzo,<br />guiado por <span className="text-accent">expertos</span>.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto" style={{ textWrap: 'pretty' }}>
              Asesoría legal, estratégica y humana para que tu proceso migratorio sea seguro, claro y exitoso. Sin estrés, sin complicaciones.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/593991952889?text=Hola,%20deseo%20evaluar%20mi%20perfil%20migratorio" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-light transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/30">
                Evalúa tu perfil gratis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link to="/visas" className="w-full sm:w-auto bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10">
                Nuestros Servicios
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-gray-100">
            <div className="flex flex-col items-center justify-center p-4">
              <span className="text-3xl font-black text-primary mb-1">+10</span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Años de Experiencia</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <span className="text-3xl font-black text-primary mb-1">+5,000</span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Visas Aprobadas</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <Shield className="w-8 h-8 text-primary mb-2" />
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Asesoría Legal Certificada</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <Globe2 className="w-8 h-8 text-primary mb-2" />
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Presencia Global</span>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Rápidos */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Servicios Migratorios</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Encuentra el camino legal perfecto para tu proyecto de vida en el exterior.</p>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Visas de Trabajo', icon: Briefcase, desc: 'Gestión completa de permisos laborales y residencias patrocinadas por empresas.' },
              { title: 'Visas de Estudio', icon: GraduationCap, desc: 'Trámites para estudiantes internacionales en universidades de prestigio.' },
              { title: 'Reunificación Familiar', icon: Users, desc: 'Procesos para traer a tus seres queridos contigo de forma legal y segura.' }
            ].map((srv, i) => (
              <motion.div key={i} variants={fadeIn} className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all border border-gray-100 group">
                <div className="bg-primary/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <srv.icon className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{srv.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{srv.desc}</p>
                <Link to="/visas" className="inline-flex items-center text-primary font-medium hover:text-primary-light">
                  Saber más <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">¿Cómo funciona el proceso?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Un flujo de trabajo diseñado para brindarte transparencia y resultados.</p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
                { step: '01', title: 'Evaluación y Diagnóstico', desc: 'Analizamos tu perfil, experiencia y objetivos para encontrar la mejor vía migratoria.' },
                { step: '02', title: 'Preparación de Expediente', desc: 'Recopilamos, traducimos y organizamos toda la documentación legal requerida.' },
                { step: '03', title: 'Presentación y Aprobación', desc: 'Sometemos tu aplicación y te acompañamos hasta recibir la resolución final.' }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center bg-white">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-6 shadow-lg shadow-primary/20 border-4 border-white">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Listo para dar el gran paso?</h2>
          <p className="text-xl text-primary-200 mb-10 max-w-2xl mx-auto text-blue-200">
            No dejes tu futuro al azar. Permítenos guiarte hacia tu nueva vida.
          </p>
          <a href="https://wa.me/593991952889?text=Hola,%20quiero%20empezar%20mi%20proceso%20migratorio" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-light transition-all shadow-xl shadow-black/10">
            Contactar Asesor Ahora <CheckCircle2 className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}

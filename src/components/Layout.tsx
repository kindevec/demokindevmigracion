import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Home, Briefcase, MessageSquare, Phone, Target, Facebook, Instagram, ShieldCheck, MapPin, Clock, ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navItems = [
    { id: 'inicio', name: 'Inicio', icon: <Home size={18} /> },
    { id: 'visas', name: 'Visas', icon: <Briefcase size={18} /> },
    { id: 'mision-vision', name: 'Misión', icon: <Target size={18} /> },
    { id: 'testimonios', name: 'Testimonios', icon: <MessageSquare size={18} /> },
    { id: 'contacto', name: 'Contacto', icon: <Phone size={18} /> },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; // Header height compensation
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['inicio', 'visas', 'mision-vision', 'testimonios', 'contacto'];
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-cream text-navy font-sans selection:bg-gold selection:text-white">
      {/* Top Announcement Bar */}
      <div className="bg-navy text-white text-[11px] py-2 px-6 border-b border-gold/20 flex justify-between items-center z-50">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 opacity-80">
              <ShieldCheck size={14} className="gold-accent" />
              <span className="font-medium tracking-wide">Firma Legal Certificada en Derecho Migratorio</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 opacity-80 border-l border-white/20 pl-6">
              <MapPin size={14} className="gold-accent" />
              <span>Quito, Ecuador - Cobertura Internacional</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block opacity-80 text-[11px]">¿Consultas urgentes?</span>
            <a 
              href="https://wa.me/593991952889?text=Hola%2C%20necesito%20asesor%C3%ADa%20migratoria%20urgente."
              target="_blank"
              rel="noreferrer"
              className="gold-accent font-bold hover:underline flex items-center gap-1"
            >
              +593 99 195 2889
            </a>
          </div>
        </div>
      </div>

      {/* Desktop & Tablet Navigation Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200 py-3' : 'bg-cream/90 backdrop-blur-md py-5 border-b border-gray-200/60'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center w-full">
          <button onClick={() => scrollToSection('inicio')} className="flex items-center gap-3 group text-left">
            <div className="w-10 h-10 bg-navy flex items-center justify-center rounded-sm transition-transform group-hover:scale-105 shadow-sm overflow-hidden border border-gold/30">
              <img src={logoImg} alt="Horizonte Migratorio Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight uppercase text-navy leading-none">
                Horizonte <span className="font-serif italic lowercase font-normal text-gold">Migratorio</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-navy/60 font-semibold mt-1">Visados & Reubicación</span>
            </div>
          </button>
          
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative py-1 transition-colors hover:text-gold ${
                    isActive ? 'text-gold font-bold' : 'text-navy/80'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/593991952889?text=Hola%2C%20quisiera%20agendar%20una%20consultor%C3%ADa%20legal."
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 bg-navy text-white text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-navy transition-all duration-300 rounded-sm shadow-md flex items-center gap-2 group"
            >
              <span>Consultoría Legal</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Single Page Content Area */}
      <main className="flex-1 w-full flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-navy text-white border-t border-gold/30 pt-16 pb-28 md:pb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
          <div className="flex flex-col gap-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 flex items-center justify-center rounded-sm overflow-hidden border border-gold/30">
                <img src={logoImg} alt="Horizonte Migratorio Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold tracking-tight uppercase text-white text-lg">
                Horizonte <span className="font-serif italic lowercase font-normal gold-accent">Migratorio</span>
              </span>
            </div>
            <p className="text-xs text-white/70 max-w-sm leading-relaxed mt-2">
              Firma boutique especializada en visados internacionales, residencias por inversión, trabajo y estudio. Estrategia legal clara para alcanzar tus metas globales.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-gold/10 border border-gold/30 text-gold text-[10px] font-bold uppercase tracking-widest rounded-sm">
                Aprobación Garantizada por Contrato
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-bold text-xs uppercase tracking-widest text-gold mb-1">Secciones</span>
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-left text-xs text-white/80 hover:text-gold transition-colors">
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-bold text-xs uppercase tracking-widest text-gold mb-1">Contacto Directo</span>
            <div className="flex items-start gap-2 text-xs text-white/80">
              <MapPin size={16} className="gold-accent shrink-0 mt-0.5" />
              <span>Av. República de El Salvador y Moscú, Edificio Prisma, Quito - Ecuador</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/80">
              <Phone size={16} className="gold-accent shrink-0" />
              <a href="https://wa.me/593991952889" target="_blank" rel="noreferrer" className="hover:text-gold">
                +593 99 195 2889
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/80">
              <Clock size={16} className="gold-accent shrink-0" />
              <span>Lun - Vie: 09:00 - 18:00</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-bold text-xs uppercase tracking-widest text-gold">Redes Sociales & Soporte</span>
            <p className="text-xs text-white/70 leading-relaxed">
              Síguenos en nuestras plataformas oficiales para enterarte de actualizaciones migratorias y aperturas de visas.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/kindevec/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/10 border border-white/20 rounded-sm flex items-center justify-center text-white hover:bg-gold hover:text-navy hover:border-gold transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/kindevx/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/10 border border-white/20 rounded-sm flex items-center justify-center text-white hover:bg-gold hover:text-navy hover:border-gold transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-[10px] text-white/50 font-medium tracking-wider uppercase">
            © 2026 Horizonte Migratorio. Todos los derechos reservados. <span className="text-gold font-bold">Desarrollado por Kindev</span>
          </p>
          <div className="flex gap-6 text-[10px] text-white/50 uppercase tracking-widest">
            <span>Privacidad</span>
            <span>Términos de Servicio</span>
            <span>Aviso Legal</span>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation Bar (5 botones directos) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[60] bg-white/95 backdrop-blur-xl border-t border-gray-200 pb-[env(safe-area-inset-bottom)] shadow-lg">
        <div className="grid grid-cols-5 items-center h-16 px-1 text-navy">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center justify-center w-full h-full space-y-1 active:scale-95 transition-all uppercase tracking-tight relative ${
                  isActive ? 'text-gold font-bold' : 'text-navy/60 hover:text-gold'
                }`}
              >
                {isActive && (
                  <span className="absolute top-1 w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                )}
                <div className={isActive ? 'mt-1 text-gold' : ''}>
                  {item.icon}
                </div>
                <span className="text-[9px] font-bold leading-none">{item.name}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Floating WhatsApp Button */}
      <div className="fixed z-50 right-4 md:right-10 bottom-[calc(5rem+env(safe-area-inset-bottom))] md:bottom-10 flex items-center gap-3 group">
        <span className="hidden md:block bg-navy text-white text-[11px] font-bold px-3 py-1.5 rounded-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gold/40">
          ¡Chatea con un Abogado!
        </span>
        <a
          href="https://wa.me/593991952889?text=Hola%2C%20quisiera%20recibir%20asesor%C3%ADa%20migratoria%20personalizada."
          target="_blank"
          rel="noreferrer"
          className="bg-[#25D366] text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl border-4 border-white animate-pulse transition-transform hover:scale-110"
          aria-label="Escríbenos por WhatsApp"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 md:w-9 md:h-9"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

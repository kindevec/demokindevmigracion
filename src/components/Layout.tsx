import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, FileText, Star, Mail, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const navItems = [
  { path: '/', label: 'Inicio', icon: Home },
  { path: '/visas', label: 'Visas', icon: FileText },
  { path: '/testimonios', label: 'Testimonios', icon: Star },
  { path: '/contacto', label: 'Contacto', icon: Mail },
];

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background relative pb-16 md:pb-0">
      {/* Header for Desktop */}
      <header className="hidden md:flex fixed top-0 w-full bg-white/70 backdrop-blur-md border-b border-gray-100 z-50 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary font-bold text-2xl tracking-tight">
            <Compass className="w-8 h-8" />
            <span>Horizonte Migratorio</span>
          </Link>
          <nav className="flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors hover:text-primary-light ${
                  location.pathname === item.path ? 'text-primary' : 'text-slate-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href="https://wa.me/593991952889?text=Hola,%20deseo%20información%20sobre%20sus%20servicios%20migratorios"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-2 rounded-full font-medium shadow-md shadow-primary/20 hover:bg-primary-light transition-all transform hover:-translate-y-0.5"
          >
            Asesoría Gratis
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-0 md:pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 pb-24 md:pb-12 border-t border-slate-800">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <Compass className="w-6 h-6" />
              <span>Horizonte Migratorio</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Tu nuevo comienzo, guiado por expertos. Brindamos asesoría legal integral para trámites de visas, estudio y reubicación internacional.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-accent transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/kindevec/" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-3 rounded-full hover:bg-primary hover:text-white transition-all">
                <div className="w-5 h-5"><FacebookIcon /></div>
              </a>
              <a href="https://www.instagram.com/kindevx/" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-3 rounded-full hover:bg-primary hover:text-white transition-all">
                <div className="w-5 h-5"><InstagramIcon /></div>
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-10 pt-6 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-500">
            © 2026 Todos los derechos reservados. Desarrollado por Kindev
          </p>
        </div>
      </footer>

      {/* Bottom Navigation Bar for Mobile */}
      <div className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 z-50 pb-[env(safe-area-inset-bottom)]">
        <div className="flex justify-around items-center h-16 relative">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors relative ${
                  isActive ? 'text-primary' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="bottomNavIndicator"
                    className="absolute top-0 w-10 h-1 bg-primary rounded-b-full"
                  />
                )}
                <Icon className={`w-6 h-6 ${isActive ? 'fill-primary/10 stroke-primary' : 'stroke-current'}`} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

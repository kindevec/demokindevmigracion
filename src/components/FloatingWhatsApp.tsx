import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/593991952889?text=Hola,%20estoy%20interesado%20en%20los%20servicios%20de%20Horizonte%20Migratorio"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-[100] right-4 bottom-24 md:bottom-8 md:right-8 group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
      <div className="relative bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center">
        <MessageCircle className="w-8 h-8 fill-current" />
      </div>
    </a>
  );
}

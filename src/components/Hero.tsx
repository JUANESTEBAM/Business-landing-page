import { Scissors, Phone } from 'lucide-react';

export default function Hero() {
  const whatsappNumber = "573001234567";
  const message = "Hola! Quiero reservar mi cita ahora";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-amber-950 text-white overflow-hidden">
      
      {/* Imagen fondo */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">

        {/* 🔥 Urgencia real */}
        <p className="text-amber-400 font-semibold mb-6 animate-pulse">
          ⚡ Cupos limitados esta semana – Reserva hoy
        </p>

        {/* Badge premium */}
        <div className="inline-flex items-center gap-2 bg-amber-600/20 border border-amber-600/30 rounded-full px-6 py-2 mb-8 backdrop-blur-sm">
          <Scissors className="w-4 h-4 text-amber-400" />
          <span className="text-amber-400 text-sm font-medium">
            Barbería Premium en Medellín
          </span>
        </div>

        {/* Título principal */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Tu Estilo,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
            Nuestra Pasión
          </span>
        </h1>

        {/* Descripción */}
        <p className="text-xl md:text-2xl text-zinc-300 mb-4 max-w-3xl mx-auto leading-relaxed">
          Cortes de élite, acabados impecables y una experiencia que transforma tu look y eleva tu confianza.
        </p>

        {/* 📍 Dirección + horario (confianza inmediata) */}
        <div className="mt-6 text-zinc-400 text-sm space-y-1">
          <p>📍 Calle 45 #12-34, Medellín</p>
          <p>🕒 Lun - Sáb: 9:00 AM - 7:00 PM</p>
        </div>

        {/* Oferta */}
        <p className="text-lg text-amber-400 font-semibold mt-8 mb-10">
          🎁 15% de descuento en tu primera visita
        </p>

        {/* Botones CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-5 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-amber-500/50 flex items-center gap-3 text-lg"
          >
            <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            👉 Reservar mi cita ahora
          </a>

          <a
            href="#servicios"
            className="border-2 border-white/30 hover:border-amber-500 text-white font-semibold py-5 px-10 rounded-full transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
          >
            Ver Servicios
          </a>

        </div>

        {/* Métricas de confianza */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-400 mb-2">15+</div>
            <div className="text-sm text-zinc-400">Años de experiencia</div>
          </div>

          <div className="text-center border-x border-zinc-700">
            <div className="text-4xl font-bold text-amber-400 mb-2">5000+</div>
            <div className="text-sm text-zinc-400">Clientes satisfechos</div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-amber-400 mb-2">4.9★</div>
            <div className="text-sm text-zinc-400">Calificación promedio</div>
          </div>
        </div>

      </div>

      {/* Fade inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent"></div>
    </section>
  );
}
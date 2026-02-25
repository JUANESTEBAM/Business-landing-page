import { Phone, Clock, MapPin, Mail } from 'lucide-react';

export default function CTA() {
  const whatsappNumber = "573001234567";
  const message = "Hola! Quiero agendar una cita";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <section className="py-24 bg-gradient-to-br from-amber-600 via-amber-500 to-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
            ¿Listo Para Transformar Tu Estilo?
          </h2>
          <p className="text-xl md:text-2xl text-black/80 mb-8 max-w-2xl mx-auto">
            No esperes más. Agenda tu cita ahora y descubre por qué somos la barbería premium #1 en Medellín
          </p>

          <div className="bg-black/10 backdrop-blur-sm border-2 border-black/20 rounded-2xl p-8 mb-10 inline-block">
            <p className="text-2xl font-bold text-black mb-2">
              🎁 Oferta Especial Para Nuevos Clientes
            </p>
            <p className="text-xl text-black/90">
              15% de descuento en tu primera visita
            </p>
            <p className="text-sm text-black/70 mt-2">
              *Válido solo por reserva vía WhatsApp
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-black hover:bg-zinc-900 text-white font-bold py-6 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 text-lg"
            >
              <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Agendar Ahora por WhatsApp
            </a>
          </div>

          <p className="mt-8 text-black/70 text-sm">
            Respuesta inmediata • Confirmación instantánea • Sin esperas
          </p>
        </div>
      </section>

      <footer className="bg-zinc-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-amber-500 mb-4">Barbería Premium</h3>
              <p className="text-zinc-400 leading-relaxed">
                La mejor experiencia de barbería en Medellín. Profesionalismo, estilo y atención de primera clase.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Horario</h4>
              <div className="space-y-2 text-zinc-400">
                <div className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Lunes a Sábado</p>
                    <p>9:00 AM - 8:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Domingos</p>
                    <p>10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Ubicación</h4>
              <div className="space-y-3 text-zinc-400">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p>Calle 10 # 43-91, El Poblado<br />Medellín, Colombia</p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-amber-400 hover:text-amber-300 transition-colors font-semibold"
                >
                  Ver en Google Maps →
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contacto</h4>
              <div className="space-y-3 text-zinc-400">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-5 h-5 text-amber-500" />
                  +57 300 123 4567
                </a>
                <a
                  href="mailto:contacto@barberiapremium.com"
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <Mail className="w-5 h-5 text-amber-500" />
                  info@barberiapremium.com
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8 text-center text-zinc-500 text-sm">
            <p>&copy; 2024 Barbería Premium Medellín. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

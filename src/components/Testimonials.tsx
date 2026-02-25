import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Empresario",
    location: "El Poblado",
    rating: 5,
    text: "Llevo más de 2 años viniendo y simplemente no cambio esta barbería por nada. El nivel de profesionalismo y atención al detalle es incomparable. Siempre salgo luciendo impecable para mis reuniones de negocios."
  },
  {
    name: "Andrés Restrepo",
    role: "Ingeniero",
    location: "Laureles",
    rating: 5,
    text: "El fade que me hacen aquí es perfecto. Ya intenté en otros lugares pero ninguno se compara. Los barberos son artistas y el ambiente es brutal. 100% recomendado para quienes buscan calidad."
  },
  {
    name: "Santiago Gómez",
    role: "Creador de Contenido",
    location: "Envigado",
    rating: 5,
    text: "Como creador de contenido necesito verme bien siempre. Esta barbería entiende exactamente lo que busco. El paquete VIP es una experiencia que todos deberían probar al menos una vez."
  },
  {
    name: "Daniel Osorio",
    role: "Abogado",
    location: "Sabaneta",
    rating: 5,
    text: "Agendamiento fácil por WhatsApp, puntuales con las citas y la calidad del servicio es excepcional. El trato es premium desde que entras hasta que sales. Vale cada peso invertido."
  },
  {
    name: "Miguel Ángel Torres",
    role: "Arquitecto",
    location: "El Poblado",
    rating: 5,
    text: "La atención personalizada hace toda la diferencia. Se toman el tiempo de entender qué quieres y siempre superan las expectativas. Los productos que usan son de primera calidad."
  },
  {
    name: "Juan Pablo Vargas",
    role: "Gerente Comercial",
    location: "Laureles",
    rating: 5,
    text: "Excelente relación calidad-precio. He probado barberías más caras y ninguna se compara. El ambiente es relajado, profesional y siempre salgo renovado. Mi barbería de confianza sin duda."
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Lo Que Dicen Nuestros <span className="text-amber-500">Clientes</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto px-4">
            Miles de clientes satisfechos que confían en nosotros para lucir impecables
          </p>
        </div>

        {/* Testimonios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 md:p-8 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-black font-bold text-lg md:text-xl">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-white text-base md:text-lg truncate">{testimonial.name}</h4>
                  <p className="text-zinc-400 text-xs md:text-sm">{testimonial.role}</p>
                  <p className="text-amber-500 text-xs">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3 md:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>

              <Quote className="w-6 h-6 md:w-8 md:h-8 text-amber-500/20 mb-2" />

              <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        {/* Stats - Versión responsive corregida */}
        <div className="mt-12 md:mt-16">
          {/* Mobile: Grid de 3 columnas */}
          <div className="grid grid-cols-3 gap-2 sm:hidden">
            <div className="bg-zinc-800/50 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-amber-400">4.9</div>
              <div className="text-xs text-zinc-400">Calif.</div>
            </div>
            <div className="bg-zinc-800/50 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-amber-400">5k+</div>
              <div className="text-xs text-zinc-400">Reseñas</div>
            </div>
            <div className="bg-zinc-800/50 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-amber-400">98%</div>
              <div className="text-xs text-zinc-400">Recom.</div>
            </div>
          </div>

          {/* Tablet/Desktop: Diseño original pero responsive */}
          <div className="hidden sm:flex justify-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 bg-zinc-800 border border-zinc-700 rounded-2xl sm:rounded-full py-4 sm:py-6 px-6 sm:px-8 md:px-12 w-full sm:w-auto">
              <div className="text-center w-full sm:w-auto">
                <div className="text-2xl sm:text-3xl font-bold text-amber-400 mb-1">4.9/5</div>
                <div className="text-xs sm:text-sm text-zinc-400">Calificación</div>
              </div>
              <div className="hidden sm:block w-px h-8 sm:h-12 bg-zinc-700"></div>
              <div className="w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-zinc-700">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-400 mb-1">5000+</div>
                  <div className="text-xs sm:text-sm text-zinc-400">Reseñas</div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-8 sm:h-12 bg-zinc-700"></div>
              <div className="w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-zinc-700">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-400 mb-1">98%</div>
                  <div className="text-xs sm:text-sm text-zinc-400">Recomiendan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
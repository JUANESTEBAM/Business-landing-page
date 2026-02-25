import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Empresario",
    location: "El Poblado",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5,
    text: "Llevo más de 2 años viniendo y simplemente no cambio esta barbería por nada. El nivel de profesionalismo y atención al detalle es incomparable. Siempre salgo luciendo impecable para mis reuniones de negocios."
  },
  {
    name: "Andrés Restrepo",
    role: "Ingeniero",
    location: "Laureles",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5,
    text: "El fade que me hacen aquí es perfecto. Ya intenté en otros lugares pero ninguno se compara. Los barberos son artistas y el ambiente es brutal. 100% recomendado para quienes buscan calidad."
  },
  {
    name: "Santiago Gómez",
    role: "Creador de Contenido",
    location: "Envigado",
    image: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5,
    text: "Como creador de contenido necesito verme bien siempre. Esta barbería entiende exactamente lo que busco. El paquete VIP es una experiencia que todos deberían probar al menos una vez."
  },
  {
    name: "Daniel Osorio",
    role: "Abogado",
    location: "Sabaneta",
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5,
    text: "Agendamiento fácil por WhatsApp, puntuales con las citas y la calidad del servicio es excepcional. El trato es premium desde que entras hasta que sales. Vale cada peso invertido."
  },
  {
    name: "Miguel Ángel Torres",
    role: "Arquitecto",
    location: "El Poblado",
    image: "https://images.pexels.com/photos/1hardlyexistingimage/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5,
    text: "La atención personalizada hace toda la diferencia. Se toman el tiempo de entender qué quieres y siempre superan las expectativas. Los productos que usan son de primera calidad."
  },
  {
    name: "Juan Pablo Vargas",
    role: "Gerente Comercial",
    location: "Laureles",
    image: "https://images.pexels.com/photos/1hardlyexisting/pexels-photo-1hardlyexisting.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5,
    text: "Excelente relación calidad-precio. He probado barberías más caras y ninguna se compara. El ambiente es relajado, profesional y siempre salgo renovado. Mi barbería de confianza sin duda."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lo Que Dicen Nuestros <span className="text-amber-500">Clientes</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Miles de clientes satisfechos que confían en nosotros para lucir impecables
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-zinc-800 border border-zinc-700 rounded-xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-black font-bold text-xl">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                  <p className="text-zinc-400 text-sm">{testimonial.role}</p>
                  <p className="text-amber-500 text-xs">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-amber-500/20 mb-2" />

              <p className="text-zinc-300 leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-zinc-800 border border-zinc-700 rounded-full py-6 px-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-1">4.9/5</div>
              <div className="text-sm text-zinc-400">Calificación</div>
            </div>
            <div className="w-px h-12 bg-zinc-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-1">5000+</div>
              <div className="text-sm text-zinc-400">Reseñas</div>
            </div>
            <div className="w-px h-12 bg-zinc-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-1">98%</div>
              <div className="text-sm text-zinc-400">Recomiendan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

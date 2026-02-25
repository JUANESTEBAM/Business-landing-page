import { Scissors, Sparkles, Waves, Droplet, Star } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: "Corte Clásico Premium",
    description: "Corte tradicional ejecutado con precisión de maestro. Técnicas clásicas que nunca pasan de moda, adaptadas a tu estilo personal.",
    price: "Desde $45.000",
    time: "45 min"
  },
  {
    icon: Sparkles,
    title: "Diseño y Fade",
    description: "Degradados perfectos y diseños personalizados. Transiciones impecables que destacan tu personalidad y estilo urbano.",
    price: "Desde $55.000",
    time: "60 min"
  },
  {
    icon: Waves,
    title: "Barba y Perfilado",
    description: "Arreglo profesional de barba con toalla caliente y productos premium. Un ritual de cuidado masculino tradicional.",
    price: "Desde $35.000",
    time: "30 min"
  },
  {
    icon: Droplet,
    title: "Tratamiento Capilar",
    description: "Tratamientos especializados para fortalecer y revitalizar tu cabello. Productos profesionales de última generación.",
    price: "Desde $40.000",
    time: "40 min"
  },
  {
    icon: Star,
    title: "Paquete Completo VIP",
    description: "La experiencia definitiva: corte + barba + tratamiento + masaje relajante. Sal renovado y con confianza al máximo.",
    price: "Desde $120.000",
    time: "120 min",
    featured: true
  }
];

export default function Services() {
  const whatsappNumber = "573001234567";
  const createWhatsappUrl = (service: string) => {
    const message = `Hola! Quiero agendar: ${service}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="servicios" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Servicios que <span className="text-amber-500">Transforman</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Cada servicio es una experiencia diseñada para que salgas luciendo y sintiéndote mejor que nunca
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative group bg-gradient-to-br from-zinc-900 to-zinc-800 border ${
                service.featured
                  ? 'border-amber-500/50 lg:col-span-3 lg:max-w-2xl lg:mx-auto'
                  : 'border-zinc-700'
              } rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105`}
            >
              {service.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-sm font-bold py-2 px-6 rounded-full">
                  MÁS POPULAR
                </div>
              )}

              <div className="flex items-start gap-4 mb-6">
                <div className="bg-amber-500/10 p-4 rounded-xl group-hover:bg-amber-500/20 transition-colors">
                  <service.icon className="w-8 h-8 text-amber-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-zinc-400">
                    <span className="font-semibold text-amber-400">{service.price}</span>
                    <span>•</span>
                    <span>{service.time}</span>
                  </div>
                </div>
              </div>

              <p className="text-zinc-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <a
                href={createWhatsappUrl(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center font-semibold py-3 px-6 rounded-lg transition-all duration-300 ${
                  service.featured
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:from-amber-600 hover:to-amber-700'
                    : 'bg-zinc-800 text-amber-400 hover:bg-zinc-700 border border-zinc-700 hover:border-amber-500'
                }`}
              >
                Agendar Ahora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

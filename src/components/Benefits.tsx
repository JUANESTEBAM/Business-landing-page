import { Award, Clock, Shield, Coffee, Zap, Users } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: "Barberos Certificados",
    description: "Equipo con más de 15 años de experiencia y formación internacional en las últimas tendencias."
  },
  {
    icon: Clock,
    title: "Puntualidad Garantizada",
    description: "Sistema de citas que respeta tu tiempo. Sin esperas innecesarias, tu hora es sagrada."
  },
  {
    icon: Shield,
    title: "Protocolos de Higiene",
    description: "Esterilización profesional de herramientas y productos desechables en cada servicio."
  },
  {
    icon: Coffee,
    title: "Ambiente Exclusivo",
    description: "Café premium, música seleccionada y un espacio diseñado para tu comodidad y relajación."
  },
  {
    icon: Zap,
    title: "Productos Premium",
    description: "Solo usamos marcas profesionales reconocidas mundialmente para resultados superiores."
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description: "Consultamos tu estilo, escuchamos tus preferencias y creamos el look perfecto para ti."
  }
];

export default function Benefits() {
  return (
    <section className="py-24 bg-gradient-to-b from-zinc-950 to-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            No solo cortamos cabello, creamos experiencias que elevan tu confianza y estilo de vida
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>

              <div className="relative">
                <div className="bg-amber-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                  <benefit.icon className="w-8 h-8 text-amber-500" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Garantía de Satisfacción 100%
          </h3>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Si no quedas completamente satisfecho con tu servicio, lo corregimos sin costo adicional.
            Tu confianza y satisfacción son nuestra prioridad número uno.
          </p>
        </div>
      </div>
    </section>
  );
}

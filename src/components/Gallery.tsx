import { Instagram, ExternalLink } from 'lucide-react';

const galleryImages = [
  {
    url: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Fade Clásico",
    category: "Cortes"
  },
  {
    url: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Barba Detallada",
    category: "Barbería"
  },
  {
    url: "https://images.pexels.com/photos/1570806/pexels-photo-1570806.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Corte Premium",
    category: "Cortes"
  },
  {
    url: "https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Diseño Moderno",
    category: "Diseños"
  },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestro <span className="text-amber-500">Trabajo</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
            Cada corte es una obra de arte. Mira algunos de nuestros trabajos recientes
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-semibold"
          >
            <Instagram className="w-5 h-5" />
            Síguenos en Instagram para más contenido
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* 🔥 GRID 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white font-bold text-xl">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
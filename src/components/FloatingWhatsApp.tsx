import React from "react";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp: React.FC = () => {
  const phone: string = "573001234567"; // ← cambia por tu número real
  const message: string = "Hola, quiero reservar mi cita ahora";

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default FloatingWhatsApp;
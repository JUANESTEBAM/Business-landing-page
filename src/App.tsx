import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Hero />
      <Services />
      <Benefits />
      <Testimonials />
      <Gallery />
      <CTA />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;

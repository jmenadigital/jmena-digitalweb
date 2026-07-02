import { Link } from 'react-router-dom'
import quirokawahero from "./assets/quirokawahero.jpg";
import quirokawalogo from "./assets/quirokawalogo.png";
import quirokawa1 from "./assets/quirokawa1.jpeg";
import quirokawa2 from "./assets/quirokawa2.jpg";
import quirokawa3 from "./assets/quirokawa3.jpg";
import quirokawa4 from "./assets/quirokawa4.jpg";
import quirokawa5 from "./assets/quirokawa5.jpg";
import martinperfil from "./assets/martinperfil.jpg";
import martincolor from "./assets/martincolor.jpg";
import martinultrasonido from "./assets/martinultrasonido.jpg";
export default function DemoQuirokawa() {
    
  return (
    
    
    <div className="min-h-screen bg-black text-white antialiased">
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-white font-semibold text-lg">
          JMenaDigital
        </h1>

        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#hero" className="hover:text-white transition">Inicio</a>
          <a href="#servicios" className="hover:text-white transition">Servicios</a>
          <a href="#contacto" className="hover:text-white transition">Contacto</a>
        </div>

      </div>
    </nav>

    {/* HERO */}
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* IMAGEN */}
      <div className="absolute inset-0">
        <img
  src={quirokawahero}
  alt="Imagen principal"
  className="w-full h-full object-cover object-top opacity-80 scale-105"
/>

        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 px-6 md:px-20 pt-12 md:pt-16">

  <div className="grid md:grid-cols-2 items-center min-h-[80vh] gap-10">

    {/* TEXTO */}
    <div className="max-w-xl">

      <p className="text-green-400 uppercase tracking-[0.3em] text-sm mb-6">
  Centro Terapéutico Quirokawa
</p>

      <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-white">
        Recupera el equilibrio de tu cuerpo
      </h1>

      <p className="mt-8 text-xl text-gray-300 leading-relaxed font-light">
        Quiropraxia • Masajes Terapéuticos • Terapias Energéticas
      </p>

      <div className="mt-10 flex flex-col md:flex-row gap-6">

        <a
  href="https://wa.me/56950089805?text=Hola,%20quisiera%20agendar%20una%20sesión%20en%20Centro%20Terapéutico%20Quirokawa."
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-4 rounded-2xl bg-green-500 hover:bg-green-400 hover:scale-105 transition-all duration-500 ease-out font-semibold text-lg text-center shadow-lg hover:shadow-2xl"
>
  Contactar por WhatsApp
</a>
        <a
          href="/#demo"
          className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-500 ease-out font-semibold text-lg"
        >
          Ir al sitio principal!
        </a>

      </div>

    </div>

    
  </div>

</div>

    </section>

<section className="py-24 px-6 md:px-20 bg-gradient-to-b from-black to-zinc-950">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-4xl md:text-5xl font-bold mb-4">
  Bienestar integral para cuerpo y mente
</h2>

<p className="text-gray-400 mb-12">
  Combinamos quiropraxia, masajes terapéuticos y terapias energéticas para brindarte una atención integral en un ambiente de confianza, calma y bienestar.
</p>
<div className="text-center my-10">
  <h2 className="text-4xl font-black mb-2">
    Sesión Standard
  </h2>

  <p className="text-3xl font-bold text-amber-400 mb-4">
    CLP $35.000
  </p>

  <p className="text-gray-300 max-w-2xl mx-auto">
    Sesión integral diseñada para aliviar tensiones, mejorar movilidad y equilibrar cuerpo y mente en una sola atención.
  </p>
</div>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="p-6 rounded-3xl bg-white/5 border border-white/10 transition-all duration-500 ease-out hover:scale-[1.03] hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-black/40">

  <div className="text-5xl mb-4">
    🤲
  </div>

  <h3 className="text-xl font-semibold">
    Quiropraxia
  </h3>

</div>

      <div className="p-6 rounded-3xl bg-white/5 border border-white/10 transition-all duration-500 ease-out hover:scale-[1.03] hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-black/40">
      <div className="text-5xl mb-4">
  🔥
</div>
        <h3 className="text-xl font-semibold mb-3">
          Ventosas de Fuego
        </h3>
        
      </div>

      <div className="p-6 rounded-3xl bg-white/5 border border-white/10 transition-all duration-500 ease-out hover:scale-[1.03] hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-black/40">
      <div className="text-5xl mb-4">
  💆
</div>
        <h3 className="text-xl font-semibold mb-3">
           Masaje Localizado
        </h3>
        
      </div>

    </div>

  </div>
</section>
<section className="py-24 px-6 md:px-20 bg-zinc-950">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
     Conoce el Centro Quirokawa
    </h2>

    <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
      Conoce nuestros espacios y descubre un ambiente pensado para tu bienestar, tranquilidad y recuperación.
    </p>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 transition-all duration-500 hover:scale-[1.03] hover:border-white/20 hover:shadow-2xl hover:shadow-black/40"> 
        <img
          src={quirokawa1}
          alt="Proyecto 1"
          className="w-full h-64 md:h-72 object-cover object-top opacity-80 transition-all duration-700 hover:scale-110"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">Quiropraxia</h3>

<p className="text-gray-400 text-sm">
Ajustes quiroprácticos orientados a mejorar la movilidad, aliviar molestias y favorecer el equilibrio del cuerpo.
</p>
        </div>
      </div>

      <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 transition-all duration-500 hover:scale-[1.03] hover:border-white/20 hover:shadow-2xl hover:shadow-black/40">
        <img
          src={quirokawa2}
          alt="Proyecto 2"
          className="w-full h-64 md:h-72 object-cover object-top opacity-80 transition-all duration-700 hover:scale-110"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">Masajes Terapéuticos</h3>
          <p className="text-gray-400 text-sm">Masajes enfocados en liberar tensiones musculares, mejorar la circulación y promover la relajación.</p>
        </div>
      </div>

      <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 transition-all duration-500 hover:scale-[1.03] hover:border-white/20 hover:shadow-2xl hover:shadow-black/40">
        <img
          src={quirokawa5}
          alt="Proyecto 3"
          className="w-full h-64 md:h-72 object-cover object-top opacity-80 transition-all duration-700 hover:scale-110"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">Terapias Energéticas</h3>
          <p className="text-gray-400 text-sm">Sesiones complementarias orientadas a armonizar cuerpo, mente y energía mediante distintas técnicas terapéuticas.</p>
        </div>
      </div>

    </div>

  </div>
</section>
<section className="py-24 px-6 md:px-20 bg-zinc-950">
  <div className="max-w-4xl mx-auto text-center">

  <h2 className="text-4xl font-bold mb-4">
  Agenda tu Sesión Standard
</h2>

  <p className="text-gray-400 mb-10">
  Da el primer paso hacia tu bienestar. Agenda tu Sesión Standard y comienza un tratamiento orientado a aliviar molestias, recuperar movilidad y favorecer tu equilibrio físico y energético.
</p>

  <div className="space-y-4 text-lg text-gray-300">

    <p>
      📍 Comuna de Padre Hurtado, Santiago de Chile
    </p>

    <p>
     <p>
  📱 +56 9 5008 9805
</p>
    </p>

    <p>
      
    </p>

  </div>
<img
  src={quirokawalogo}
  alt="Centro Quirokawa"
  className="mx-auto w-32 my-8 opacity-80"
/>

<a
  href="https://wa.me/56950089805"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-10 px-8 py-4 rounded-2xl bg-amber-500 text-black hover:bg-amber-400 hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-2xl"
>
  Agendar mi Sesión Standard
</a>
  

</div>
</section>
<footer className="py-10 px-6 md:px-20 bg-black border-t border-white/10">

  <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

    <div className="text-center md:text-left">
      <h3 className="text-xl font-bold tracking-wide">
  Centro Quirokawa
</h3>

<p className="text-gray-400 text-sm mt-2">
  Bienestar integral para cuerpo y mente.
</p>
    </div>

    <div className="flex gap-6 text-gray-400 text-sm">
      <a href="#" className="hover:text-white transition">Inicio</a>
      <a href="#" className="hover:text-white transition">Servicios</a>
      <a href="#" className="hover:text-white transition">Contacto</a>
    </div>

    <div className="text-gray-500 text-sm text-center md:text-right">
      © {new Date().getFullYear()} Todos los derechos reservados
    </div>

  </div>

</footer>
<a
  href="https://wa.me/56950089805"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white px-5 py-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 font-bold"
>
  WhatsApp
</a>

</div>
);
}


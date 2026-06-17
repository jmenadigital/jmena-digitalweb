import { Link } from 'react-router-dom'
import pacientehero from "./assets/pacientehero.jpg";
import martinperfil from "./assets/martinperfil.jpg";
import martincolor from "./assets/martincolor.jpg";
import martinultrasonido from "./assets/martinultrasonido.jpg";
export default function DemoMartinAndrada() {
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
  src={pacientehero}
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
  Dr. Martín Andrada
</p>

      <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-white">
        Odontología integral con atención personalizada
      </h1>

      <p className="mt-8 text-xl text-gray-300 leading-relaxed font-light">
        Cuidamos tu salud bucal con tratamientos modernos, diagnóstico preciso y una atención cercana para cada paciente.
      </p>

      <div className="mt-10 flex flex-col md:flex-row gap-6">

        <a
          href="https://wa.me/5492215068910?text=Hola%20Dr.%20Martín%20Andrada,%20quisiera%20solicitar%20un%20turno."
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-2xl bg-green-500 hover:bg-green-400 hover:scale-105 transition-all duration-500 ease-out font-semibold text-lg text-center shadow-lg hover:shadow-2xl"
        >
          Solicitar turno por WhatsApp
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
  Odontología moderna y atención de calidad
</h2>

<p className="text-gray-400 mb-12">
  Tecnología, experiencia y atención personalizada para cuidar tu salud bucal.
</p>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="p-6 rounded-3xl bg-white/5 border border-white/10 transition-all duration-500 ease-out hover:scale-[1.03] hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-black/40">
        <h3 className="text-xl font-semibold mb-3">
  🦷 Atención Integral
</h3>
        <p className="text-gray-400">
          Tratamientos orientados al bienestar y la salud de cada paciente.
        </p>
      </div>

      <div className="p-6 rounded-3xl bg-white/5 border border-white/10 transition-all duration-500 ease-out hover:scale-[1.03] hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-black/40">
        <h3 className="text-xl font-semibold mb-3">
          🔬 Diagnóstico Preciso
        </h3>
        <p className="text-gray-400">
          Evaluación profesional apoyada por tecnología moderna.
        </p>
      </div>

      <div className="p-6 rounded-3xl bg-white/5 border border-white/10 transition-all duration-500 ease-out hover:scale-[1.03] hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-black/40">
        <h3 className="text-xl font-semibold mb-3">
          😊 Sonrisas con Confianza
        </h3>
        <p className="text-gray-400">
          Atención cercana para que cada paciente se sienta seguro y acompañado.
        </p>
      </div>

    </div>

  </div>
</section>
<section className="py-24 px-6 md:px-20 bg-zinc-950">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
     Conoce al Dr. Martín Andrada
    </h2>

    <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
      Experiencia, compromiso y tecnología al servicio de la salud bucal.
    </p>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 transition-all duration-500 hover:scale-[1.03] hover:border-white/20 hover:shadow-2xl hover:shadow-black/40"> 
        <img
          src={martinperfil}
          alt="Proyecto 1"
          className="w-full h-48 object-cover opacity-80 transition-all duration-700 hover:scale-110"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">Atención Personalizada</h3>
          <p className="text-gray-400 text-sm">Cada paciente recibe una atención cercana y enfocada en sus necesidades.</p>
        </div>
      </div>

      <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 transition-all duration-500 hover:scale-[1.03] hover:border-white/20 hover:shadow-2xl hover:shadow-black/40">
        <img
          src={martincolor}
          alt="Proyecto 2"
          className="w-full h-48 object-cover opacity-80 transition-all duration-700 hover:scale-110"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">Experiencia Profesional</h3>
          <p className="text-gray-400 text-sm">Compromiso permanente con la salud y el bienestar de sus pacientes.</p>
        </div>
      </div>

      <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 transition-all duration-500 hover:scale-[1.03] hover:border-white/20 hover:shadow-2xl hover:shadow-black/40">
        <img
          src={martinultrasonido}
          alt="Proyecto 3"
          className="w-full h-48 object-cover opacity-80 transition-all duration-700 hover:scale-110"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">Tecnología Odontológica</h3>
          <p className="text-gray-400 text-sm">Equipamiento moderno para diagnósticos y tratamientos de calidad.</p>
        </div>
      </div>

    </div>

  </div>
</section>
<section className="py-24 px-6 md:px-20 bg-zinc-950">
  <div className="max-w-4xl mx-auto text-center">

  <h2 className="text-4xl font-bold mb-4">
  Agenda tu consulta
</h2>

  <p className="text-gray-400 mb-10">
  Estamos disponibles para responder tus consultas y ayudarte a cuidar tu salud bucal.
</p>

  <div className="space-y-4 text-lg text-gray-300">

    <p>
      📍 18 entre 40 y 41 Nº 435, La Plata, Argentina
    </p>

    <p>
      📱 +54 9 221 506-8910
    </p>

    <p>
      📧 martingts@hotmail.com
    </p>

  </div>

  <a
    href="https://wa.me/5492215068910"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-10 px-8 py-4 rounded-2xl bg-green-500 hover:bg-green-400 hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-2xl"
  >
    Solicitar turno por WhatsApp
  </a>

</div>
</section>
<footer className="py-10 px-6 md:px-20 bg-black border-t border-white/10">

  <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

    <div className="text-center md:text-left">
      <h3 className="text-xl font-bold tracking-wide">
  Dr. Martín Andrada
</h3>
      <p className="text-gray-400 text-sm mt-2">
  Odontología integral con atención personalizada y tecnología moderna.
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
  href="https://wa.me/5492215068910"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white px-5 py-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 font-bold"
>
  WhatsApp
</a>

</div>
);
}


import { Link } from 'react-router-dom'
import clinicasonrisaperfecta from "./assets/clinicasonrisaperfecta.jpg";
import heroImage from "./assets/hero.png";
export default function DemoPlantilla() {
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
  src={heroImage}
  alt="Imagen principal"
  className="w-full h-full object-cover opacity-60 scale-105"
/>

        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 px-6 md:px-20 max-w-4xl">

        <p className="text-green-400 uppercase tracking-[0.3em] text-sm mb-6">
          Nombre del Negocio
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
          Haz crecer tu negocio con una presencia profesional en internet
        </h1>

        <p className="mt-8 text-xl text-gray-300 leading-relaxed max-w-2xl font-light">
          Más visibilidad, más confianza y una forma sencilla para que nuevos clientes contacten tu negocio.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-6">

          <a
            href="https://wa.me/56940813056?text=Hola%20quiero%20una%20web%20como%20esta"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl bg-green-500 hover:bg-green-400 hover:scale-105 transition-all duration-500 ease-out font-semibold text-lg text-center shadow-lg hover:shadow-2xl"
          >
            Solicitar información por WhatsApp
          </a>

          <a
  href="/#demo"
  className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-500 ease-out font-semibold text-lg"
>
  Ir al sitio principal!
</a>

        </div>

      </div>

    </section>

<section className="py-24 px-6 md:px-20 bg-gradient-to-b from-black to-zinc-950">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      Resultados que generan confianza
    </h2>

    <p className="text-gray-400 mb-12">
      Proyectos diseñados para mejorar la presencia digital de cualquier negocio.
    </p>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="p-6 rounded-3xl bg-white/5 border border-white/10 transition-all duration-500 ease-out hover:scale-[1.03] hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-black/40">
        <h3 className="text-xl font-semibold mb-3">
  🚀 Diseño moderno
</h3>
        <p className="text-gray-400">
          Interfaces limpias, rápidas y enfocadas en conversión.
        </p>
      </div>

      <div className="p-6 rounded-3xl bg-white/5 border border-white/10 transition-all duration-500 ease-out hover:scale-[1.03] hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-black/40">
        <h3 className="text-xl font-semibold mb-3">
          ⚡ Experiencia optimizada
        </h3>
        <p className="text-gray-400">
          Navegación clara para aumentar contacto de clientes.
        </p>
      </div>

      <div className="p-6 rounded-3xl bg-white/5 border border-white/10 transition-all duration-500 ease-out hover:scale-[1.03] hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-black/40">
        <h3 className="text-xl font-semibold mb-3">
          🛡️ Confianza digital
        </h3>
        <p className="text-gray-400">
          Sitios que transmiten profesionalismo desde el primer segundo.
        </p>
      </div>

    </div>

  </div>
</section>
<section className="py-24 px-6 md:px-20 bg-zinc-950">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
      Proyectos realizados
    </h2>

    <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
      Ejemplos de cómo puede verse tu negocio con una presencia digital profesional.
    </p>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 transition-all duration-500 hover:scale-[1.03] hover:border-white/20 hover:shadow-2xl hover:shadow-black/40"> 
        <img
          src={heroImage}
          alt="Proyecto 1"
          className="w-full h-48 object-cover opacity-80 transition-all duration-700 hover:scale-110"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">Página para captar clientes</h3>
          <p className="text-gray-400 text-sm">Diseños profesionales que ayudan a convertir visitas en clientes</p>
        </div>
      </div>

      <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 transition-all duration-500 hover:scale-[1.03] hover:border-white/20 hover:shadow-2xl hover:shadow-black/40">
        <img
          src={heroImage}
          alt="Proyecto 2"
          className="w-full h-48 object-cover opacity-80 transition-all duration-700 hover:scale-110"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">Sitio corporativo</h3>
          <p className="text-gray-400 text-sm">Imagen profesional de marca</p>
        </div>
      </div>

      <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 transition-all duration-500 hover:scale-[1.03] hover:border-white/20 hover:shadow-2xl hover:shadow-black/40">
        <img
          src={heroImage}
          alt="Proyecto 3"
          className="w-full h-48 object-cover opacity-80 transition-all duration-700 hover:scale-110"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">Página de servicios</h3>
          <p className="text-gray-400 text-sm">Claridad y contacto directo</p>
        </div>
      </div>

    </div>

  </div>
</section>
<section className="py-24 px-6 md:px-20 bg-zinc-950">
  <div className="max-w-4xl mx-auto text-center">

  <h2 className="text-4xl font-bold mb-4">
    Hablemos de tu proyecto
  </h2>

  <p className="text-gray-400 mb-10">
    Cuéntanos qué necesitas y te ayudamos a construir una presencia digital profesional.
  </p>

  <div className="space-y-4 text-lg text-gray-300">

    <p>
      📱 WhatsApp directo para atención rápida
    </p>

    <p>
      📧 Respuesta por correo en menos de 24 horas
    </p>

    <p>
      🌐 Soluciones web adaptadas a cualquier negocio
    </p>

  </div>

  <a
    href="https://wa.me/56940813056"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-10 px-8 py-4 rounded-2xl bg-green-500 hover:bg-green-400 hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-2xl"
  >
    Iniciar conversación
  </a>

</div>
</section>
<footer className="py-10 px-6 md:px-20 bg-black border-t border-white/10">

  <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

    <div className="text-center md:text-left">
      <h3 className="text-xl font-bold tracking-wide">
  JMenaDigital
</h3>
      <p className="text-gray-400 text-sm mt-2">
  Diseño web profesional para negocios que quieren crecer.
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
  href="https://wa.me/56940813056"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white px-5 py-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 font-bold"
>
  WhatsApp
</a>

</div>
);
}


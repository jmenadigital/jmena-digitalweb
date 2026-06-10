import { Link } from 'react-router-dom'
import clinicasonrisaperfecta from "./assets/clinicasonrisaperfecta.jpg";
import heroImage from "./assets/hero.png";
export default function DemoPlantilla() {
  return (
    <div className="min-h-screen bg-black text-white">

    {/* HERO */}
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* IMAGEN */}
      <div className="absolute inset-0">
        <img
  src={heroImage}
  alt="Imagen principal"
  className="w-full h-full object-cover opacity-40"
/>

        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 px-6 md:px-20 max-w-4xl">

        <p className="text-green-400 uppercase tracking-[0.3em] text-sm mb-6">
          Nombre del Negocio
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight">
          Haz crecer tu negocio con una presencia profesional en internet
        </h1>

        <p className="mt-8 text-xl text-gray-300 leading-relaxed max-w-2xl">
          Más visibilidad, más confianza y una forma sencilla para que nuevos clientes contacten tu negocio.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-6">

          <a
            href="https://wa.me/56940813056?text=Hola%20quiero%20una%20web%20como%20esta"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl bg-green-500 hover:bg-green-400 transition-all duration-300 font-semibold text-lg text-center"
          >
            Solicitar información por WhatsApp
          </a>

          <a
  href="/#demo"
  className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-300 font-semibold text-lg"
>
  Ir al sitio principal!
</a>

        </div>

      </div>

    </section>

<section className="py-20 px-6 md:px-20 bg-zinc-950">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-4xl font-bold mb-4">
      Servicios Destacados
    </h2>

    <p className="text-gray-400 mb-12">
      Todo lo que tus clientes necesitan para confiar en tu negocio.
    </p>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
        <h3 className="text-xl font-semibold mb-3">
          Atención Profesional
        </h3>
        <p className="text-gray-400">
          Respuestas rápidas y atención personalizada.
        </p>
      </div>

      <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
        <h3 className="text-xl font-semibold mb-3">
          Presupuestos Claros
        </h3>
        <p className="text-gray-400">
          Información transparente y sin compromiso.
        </p>
      </div>

      <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
        <h3 className="text-xl font-semibold mb-3">
          Servicio Confiable
        </h3>
        <p className="text-gray-400">
          Compromiso con la calidad y la satisfacción.
        </p>
      </div>

    </div>

  </div>
</section>
<section className="py-20 px-6 md:px-20">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-4xl font-bold mb-4">
      Lo que dicen nuestros clientes
    </h2>

    <p className="text-gray-400 mb-12">
      Opiniones reales de personas que confiaron en nuestros servicios.
    </p>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
        <p className="mb-4">
          ⭐⭐⭐⭐⭐
        </p>
        <p className="text-gray-300">
          Excelente atención y resultados impecables.
        </p>
      </div>

      <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
        <p className="mb-4">
          ⭐⭐⭐⭐⭐
        </p>
        <p className="text-gray-300">
          Respondieron rápido y resolvieron todas mis dudas.
        </p>
      </div>

      <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
        <p className="mb-4">
          ⭐⭐⭐⭐⭐
        </p>
        <p className="text-gray-300">
          Muy recomendable. Volvería a contratar sin dudarlo.
        </p>
      </div>

    </div>

  </div>
</section>
<section className="py-20 px-6 md:px-20 bg-zinc-950">
  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-4xl font-bold mb-4">
      Solicita Información
    </h2>

    <p className="text-gray-400 mb-10">
      Estamos disponibles para responder tus consultas y ayudarte a dar el siguiente paso.
    </p>

    <div className="space-y-4 text-lg">

      <p>
        📱 WhatsApp: +56 9 4081 3056
      </p>

      <p>
        📧 contacto@tunegocio.cl
      </p>

      <p>
        🌐 Atención online y presencial
      </p>

    </div>

    <a
      href="https://wa.me/56940813056"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-10 px-8 py-4 rounded-2xl bg-green-500 hover:bg-green-400 transition-all duration-300 font-semibold"
    >
      Contactar por WhatsApp
    </a>

  </div>
</section>

</div>
);
}


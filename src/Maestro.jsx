import { Link } from 'react-router-dom'
import maestrofachada from './assets/maestrofachada.png'
export default function Maestro() {
  const enviarWhatsApp = (servicio) => {
  const telefono = "56940813056";

  const mensajes = {
    electricista: "Hola, necesito un electricista. Me gustaría coordinar una visita lo antes posible.",
    fontanero: "Hola, necesito un fontanero. Tengo un problema en casa y necesito ayuda.",
    pintor: "Hola, necesito un pintor para un trabajo en mi hogar.",
    albañil: "Hola, necesito un albañil para una reparación o remodelación.",
    gasfiter: "Hola, necesito un gasfiter para una instalación o reparación.",
    piscinas: "Hola, necesito servicio de piscinas para mantención o limpieza."
  };

  const mensaje = mensajes[servicio] || "Hola, necesito información de un servicio.";
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
};
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">

      {/* HERO */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
  Maestro Profesional
</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
  Electricidad, gasfitería, pintura, albañilería y mantención de piscinas.
  Soluciones rápidas y confiables para tu hogar.
</p>
<img
  src={maestrofachada}
  alt="Maestro Profesional"
  className="w-full max-w-5xl mx-auto rounded-3xl mt-8 shadow-2xl border border-white/10 hover:scale-[1.02] transition duration-500"
/> <div className="mt-8">
  <a
  href="/#demo"
  className="inline-block px-6 py-3 rounded-2xl bg-blue-500 hover:bg-blue-400 transition-all duration-300 font-semibold shadow-lg"
>
  ← Volver a Página Principal
</a>
</div>
      </section>

      {/* SERVICIOS */}
      <section className="grid md:grid-cols-3 gap-6">

        <div className="bg-gray-800 p-6 rounded-2xl hover:scale-105 transition duration-300 cursor-pointer border border-white/10 hover:border-white/30">
  
  <div className="text-3xl mb-2">⚡</div>

  <h2 className="text-xl font-bold mb-2">Electricista</h2>

  <p className="text-gray-400 text-sm">
    Instalaciones, reparaciones y urgencias eléctricas.
  </p>

  <button 
  onClick={() => enviarWhatsApp("electricista")}
  className="mt-4 text-sm bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition"
>
  Solicitar
</button>

</div>

<div className="bg-gray-800 p-6 rounded-2xl hover:scale-105 transition duration-300 cursor-pointer border border-white/10 hover:border-white/30">

  <div className="text-3xl mb-2">🚿</div>

  <h2 className="text-xl font-bold mb-2">Fontanero</h2>

  <p className="text-gray-400 text-sm">
    Fugas, cañerías, baños y redes de agua.
  </p>

  <button 
  onClick={() => enviarWhatsApp("fontanero")}
  className="mt-4 text-sm bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition"
>
  Solicitar
</button>

</div>

<div className="bg-gray-800 p-6 rounded-2xl hover:scale-105 transition duration-300 cursor-pointer border border-white/10 hover:border-white/30">

  <div className="text-3xl mb-2">🎨</div>

  <h2 className="text-xl font-bold mb-2">Pintor</h2>

  <p className="text-gray-400 text-sm">
    Interior, exterior y terminaciones profesionales.
  </p>

  <button 
  onClick={() => enviarWhatsApp("pintor")}
  className="mt-4 text-sm bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition"
>
  Solicitar
</button>

</div>

<div className="bg-gray-800 p-6 rounded-2xl hover:scale-105 transition duration-300 cursor-pointer border border-white/10 hover:border-white/30">

  <div className="text-3xl mb-2">🧱</div>

  <h2 className="text-xl font-bold mb-2">Albañil</h2>

  <p className="text-gray-400 text-sm">
    Construcción, reparaciones y remodelaciones.
  </p>

  <button 
  onClick={() => enviarWhatsApp("albañil")}
  className="mt-4 text-sm bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition"
>
  Solicitar
</button>

</div>

<div className="bg-gray-800 p-6 rounded-2xl hover:scale-105 transition duration-300 cursor-pointer border border-white/10 hover:border-white/30">

  <div className="text-3xl mb-2">🔧</div>

  <h2 className="text-xl font-bold mb-2">Gasfiter</h2>

  <p className="text-gray-400 text-sm">
    Instalación y mantenimiento de gas y cañerías.
  </p>

  <button 
  onClick={() => enviarWhatsApp("gasfiter")}
  className="mt-4 text-sm bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition"
>
  Solicitar
</button>

</div>

<div className="bg-gray-800 p-6 rounded-2xl hover:scale-105 transition duration-300 cursor-pointer border border-white/10 hover:border-white/30">

  <div className="text-3xl mb-2">🏊‍♂️</div>

  <h2 className="text-xl font-bold mb-2">Piscinas</h2>

  <p className="text-gray-400 text-sm">
    Mantención, limpieza y reparación de piscinas.
  </p>

  <button 
  onClick={() => enviarWhatsApp("piscinas")}
  className="mt-4 text-sm bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition"
>
  Solicitar
</button>

</div>
      </section>
      <section className="mt-20 text-center bg-white/5 rounded-3xl p-10 border border-white/10">

  <h2 className="text-3xl font-bold mb-4">
    ¿Por qué elegirnos?
  </h2>

  <p className="text-gray-300 max-w-3xl mx-auto text-lg">
    Atención rápida, trabajos garantizados y comunicación directa por WhatsApp.
    Nos enfocamos en ofrecer soluciones confiables para cada necesidad del hogar.
  </p>
</section>
<section className="mt-20">
  <h2 className="text-3xl font-bold text-center mb-10">
    Lo que dicen nuestros clientes
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      <p className="text-yellow-400 mb-4">★★★★★</p>
      <p className="text-gray-300">
        Excelente servicio. Respondieron rápido y solucionaron el problema el mismo día.
      </p>
      <p className="mt-4 font-semibold">
        — Carlos M.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      <p className="text-yellow-400 mb-4">★★★★★</p>
      <p className="text-gray-300">
        Muy profesionales y transparentes. Los recomiendo totalmente.
      </p>
      <p className="mt-4 font-semibold">
        — Andrea R.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      <p className="text-yellow-400 mb-4">★★★★★</p>
      <p className="text-gray-300">
        Trabajo impecable y excelente atención por WhatsApp.
      </p>
      <p className="mt-4 font-semibold">
        — Rodrigo P.
      </p>
    </div>

  </div>
</section>

    </div>
  )
}
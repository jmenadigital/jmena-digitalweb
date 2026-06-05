import { Link } from 'react-router-dom'
import barberiaHero from './assets/barberiaHero.jpg'
export default function DemoBarberia() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 text-center py-10">
<img
    src={barberiaHero}
    alt="Barbería El Estilo"
    className="w-full max-w-5xl h-[350px] object-cover rounded-3xl mb-10"
  />
      <h1 className="text-4xl md:text-6xl font-bold">
        Barbería El Estilo
      </h1>

      <p className="mt-6 text-xl text-gray-300 max-w-2xl">
        Cortes modernos, atención premium y reservas rápidas por WhatsApp.
      </p>
      <div className="mt-16 max-w-5xl w-full">
  <h2 className="text-3xl font-bold mb-8">
    Nuestros Servicios
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-2">✂ Corte Clásico</h3>
      <p className="text-gray-400">
        Estilo limpio y profesional para cualquier ocasión.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-2">🔥 Corte Moderno</h3>
      <p className="text-gray-400">
        Tendencias actuales adaptadas a tu estilo personal.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-2">🧔 Perfilado de Barba</h3>
      <p className="text-gray-400">
        Definición precisa para una imagen impecable.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-2">💎 Experiencia Premium</h3>
      <p className="text-gray-400">
        Atención personalizada para quienes buscan algo más.
      </p>
    </div>

  </div>
</div>

      <div className="mt-10 flex flex-col md:flex-row gap-6">

        <a
          href="https://wa.me/56940813056?text=Hola%20quiero%20una%20web%20como%20esta"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-2xl bg-green-500 hover:bg-green-400 transition-all duration-300 font-semibold text-lg"
        >
          Reservar hora
        </a>

        <a
  href="/#demo"
  className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-300 font-semibold text-lg"
>
  Ir al sitio principal
</a>

      </div>

    </div>
  )
}
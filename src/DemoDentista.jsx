import { Link } from 'react-router-dom'
import clinicasonrisaperfecta from "./assets/clinicasonrisaperfecta.jpg";
export default function DemoDentista() {
  return (
    <div className="min-h-screen bg-black text-white">

    {/* HERO */}
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* IMAGEN */}
      <div className="absolute inset-0">
        <img
          src={clinicasonrisaperfecta}
          alt="Clínica dental moderna"
          className="w-full h-full object-cover opacity-100"
        />

        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 px-6 md:px-20 max-w-4xl">

        <p className="text-green-400 uppercase tracking-[0.3em] text-sm mb-6">
          Clínica Dental Premium
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight">
          Recupera tu sonrisa con tecnología moderna
        </h1>

        <p className="mt-8 text-xl text-gray-300 leading-relaxed max-w-2xl">
          Atención profesional, reservas rápidas por WhatsApp y una experiencia cómoda para toda la familia.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-6">

          <a
            href="https://wa.me/56940813056?text=Hola%20quiero%20una%20web%20como%20esta"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl bg-green-500 hover:bg-green-400 transition-all duration-300 font-semibold text-lg text-center"
          >
            Reservar por WhatsApp
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
    </div>
  );
}


import josemiguel from "./assets/josemiguel.png";
import { Link } from 'react-router-dom'
import dentista from './assets/dentista.jpg'
import barberia from './assets/barberia.jpg'
import maestrofachada from './assets/maestrofachada.png'

import electricista from './assets/electricista.jpg'
import fontanero from './assets/fontanero.jpg'
import pintor from './assets/pintor.jpg'
import albanil from './assets/albañil.jpg'
import piscina from './assets/piscina.jpg'
export default function JMenaDigitalWeb() {
  const servicios = [
  {
    titulo: "Dentista",
    imagen: dentista,
  },
  {
    titulo: "Barbería",
    imagen: barberia,
  },
  {
    titulo: "Maestro Profesional",
    imagen: maestrofachada,
  }
];
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden scroll-smooth">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-950 via-black to-black opacity-90"></div>
      <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(148,163,184,0.15),transparent_30%)]"></div>

      <div className="relative z-10">
        {/* HERO */}
        <section className="px-6 md:px-20 py-16 md:py-24">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
               Sitios web que convierten visitas en clientes
              </div>

              <div className="flex items-center gap-6 mb-8">
                <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 via-cyan-400 to-slate-300 p-[2px] shadow-2xl shadow-blue-500/30">
                  <div className="w-full h-full rounded-3xl bg-black flex items-center justify-center">
                    <span className="text-3xl font-black tracking-tight bg-gradient-to-br from-blue-300 to-slate-200 bg-clip-text text-transparent">
                      JM
                    </span>
                  </div>
                </div>

                <div>
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white">
                    JMena
                    <span className="block text-red-500">DigitalWeb</span>
                  </h1>
                </div>
              </div>

              <p className="mt-8 text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
  Ayudo a emprendedores y negocios locales a conseguir más clientes con sitios web modernos, profesionales y optimizados para generar confianza desde el primer vistazo.
</p>

<p className="mt-4 text-lg text-gray-400 max-w-xl">
  Diseño web profesional, inteligencia artificial y acompañamiento personalizado.
  <br />
  Me encargo de la parte técnica para que tú puedas concentrarte en hacer crecer tu negocio.
</p>

<div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="https://wa.me/56940813056"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-400 hover:scale-105 hover:shadow-green-400/30 transition-all duration-300 text-lg font-semibold shadow-2xl shadow-green-500/20"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M20.52 3.48A11.86 11.86 0 0012.07 0C5.5 0 .2 5.3.2 11.86c0 2.1.55 4.16 1.6 5.97L0 24l6.36-1.67a11.82 11.82 0 005.71 1.46h.01c6.56 0 11.86-5.3 11.86-11.86 0-3.18-1.24-6.17-3.42-8.45zM12.08 21.7h-.01a9.8 9.8 0 01-5-1.36l-.36-.21-3.77.99 1.01-3.67-.24-.38a9.8 9.8 0 01-1.5-5.22c0-5.4 4.39-9.79 9.8-9.79 2.62 0 5.08 1.02 6.93 2.87a9.73 9.73 0 012.87 6.92c0 5.4-4.39 9.79-9.73 9.79zm5.65-7.37c-.31-.15-1.84-.9-2.13-1.01-.29-.1-.5-.15-.71.15-.21.31-.82 1.01-1 1.22-.18.21-.37.23-.68.08-.31-.15-1.31-.48-2.5-1.53-.93-.83-1.56-1.85-1.74-2.16-.18-.31-.02-.48.13-.63.13-.13.31-.34.47-.52.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.54-.08-.15-.71-1.7-.97-2.33-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.54.08-.82.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.39 4.75.75.32 1.33.51 1.78.65.75.24 1.43.21 1.97.13.6-.09 1.84-.75 2.1-1.48.26-.73.26-1.36.18-1.48-.08-.12-.29-.21-.6-.36z"/>
  </svg>

  Solicita tu asesoría gratuita
                </a>

                <a
                  href="#demo"
                  className="px-8 py-4 rounded-2xl border border-gray-700 hover:border-blue-400 transition-all duration-300 text-lg"
                >
                  Ver ejemplos de sitios web
                </a>
              </div>
            </div>

            {/* PERSONAL SECTION */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-slate-400/10 blur-3xl rounded-full animate-pulse"></div>

              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-8 shadow-2xl overflow-hidden">
                <div className="flex flex-col gap-8 items-center">
                  <img
                    src={josemiguel}
                    alt="José Miguel"
                   className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl object-cover border border-blue-400/30 shadow-xl flex-shrink-0"
                  />

                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4 text-blue-300">
                      Hola, soy José Miguel.
                    </h2>

                    <p className="text-gray-300 leading-relaxed text-lg">
                      Después de más de 30 años trabajando en ventas y atención a personas,
                      entendí algo muy importante: la confianza es lo primero.
                    </p>

                    <p className="mt-4 text-gray-400 leading-relaxed">
                      Mi objetivo es ayudar a negocios locales a tener una presencia online moderna,
                      profesional y humana. Sin complicaciones técnicas y con atención cercana.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8 justify-center">
                      {[
                        'Amabilidad',
                        'Responsabilidad',
                        'Honestidad',
                        'Humildad',
                        'Buen humor'
                      ].map((item) => (
                        <span
                          key={item}
                          className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-200 text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        

        
        <section id="demo" className="mt-12 px-6 md:px-20">
          <div className="text-center mb-10">
            <div className="mb-10 flex justify-center">
  <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm md:text-base">
  🟢 Tu negocio online • Recibiendo consultas 24/7
</div>
</div>
  <p className="text-green-400 text-sm uppercase tracking-widest">
    Demo interactiva
  </p>

  <h2 className="text-2xl md:text-4xl font-bold text-white mt-2">
    Así se vería tu negocio en internet
  </h2>

  <p className="text-gray-400 mt-3 max-w-xl mx-auto">
    Sin complicaciones. Sin tecnicismos. Solo una página que atrae clientes.
  </p>
</div>  
    
{/* MULTI DEMO */}
<div className="text-center mb-8">
  <p className="text-yellow-300 text-sm font-semibold">
    ⚡ Estas páginas están diseñadas para atraer clientes reales desde el primer día
  </p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">

  {/* DEMO 1 */}
<Link
  to="/demo-dentista"
  className="relative overflow-hidden rounded-3xl group h-[420px]"
>
  <img
    src={dentista}
    alt="Dentista"
    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
  />

  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10 p-8 flex flex-col justify-end h-full">
    <h3 className="text-3xl font-bold text-white">
      Clínica Sonrisa Perfecta
    </h3>

    <p className="text-gray-200 mt-3">
      Clientes nuevos todos los días con una web profesional
    </p>

    <span className="mt-6 inline-flex w-fit px-6 py-3 bg-green-500 rounded-xl text-white">
      Ver Demo
    </span>
  </div>
</Link>

  {/* DEMO 2 */}
<Link
  to="/demo-barberia"
  className="relative overflow-hidden rounded-3xl group h-[420px]"
>
  <img
    src={barberia}
    alt="Barbería"
    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
  />

  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10 p-8 flex flex-col justify-end h-full">
    <h3 className="text-3xl font-bold text-white">
      Barbería El Estilo
    </h3>

    <p className="text-gray-200 mt-3">
      Agenda citas automáticamente por WhatsApp sin perder clientes
    </p>

    <span className="mt-6 inline-flex w-fit px-6 py-3 bg-green-500 rounded-xl text-white">
      Ver Demo
    </span>
  </div>
</Link>

 {/* DEMO 3 */}
<Link
  to="/maestro"
  className="relative overflow-hidden rounded-3xl group h-[420px]"
>
  <img
    src={maestrofachada}
   alt="Maestro Profesional"
    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
  />

  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10 p-8 flex flex-col justify-end h-full">
    <h3 className="text-3xl font-bold text-white">
      Maestro Profesional
    </h3>

    <p className="text-gray-200 mt-3">
      Electricidad, gasfitería, pintura, albañilería y mantenimiento para hogares y edificios.
    </p>

    <span className="mt-6 inline-flex w-fit px-6 py-3 bg-green-500 rounded-xl text-white">
      Ver Demo
    </span>
  </div>
</Link>

</div>
<div className="text-center mt-16 px-4">

  <h3 className="text-2xl md:text-4xl font-bold text-white">
    ¿Listo para tener una web así?
  </h3>

  <p className="text-gray-300 mt-4 max-w-xl mx-auto">
    Cada proyecto se adapta a las necesidades de tu negocio para ayudarte a generar confianza, atraer clientes y fortalecer tu presencia online.
  </p>

  <p className="text-green-400 mt-3 font-semibold">
    🚀 Entrega rápida • Diseño profesional • Enfocado en resultados
  </p>

  <a
    href="https://wa.me/56940813056?text=Hola%20vi%20la%20demo%20y%20quiero%20una%20web%20como%20esta"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-8 inline-flex px-10 py-4 bg-green-500 rounded-2xl text-white font-semibold text-lg hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
  >
    Solicitar información sin compromiso
  </a>

</div>
   
</section>
{/* SOLUCIONES DIGITALES */}
<section className="px-6 md:px-20 py-20">
  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold">
        Soluciones Digitales
      </h2>

      <p className="text-gray-400 text-xl mt-4 max-w-3xl mx-auto">
        Tu negocio visible y trabajando las 24 horas.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <h3 className="text-2xl font-semibold mb-4">
          💬 WhatsApp Integrado
        </h3>

        <p className="text-gray-400">
          Facilita que tus clientes te contacten con un solo clic desde cualquier dispositivo.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <h3 className="text-2xl font-semibold mb-4">
          📅 Reservas Online
        </h3>

        <p className="text-gray-400">
          Recibe solicitudes, citas o consultas incluso cuando no estás atendiendo.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <h3 className="text-2xl font-semibold mb-4">
          🤖 IA y Automatización
        </h3>

        <p className="text-gray-400">
          Herramientas modernas que ayudan a mejorar la atención y optimizar procesos.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <h3 className="text-2xl font-semibold mb-4">
          🌎 Presencia Profesional
        </h3>

        <p className="text-gray-400">
          Una imagen moderna y confiable para generar credibilidad y confianza.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <h3 className="text-2xl font-semibold mb-4">
          📈 Más Oportunidades
        </h3>

        <p className="text-gray-400">
          Tu sitio trabaja continuamente ayudando a captar nuevos clientes.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <h3 className="text-2xl font-semibold mb-4">
          ⚡ Disponible 24/7
        </h3>

        <p className="text-gray-400">
          Tu negocio sigue visible y accesible incluso mientras descansas.
        </p>
      </div>

    </div>

    <div className="text-center mt-16">
  <p className="text-2xl md:text-4xl font-semibold text-white max-w-4xl mx-auto leading-relaxed">
    🚀 Tu página web no es solo una vitrina digital.
    <br />
    Es una herramienta diseñada para ayudar a tu negocio a crecer.
  </p>
</div>
  </div>
</section>
        {/* PROCESS */}
        <section className="px-6 md:px-20 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              ¿Cómo funciona?
            </h2>
            <p className="text-gray-400 text-xl mt-4 max-w-3xl mx-auto">
              Un proceso simple, humano y pensado para negocios que quieren verse profesionales sin complicarse.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Conversamos',
                desc: 'Me cuentas sobre tu negocio y tus servicios. Todo comienza de forma rápida y simple.'
              },
              {
                step: '02',
                title: 'Creo una DEMO',
                desc: 'En 24 a 48 horas creo una página de muestra para que visualices cómo podría verse tu negocio online.'
              },
              {
                step: '03',
                title: 'Ajustamos detalles',
                desc: 'Realizamos ajustes rápidos y simples hasta que te sientas totalmente conforme.'
              },
              {
                step: '04',
                title: 'Publicamos',
                desc: 'Tu página queda online, funcionando y lista para recibir clientes rápidamente.'
              }
            ].map((item) => (
              <div
                key={item.step}
                className="relative p-8 rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <div className="text-6xl font-black text-blue-500/20 absolute top-4 right-5">
                  {item.step}
                </div>

                <h3 className="text-2xl font-bold text-blue-200 mb-4 mt-10">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
        
        
        
        {/* WHY */}
        <section className="px-6 md:px-20 py-20">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  ¿Por qué una página web todavía importa?
                </h2>

                <p className="mt-8 text-gray-300 text-xl leading-relaxed">
                  Las redes sociales ayudan a que te descubran.
  Tu página web es el lugar donde los clientes confirman que pueden confiar en ti.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  'Más confianza para nuevos clientes',
                  'Imagen profesional 24/7',
                  'Contacto directo por WhatsApp',
                  'Compatible con celulares',
                  'Presencia moderna y diferenciación'
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-black/40 border border-white/10"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300">
                      ✓
                    </div>
                    <span className="text-lg text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-20 py-24 text-center">
          <div className="max-w-4xl mx-auto backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-slate-500/10 border border-blue-500/20 rounded-[40px] p-12 md:p-16">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              ¿Tu negocio aún no tiene página web?
            </h2>

           <p className="mt-8 text-2xl text-white leading-relaxed max-w-2xl mx-auto">
  Puedo crear una DEMO gratuita SIN COMPROMISO para mostrarte cómo podría verse tu negocio online.
</p>

<p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
  En la mayoría de los casos, tu sitio puede estar publicado y funcionando en un plazo máximo de 72 horas.
</p>

            <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">
              <a
                href="https://wa.me/56940813056"
                className="px-10 py-5 rounded-2xl bg-blue-500 hover:bg-blue-400 transition-all duration-300 text-xl font-semibold shadow-2xl shadow-blue-500/20"
              >
                Solicitar DEMO Gratis
              </a>

              <a
                href="mailto:jmenadigitalweb@gmail.com"
                className="px-10 py-5 rounded-2xl border border-gray-700 hover:border-blue-400 transition-all duration-300 text-xl"
              >
                Enviar Email
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        {/* FINAL PERSONAL MESSAGE */}
        <section className="px-6 md:px-20 py-20">
          <div className="max-w-5xl mx-auto rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Más que una página web.
                </h2>

                <p className="mt-8 text-gray-300 text-xl leading-relaxed">
                  Mi enfoque no es solamente diseñar sitios web.
                  Mi objetivo es ayudar a personas y negocios reales a transmitir confianza, profesionalismo y cercanía en internet.
                </p>

                <p className="mt-6 text-gray-400 leading-relaxed text-lg">
                  Creo en el trato humano, la responsabilidad y en construir relaciones honestas con cada cliente.
                </p>
              </div>

              <div className="rounded-[32px] border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-slate-500/10 p-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-slate-300 flex items-center justify-center text-2xl font-black text-black shadow-xl">
                    JM
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      José Miguel Mena
                    </h3>
                    <p className="text-blue-300">
                      JMena DigitalWeb
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-300 text-lg">
                  <p>✓ Atención cercana y personalizada</p>
                  <p>✓ Diseños modernos y profesionales</p>
                  <p>✓ Soporte continuo</p>
                  <p>✓ Comunicación directa por WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>

       <footer className="relative z-10 px-6 md:px-20 py-12 border-t border-white/10 text-center text-gray-400">
  <p className="text-xl font-semibold text-white">JMena DigitalWeb</p>

  <p className="mt-3 text-gray-300">
    Hacemos que tu negocio se vea profesional y genere confianza online
  </p>

  <div className="mt-6 space-y-2 text-sm">
    <p>📍 Viña del Mar • Valparaíso • Chile</p>
    <p>📱 WhatsApp: +56 9 4081 3056</p>
    <p>✉️ jmenadigitalweb@gmail.com</p>
  </div>

  <p className="mt-6 text-xs text-gray-600">
    © {new Date().getFullYear()} JMena DigitalWeb
  </p>
</footer>

{/* BOTÓN FLOTANTE WHATSAPP */}
<div className="fixed bottom-6 right-6 z-50 group">
  <a
    href="https://wa.me/56940813056?text=Hola%20vi%20tu%20página%20web%20y%20quiero%20más%20información"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 hover:bg-green-400 text-white p-5 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110 animate-pulse"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0012.07 0C5.5 0 .2 5.3.2 11.86c0 2.1.55 4.16 1.6 5.97L0 24l6.36-1.67a11.82 11.82 0 005.71 1.46h.01c6.56 0 11.86-5.3 11.86-11.86 0-3.18-1.24-6.17-3.42-8.45z"/>
    </svg>
  </a>

  <span className="absolute right-16 bottom-3 bg-black text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition">
    Escríbeme
  </span>
</div>
</div>
)
}
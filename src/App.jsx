import josemiguel from "./assets/josemiguel.png";
export default function JMenaDigitalWeb() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-black opacity-90"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(148,163,184,0.15),transparent_30%)]"></div>

      <div className="relative z-10">
        {/* HERO */}
        <section className="px-6 md:px-20 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Presencia profesional para negocios locales
              </div>

              <div className="flex items-center gap-5 mb-6">
                <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 via-cyan-400 to-slate-300 p-[2px] shadow-2xl shadow-blue-500/30">
                  <div className="w-full h-full rounded-3xl bg-black flex items-center justify-center">
                    <span className="text-3xl font-black tracking-tight bg-gradient-to-br from-blue-300 to-slate-200 bg-clip-text text-transparent">
                      JM
                    </span>
                  </div>
                </div>

                <div>
                  <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold leading-tight tracking-tight text-white">
                    JMena
                    <span className="block text-red-500">DigitalWeb</span>
                  </h1>
                </div>
              </div>

              <p className="mt-8 text-xl md:text-2xl text-gray-300 leading-relaxed max-w-xl">
                Diseño páginas web modernas para negocios locales que desean verse más profesionales, generar confianza y captar más clientes online.
              </p>

              <p className="mt-4 text-lg text-gray-400 max-w-xl">
                Tecnología moderna con atención humana y cercana.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="https://wa.me/56940813056"
                  className="px-8 py-4 rounded-2xl bg-blue-500 hover:bg-blue-400 transition-all duration-300 text-lg font-semibold shadow-2xl shadow-blue-500/20"
                >
                  Hablar por WhatsApp
                </a>

                <a
                  href="#servicios"
                  className="px-8 py-4 rounded-2xl border border-gray-700 hover:border-blue-400 transition-all duration-300 text-lg"
                >
                  Ver servicios
                </a>
              </div>
            </div>

            {/* PERSONAL SECTION */}
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-8 shadow-2xl overflow-hidden">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <img
                    src={josemiguel}
                    alt="José Miguel"
                    className="w-36 h-36 sm:w-48 sm:h-48 rounded-3xl object-cover border border-blue-400/30 shadow-xl"
                  />

                  <div>
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

                    <div className="flex flex-wrap gap-3 mt-6">
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

        {/* SERVICES */}
        <section id="servicios" className="px-6 md:px-20 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Soluciones digitales
            </h2>
            <p className="text-gray-400 text-xl mt-4 max-w-2xl mx-auto">
              Todo lo necesario para que un negocio local tenga una presencia moderna y profesional en internet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Páginas Web Modernas',
                desc: 'Diseños rápidos, elegantes y adaptados para celulares.'
              },
              {
                title: 'WhatsApp Integrado',
                desc: 'Contacto inmediato para no perder clientes potenciales.'
              },
              {
                title: 'Soporte y Mantención',
                desc: 'Actualizaciones y ayuda técnica sin complicaciones.'
              },
              {
                title: 'Optimización Google',
                desc: 'Mayor presencia cuando clientes buscan servicios locales.'
              },
              {
                title: 'Formularios de Contacto',
                desc: 'Captación simple y profesional de consultas.'
              },
              {
                title: 'Diseño Profesional',
                desc: 'Una imagen moderna genera confianza inmediata.'
              }
            ].map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-[28px] border border-white/10 bg-white/5 hover:bg-blue-500/10 transition-all duration-300 backdrop-blur-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  ✦
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-blue-200">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-lg">
                  {service.desc}
                </p>
              </div>
            ))}
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
                  Muchas personas buscan servicios urgentes directamente en Google.
                  Una página profesional transmite confianza inmediata y ayuda a que tu negocio se vea serio y moderno.
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

            <p className="mt-8 text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Puedo crear una DEMO gratuita para mostrarte cómo podría verse tu negocio online.
              Sin compromiso y con atención cercana.
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

        <footer className="px-6 md:px-20 py-10 border-t border-white/10 text-center text-gray-500">
          <p className="text-lg">JMena DigitalWeb</p>
          <p className="mt-2">Viña del Mar • Valparaíso • Chile</p>
          <p className="mt-2">WhatsApp: +56 9 4081 3056</p>
          <p className="mt-2">jmenadigitalweb@gmail.com</p>
        </footer>
      </div>
    </div>
  )
}

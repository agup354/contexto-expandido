export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-6
        text-white
      "
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/hero-background.png')",
        }}
      ></div>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10">
        <p className="mt-4 text-sm text-gray-400 max-w-2xl">
          DESARROLLO · APRENDIZAJE · EXPLORACIÓN{" "}
        </p>

        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight">
          CONTEXTO <br /> EXPANDIDO
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl">
          Donde las ideas encuentran un lugar para crecer.
        </p>

        <p className="mt-4 text-lg text-gray-400 max-w-2xl">
          Explora proyectos sobre desarrollo, idiomas, música y aprendizaje
          continuo.
        </p>
        <a
          href="#areas"
          className="
    inline-block
    bg-white
    text-slate-950
    px-8
    py-4
    mt-12
    rounded-xl
    transition
    hover:bg-yellow-300
    hover:-translate-y-1
  "
        >
          Explorar proyectos
        </a>
      </div>
    </section>
  );
}

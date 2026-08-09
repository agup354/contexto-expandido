import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  const proyectos = [
    {
      titulo: "Contexto Expandido",
      descripcion:
        "Un espacio donde desarrollo proyectos reales relacionados con tecnología, idiomas y otras ideas.",
      emoji: "🌍",
      href: "/contexto-expandido",
    },
    {
      titulo: "Idiomas",
      descripcion: "Mi progreso en inglés, italiano y portugués.",
      emoji: "🗣️",
      href: "/idiomas",
    },
    {
      titulo: "Música",
      descripcion: "Composición y producción musical.",
      emoji: "🎵",
      href: "/musica",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />

      <About />

      <section
        id="areas"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {proyectos.map((proyecto) => (
          <ProjectCard
            key={proyecto.titulo}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            emoji={proyecto.emoji}
            href={proyecto.href}
          />
        ))}
      </section>
    </main>
  );
}

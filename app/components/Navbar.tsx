export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 border-b">
      <h1 className="text-2xl font-bold">Contexto Expandido</h1>

      <div className="flex gap-8">
        <a href="#about">Sobre mí</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </div>
    </nav>
  );
}

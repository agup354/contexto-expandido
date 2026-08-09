import Link from "next/link";

export default function ContextoExpandido() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-4">🌍 Contexto Expandido</h1>

      <p>
        Aquí irán mis proyectos relacionados con tecnología, programación e
        ideas.
      </p>

      <Link
        href="/"
        className="inline-block mt-6 text-blue-600 hover:underline"
      >
        ← Volver al inicio
      </Link>
    </main>
  );
}

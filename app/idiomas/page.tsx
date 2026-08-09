import Link from "next/link";

export default function Idiomas() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-4">🗣️ Idiomas</h1>

      <p>Aquí mostraré mi progreso en inglés, italiano y portugués.</p>

      <Link
        href="/"
        className="inline-block mt-6 text-blue-600 hover:underline"
      >
        ← Volver al inicio
      </Link>
    </main>
  );
}

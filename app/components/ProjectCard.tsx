import Link from "next/link";

type ProjectCardProps = {
  titulo: string;
  descripcion: string;
  emoji: string;
  href: string;
};

export default function ProjectCard({
  titulo,
  descripcion,
  emoji,
  href,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="
    group
    border-slate-300
    rounded-xl
    p-6
    shadow
    transition
    duration-300
    hover:shadow-lg
    hover:-translate-y-1
  "
    >
      <span className="inline-block text-4xl mb-4">{emoji}</span>

      <h2 className="text-xl text-blue-700 font-bold">{titulo}</h2>

      <p className="text-gray-600">{descripcion}</p>

      <p className="mt-5 text-sm text-blue-600 transition group-hover:translate-x-1">
        Ver proyecto →
      </p>
    </Link>
  );
}

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
    border
    rounded-xl
    p-6
    shadow
    transition
    duration-300
    hover:shadow-lg
    hover:-translate-y-1
  "
    >
      <h1>{emoji}</h1>

      <h2>{titulo}</h2>

      <p>{descripcion}</p>
    </Link>
  );
}

import Link from 'next/link';

export default function Logo() {
  return (
    <div className="text-2xl font-bold text-foreground text-yellow-500 hover:scale-105 sm:text-3xl">
      <Link href="/">BRUNO MACHADO</Link>
    </div>
  );
}

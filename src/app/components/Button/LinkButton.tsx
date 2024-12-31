import Link from 'next/link';

interface LinkButtonProps {
  text: string;
  href: string;
  extraClasses?: string;
}

export default function LinkButton({
  text,
  href,
  extraClasses = '',
}: LinkButtonProps) {
  const baseClasses =
    'border border-yellow-500 text-yellow-500 rounded-full px-8 py-4 text-lg transition-transform hover:scale-110';

  return (
    <Link href={href}>
      <button className={`${baseClasses} ${extraClasses}`}>{text}</button>
    </Link>
  );
}
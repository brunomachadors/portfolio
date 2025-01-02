import Link from 'next/link';

interface LinkButtonProps {
  text: string;
  href?: string;
  type?: 'button' | 'submit' | 'reset'; // Added type prop
  onClick?: () => void; // Optional for non-link buttons
  extraClasses?: string;
}

export default function LinkButton({
  text,
  href,
  type = 'button',
  onClick,
  extraClasses = '',
}: LinkButtonProps) {
  const baseClasses =
    'border border-yellow-500 text-yellow-500 rounded-full px-8 py-4 text-lg transition-transform hover:scale-110';

  if (href) {
    return (
      <Link href={href}>
        <button className={`${baseClasses} ${extraClasses}`}>{text}</button>
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`${baseClasses} ${extraClasses}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';

interface LinkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  href?: string;
  extraClasses?: string;
}

export default function LinkButton({
  text,
  href,
  extraClasses = '',
  ...props
}: LinkButtonProps) {
  const baseClasses =
    'border border-yellow-500 text-yellow-500 rounded-full px-8 py-4 text-lg transition-transform hover:scale-110';

  if (href) {
    return (
      <Link href={href}>
        <button className={`${baseClasses} ${extraClasses}`} {...props}>
          {text}
        </button>
      </Link>
    );
  }

  return (
    <button className={`${baseClasses} ${extraClasses}`} {...props}>
      {text}
    </button>
  );
}

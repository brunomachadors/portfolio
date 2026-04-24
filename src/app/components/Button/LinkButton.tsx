import Link from 'next/link';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

interface BaseLinkButtonProps {
  text: string;
  extraClasses?: string;
  className?: string;
}

type LinkButtonAsLinkProps = BaseLinkButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    href: string;
  };

type LinkButtonAsButtonProps = BaseLinkButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type LinkButtonProps = LinkButtonAsLinkProps | LinkButtonAsButtonProps;

export default function LinkButton(props: LinkButtonProps) {
  const { text, extraClasses = '', className } = props;
  const baseClasses =
    'border border-yellow-500 text-yellow-500 rounded-full px-8 py-4 text-lg transition-transform hover:scale-110';
  const combinedClasses = `${baseClasses} ${extraClasses} ${className ?? ''}`.trim();

  if ('href' in props && props.href) {
    const { href, ...linkProps } = props as LinkButtonAsLinkProps;

    return (
      <Link href={href} className={combinedClasses} {...linkProps}>
        {text}
      </Link>
    );
  }

  const { type = 'button', ...buttonProps } = props as LinkButtonAsButtonProps;

  return (
    <button className={combinedClasses} type={type} {...buttonProps}>
      {text}
    </button>
  );
}

import Link from 'next/link';
import type { AnchorHTMLAttributes } from 'react';

type Variant = 'primary' | 'outline' | 'gold' | 'outline-light';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  href?: string;
}

const variantClass: Record<Variant, string> = {
  primary:       'btn btn-primary',
  outline:       'btn btn-outline',
  gold:          'btn btn-gold',
  'outline-light': 'btn btn-outline-light',
};

export default function Button({
  variant = 'primary',
  href,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const cls = `${variantClass[variant]} ${className}`.trim();

  if (!href) {
    return (
      <button className={cls} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
        {children}
      </button>
    );
  }

  const isExternal = href.startsWith('http') || href.startsWith('mailto:');

  if (isExternal) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

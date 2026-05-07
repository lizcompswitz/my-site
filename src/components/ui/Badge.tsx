export type BadgeVariant = 'green' | 'cobalt-dark' | 'red';

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClass: Record<BadgeVariant, string> = {
  green:        'badge badge--green',
  'cobalt-dark': 'badge badge--cobalt-dark',
  red:          'badge badge--red',
};

export default function Badge({ variant = 'cobalt-dark', children, className = '' }: BadgeProps) {
  const cls = `${variantClass[variant]} ${className}`.trim();
  return <span className={cls}>{children}</span>;
}

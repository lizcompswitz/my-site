import Badge from './Badge';
import type { BadgeVariant } from './Badge';

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: BadgeVariant;
  label?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  center?: boolean;
  className?: string;
}

export default function SectionHeader({
  badge,
  badgeVariant = 'cobalt-dark',
  label,
  title,
  subtitle,
  center = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`.trim()}>
      {(badge || label) && (
        <div className="cb-badge-row mb-4">
          {badge && <Badge variant={badgeVariant}>{badge}</Badge>}
          {label && <span className="cb-badge-label">{label}</span>}
        </div>
      )}
      <h2 className="mb-4">{title}</h2>
      {subtitle && (
        <p className="text-[var(--text-secondary)] mb-8 max-w-[560px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}

import type { LucideIcon } from 'lucide-react';

export function StepCard({
  stepNumber,
  icon: Icon,
  title,
  description,
}: {
  stepNumber: string;
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center flex flex-col items-center">
      <span className="text-5xl font-bold gradient-text mb-4">{stepNumber}</span>
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
        style={{ background: 'linear-gradient(135deg, rgba(140,91,244,0.2), rgba(96,173,255,0.2))' }}
      >
        <Icon className="w-8 h-8" style={{ color: 'var(--color-secondary)' }} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm max-w-xs" style={{ color: 'var(--color-muted)' }}>
        {description}
      </p>
    </div>
  );
}

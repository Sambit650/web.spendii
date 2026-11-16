import type { LucideIcon } from 'lucide-react';

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="card-glow rounded-2xl p-6 border" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{ background: 'linear-gradient(135deg, rgba(140,91,244,0.15), rgba(96,173,255,0.15))' }}
      >
        <Icon className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
        {description}
      </p>
    </div>
  );
}

'use client';

import { useInView } from '@/hooks/useInView';

const stats = [
  { value: '0', label: 'Data Collected', suffix: ' bytes', color: 'var(--color-accent)' },
  { value: '9', label: 'Currencies Supported', suffix: '+', color: 'var(--color-primary)' },
  { value: '5', label: 'Color Themes', suffix: '', color: 'var(--color-secondary)' },
  { value: '100', label: 'Offline Capable', suffix: '%', color: 'var(--color-warm)' },
];

export function StatsSection() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section className="py-20 relative overflow-hidden">
      <div ref={ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="rounded-3xl p-8 sm:p-12 border" style={{ background: 'linear-gradient(135deg, rgba(140,91,244,0.06), rgba(96,173,255,0.04), rgba(40,211,165,0.06))', borderColor: 'var(--color-border)' }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl sm:text-5xl font-bold mb-2" style={{ color: stat.color }}>
                  {stat.value}<span className="text-2xl sm:text-3xl">{stat.suffix}</span>
                </p>
                <p className="text-sm font-medium" style={{ color: 'var(--color-muted)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

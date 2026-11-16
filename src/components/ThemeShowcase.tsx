'use client';

import { SectionHeading } from './SectionHeading';
import { useInView } from '@/hooks/useInView';

const themes = [
  {
    name: 'Lavender',
    colors: ['#8C5BF4', '#60ADFF', '#28D3A5', '#FF705E'],
    labels: ['Primary', 'Secondary', 'Accent', 'Warm'],
    gradient: 'linear-gradient(135deg, #8C5BF4, #60ADFF)',
  },
  {
    name: 'Midnight Blue',
    colors: ['#1E3A89', '#637287', '#05B5D3', '#F49E0A'],
    labels: ['Primary', 'Secondary', 'Accent', 'Warm'],
    gradient: 'linear-gradient(135deg, #1E3A89, #05B5D3)',
  },
  {
    name: 'Forest Green',
    colors: ['#059668', '#14B7A5', '#84CC16', '#F97084'],
    labels: ['Primary', 'Secondary', 'Accent', 'Warm'],
    gradient: 'linear-gradient(135deg, #059668, #84CC16)',
  },
  {
    name: 'Sunset',
    colors: ['#F97216', '#F43F5E', '#F9BF23', '#A854F7'],
    labels: ['Primary', 'Secondary', 'Accent', 'Warm'],
    gradient: 'linear-gradient(135deg, #F97216, #F9BF23)',
  },
  {
    name: 'Monochrome',
    colors: ['#6B727F', '#93A3B7', '#475663', '#EF4444'],
    labels: ['Primary', 'Secondary', 'Accent', 'Warm'],
    gradient: 'linear-gradient(135deg, #6B727F, #93A3B7)',
  },
];

export function ThemeShowcase() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Make It Yours"
          subtitle="Choose from 5 beautiful color themes that transform the entire app experience."
        />

        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {themes.map((theme, i) => (
            <div
              key={theme.name}
              className={`group rounded-2xl p-5 border text-center card-glow ${isInView ? `animate-fade-in-up delay-${(i + 1) * 100}` : 'opacity-0'}`}
              style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
            >
              {/* Gradient bar */}
              <div
                className="w-full h-2 rounded-full mb-5"
                style={{ background: theme.gradient }}
              />

              {/* Name */}
              <h3 className="text-sm font-semibold text-white mb-4">{theme.name}</h3>

              {/* Color swatches */}
              <div className="grid grid-cols-2 gap-2">
                {theme.colors.map((color, j) => (
                  <div key={color} className="flex flex-col items-center gap-1">
                    <span
                      className="w-8 h-8 rounded-lg border border-white/10 group-hover:scale-110 transition-transform"
                      style={{ background: color }}
                    />
                    <span className="text-[10px]" style={{ color: 'var(--color-muted)' }}>{theme.labels[j]}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { Globe, CloudIcon, Palette, MapPin, Download, Fingerprint } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { useInView } from '@/hooks/useInView';

const extras = [
  { icon: Globe, title: 'Multi-Currency', description: 'Support for 9 currencies including INR, USD, EUR, GBP, and more.' },
  { icon: CloudIcon, title: 'Family Sync', description: 'Sync data across devices with iCloud. Share finances with family.' },
  { icon: Palette, title: '5 Color Themes', description: 'Lavender, Midnight Blue, Forest Green, Sunset, and Monochrome.' },
  { icon: MapPin, title: 'Spending Map', description: 'Tag locations to payments and see where your money goes.' },
  { icon: Download, title: 'Export & Backup', description: 'Export to CSV or create backups. Your data, your control.' },
  { icon: Fingerprint, title: 'App Lock', description: 'Protect your finances with Face ID or Touch ID authentication.' },
];

export function MoreFeatures() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="And Much More"
          subtitle="Designed with privacy and flexibility at its core."
        />
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {extras.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-start gap-4 rounded-xl p-5 border transition-colors ${isInView ? `animate-fade-in-up delay-${(i + 1) * 100}` : 'opacity-0'}`}
                style={{ borderColor: 'var(--color-border)' }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(140,91,244,0.1)' }}>
                  <Icon className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)' }}>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

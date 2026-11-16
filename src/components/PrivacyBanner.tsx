'use client';

import { ServerOff, UserX, EyeOff, ShieldOff, Wifi, WifiOff } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { useInView } from '@/hooks/useInView';

const points = [
  { icon: ServerOff, title: 'No Servers', description: 'Your data never leaves your device. Zero cloud dependency.' },
  { icon: UserX, title: 'No Accounts', description: 'No sign-up, no login. Just download and start tracking.' },
  { icon: EyeOff, title: 'No Tracking', description: 'No analytics, no cookies, no fingerprinting. Ever.' },
  { icon: ShieldOff, title: 'No Ads', description: 'Completely ad-free. No third-party SDKs of any kind.' },
  { icon: WifiOff, title: '100% Offline', description: 'Works without internet. Your finances stay private.' },
  { icon: Wifi, title: 'iCloud Optional', description: 'Sync across devices only if you choose to. Your call.' },
];

export function PrivacyBanner() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="py-24 relative" style={{ background: 'var(--color-surface)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Privacy First. Always."
          subtitle="In a world of data-hungry apps, Spendii takes a different approach. Your financial data belongs to you — and only you."
        />

        {/* Highlight card */}
        <div ref={ref} className={`rounded-3xl p-8 sm:p-10 border mb-12 text-center ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ background: 'linear-gradient(135deg, rgba(140,91,244,0.06), rgba(40,211,165,0.06))', borderColor: 'var(--color-border)' }}>
          <p className="text-3xl sm:text-4xl font-bold mb-2">
            <span style={{ color: 'var(--color-accent)' }}>0 bytes</span>
            <span className="text-white"> of your data collected</span>
          </p>
          <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
            Everything is processed on-device using Apple&apos;s Vision framework. Not even we can see your data.
          </p>
        </div>

        {/* Points grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className={`flex items-start gap-4 rounded-2xl p-5 border card-glow ${isInView ? `animate-fade-in-up delay-${(i + 1) * 100}` : 'opacity-0'}`}
                style={{ background: 'var(--color-surface-alt)', borderColor: 'var(--color-border)' }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(40,211,165,0.12)' }}>
                  <Icon className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">{point.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)' }}>{point.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

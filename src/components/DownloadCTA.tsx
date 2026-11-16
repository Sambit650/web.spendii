'use client';

import { AppStoreBadge } from './AppStoreBadge';
import { GradientBlob } from './GradientBlob';
import { useInView } from '@/hooks/useInView';

export function DownloadCTA() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section id="download" className="py-24 relative overflow-hidden">
      <GradientBlob color="var(--color-primary)" size="500px" className="top-[-200px] right-[-100px]" />
      <GradientBlob color="var(--color-secondary)" size="400px" className="bottom-[-150px] left-[-100px]" />

      <div ref={ref} className={`relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="rounded-3xl p-10 sm:p-16 border" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to take control of your <span className="gradient-text">finances</span>?
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--color-muted)' }}>
            Download Spendii for free on the App Store and start your journey to smarter spending.
          </p>
          <AppStoreBadge className="mx-auto" />
        </div>
      </div>
    </section>
  );
}

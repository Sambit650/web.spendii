'use client';

import Image from 'next/image';
import { AppStoreBadge } from './AppStoreBadge';
import { GradientBlob } from './GradientBlob';
import { useInView } from '@/hooks/useInView';
import { asset } from '@/lib/asset';

export function Hero() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background blobs */}
      <GradientBlob color="var(--color-primary)" size="600px" className="top-[-200px] right-[-200px]" />
      <GradientBlob color="var(--color-secondary)" size="500px" className="bottom-[-100px] left-[-200px]" />
      <GradientBlob color="var(--color-accent)" size="300px" className="top-1/3 left-1/4" />

      <div ref={ref} className={`relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 border" style={{ borderColor: 'var(--color-border)', color: 'var(--color-accent)' }}>
            Personal Finance Made Simple
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="gradient-text">Snap, Track</span>
            <br />
            <span className="gradient-text">& Save</span>
          </h1>
          <p className="text-lg mb-8 max-w-lg mx-auto lg:mx-0" style={{ color: 'var(--color-muted)' }}>
            Your personal finance companion that turns payment screenshots into spending insights. Track expenses, manage budgets, and save smarter.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <AppStoreBadge />
            <span className="text-xs" style={{ color: 'var(--color-muted)' }}>Free on iOS</span>
          </div>
        </div>

        {/* App icon visual */}
        <div className="flex-shrink-0 relative">
          <div className="relative animate-float">
            <div
              className="absolute inset-0 rounded-[40px] blur-2xl"
              style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', opacity: 0.3 }}
            />
            <Image
              src={asset('/app-icon.png')}
              alt="Spendii App"
              width={280}
              height={280}
              className="relative rounded-[40px] shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

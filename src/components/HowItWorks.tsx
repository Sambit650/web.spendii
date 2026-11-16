'use client';

import { Smartphone, BarChart3, Wallet } from 'lucide-react';
import { StepCard } from './StepCard';
import { SectionHeading } from './SectionHeading';
import { useInView } from '@/hooks/useInView';

const steps = [
  {
    stepNumber: '01',
    icon: Smartphone,
    title: 'Scan',
    description: 'Take a screenshot of any payment confirmation — UPI, card, or wallet.',
  },
  {
    stepNumber: '02',
    icon: BarChart3,
    title: 'Track',
    description: 'Spendii auto-extracts and categorizes your spending with on-device AI.',
  },
  {
    stepNumber: '03',
    icon: Wallet,
    title: 'Save',
    description: 'Get insights, set budgets, track goals, and grow your savings effortlessly.',
  },
];

export function HowItWorks() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="how-it-works" className="py-24 relative" style={{ background: 'var(--color-surface)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How It Works"
          subtitle="Three simple steps to financial clarity."
        />
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Connector lines (desktop only) */}
          <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-px" style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))' }} />

          {steps.map((step, i) => (
            <div key={step.stepNumber} className={isInView ? `animate-fade-in-up delay-${(i + 1) * 100}` : 'opacity-0'}>
              <StepCard {...step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

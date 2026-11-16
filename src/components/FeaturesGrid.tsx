'use client';

import { Camera, TrendingUp, Users, Bell, Target, PieChart } from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import { SectionHeading } from './SectionHeading';
import { useInView } from '@/hooks/useInView';

const features = [
  {
    icon: Camera,
    title: 'Scan Payments',
    description: 'Snap a screenshot of any UPI payment and let Spendii extract the details automatically with on-device OCR.',
  },
  {
    icon: TrendingUp,
    title: 'Smart Insights',
    description: 'Visualize spending trends, auto-tag transactions, and discover patterns with heatmaps and monthly reports.',
  },
  {
    icon: Users,
    title: 'Loans & Splits',
    description: 'Track who owes what. Manage debts, splits, and settlements with friends and family effortlessly.',
  },
  {
    icon: Bell,
    title: 'Subscriptions',
    description: 'Never miss a renewal. Track all your subscriptions with smart alerts before charges hit your account.',
  },
  {
    icon: Target,
    title: 'Savings Goals',
    description: 'Set savings targets with deadlines and track your progress visually. Know exactly how much to save daily.',
  },
  {
    icon: PieChart,
    title: 'Budget Management',
    description: 'Set category budgets, get alerts when you\'re close to limits, and stay on track every month.',
  },
];

export function FeaturesGrid() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Powerful Features"
          subtitle="Everything you need to take control of your finances, right from your pocket."
        />
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={isInView ? `animate-fade-in-up delay-${(i + 1) * 100}` : 'opacity-0'}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

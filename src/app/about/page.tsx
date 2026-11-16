import type { Metadata } from 'next';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GradientBlob } from '@/components/GradientBlob';
import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Heart, Lightbulb, Shield, Smartphone, Code, IndianRupee } from 'lucide-react';
import { asset } from '@/lib/asset';

export const metadata: Metadata = {
  title: 'About Us - Spendii',
  description: 'The story behind Spendii — built by an indie developer in India with a mission to make personal finance simple and private.',
};

const values = [
  {
    icon: Shield,
    title: 'Privacy by Design',
    description: 'Your financial data is yours alone. No servers, no accounts, no tracking. Everything stays on your device.',
    color: 'var(--color-accent)',
  },
  {
    icon: Lightbulb,
    title: 'Simplicity First',
    description: 'Finance apps shouldn\'t feel like spreadsheets. Spendii is built to be intuitive, fast, and delightful to use.',
    color: 'var(--color-secondary)',
  },
  {
    icon: Smartphone,
    title: 'Built for India',
    description: 'Designed with UPI payments in mind — snap a screenshot and Spendii does the rest with on-device OCR.',
    color: 'var(--color-primary)',
  },
  {
    icon: Code,
    title: 'Indie & Independent',
    description: 'No investors, no ads, no compromises. Just one developer building the finance app they wished existed.',
    color: 'var(--color-warm)',
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <GradientBlob color="var(--color-primary)" size="500px" className="top-[-200px] right-[-150px]" />
          <GradientBlob color="var(--color-accent)" size="400px" className="bottom-[-100px] left-[-150px]" />

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-6 border" style={{ borderColor: 'var(--color-border)', color: 'var(--color-warm)' }}>
              <Heart className="w-3.5 h-3.5" />
              Our Story
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gradient-text">Built by One.</span>
              <br />
              <span className="gradient-text">Made for Everyone.</span>
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--color-muted)' }}>
              Spendii started as a personal itch — a frustration with finance apps that were either too complex, too invasive, or both. I wanted something that just worked: snap a payment screenshot, and let the app handle the rest.
            </p>
          </div>
        </section>

        {/* The Story */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="rounded-3xl p-8 sm:p-10 border" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
            <div className="flex items-center gap-4 mb-6">
              <Image src={asset('/app-icon.png')} alt="Spendii" width={48} height={48} className="rounded-xl" />
              <div>
                <h2 className="text-xl font-bold text-white">Why Spendii?</h2>
                <p className="text-xs" style={{ color: 'var(--color-muted)' }}>The problem that started it all</p>
              </div>
            </div>

            <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              <p>
                Every finance app I tried wanted my bank credentials, bombarded me with ads, or shipped my data to some server I had no control over. As someone who pays mostly through UPI, I had hundreds of payment screenshots sitting in my gallery — proof of every transaction, but no easy way to track them.
              </p>
              <p>
                So I built Spendii. An app that uses <strong className="text-white">on-device OCR</strong> to read payment screenshots and automatically extract the details. No cloud. No sign-up. No nonsense. Just <strong className="text-white">snap, track, and save</strong>.
              </p>
              <p>
                What started as a weekend project grew into a full-featured finance companion — with budgets, insights, loans tracking, savings goals, and more. But the core principle never changed: <strong className="text-white">your data stays on your device, always</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            <span className="gradient-text">What We Believe In</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-2xl p-6 border card-glow"
                  style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${value.color}15` }}>
                    <Icon className="w-5 h-5" style={{ color: value.color }} />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)' }}>{value.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Made in India */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="rounded-3xl p-8 sm:p-10 border text-center" style={{ background: 'linear-gradient(135deg, rgba(140,91,244,0.06), rgba(255,112,94,0.06))', borderColor: 'var(--color-border)' }}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <IndianRupee className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
              <Heart className="w-5 h-5 fill-current" style={{ color: 'var(--color-warm)' }} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Made with Love in India</h2>
            <p className="text-sm max-w-lg mx-auto mb-6" style={{ color: 'var(--color-muted)' }}>
              Spendii is proudly indie — designed, developed, and maintained by a solo developer. No VC funding, no growth hacks. Just a genuine tool built to solve a real problem.
            </p>
            <AppStoreBadge className="mx-auto" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

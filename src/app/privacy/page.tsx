import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GradientBlob } from '@/components/GradientBlob';
import { Shield, Smartphone, EyeOff, Cloud, Database, Ban, Baby, RefreshCw, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - Spendii',
  description: 'Learn how Spendii protects your privacy. All data stays on your device.',
};

const sections = [
  {
    icon: Shield,
    title: 'Data We Collect',
    content: (
      <p>
        <strong className="text-white">We do not collect any personal data.</strong> Spendii operates entirely on your device. No data is sent to our servers or any third-party service.
      </p>
    ),
    accent: 'var(--color-accent)',
  },
  {
    icon: Smartphone,
    title: 'On-Device Processing',
    content: (
      <ul className="space-y-3">
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ background: 'var(--color-primary)' }} />
          <span><strong className="text-white">Payment screenshots</strong> are processed using Apple&apos;s on-device Vision framework (OCR). No images leave your device.</span>
        </li>
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ background: 'var(--color-primary)' }} />
          <span><strong className="text-white">Transaction data</strong> (amounts, recipients, dates) is stored locally using SwiftData in your device&apos;s App Group container.</span>
        </li>
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ background: 'var(--color-primary)' }} />
          <span><strong className="text-white">Location data</strong> (if permitted) is stored locally and never transmitted externally.</span>
        </li>
      </ul>
    ),
    accent: 'var(--color-secondary)',
  },
  {
    icon: EyeOff,
    title: 'No Analytics or Tracking',
    content: (
      <p>Spendii does not use any analytics SDKs, crash reporting tools, or advertising frameworks. There are no cookies, identifiers, or fingerprinting mechanisms.</p>
    ),
    accent: 'var(--color-warm)',
  },
  {
    icon: Cloud,
    title: 'iCloud Sync',
    content: (
      <p>If you enable iCloud sync, your data is stored in your personal iCloud account under Apple&apos;s privacy policies. We do not have access to your iCloud data.</p>
    ),
    accent: 'var(--color-secondary)',
  },
  {
    icon: Database,
    title: 'Data Storage',
    content: (
      <ul className="space-y-3">
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ background: 'var(--color-accent)' }} />
          <span>All data is stored locally on your device.</span>
        </li>
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ background: 'var(--color-accent)' }} />
          <span>Backups are exported as local files that you control.</span>
        </li>
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ background: 'var(--color-accent)' }} />
          <span>You can delete all your data at any time from Settings.</span>
        </li>
      </ul>
    ),
    accent: 'var(--color-accent)',
  },
  {
    icon: Ban,
    title: 'Third-Party Services',
    content: (
      <p>Spendii does not integrate with any third-party services, APIs, or SDKs that collect user data.</p>
    ),
    accent: 'var(--color-warm)',
  },
  {
    icon: Baby,
    title: 'Children\u2019s Privacy',
    content: (
      <p>Spendii does not knowingly collect data from children. Since no data is collected from any user, this policy applies equally to all ages.</p>
    ),
    accent: 'var(--color-primary)',
  },
  {
    icon: RefreshCw,
    title: 'Changes to This Policy',
    content: (
      <p>We may update this policy from time to time. Changes will be reflected on this page with an updated date.</p>
    ),
    accent: 'var(--color-secondary)',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero banner */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <GradientBlob color="var(--color-primary)" size="500px" className="top-[-200px] right-[-150px]" />
          <GradientBlob color="var(--color-secondary)" size="400px" className="bottom-[-100px] left-[-150px]" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-6 border" style={{ borderColor: 'var(--color-border)', color: 'var(--color-accent)' }}>
              <Shield className="w-3.5 h-3.5" />
              Your Privacy Matters
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Privacy Policy</span>
            </h1>
            <p className="text-lg mb-2" style={{ color: 'var(--color-muted)' }}>
              Spendii is committed to protecting your privacy. Your data never leaves your device.
            </p>
            <p className="text-sm" style={{ color: 'var(--color-muted)' }}>Last updated: October 2026</p>
          </div>
        </section>

        {/* Privacy highlight banner */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="rounded-2xl p-6 sm:p-8 border text-center" style={{ background: 'linear-gradient(135deg, rgba(140,91,244,0.08), rgba(96,173,255,0.08))', borderColor: 'var(--color-border)' }}>
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(40,211,165,0.15)' }}>
                <Shield className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
              </div>
              <h2 className="text-xl font-bold text-white">100% On-Device</h2>
            </div>
            <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
              No servers. No accounts. No tracking. Everything happens on your iPhone.
            </p>
          </div>
        </section>

        {/* Sections */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="space-y-5">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.title}
                  className="rounded-2xl p-6 border transition-colors"
                  style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5" style={{ background: `${section.accent}15` }}>
                      <Icon className="w-5 h-5" style={{ color: section.accent }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-base font-semibold text-white mb-3">{section.title}</h2>
                      <div className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                        {section.content}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact card */}
          <div className="mt-10 rounded-2xl p-6 border text-center" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(140,91,244,0.15)' }}>
              <Mail className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
            </div>
            <h2 className="text-lg font-semibold text-white mb-2">Have Questions?</h2>
            <p className="text-sm mb-3" style={{ color: 'var(--color-muted)' }}>
              If you have questions about this policy, reach out to us.
            </p>
            <a href="mailto:dev.sambit12@gmail.com" className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', color: '#fff' }}>
              <Mail className="w-4 h-4" /> Contact Us
            </a>
            <p className="text-xs mt-4" style={{ color: 'var(--color-muted)' }}>
              This policy applies to the Spendii iOS application.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

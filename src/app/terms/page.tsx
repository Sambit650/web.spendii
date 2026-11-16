import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GradientBlob } from '@/components/GradientBlob';
import { FileText, Smartphone, Camera, HardDrive, Lock, AlertTriangle, ShieldAlert, Power, RefreshCw, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service - Spendii',
  description: 'Terms of service for the Spendii personal finance app.',
};

const sections = [
  {
    icon: Smartphone,
    title: 'Use of the App',
    accent: 'var(--color-primary)',
    content: (
      <ul className="space-y-3">
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ background: 'var(--color-primary)' }} />
          <span>Spendii is a personal expense tracking tool designed for individual use.</span>
        </li>
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ background: 'var(--color-primary)' }} />
          <span>You are responsible for the accuracy of the data you enter or import.</span>
        </li>
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ background: 'var(--color-primary)' }} />
          <span>The app is provided for informational purposes and is not a substitute for professional financial advice.</span>
        </li>
      </ul>
    ),
  },
  {
    icon: Camera,
    title: 'OCR and Data Extraction',
    accent: 'var(--color-secondary)',
    content: (
      <ul className="space-y-3">
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ background: 'var(--color-secondary)' }} />
          <span>Spendii uses on-device text recognition to extract payment details from screenshots.</span>
        </li>
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ background: 'var(--color-secondary)' }} />
          <span>OCR results may not always be accurate. You should review and verify extracted data before relying on it.</span>
        </li>
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ background: 'var(--color-secondary)' }} />
          <span>We are not responsible for incorrect data resulting from OCR misreads.</span>
        </li>
      </ul>
    ),
  },
  {
    icon: HardDrive,
    title: 'Your Data',
    accent: 'var(--color-accent)',
    content: (
      <ul className="space-y-3">
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ background: 'var(--color-accent)' }} />
          <span>All data is stored locally on your device. <strong className="text-white">You own your data.</strong></span>
        </li>
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ background: 'var(--color-accent)' }} />
          <span>We do not have access to, and cannot recover, your data if you delete the app or lose your device.</span>
        </li>
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ background: 'var(--color-accent)' }} />
          <span>You are responsible for maintaining backups of your data.</span>
        </li>
      </ul>
    ),
  },
  {
    icon: Lock,
    title: 'Intellectual Property',
    accent: 'var(--color-primary)',
    content: (
      <p>The app, its design, code, and branding are the property of the developer. You may not copy, modify, distribute, or reverse-engineer any part of the app.</p>
    ),
  },
  {
    icon: AlertTriangle,
    title: 'Disclaimer of Warranties',
    accent: 'var(--color-warm)',
    content: (
      <p>Spendii is provided &quot;as is&quot; without warranties of any kind, express or implied. We do not guarantee that the app will be error-free, uninterrupted, or meet your specific requirements.</p>
    ),
  },
  {
    icon: ShieldAlert,
    title: 'Limitation of Liability',
    accent: 'var(--color-warm)',
    content: (
      <p>To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, or consequential damages arising from your use of the app, including but not limited to financial losses based on app data.</p>
    ),
  },
  {
    icon: Power,
    title: 'Termination',
    accent: 'var(--color-secondary)',
    content: (
      <p>You may stop using the app at any time by deleting it from your device. We reserve the right to discontinue the app at any time without notice.</p>
    ),
  },
  {
    icon: RefreshCw,
    title: 'Changes to These Terms',
    accent: 'var(--color-muted)',
    content: (
      <p>We may update these terms from time to time. Continued use of the app after changes constitutes acceptance of the new terms.</p>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero banner */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <GradientBlob color="var(--color-secondary)" size="500px" className="top-[-200px] left-[-150px]" />
          <GradientBlob color="var(--color-primary)" size="400px" className="bottom-[-100px] right-[-150px]" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-6 border" style={{ borderColor: 'var(--color-border)', color: 'var(--color-secondary)' }}>
              <FileText className="w-3.5 h-3.5" />
              Legal
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Terms of Service</span>
            </h1>
            <p className="text-lg mb-2" style={{ color: 'var(--color-muted)' }}>
              By downloading or using Spendii, you agree to these terms. Please read them carefully.
            </p>
            <p className="text-sm" style={{ color: 'var(--color-muted)' }}>Last updated: October 2026</p>
          </div>
        </section>

        {/* Key terms highlight */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Your Data', value: 'Stored Locally', icon: HardDrive, color: 'var(--color-accent)' },
              { label: 'Your Privacy', value: 'Fully Protected', icon: Lock, color: 'var(--color-primary)' },
              { label: 'Your Control', value: 'Delete Anytime', icon: Power, color: 'var(--color-secondary)' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-2xl p-5 border text-center" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: `${item.color}15` }}>
                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <p className="text-xs mb-1" style={{ color: 'var(--color-muted)' }}>{item.label}</p>
                  <p className="text-sm font-semibold text-white">{item.value}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Sections */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="space-y-5">
            {sections.map((section, i) => {
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
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-mono px-2 py-0.5 rounded" style={{ background: 'var(--color-surface-alt)', color: 'var(--color-muted)' }}>{String(i + 1).padStart(2, '0')}</span>
                        <h2 className="text-base font-semibold text-white">{section.title}</h2>
                      </div>
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
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(96,173,255,0.15)' }}>
              <Mail className="w-6 h-6" style={{ color: 'var(--color-secondary)' }} />
            </div>
            <h2 className="text-lg font-semibold text-white mb-2">Questions About These Terms?</h2>
            <p className="text-sm mb-3" style={{ color: 'var(--color-muted)' }}>
              We&apos;re happy to clarify anything. Reach out to us.
            </p>
            <a href="mailto:dev.sambit12@gmail.com" className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', color: '#fff' }}>
              <Mail className="w-4 h-4" /> Contact Us
            </a>
            <p className="text-xs mt-4" style={{ color: 'var(--color-muted)' }}>
              These terms apply to the Spendii iOS application.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GradientBlob } from '@/components/GradientBlob';
import { HelpCircle, Camera, ShieldCheck, AlertCircle, Download, FileSpreadsheet, Trash2, Mail, MessageCircle, BookOpen, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'App Support - Spendii',
  description: 'Get help with Spendii. FAQs, troubleshooting, and contact information.',
};

const faqs = [
  {
    icon: Camera,
    question: 'How does screenshot scanning work?',
    answer: "Spendii uses Apple's on-device Vision framework to read text from payment screenshots. It extracts the amount, recipient, date, and payment source automatically. All processing happens on your device — nothing is sent online.",
    color: 'var(--color-primary)',
  },
  {
    icon: ShieldCheck,
    question: 'Is my data safe?',
    answer: "Yes. All your data is stored locally on your device. We don't have servers, accounts, or any way to access your information. You own your data completely.",
    color: 'var(--color-accent)',
  },
  {
    icon: AlertCircle,
    question: 'The OCR extracted wrong information. What do I do?',
    answer: 'You can tap on any payment to edit its details. OCR accuracy depends on screenshot quality — clear, full-screen screenshots work best.',
    color: 'var(--color-warm)',
  },
  {
    icon: Download,
    question: 'How do I back up my data?',
    answer: 'Go to Settings \u2192 Data \u2192 Backup Data. This creates a file you can save anywhere. To restore, use Settings \u2192 Data \u2192 Restore Data.',
    color: 'var(--color-secondary)',
  },
  {
    icon: FileSpreadsheet,
    question: 'Can I export my data?',
    answer: 'Yes. Go to Settings \u2192 Data \u2192 Export to CSV. This creates a spreadsheet file compatible with Excel, Google Sheets, and other tools.',
    color: 'var(--color-primary)',
  },
  {
    icon: Trash2,
    question: 'How do I delete all my data?',
    answer: 'Go to Settings \u2192 Danger Zone \u2192 Delete All Payments. This action is permanent and cannot be undone.',
    color: 'var(--color-warm)',
  },
];

const quickLinks = [
  {
    icon: BookOpen,
    title: 'Privacy Policy',
    description: 'Learn how we protect your data',
    href: '/privacy',
    color: 'var(--color-accent)',
  },
  {
    icon: MessageCircle,
    title: 'Terms of Service',
    description: 'Read our terms and conditions',
    href: '/terms',
    color: 'var(--color-secondary)',
  },
];

export default function SupportPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero banner */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <GradientBlob color="var(--color-accent)" size="500px" className="top-[-200px] left-1/3" />
          <GradientBlob color="var(--color-primary)" size="400px" className="bottom-[-100px] right-[-100px]" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-6 border" style={{ borderColor: 'var(--color-border)', color: 'var(--color-accent)' }}>
              <HelpCircle className="w-3.5 h-3.5" />
              Help Center
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">App Support</span>
            </h1>
            <p className="text-lg" style={{ color: 'var(--color-muted)' }}>
              Find answers to common questions and get the help you need.
            </p>
          </div>
        </section>

        {/* Quick stats */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Response Time', value: '24-48 hrs', color: 'var(--color-accent)' },
              { label: 'Data Location', value: 'On Your Device', color: 'var(--color-primary)' },
              { label: 'Support', value: 'Free Forever', color: 'var(--color-secondary)' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl p-5 border text-center" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                <p className="text-xs mb-1" style={{ color: 'var(--color-muted)' }}>{item.label}</p>
                <p className="text-lg font-bold" style={{ color: item.color }}>{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ section */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(140,91,244,0.15)' }}>
              <HelpCircle className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Frequently Asked Questions</h2>
              <p className="text-xs" style={{ color: 'var(--color-muted)' }}>Quick answers to common questions</p>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => {
              const Icon = faq.icon;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl p-6 border card-glow"
                  style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${faq.color}15` }}>
                      <Icon className="w-5 h-5" style={{ color: faq.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-white mb-2">{faq.question}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Quick links */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h2 className="text-lg font-bold text-white mb-4">Quick Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className="group rounded-2xl p-5 border flex items-center gap-4 transition-colors"
                  style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${link.color}15` }}>
                    <Icon className="w-5 h-5" style={{ color: link.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-white">{link.title}</h3>
                    <p className="text-xs" style={{ color: 'var(--color-muted)' }}>{link.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-1" style={{ color: 'var(--color-muted)' }} />
                </Link>
              );
            })}
          </div>
        </section>

        {/* Contact card */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="rounded-2xl p-8 sm:p-10 border text-center" style={{ background: 'linear-gradient(135deg, rgba(140,91,244,0.08), rgba(40,211,165,0.08))', borderColor: 'var(--color-border)' }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: 'linear-gradient(135deg, rgba(140,91,244,0.2), rgba(96,173,255,0.2))' }}>
              <Mail className="w-7 h-7" style={{ color: 'var(--color-primary)' }} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Still Need Help?</h2>
            <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: 'var(--color-muted)' }}>
              Can&apos;t find what you&apos;re looking for? We&apos;re here to help. Reach out and we&apos;ll get back to you within 24-48 hours.
            </p>
            <a href="mailto:dev.sambit12@gmail.com" className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', color: '#fff' }}>
              <Mail className="w-4 h-4" /> Send Us an Email
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { asset } from '@/lib/asset';

export function Footer() {
  return (
    <footer className="border-t py-12" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Image src={asset('/app-icon.png')} alt="Spendii" width={32} height={32} className="rounded-lg" />
              <span className="text-lg font-bold gradient-text">Spendii</span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              Snap, Track & Save. Your personal finance companion.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/#features" className="text-sm transition-colors hover:text-white" style={{ color: 'var(--color-muted)' }}>Features</Link></li>
              <li><Link href="/#how-it-works" className="text-sm transition-colors hover:text-white" style={{ color: 'var(--color-muted)' }}>How It Works</Link></li>
              <li><Link href="/#download" className="text-sm transition-colors hover:text-white" style={{ color: 'var(--color-muted)' }}>Download</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm transition-colors hover:text-white" style={{ color: 'var(--color-muted)' }}>Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm transition-colors hover:text-white" style={{ color: 'var(--color-muted)' }}>Terms of Service</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/support" className="text-sm transition-colors hover:text-white" style={{ color: 'var(--color-muted)' }}>Help & FAQ</Link></li>
              <li><a href="mailto:dev.sambit12@gmail.com" className="text-sm transition-colors hover:text-white" style={{ color: 'var(--color-muted)' }}>Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: 'var(--color-border)' }}>
          <p className="text-xs flex items-center gap-1" style={{ color: 'var(--color-muted)' }}>
            Made with <Heart className="w-3 h-3 fill-current" style={{ color: 'var(--color-warm)' }} /> in India
          </p>
          <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
            &copy; {new Date().getFullYear()} Spendii. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

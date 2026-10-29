import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rajesh Karra | AI Research & Engineering Portfolio',
  description: 'Showcasing technical learnings in JAX, Large Language Models, Quantum Computing, and Mathematical Foundations.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-space-950 text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        <div className="fixed inset-0 star-glow pointer-events-none" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}


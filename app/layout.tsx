import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rajesh Karra | AI Research, JAX Stack & Planetary Earth Intelligence',
  description: 'Advancing JAX/Flax high-performance computing, StrangeWorks Save Earth & Humanity Vision, Large Language Models, and DeepMind research foundations.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}

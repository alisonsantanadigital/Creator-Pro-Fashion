import type { Metadata } from 'next';
import { Bodoni_Moda, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-bodoni',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CREATOR PRO — Marina Costa | PRUMO CREATORS',
  description:
    'Apresentação comercial fashion editorial desenvolvida pela agência PRUMO CREATORS para parcerias entre marcas e influenciadores.',
  openGraph: {
    title: 'CREATOR PRO — Marina Costa | PRUMO CREATORS',
    description:
      'Apresentação comercial fashion editorial desenvolvida pela agência PRUMO CREATORS para parcerias entre marcas e influenciadores.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CREATOR PRO — Marina Costa | PRUMO CREATORS',
    description:
      'Apresentação comercial fashion editorial desenvolvida pela agência PRUMO CREATORS para parcerias entre marcas e influenciadores.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${bodoni.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans bg-white text-[#070708] selection:bg-[#070708] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

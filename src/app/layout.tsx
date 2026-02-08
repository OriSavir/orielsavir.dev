import './globals.css';
import { JetBrains_Mono } from 'next/font/google';

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata = {
  title: 'Oriel Savir',
  description: 'My (Oriel) personal website!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mono.variable}>
      <body className={`${mono.className} antialiased`}>
        <main className="max-w-2xl mx-auto px-6 py-16">
          {children}
        </main>
      </body>
    </html>
  );
}

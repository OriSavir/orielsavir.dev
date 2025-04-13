import './globals.css';
import { Inter } from 'next/font/google';
import AnimatedBackground from '@/components/layout/AnimatedBackground';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Oriel Savir',
  description: 'A little portfolio website to learn more front-end stuff and showcase my projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Rajdhani:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <AnimatedBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/*
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black/80 backdrop-blur-md p-8 rounded-lg border border-cyan-500/30 shadow-lg shadow-cyan-500/20 max-w-md text-center">
            <h1 className="text-3xl font-orbitron text-cyan-400 mb-4">Under Maintenance</h1>
            <p className="text-lg font-rajdhani text-gray-200">
              I am adding more exciting things. The website will be back online within a week.
            </p>
            <p className="mt-4 text-lg font-rajdhani text-cyan-300">Thank you for your patience!</p>
          </div>
        </div>
        */}
        
      </body>
    </html>
  );
}

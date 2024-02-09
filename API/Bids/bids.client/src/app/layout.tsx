import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';

import { Providers } from '@/store/Providers';

const lato = Lato({ weight: ['400', '700', '900'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Welcome | INT20H Bids',
  description: 'INT20H Bids project by F0rGotten;',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <html lang='en'>
        <body
          className={`${lato.className} overflow-x-hidden flex flex-col h-screen justify-between`}>
          <Header />
          <div className='flex-grow'>{children}</div>
          <Footer />
        </body>
      </html>
    </Providers>
  );
}

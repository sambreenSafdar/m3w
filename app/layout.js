import { Rubik } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import 'react-phone-number-input/style.css';

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
});

export const metadata = {
  title: 'match3win',
  description:
    'Your social media gaming application that can be placed on your website, social media sites, emails or even an on-line advertisement.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rubik.variable} scroll-smooth`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

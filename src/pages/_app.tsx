import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat, Geist } from 'next/font/google';

// Configure Montserrat font (for header)
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

// Configure Geist Sans font (for body)
const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

export default function App({ Component, pageProps }: AppProps) {
  // Apply Montserrat variable AND Geist ClassName
  return (
    <div className={`${montserrat.variable} ${geistSans.className}`}>
      <Component {...pageProps} />
    </div>
  );
}

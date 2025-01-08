import type { Metadata } from 'next';
import Script from 'next/script'; // Import Script for handling third-party scripts
import localFont from 'next/font/local';
import './globals.css';
import { Providers } from './Provider';
import { Toaster } from '@/components/ui/sonner';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: '2QuickPaper | Send money receipts to email and WhatsApp',
  description:
    'you can send money money receipts to email and WhatsApp and also keep track of your sales',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <Toaster />
        {/* Add Sleekplan script using next/script */}
        <Script
          id="sleekplan-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.$sleek=[];
              window.SLEEK_PRODUCT_ID=881123976;
              (function(){
                var d=document;
                var s=d.createElement("script");
                s.src="https://client.sleekplan.com/sdk/e.js";
                s.async=1;
                d.getElementsByTagName("head")[0].appendChild(s);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}

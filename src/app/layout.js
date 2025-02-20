import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleTagManager } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Deye Power – Сонячні рішення для вашого бiзнесу.",
  description: "Deye Power – надійні сонячні панелі, інвертори та акумулятори для енергетичного комфорту.",
  openGraph: {
    title: "Deye Power – Сонячні рішення для вашого бiзнесу",
    description: "Високоякісні сонячні панелі, інвертори та акумулятори від Deye Power.",
    url: "https://www.deyepower.com.ua/",
    images: [
      {
        url: "/images/slider.png",
        width: 1200,
        height: 630,
        alt: "Deye Power – Сонячні рішення для вашого бiзнесу",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta name="google-site-verification" content="cp4VE_lxYv1rEvbWq16NBxWRiONajWChBBojyNSKs8M" />
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MRQG4MGB7L"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MRQG4MGB7L');
          gtag('event', 'conversion', {
            'send_to': 'G-MRQG4MGB7L/HEB_CKvg1Y0aEPqasdk-',
            'value': 1.0,
            'currency': 'UAH'
          });
        `}
        
      </Script>
        <GoogleTagManager gtmId="GTM-GTM-W6J62NWJ" />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
        <SpeedInsights/>
        <Footer />
      </body>
    </html>
  );
}

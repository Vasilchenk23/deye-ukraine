import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Deye Eco – Сонячні рішення для вашого бiзнесу",
  description: "Deye Eco – надійні сонячні панелі, інвертори та акумулятори для енергетичного комфорту.",
  openGraph: {
    title: "Deye Eco – Сонячні рішення для вашого бiзнесу",
    description: "Високоякісні сонячні панелі, інвертори та акумулятори від Deye Eco.",
    url: "https://www.deyepower.com.ua/",
    images: [
      {
        url: "/images/slider.png",
        width: 1200,
        height: 630,
        alt: "Deye Eco – Сонячні рішення для вашого бiзнесу",
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
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

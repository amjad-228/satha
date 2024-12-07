import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "سطحة جدة اقرب سطحة لنقل وسحب السيارات المتعطلة",
  description: "سطحة جدة هي خدمة سطحة في جميع انحاء جدة لنقل وسحب السيارات المتعطلة والمتضررة من الحوادث, وفتح ابواب السيارات المقفلة بوسائل وطرق آمنة",
  keywords: "سطحة جدة, تطبيق سطحة, سطحة قريبة مني, سطحة ابو فارس, اقرب سطحة, اريد سطحة, سطحة هيدروليك, سطحة جدة لفتح ابواب السيارات المقفلة, فني ممتاز لفتح ابواب السيارات المقفلة ب؛تراف وأمان, كيف اطلب سطحة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <head>
        <link rel="canonical" href="https://www.sathaapp.com" />
        <link rel="alternate" href="http://www.sathaapp.com" hrefLang="x-default" />
        <link rel="alternate" href="https://www.sathaapp.com" hrefLang="ar" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

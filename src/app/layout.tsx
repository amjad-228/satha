import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

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
  title: "سطحة جدة لنقل وسحب السيارات المتعطلة والمتضررة من الحوادث",
  description: "سطحة جدة هي خدمة سطحة في جميع انحاء جدة لنقل وسحب السيارات المتعطلة والمتضررة من الحوادث, وفتح ابواب السيارات المقفلة بوسائل وطرق آمنة",
  keywords: "سطحة, سطحة تطبيق, تطبيق سطحة, سطحة مكة, سطحة من جدة الى مكة, سطحة من مكة الى جدة, سطحة جدة, سطحة قريبة مني, سطحة ابو فارس, اقرب سطحة, اريد سطحة, سطحة هيدروليك, سطحة ابو فارس, فتح ابواب السيارات المقفلة, سطحة جدة لفتح ابواب السيارات المقفلة, فني ممتاز لفتح ابواب السيارات المقفلة, كيف اطلب سطحة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <Head>
        <link rel="canonical" href="https://www.sathaapp.com" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

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
  title: "سطحة جدة",
  description: "خدمة سطحة في جميع انحاء جدة لنقل وسحب السيارات المعطلة والمتضررة من الحوادث",
  keywords: "سطحة, سطحة تطبيق, تطبيق سطحة, سطحة مكة, سطحة من جدة الى مكة, سطحة من مكة الى جدة, سطحة جدة, سطحة قريبة مني, سطحة ابو فارس, اقرب سطحة, اريد سطحة, سطحة هيدروليك, سطحة ابو فارس, فتح ابواب السيارات المقفلة, سطحة جدة لفتح ابواب السيارات المقفلة, فني ممتاز لفتح ابواب السيارات المقفلة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

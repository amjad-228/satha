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
  description:
    "سطحة جدة هي خدمة سطحة في جميع انحاء جدة لنقل وسحب السيارات المتعطلة والمتضررة من الحوادث, وفتح ابواب السيارات المقفلة بوسائل وطرق آمنة",
  keywords:
    "سطحة جدة, تطبيق سطحة, سطحة قريبة مني, سطحة ابو فارس, اقرب سطحة, اريد سطحة, سطحة هيدروليك, سطحة جدة لفتح ابواب السيارات المقفلة, فني ممتاز لفتح ابواب السيارات المقفلة ب؛تراف وأمان, كيف اطلب سطحة, اتصل, سطحة, خدمة, المتعطلة, السيارات",
  applicationName: "سطحة جدة",
  authors: [{ name: "سطحة جدة فريق الدعم" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "سطحة جدة - اقرب سطحة لنقل وسحب السيارات المتعطلة",
    description:
      "سطحة جدة هي خدمة سطحة في جميع انحاء جدة لنقل وسحب السيارات المتعطلة والمتضررة من الحوادث, وفتح ابواب السيارات المقفلة بوسائل وطرق آمنة",
    url: "https://www.sathaapp.com",
    type: "website",
    locale: "ar",
    images: [
      {
        url: "https://www.sathaapp.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "سطحة جدة لنقل السيارات",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sathaapp",
    title: "سطحة جدة - اقرب سطحة لنقل وسحب السيارات المتعطلة",
    description:
      "سطحة جدة هي خدمة سطحة في جميع انحاء جدة لنقل وسحب السيارات المتعطلة والمتضررة من الحوادث, وفتح ابواب السيارات المقفلة بوسائل وطرق آمنة",
    images: ["https://www.sathaapp.com/images/og-image.jpg"],
  },
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="سطحة جدة" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.sathaapp.com" />
        <link rel="alternate" href="https://www.sathaapp.com" hrefLang="x-default" />
        <link rel="alternate" href="https://www.sathaapp.com" hrefLang="ar" />
        <meta property="og:locale" content="ar_AR" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sathaapp.com" />
        <meta property="og:title" content="سطحة جدة - اقرب سطحة لنقل وسحب السيارات المتعطلة" />
        <meta property="og:description" content="خدمة موثوقة لنقل السيارات المتعطلة والمتضررة وفتح أبواب السيارات المقفلة بأمان. احصل على أقرب سطحة الآن." />
        <meta property="og:image" content="https://www.sathaapp.com/assets/og-image.jpg" />
        <meta property="og:site_name" content="سطحة جدة" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="سطحة جدة - اقرب سطحة لنقل وسحب السيارات المتعطلة" />
        <meta name="twitter:description" content="خدمة موثوقة لنقل السيارات المتعطلة والمتضررة وفتح أبواب السيارات المقفلة بأمان. احصل على أقرب سطحة الآن." />
        <meta name="twitter:image" content="https://www.sathaapp.com/assets/og-image.jpg" />
        <meta name="google-site-verification" content="eLGTU4PvzFDdZ49x7Jw2pWjGNcpGYy0MwLE5mioueRw" />  
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

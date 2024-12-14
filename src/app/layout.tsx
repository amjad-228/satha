import Script from "next/script";
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
  applicationName: "سطحة جدة",
  authors: [{ name: "سطحة جدة فريق الدعم" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "سطحة جدة - اقرب سطحة في جدة لنقل وسحب السيارات المتعطلة",
    description:
      "احصل على خدمات موثوقة لنقل السيارات المتعطلة وفتح الأبواب بأمان في جدة.",
    url: "https://sathaapp.com",
    type: "website",
    locale: "ar",
    images: [
      {
        url: "https://sathaapp.com/images/satha2.webp",
        width: 1200,
        height: 630,
        alt: "سطحة جدة - نقل السيارات",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sathaapp",
    title: "سطحة جدة - اقرب خدمة سحب سيارات سريعة وآمنة في جدة",
    description:
      "سطحة جدة هي اقرب سطحة في جدة تقدم خدمات مميزة لنقل وسحب السيارات المتعطلة والمتضررة. سطحة جدة ايضا تقدم خدمة فتح أبواب السيارات المقفلة بكل احترافية وسهولة.",
    images: ["https://sathaapp.com/images/satha2.webp"],
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
        {/* Google Analytics */} 
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Y7HMBRLRML" 
        />
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Y7HMBRLRML');
          `}
        </Script>

        {/* title and description*/}
        <title>سطحة جدة - أفضل واقرب خدمة سطحة في جدة لسحب السيارات </title>
        <meta name="description" content={"سطحة جدة هي اقرب سطحة في جدة توفر خدمة نقل وسحب السيارات وتقديرها في شيخ المعارض. سطحة جدة ايضا تقدم خدمة فتح أبواب السيارات المقفلة بكل احترافية وامان."} />
        <meta name="keywords" content={"سطحة جدة, تطبيق سطحة, اقرب سطحة, سطحة لنقل السيارات, خدمة فتح الأبواب, السيارات المتعطلة, جدة, سطحة قريبة مني, خدمة سحب السيارات في جدة, سطحة لنقل السيارات, سيارات الطوارئ جدة"} />
        


        
        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="سطحة جدة" />
        <meta name="robots" content="index, follow" />
        <meta name="copyright" content="سطحة جدة لنقل السيارات" />
        <meta name="language" content="ar" />
        <meta name="category" content="Business" />
        <meta name="coverage" content="sa" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="google-site-verification" content="eLGTU4PvzFDdZ49x7Jw2pWjGNcpGYy0MwLE5mioueRw" />

        {/* Canonical and Alternate Links */}
        <link rel="canonical" href="https://www.sathaapp.com/" />
        <link rel="alternate" href="https://sathaapp.com/#خدماتنا" hrefLang="ar-sa" />
        <link rel="alternate" href="https://sathaapp.com" hrefLang="x-default" />
        

        {/* Open Graph Meta Tags */}
        <meta property="og:locale" content="ar_SA" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sathaapp.com" />
        <meta property="og:title" content={"سطحة جدة - أفضل سطحة في جدة لنقل وسحب السيارات المتعطلة بسرعة وأمان"} />
        <meta property="og:description" content={metadata.openGraph!.description}/>
        <meta property="og:image" content="https://sathaapp.com/images/satha2.webp" />
        <meta property="og:site_name" content="سطحة جدة" />

        {/* Additional Meta Tags */}
        {/* <meta name="fb:page_id" content="1234567890" /> */}
        <meta name="application-name" content="سطحة جدة" />
        {/* <meta name="og:email" content="support@sathaapp.com" /> */}
        <meta name="og:phone_number" content="+966535142000" />
        <meta name="og:fax_number" content="+966535142001" />
        <meta name="og:latitude" content="21.4858" />
        <meta name="og:longitude" content="39.1925" />
        <meta name="og:street-address" content="شارع المدارس" />
        <meta name="og:locality" content="جدة" />
        <meta name="og:region" content="منطقة مكة المكرمة" />
        <meta name="og:postal-code" content="21442" />
        <meta name="og:country-name" content="المملكة العربية السعودية" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="سطحة جدة - اقرب سطحة في جدة لنقل وسحب السيارات المتعطلة" />
        <meta name="twitter:description" content="احصل على خدمات موثوقة لنقل السيارات المتعطلة وفتح الأبواب بأمان في جدة." />
        <meta name="twitter:image" content="https://sathaapp.com/images/satha2.webp" />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "سطحة جدة",
              description:
                "خدمة نقل وسحب السيارات المتعطلة في جدة، فتح أبواب السيارات بأمان.",
              url: "https://sathaapp.com",
              telephone: "+966535142000",
              address: {
                "@type": "PostalAddress",
                addressLocality: "جدة",
                addressCountry: "SA",
              },
              image: "https://sathaapp.com/images/satha2.webp",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

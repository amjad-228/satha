import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


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
  /*
  applicationName: "سطحة جدة",
  authors: [{ name: "سطحة جدة فريق الدعم" }],
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
  */
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* title and description*/}
        <title>سطحة جدة - أفضل واقرب خدمة سطحة في جدة 0535142000 </title>
        <meta name="description" content={"سطحة جدة هي اقرب سطحة في جدة 0535142000 توفر خدمة سحب السيارات بأسعار مناسبة. سطحة جدة ايضا تقدم خدمة فتح أبواب السيارات المقفلة بكل احترافية وامان."} />
        <meta name="keywords" content={"سطحة جدة, سطحة جده, سطحه جدة, سطحه جده, أقرب سطحة, أقرب سطحه, تطبيق سطحة, اقرب سطحة, سطحة لنقل السيارات, خدمة فتح الأبواب, السيارات المتعطلة, جدة, سطحة قريبة مني, خدمة سحب السيارات في جدة, سطحة لنقل السيارات, سيارات الطوارئ جدة, سطحة هيدروليك, سطحة سيارات, سطحة جدة 50 ريال, سسطحة جدة 90 ريال, سطحة جدة 100 ريال, سطحة ونش, سطحة جدة الحمدانية, سطحة ابو فارس, سطحة جدة هيدروليك, سطحة جدة ابحر الشمالية, سطحة جدة السامر, سطحة جدة الخمرة, سطحة جدة حراج, سطحة جدة حي السلامة, سطحة جدة المعارض, سطحة جدة مفتوح الان, سطحة جدة مكة, سطحة جديدة, سطحة 2023"} />
        <link rel="icon" href="/favicon.ico" />
        
        <link
          rel="alternate"
          type="application/rss+xml"
          title="سطحة جدة لنقل السيارات 0535142000 &laquo; الخلاصة"
          href="https://www.sathaapp.com/#خدماتنا/"
        />

        
        
        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0" />
        <meta name="author" content="سطحة جدة" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="copyright" content="سطحة جدة لنقل السيارات" />
        <meta name="language" content="ar" />
        <meta name="category" content="Business" />
        <meta name="coverage" content="sa" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="google-site-verification" content="eLGTU4PvzFDdZ49x7Jw2pWjGNcpGYy0MwLE5mioueRw" />

        {/* Canonical and Alternate Links */}
        <link rel="canonical" href="https://www.sathaapp.com" />
        <link rel="alternate" href="https://www.sathaapp.com/about" hrefLang="ar-sa" />
        <link rel="alternate" href="https://www.sathaapp.com" hrefLang="x-default" />
        

        {/* Open Graph Meta Tags */}
        <meta property="og:locale" content="ar_SA" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sathaapp.com" />
        <meta property="og:title" content= "سطحة جدة - أفضل واقرب سطحة في جدة لنقل وسحب السيارات 0535142000" />
        <meta property="og:description" content= "احصل على خدمات موثوقة لنقل السيارات المتعطلة وفتح الأبواب بأمان في جدة."/>
        <meta property="og:image" content="https://www.sathaapp.com/images/satha2.webp" />
        <meta property="og:image:secure_url" content="https://www.sathaapp.com/images/satha2.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="سطحة جدة لنقل السيارات 0535142000" />

        {/* Additional Meta Tags */}
        {/* <meta name="fb:page_id" content="1234567890" /> */}
        <meta name="application-name" content="سطحة جدة" />
        <meta name="og:email" content="amjad@sathaapp.com" />
        <meta name="og:phone_number" content="+966535142000" />
        <meta name="og:fax_number" content="+966535142001" />
        <meta name="og:latitude" content="21.4946461" />
        <meta name="og:longitude" content="39.1735574" />
        <meta name="og:street-address" content="شارع المدارس" />
        <meta name="og:locality" content="جدة" />
        <meta name="og:region" content="منطقة مكة المكرمة" />
        <meta name="og:postal-code" content="22232" />
        <meta name="og:country-name" content="المملكة العربية السعودية" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="سطحة جدة - اقرب سطحة في جدة لنقل وسحب السيارات المتعطلة" />
        <meta name="twitter:description" content="احصل على خدمات موثوقة لنقل السيارات المتعطلة وفتح الأبواب بأمان في جدة." />
        <meta name="twitter:site" content="@sathaapp" />
        <meta name="twitter:image" content="https://www.sathaapp.com/images/satha2.webp" />
        <meta name="twitter:image:width" content="1200" /> 
        <meta name="twitter:image:height" content="620" />

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
              url: "https://www.sathaapp.com",
              telephone: "+966535142000",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressLocality: "جدة",
                addressCountry: "SA",
              },
              image: "https://www.sathaapp.com/images/satha2.webp",
              "sameAs": ["https://www.x.com/sathaapp?s=09"],
              "openingHours": [
                "Mo-Su 00:00-23:59", // ساعات العمل (على سبيل المثال، العمل طوال الأسبوع)
                "publicHolidays 00:00-23:59"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "reviewCount": "24"
              },
              "offers": {
                "@type": "Offer",
                "priceCurrency": "SAR",
                "price": "90",
                "eligibleRegion": {
                  "@type": "Place",
                  "name": "جدة"
                },
                "priceValidUntil": "2024-12-31",
                "seller": {
                  "@type": "Organization",
                  "name": "سطحة جدة"
                }
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+966535142000",
                "contactType": "customer service",
                "areaServed": "SA",
                "availableLanguage": "Arabic"
              },  
              "additionalType": [
                "https://schema.org/AutomotiveRepair", // نوع النشاط التجاري
                "https://schema.org/CarRepair"
              ],
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "21.4946461", // (مثال) إحداثيات العرض
                "longitude": "39.1735574", // (مثال) إحداثيات الطول
              },
              "hasMap": "https://www.google.com/maps/place/21.4946461,39.1735574",
              "mainEntityOfPage": "https://www.sathaapp.com",
              
              review: [{
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "سارة"
                },
                "datePublished": "2024-12-20",
                "reviewBody": "خدمة سريعة وموثوقة. وصلوا في الوقت المحدد وبدون أي مشاكل. فريق محترف وسأستخدم الخدمة مرة أخرى في المستقبل.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "itemReviewed": {
                  "@type": "Service",
                  "name": "خدمة سطحة جدة"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "محمود"
                },
                "datePublished": "2024-12-15",
                "reviewBody": "الخدمة كانت ممتازة. السائق محترف للغاية وتمكن من حل مشكلتي بسرعة. كانت السيارة في حالة جيدة عندما وصلت.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "itemReviewed": {
                  "@type": "Service",
                  "name": "خدمة سطحة جدة"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "عبدالله"
                },
                "datePublished": "2024-12-10",
                "reviewBody": "الخدمة كانت جيدة، ولكن كنت أتمنى لو كان لديهم المزيد من الخيارات لوقت التوصيل. تأخرت قليلاً عن الوقت الذي كنت أتوقعه.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "3",
                  "bestRating": "5"
                },
                "itemReviewed": {
                  "@type": "Service",
                  "name": "خدمة سطحة جدة"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "فهد"
                },
                "datePublished": "2024-12-05",
                "reviewBody": "للأسف، لم تكن الخدمة كما توقعت. السائق كان متأخراً ولم أتمكن من التواصل معهم بسهولة. بحاجة لتحسين التواصل.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "2",
                  "bestRating": "5"
                },
                "itemReviewed": {
                  "@type": "Service",
                  "name": "خدمة سطحة جدة"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "أحمد"
                },
                "datePublished": "2024-12-19",
                "reviewBody": "خدمة رائعة! وصلوا بسرعة وكانوا محترفين جداً. تم سحب السيارة بأمان وبكل سهولة. أوصي بشدة!",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "itemReviewed": {
                  "@type": "Service",
                  "name": "خدمة سطحة جدة"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "مريم"
                },
                "datePublished": "2024-12-18",
                "reviewBody": "كانت الخدمة ممتازة! فريق العمل كان سريعاً واحترافياً. شعرت بالأمان التام أثناء عملية سحب السيارة.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "itemReviewed": {
                  "@type": "Service",
                  "name": "خدمة سطحة جدة"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "علاء"
                },
                "datePublished": "2024-12-17",
                "reviewBody": "أفضل خدمة سطحة جربتها! سريع جداً في الوصول، وسائق محترف. شكراً لكم على الخدمة الممتازة.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "itemReviewed": {
                  "@type": "Service",
                  "name": "خدمة سطحة جدة"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "سلمان"
                },
                "datePublished": "2024-12-16",
                "reviewBody": "خدمة رائعة وسريعة! وصلت السطحة في الوقت المحدد وكنت مطمئناً جداً. أنصح الجميع باستخدام هذه الخدمة.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "itemReviewed": {
                  "@type": "Service",
                  "name": "خدمة سطحة جدة"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "نورة"
                },
                "datePublished": "2024-12-15",
                "reviewBody": "خدمة ممتازة وسريعة. تم نقل سيارتي بأمان وبكل سهولة. الموظفون محترفون جداً.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "itemReviewed": {
                  "@type": "Service",
                  "name": "خدمة سطحة جدة"
                }
              }
              
              
            ]           
            }),
          }}
        />
        {/* Google Analytics */} 
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Y7HMBRLRML" 
        />
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Y7HMBRLRML', { 'cookie_flags': 'SameSite=None; Secure' });
          `}
        </Script>
        {/* Google tag (gtag.js) */}
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-11526690338">
</script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
              <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow bg-gradient-to-b from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
                <SpeedInsights />
                  {children}
                </main>
                <Footer />
              </div>
        
      </body>
    </html>
  );
}


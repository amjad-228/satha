
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
        <meta name="keywords" content={"سطحة جدة, سطحات جدة, أقرب سطحة من موقعي, سطحة قريبة مني, أقرب سطحة, سطحة جدة الحمراء, سطحة جدة الأندلس, سطحة جده, اقرب سطحه, سطحة جدة الأندلس, سطحة جدة الشرفية, سطحة جدة مشرفة, سطحة جدة البغدادية الغربية, سطحة جدة الشاطئ, سطحة جدة الوروود, سطحة جدة الخمرة, سطحة جدة الفضيلة, سطحة جدة القرنية, سطحة جدة النزهة, سطحة جدة الروضة, سطحة جدة الصفاء, سطحة جدة المروة, سطحة جدة البوادي, سطحة جدة الفيصلية, سطحة جدة الربوة, سطحة جدة الزهراء, سطحة جدة السلامة, سطحة جدة العزيزية, سطحة جدة الفيحاء, سطحة جدة النهضة, سطحة جدة الخالدية, سطحة جدة المرجان,  البساتين, سطحة جدة الرحاب, سطحة جدة النخيل, سطحة جدة السامر, سطحة جدة المنار, سطحة جدة الواحة, سطحة جدة ابحر الشمالية, سطحة جدة ابحر الجنوبية, سطحة جدة قويزة, سطحة جدة ابرق الرغامة, سطحة جدة الرويس, سطحة جدة بني مالك, سطحة جدة الحمدانية, سطحة جدة الجوهرة, سطحة جدة 50 ريال, سطحة جدة 90 ريال, سطحة جدة 100 ريال"} />
        <link rel="icon" href="/favicon.ico" />
        
        <link
          rel="alternate"
          type="application/rss+xml"
          title="سطحة جدة لنقل السيارات 0535142000 &laquo; الخلاصة"
          href="https://www.sathaapp.com/contact"
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
              "@type": "TowingService",
              name: "سطحة جدة",
              description:
                "خدمة نقل وسحب السيارات المتعطلة في جدة، فتح أبواب السيارات بأمان.",
              url: "https://www.sathaapp.com",
              telephone: "+966535142000",
              priceRange: "SAR 50 - SAR 500",
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
              "offers": {
                "@type": "Offer",
                "priceCurrency": "SAR",
                "price": "90",
                "eligibleRegion": {
                  "@type": "Place",
                  "name": "جدة"
                },
                "priceValidUntil": "2025-01-31",
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
            }),
          }}
        />

        {/* Google tag (gtag.js) */}
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-11563332087"></script>
<script>
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-11563332087');`}
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


import { SatahatJeddahMain } from '@/components/satahat-jeddah-main';
  import type { Metadata } from "next"

const name = "الأندلس";
const id = "Alandalus";
const url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59383.01171146918!2d39.185355852253785!3d21.529713287708276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3c567e2371de7%3A0x7027c2fed32e2e61!2z2KfZhNij2YbYr9mE2LPYjCDYrNiv2Kkg2KfZhNiz2LnZiNiv2YrYqQ!5e0!3m2!1sar!2s!4v1739680189517!5m2!1sar!2s"
const latitude = "21.547674";
const longitude = "39.168472";
const postalCode = "23326";


export const metadata: Metadata = {
  title: `سطحة جدة ${name} | أقرب سطحة في حي ${name} 0535142000`,
  description:
    `سطحة جدة ${name} هي اقرب سطحة في حي ${name} 0535142000 توفر خدمة سحب السيارات بأسعار منافسة. ايضا نقدم خدمة فتح أبواب السيارات المقفلة بكل احترافية وامان.`,
  keywords: ["سطحة جدة", "سطحات جدة", "أقرب سطحة من موقعي", "سطحة قريبة مني", "أقرب سطحة", "سطحة جدة الحمراء", "سطحة جدة", "سطحة الحمراء", "اقرب سطحه", "سطحة جدة الأندلس", "سطحة جدة الشرفية", "سطحة جدة مشرفة", "سطحة جدة البغدادية الغربية", "سطحة جدة الشاطئ", "سطحة جدة الوروود", "سطحة جدة الخمرة", "سطحة جدة الفضيلة", "سطحة جدة القرنية", "سطحة جدة النزهة", "سطحة جدة الروضة", "سطحة جدة الصفاء", "سطحة جدة المروة", "سطحة جدة البوادي", "سطحة جدة الفيصلية", "سطحة جدة الربوة", "سطحة جدة الزهراء", "سطحة جدة السلامة", "سطحة جدة العزيزية", "سطحة جدة الفيحاء"],
  openGraph: {
    title: `سطحة جدة ${name} | اقرب سطحة في حي ${name} تقدم خدمة سحب السيارات`,
    description:
      `سطحة جدة ${name} هي اقرب سطحة في حي ${name} 0535142000 توفر خدمة سحب السيارات بأسعار منافسة. ايضا نقدم خدمة فتح أبواب السيارات المقفلة بكل احترافية وامان.`,
    siteName: `سطحة جدة ${name} 0535142000`,
    url: `https://www.sathaapp.com/satahat-jeddah/Sathat-Jeddah-${id}`,
    images: [
      {
        url: "https://www.sathaapp.com/images/satha2.webp",
        width: 1200,
        height: 630,
        alt: `سطحة جدة ${name}`,
        type: "image/webp",
      },
    ],
    type: "website",
    locale: "ar_SA",
  },

  twitter: {
    card: "summary_large_image",
    title: `سطحة جدة ${name} | أقرب سطحة في حي ${name} 0535142000`,
    description: `سطحة جدة ${name} هي اقرب سطحة في حي ${name} 0535142000 توفر خدمة سحب السيارات بأسعار منافسة. ايضا نقدم خدمة فتح أبواب السيارات المقفلة بكل احترافية وامان.`,
    site: "@sathaapp",
    images: ["https://sathaapp.com/images/satha2.webp"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `سطحة جدة ${name}`,
      "description": `سطحة جدة ${name} هي اقرب سطحة في حي ${name} 0535142000 توفر خدمة سحب السيارات بأسعار منافسة. ايضا نقدم خدمة فتح أبواب السيارات المقفلة بكل احترافية وامان.`,
      "url": `https://sathaapp.com/satahat-jeddah/${id}`,
      "telephone": "+966535142000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": `حي ${name}`,
        "addressLocality": "جدة",
        "addressRegion": "مكة المكرمة",
        "postalCode": postalCode,
        "addressCountry": "SA"
      },
      image: "https://www.sathaapp.com/images/satha2.webp",
      "priceRange": "SAR 50 - SAR 500",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": latitude,
        "longitude": longitude,
      },
      "hasMap": `https://www.google.com/maps/place/${latitude},${longitude}`,
    }),
    "openingHours": "24/7",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61571033757810",
      "https://x.com/sathaapp",
      "https://www.instagram.com/sathat_jida"
    ]
  },
}
export default function SathatJeddah() {
  return (
    <div>
      {SatahatJeddahMain(name, url)}
    </div>
  );
}
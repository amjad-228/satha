export function generateMetaData(name: string, id: string, postalCode: string, latitude: string, longitude: string) {
    return {
        title: `سطحة جدة ${name} | أقرب سطحة في حي ${name} 0535142000`,
        description:
          `سطحة جدة ${name} هي اقرب سطحة في حي ${name} 0535142000 توفر خدمة سحب السيارات بأسعار منافسة. ايضا نقدم خدمة فتح أبواب السيارات المقفلة بكل احترافية وامان.`,
        keywords: ["سطحة جدة", "سطحات جدة", "أقرب سطحة من موقعي", "سطحة قريبة مني", "أقرب سطحة", "سطحة جدة الحمراء", "سطحة جدة", "سطحة الحمراء", "اقرب سطحه", "سطحة جدة الأندلس", "سطحة جدة الشرفية", "سطحة جدة مشرفة", "سطحة جدة البغدادية الغربية", "سطحة جدة الشاطئ", "سطحة جدة الوروود", "سطحة جدة الخمرة", "سطحة جدة الفضيلة", "سطحة جدة القرنية", "سطحة جدة النزهة", "سطحة جدة الروضة", "سطحة جدة الصفاء", "سطحة جدة المروة", "سطحة جدة البوادي", "سطحة جدة الفيصلية", "سطحة جدة الربوة", "سطحة جدة الزهراء", "سطحة جدة السلامة", "سطحة جدة العزيزية", "سطحة جدة الفيحاء"],
        openGraph: {
            title: `سطحة جدة ${name} | اقرب سطحة في حي ${name} تقدم خدمة سحب السيارات`,
            description:
              `سطحة جدة ${name} هي اقرب سطحة في حي ${name} 0535142000 توفر خدمة سحب السيارات بأسعار منافسة. ايضا نقدم خدمة فتح أبواب السيارات المقفلة بكل احترافية وامان.`,
              site_name: `سطحة جدة ${name} 0535142000`,
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
          canonical:`https://www.sathaapp.com/satahat-jeddah/Sathat-Jeddah-${id}`,
          twitter: {
            handle: "@sathaapp",
            site: "@sathaapp",
            cardType: "summary_large_image",
          },
          schema: {
            "@context": "https://schema.org",
            "@type": "TowingService",
            "name": `سطحة جدة ${name}`,
            "description":  `سطحة جدة ${name} هي اقرب سطحة في حي ${name} 0535142000 توفر خدمة سحب السيارات بأسعار منافسة. ايضا نقدم خدمة فتح أبواب السيارات المقفلة بكل احترافية وامان.`,
            "url":`https://www.sathaapp.com/satahat-jeddah/Sathat-Jeddah-${id}`,
            "telephone": "+966535142000",
            "priceRange": "SAR 50 - SAR 500",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": `حي ${name}`,
              "addressLocality": "جدة",
              "addressRegion": "مكة المكرمة",
              "postalCode": postalCode,
              "addressCountry": "SA"
            },
            image: "https://www.sathaapp.com/images/satha2.webp",
            "aggregateRating": {
              "@type": "AggregateRating",
               "ratingValue": "4.5",
               "reviewCount": "24"
            },
            "hasMap": `https://www.google.com/maps/place/${latitude},${longitude}`,
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": latitude,
              "longitude": longitude,
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              }
            ],
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61571033757810",
              "https://x.com/sathaapp",
              "https://www.instagram.com/sathat_jida"
            ]
          },
          
    }
}
import type { Metadata } from "next"

export function generateDistrictMetadata(district: string): Metadata {
  return {
    title: `سطحة جدة ${district} | خدمة سحب السيارات الفورية`,
    description: `خدمة سطحة سيارات احترافية في حي ${district} بجدة. نقدم خدمات سحب وإنقاذ السيارات على مدار الساعة بأسعار تنافسية وسرعة في الاستجابة.`,
    keywords: [
      `سطحة جدة`,
      `سطحة ${district}`,
      `سحب سيارات ${district}`,
      `خدمة سيارات جدة`,
      `إنقاذ سيارات ${district}`,
      `ونش ${district}`,
    ],
    openGraph: {
      title: `سطحة جدة ${district} | خدمة سحب السيارات الفورية`,
      description: `خدمة سطحة سيارات احترافية في حي ${district} بجدة. نقدم خدمات سحب وإنقاذ السيارات على مدار الساعة بأسعار تنافسية وسرعة في الاستجابة.`,
      url: `https://www.sathaapp.com/satahat-jeddah/${district}`,
      images: [
        {
          url: `/images/satha2.webp`,
          width: 1200,
          height: 630,
          alt: `سطحة جدة في حي ${district}`,
        },
      ],
    },
  }
}


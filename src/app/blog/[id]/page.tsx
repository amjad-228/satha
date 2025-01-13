import { Metadata } from 'next'
import { article1 } from '../articles/article1'
import { article2 } from '../articles/article2'
import { article3 } from '../articles/article3'
import { article4 } from '../articles/article4'
import { article5 } from '../articles/article5'
import { ArticleType } from '../types'
import BlogPostContent from '@/components/BlogPostContent'
import ArticleNotFound from '@/components/ArticleNotFound'

const articles: ArticleType[] = [article1, article2, article3, article4, article5]

interface Params {
  id: string;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  // التأكد من أن params جاهز للاستخدام
  const { id } = await params; // استخدام await هنا
  const articleId = parseInt(id); // تحويل id إلى عدد صحيح
  const article = articles.find(a => a.id === articleId)

  if (!article) {
    return {
      title: 'المقال غير موجود - مدونة سطحة جدة',
      description: 'عذرًا، لم نتمكن من العثور على المقال الذي تبحث عنه.',
      metadataBase: new URL('https://www.sathaapp.com'), // تعيين base URL للموقع
    }
  }

  return {
    title: `${article.title} - مدونة سطحة جدة`,
    description: article.excerpt,
    metadataBase: new URL('https://www.sathaapp.com'), // تعيين base URL للموقع
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
      type: 'article',
      publishedTime: article.date,
      authors: ['سطحة جدة'],
      tags: [article.category],
    },
  }
}

export default async function BlogPost({ params }: { params: Promise<Params> }) {
  // التأكد من أن params جاهز للاستخدام
  const { id } = await params; // استخدام await هنا
  const articleId = parseInt(id); // تحويل id إلى عدد صحيح
  const article = articles.find(a => a.id === articleId)

  if (!article) {
    return <ArticleNotFound />
  }

  return (
    <>
      <BlogPostContent post={article} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": article.title,
            "description": article.excerpt,
            "image": article.image,
            "datePublished": article.date,
            "author": {
              "@type": "Organization",
              "name": "سطحة جدة"
            },
            "publisher": {
              "@type": "Organization",
              "name": "سطحة جدة",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.sathaapp.com/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.sathaapp.com/blog/${article.id}`
            }
          })
        }}
      />
    </>
  )
}

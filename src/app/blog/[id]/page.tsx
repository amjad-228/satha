import { use } from 'react'
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

export default function BlogPost({ params }: { params: Promise<Params> }) {
    const { id } = use(params)
    const article = articles.find(a => a.id === parseInt(id))
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


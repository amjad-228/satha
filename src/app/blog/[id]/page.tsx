import { use } from 'react'
import { article1 } from '../articles/article1'
import { article2 } from '../articles/article2'
import { article3 } from '../articles/article3'
import { article4 } from '../articles/article4'
import { ArticleType } from '../types'
import BlogPostContent from '@/components/BlogPostContent'

const articles: ArticleType[] = [article1, article2, article3, article4]

interface Params {
  id: string;
}

export default function BlogPost({ params }: { params: Promise<Params> }) {
  const { id } = use(params)
  const article = articles.find(a => a.id === parseInt(id))

  if (!article) {
    return <div>المقال غير موجود</div>
  }

  return <BlogPostContent post={article} />
}


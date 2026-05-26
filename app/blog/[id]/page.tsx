import Link from 'next/link'
import { posts } from '../posts-data'

export function generateStaticParams() {
  return posts.map((post) => ({ id: post.id }))
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === params.id)

  if (!post) {
    return (
      <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
        <h2>文章不存在</h2>
        <p>这篇文章可能已被删除或移动。</p>
        <Link href="/blog" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          返回博客
        </Link>
      </div>
    )
  }

  return (
    <div className="post-content">
      <Link href="/blog" className="btn btn-outline" style={{ marginBottom: '2rem' }}>← 返回博客</Link>

      <h1>{post.title}</h1>
      <p className="date">{post.date}</p>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        {post.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
      </div>

      <div className="card" style={{ lineHeight: 1.8 }}>
        <p>📝 文章内容开发中...</p>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          告诉我你想写什么内容，我来帮你生成！
        </p>
      </div>
    </div>
  )
}
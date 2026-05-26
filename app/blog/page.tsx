'use client'

import { posts } from './posts-data'

export default function BlogPage() {
  return (
    <div>
      <div className="page-header">
        <h1>📝 博客</h1>
        <p>记录思考、旅行、生活中的点点滴滴</p>
      </div>

      {posts.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
          <h3>暂无文章 ✍️</h3>
          <p>开始写你的第一篇博客吧！</p>
        </div>
      ) : (
        <div className="grid grid-2">
          {posts.map((post) => (
            <a key={post.id} href={`/blog/${post.id}`} className="card blog-card">
              <h3>{post.title}</h3>
              <p className="date">{post.date}</p>
              <p className="desc">{post.description}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {post.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
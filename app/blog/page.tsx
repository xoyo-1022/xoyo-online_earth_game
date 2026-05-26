'use client'

import { posts } from './posts-data'

export default function BlogPage() {
  return (
    <div>
      <div className="page-header">
        <h1>📝 博客</h1>
        <p>记录思考、旅行、生活中的点点滴滴</p>
      </div>

      <div style={{ padding: '0 0 80px' }}>
        {posts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-secondary)' }}>
            <p>暂无文章，快写第一篇吧！</p>
          </div>
        ) : (
          <div className="card-grid card-grid-2">
            {posts.map((post) => (
              <a key={post.id} href={`/blog/${post.id}`} className="picture-card">
                <div className="card-media-placeholder">📝</div>
                <div className="card-body">
                  <p className="card-label">博客</p>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <p className="card-date">{post.date}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
import Link from 'next/link'
import NavBar from '../NavBar'

export default function Blog() {
  return (
    <>
      <NavBar />
      <div className="page-header">
        <h1>📝 博客写作</h1>
        <p>文字是我思考的方式，旅行记录、技术心得、生活感悟</p>
      </div>

      <div className="blog-list" style={{ padding: '0 2rem 4rem' }}>
        {[
          { icon: '📝', tag: '随笔', title: '第一篇博客：开始记录', date: '2024-01-20', desc: '欢迎来到我的博客！这是第一篇文章，以后会分享更多有趣的内容。旅行、摄影、生活感悟，以及那些想要记住的瞬间。', slug: 'first-post' },
          { icon: '✈️', tag: '旅行', title: '旅行日记：某地探秘', date: '2024-01-15', desc: '记录一次难忘的旅行经历，探索未知的风景。从出发到抵达，从陌生到熟悉，每一步都是故事。', slug: 'travel-note' },
          { icon: '💻', tag: '技术', title: '技术分享：如何搭建个人网站', date: '2024-01-10', desc: '分享我搭建这个网站的完整过程，包括技术选型、设计思路、以及遇到的坑和解决方案。', slug: 'tech-sharing' },
          { icon: '🌅', tag: '随笔', title: '生活感悟：关于记录这件事', date: '2024-01-05', desc: '为什么我们要记录生活？这些文字和照片对我们来说意味着什么？一些关于记录的思考。', slug: 'life-reflection' },
        ].map((b) => (
          <Link key={b.slug} href={`/blog/${b.slug}`} className="blog-card">
            <div className="blog-icon">{b.icon}</div>
            <div className="blog-content">
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
              <p className="blog-date">{b.date} · {b.tag}</p>
            </div>
          </Link>
        ))}
      </div>

      <footer>
        <p>用热爱书写属于自己的故事</p>
        <p style={{ fontSize: '0.85rem', marginTop: 8 }}>© 2024 xoyo.online · 记录生活</p>
        <div className="social-links">
          <a href="https://github.com/xoyo-1022" target="_blank" rel="noopener">🐙</a>
          <a href="mailto:your@email.com">📧</a>
        </div>
      </footer>
    </>
  )
}
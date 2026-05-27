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

      <div className="blog-list stagger-children" style={{ padding: '0 2rem 4rem' }}>
        {[
          { icon: '📝', tag: '随笔', title: '第一篇博客：开始记录', date: '2024-01-20', desc: '欢迎来到我的博客！这是第一篇文章，以后会分享更多有趣的内容。旅行、摄影、生活感悟，以及那些想要记住的瞬间。', slug: 'first-post' },
          { icon: '✈️', tag: '旅行', title: '旅行日记：某地探秘', date: '2024-01-15', desc: '记录一次难忘的旅行经历，探索未知的风景。从出发到抵达，从陌生到熟悉，每一步都是故事。', slug: 'travel-note' },
          { icon: '💻', tag: '技术', title: '技术分享：如何搭建个人网站', date: '2024-01-10', desc: '分享我搭建这个网站的完整过程，包括技术选型、设计思路、以及遇到的坑和解决方案。', slug: 'tech-sharing' },
          { icon: '🌅', tag: '随笔', title: '生活感悟：关于记录这件事', date: '2024-01-05', desc: '为什么我们要记录生活？这些文字和照片对我们来说意味着什么？一些关于记录的思考。', slug: 'life-reflection' },
        ].map((b, i) => (
          <Link key={i} href={`/blog/${b.slug}`} className="blog-card">
            <div className="blog-icon">{b.icon}</div>
            <div className="blog-content">
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
              <p className="blog-date">
                {b.date}
                <span className="blog-tag">{b.tag}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>

      <footer>
        <p className="tagline">用热爱书写属于自己的故事</p>
        <p>© 2024 xoyo.online · 记录生活</p>
        <div className="social-links">
          <a href="https://github.com/xoyo-1022" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="social-icon">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
            </svg>
          </a>
          <a href="mailto:your@email.com">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="social-icon">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>
      </footer>
    </>
  )
}
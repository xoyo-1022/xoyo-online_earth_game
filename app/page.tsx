import Link from 'next/link'
import NavBar from './NavBar'

export default function Home() {
  return (
    <>
      <NavBar />

      {/* Hero */}
      <section className="hero">
        {/* Mona Lisa Artwork from Unsplash */}
        <div className="artwork-wrapper stagger-children">
          <div className="artwork-frame-outer artwork-float-anim">
            <div className="artwork-frame-inner">
              <div className="artwork-image-container">
                {/* Real Mona Lisa painting from Unsplash */}
                <img
                  src="/mona-lisa.jpg"
                  alt="Mona Lisa painting in gold frame"
                  className="artwork-image"
                />
              </div>
            </div>
          </div>
          <div className="artwork-label">Leonardo da Vinci × Gallery Remix · xoyo</div>
        </div>

        <h1 className="hero-title animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          xoyo的<span>地球副本</span>
        </h1>
        <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          用热爱书写属于自己的故事<br />每一次冒险都值得被记录
        </p>
        <div className="hero-buttons animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Link href="/moments" className="btn btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="btn-icon">
              <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
            图文分享
          </Link>
          <Link href="/blog" className="btn btn-secondary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="btn-icon">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            阅读博客
          </Link>
        </div>
      </section>

      {/* 图文分享 */}
      <section className="section">
        <div className="section-header">
          <h2>📸 图文分享</h2>
          <p>照片与文字，定格每一个值得记住的瞬间</p>
        </div>
        <div className="art-grid stagger-children">
          {[
            { emoji: '🏔️', gradient: 'linear-gradient(145deg, #E8D8C8, #D4C4B0)', tag: '图文', title: '山顶日落', desc: '登顶的那一刻，整个世界都在脚下', date: '2024-01-20' },
            { emoji: '☕', gradient: 'linear-gradient(145deg, #E8D0D8, #D4BCC4)', tag: '图文', title: '晨间咖啡', desc: '一杯咖啡，一本书，一个安静的早晨', date: '2024-01-15' },
            { emoji: '🌸', gradient: 'linear-gradient(145deg, #F0E4DC, #E4D4C8)', tag: '图文', title: '春日樱花', desc: '短暂的美丽，更值得珍藏', date: '2024-01-10' },
          ].map((item, i) => (
            <Link key={i} href="/moments" className="art-card">
              <div className="art-card-frame">
                <div className="art-card-bg" style={{ background: item.gradient }}>{item.emoji}</div>
                <div className="art-card-overlay" />
              </div>
              <div className="art-card-info">
                <span className="art-card-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <p className="art-card-date">{item.date}</p>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link href="/moments" className="btn btn-secondary">查看全部图文 →</Link>
        </div>
      </section>

      {/* Divider */}
      <div className="divider"><span className="divider-icon">✦</span></div>

      {/* Vlog */}
      <section className="section">
        <div className="section-header">
          <h2>🎥 Vlog 视频</h2>
          <p>用镜头捕捉生活的每一帧</p>
        </div>
        <div className="vlog-grid stagger-children">
          {[
            { emoji: '🎬', bg: 'linear-gradient(145deg, #E4DCF0, #D4CCEC)', title: '旅行Vlog | 探索未知的小镇', desc: '一次说走就走的旅行' },
            { emoji: '🌴', bg: 'linear-gradient(145deg, #D8E8D4, #C8DCC4)', title: '探店Vlog | 隐藏在巷子里的咖啡馆', desc: '发现一家超级有氛围的小店' },
            { emoji: '☕', bg: 'linear-gradient(145deg, #D4D8E4, #C4CCDC)', title: '日常Vlog | 我的早晨routine', desc: '记录一个平凡又美好的早晨' },
          ].map((v, i) => (
            <Link key={i} href="/vlog" className="vlog-card">
              <div className="vlog-thumb" style={{ background: v.bg }}>{v.emoji}</div>
              <div className="vlog-play">
                <svg viewBox="0 0 24 24" style={{ width: 20, height: 20 }}>
                  <polygon points="5 3 19 12 5 21 5 3" fill="#C9956A" />
                </svg>
              </div>
              <div className="vlog-info">
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link href="/vlog" className="btn btn-secondary">探索 Vlog →</Link>
        </div>
      </section>

      {/* Divider */}
      <div className="divider"><span className="divider-icon">✦</span></div>

      {/* Blog */}
      <section className="section">
        <div className="section-header">
          <h2>📝 博客写作</h2>
          <p>文字是我思考的方式</p>
        </div>
        <div className="blog-list stagger-children">
          {[
            { icon: '📝', tag: '随笔', title: '第一篇博客：开始记录', date: '2024-01-20', desc: '欢迎来到我的博客！这是第一篇文章，以后会分享更多有趣的内容。', slug: 'first-post' },
            { icon: '✈️', tag: '旅行', title: '旅行日记：某地探秘', date: '2024-01-15', desc: '记录一次难忘的旅行经历，探索未知的风景。', slug: 'travel-note' },
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
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link href="/blog" className="btn btn-secondary">阅读更多 →</Link>
        </div>
      </section>

      {/* Art Quote */}
      <section className="section" style={{ textAlign: 'center', paddingTop: '2rem' }}>
        <div className="content-block" style={{ background: 'var(--gradient-lavender)' }}>
          <h2>「 Art is the lie that enables us to realize the truth. 」</h2>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', color: 'var(--text-secondary)' }}>— Pablo Picasso</p>
        </div>
      </section>

      <footer>
        <p className="tagline">用热爱书写属于自己的故事</p>
        <p>© 2024 xoyo.online · 记录生活</p>
        <div className="social-links">
          <a href="https://github.com/xoyo-1022" target="_blank" rel="noopener" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="social-icon">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
            </svg>
          </a>
          <a href="mailto:your@email.com" aria-label="Email">
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
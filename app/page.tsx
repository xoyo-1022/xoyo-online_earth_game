import Link from 'next/link'
import NavBar from './NavBar'

export default function Home() {
  return (
    <>
      <NavBar />
      
      {/* Hero */}
      <section className="hero">
        <p className="hero-eyebrow">
          <span className="dot" style={{width:8,height:8,background:'#22D3EE',borderRadius:'50%',display:'inline-block',marginRight:8,animation:'pulse 2s infinite'}}></span>
          记录生活主线任务 & 支线副本通关日志
        </p>
        <h1 className="hero-title">xoyo的<span>地球副本</span></h1>
        <p className="hero-subtitle">用热爱书写属于自己的故事，每一次冒险都值得被记录。</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/moments" className="btn btn-primary">📸 图文分享</Link>
          <Link href="/blog" className="btn btn-outline">📝 阅读博客</Link>
        </div>
      </section>

      {/* 图文分享 */}
      <section style={{ padding: '5rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
        <div className="section-head">
          <h2>📸 图文分享</h2>
          <p>照片与文字，定格每一个值得记住的瞬间</p>
        </div>
        <div className="card-grid">
          {[
            { emoji: '🏔️', title: '山顶日落', date: '2024-01-20', desc: '登顶的那一刻，整个世界都在脚下' },
            { emoji: '☕', title: '晨间咖啡', date: '2024-01-15', desc: '一杯咖啡，一本书，一个安静的早晨' },
            { emoji: '🌸', title: '春日樱花', date: '2024-01-10', desc: '短暂的美丽，更值得珍藏' },
          ].map((m) => (
            <Link key={m.title} href="/moments" className="picture-card">
              <div className="card-media-placeholder">{m.emoji}</div>
              <div className="card-body">
                <span className="card-label">图文</span>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
                <p className="card-date">{m.date}</p>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Link href="/moments" className="btn-ghost">查看全部图文 →</Link>
        </div>
      </section>

      {/* Vlog */}
      <section style={{ background: 'var(--bg-secondary)', padding: '4rem 2rem' }}>
        <div className="container">
          <div className="vlog-section">
            <div className="section-head">
              <h2>🎥 Vlog 视频</h2>
              <p>用镜头捕捉生活的每一帧，从旅行探店到日常 vlog</p>
            </div>
            <div className="vlog-grid">
              {[
                { emoji: '🎬', bg: 'linear-gradient(135deg, #1a1a2e, #16213e)', title: '旅行Vlog', desc: '探索未知的小镇' },
                { emoji: '🌴', bg: 'linear-gradient(135deg, #2d132c, #801336)', title: '探店Vlog', desc: '隐藏在巷子里的咖啡馆' },
                { emoji: '☕', bg: 'linear-gradient(135deg, #0f3460, #e94560)', title: '日常Vlog', desc: '我的早晨routine' },
              ].map((v) => (
                <Link key={v.title} href="/vlog" className="vlog-card">
                  <div className="vlog-thumb" style={{ background: v.bg }}>{v.emoji}</div>
                  <div className="vlog-play">▶</div>
                  <div className="vlog-info">
                    <h3>{v.title}</h3>
                    <p>{v.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 32 }}>
              <Link href="/vlog" className="btn-ghost">探索 Vlog →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 博客 */}
      <section style={{ padding: '5rem 2rem', maxWidth: 800, margin: '0 auto' }}>
        <div className="section-head">
          <h2>📝 博客写作</h2>
          <p>文字是我思考的方式，旅行记录、技术心得、生活感悟</p>
        </div>
        <div className="blog-list">
          {[
            { icon: '📝', tag: '随笔', title: '第一篇博客：开始记录', date: '2024-01-20', desc: '欢迎来到我的博客！这是第一篇文章，以后会分享更多有趣的内容。' },
            { icon: '✈️', tag: '旅行', title: '旅行日记：某地探秘', date: '2024-01-15', desc: '记录一次难忘的旅行经历，探索未知的风景。' },
          ].map((b) => (
            <Link key={b.title} href={`/blog/${b.tag.toLowerCase() === '随笔' ? 'first-post' : 'travel-note'}`} className="blog-card">
              <div className="blog-icon">{b.icon}</div>
              <div className="blog-content">
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
                <p className="blog-date">{b.date} · {b.tag}</p>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Link href="/blog" className="btn-ghost">阅读更多 →</Link>
        </div>
      </section>

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
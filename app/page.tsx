export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <p className="hero-eyebrow">xoyo.online</p>
        <h1 className="hero-title">xoyo的地球副本</h1>
        <p className="hero-subtitle">记录生活主线任务 & 支线副本通关日志<br />用热爱书写属于自己的故事</p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <a href="/moments" className="btn btn-primary">📸 图文分享</a>
          <a href="/blog" className="btn btn-outline">📝 阅读博客</a>
        </div>
      </section>

      {/* 最新图文 */}
      <section className="section" style={{ padding: '0 22px 80px', maxWidth: '980px', margin: '0 auto' }}>
        <div className="section-head">
          <h2>📸 图文分享</h2>
          <p>照片与文字，定格每一个值得记住的瞬间</p>
        </div>
        <div className="card-grid">
          {[
            { emoji: '🏔️', label: '图文', title: '山顶日落', date: '2024-01-20', desc: '登顶的那一刻，整个世界都在脚下' },
            { emoji: '☕', label: '图文', title: '晨间咖啡', date: '2024-01-15', desc: '一杯咖啡，一本书，一个安静的早晨' },
            { emoji: '🌸', label: '图文', title: '春日樱花', date: '2024-01-10', desc: '短暂的美丽，更值得珍藏' },
          ].map((m) => (
            <a key={m.title} href="/moments" className="picture-card">
              <div className="card-media-placeholder">{m.emoji}</div>
              <div className="card-body">
                <p className="card-label">{m.label}</p>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
                <p className="card-date">{m.date}</p>
              </div>
            </a>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <a href="/moments" className="btn-ghost">查看全部图文 →</a>
        </div>
      </section>

      {/* 图文 + 内容 交替区块 */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="content-media-grid">
            <div>
              <h2>🎥 Vlog 视频</h2>
              <p>用镜头捕捉生活的每一帧。从旅行探店到日常 vlog，这里是我用视频记录世界的方式。</p>
              <a href="/vlog" className="btn-ghost">探索 Vlog →</a>
            </div>
            <div className="media-block">
              <div className="media-placeholder">🎥</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-media-grid reverse">
            <div>
              <h2>📝 博客写作</h2>
              <p>文字是我思考的方式。旅行记录、技术心得、生活感悟，都在这里变成可以翻阅的故事。</p>
              <a href="/blog" className="btn-ghost">阅读博客 →</a>
            </div>
            <div className="media-block">
              <div className="media-placeholder">📝</div>
            </div>
          </div>
        </div>
      </section>

      {/* 最新博客 */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-head">
            <h2>🔥 最新文章</h2>
            <p>最近写的内容</p>
          </div>
          <div className="card-grid card-grid-2">
            {[
              { id: 'first-post', title: '第一篇博客：开始记录', date: '2024-01-20', desc: '欢迎来到我的博客！这是第一篇文章，以后会分享更多有趣的内容。', tag: '随笔' },
              { id: 'travel-note', title: '旅行日记：某地探秘', date: '2024-01-15', desc: '记录一次难忘的旅行经历，探索未知的风景。', tag: '旅行' },
            ].map((p) => (
              <a key={p.id} href={`/blog/${p.id}`} className="picture-card">
                <div className="card-media-placeholder">📝</div>
                <div className="card-body">
                  <p className="card-label">{p.tag}</p>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <p className="card-date">{p.date}</p>
                </div>
              </a>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <a href="/blog" className="btn-ghost">查看全部文章 →</a>
          </div>
        </div>
      </section>
    </>
  )
}
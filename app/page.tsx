export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>xoyo的地球副本</h1>
        <p>
          记录生活主线任务 & 支线副本通关日志<br />
          博客写作 · 视频记录 · 日常分享
        </p>
        <div className="hero .btn-group">
          <a href="/blog" className="btn btn-primary">📝 阅读博客</a>
          <a href="/vlog" className="btn btn-outline">🎥 观看 Vlog</a>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>🔥 最新文章</h2>
        <div className="grid grid-2">
          <a href="/blog/first-post" className="card blog-card">
            <h3>第一篇博客：开始记录</h3>
            <p className="date">2024-01-20</p>
            <p className="desc">欢迎来到我的博客！这是第一篇文章，以后会分享更多有趣的内容。</p>
            <span className="tag">随笔</span>
          </a>
          <a href="/blog/travel-note" className="card blog-card">
            <h3>旅行日记：某地探秘</h3>
            <p className="date">2024-01-15</p>
            <p className="desc">记录一次难忘的旅行经历，探索未知的风景。</p>
            <span className="tag">旅行</span>
          </a>
        </div>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <a href="/blog" className="btn btn-outline">查看全部文章 →</a>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>📸 最新图文</h2>
        <div className="grid grid-2">
          <a href="/moments" className="card blog-card">
            <h3>🏔️ 山顶日落</h3>
            <p className="date">2024-01-20</p>
            <p className="desc">登顶的那一刻，整个世界都在脚下</p>
            <span className="tag">图文</span>
          </a>
        </div>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <a href="/moments" className="btn btn-outline">查看全部图文 →</a>
        </div>
      </section>
    </>
  )
}
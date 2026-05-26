export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>🌍 xoyo的地球副本</h1>
        <p>
          记录生活主线任务 & 支线副本通关日志<br />
          博客写作 · 视频记录 · 日常分享
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/blog" className="btn btn-primary">📝 阅读博客</a>
          <a href="/vlog" className="btn btn-outline">🎥 观看 Vlog</a>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>🔥 最新文章</h2>
        <div className="grid grid-2">
          <a href="/blog/first-post" className="card blog-card">
            <h3>暂无文章</h3>
            <p className="date">点击开始写第一篇博客</p>
            <p className="desc">这里会显示你的最新文章，快去写下第一篇吧！</p>
            <span className="tag">置顶</span>
          </a>
        </div>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <a href="/blog" className="btn btn-outline">查看全部文章 →</a>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>🎥 最新 Vlog</h2>
        <div className="grid grid-2">
          <div className="card">
            <h3>暂无 Vlog</h3>
            <p>添加你的第一个视频吧！</p>
            <span className="tag">待更新</span>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <a href="/vlog" className="btn btn-outline">查看全部 Vlog →</a>
        </div>
      </section>
    </>
  )
}
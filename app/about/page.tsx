export default function About() {
  return (
    <div>
      <div className="page-header">
        <h1>👋 关于我</h1>
      </div>

      <div className="card">
        <h2>个人介绍</h2>
        <p>
          欢迎来到 xoyo.online！我是一名充满热情的创作者，喜欢通过博客和视频记录生活中的点点滴滴。
        </p>
        <p>
          这个网站是我的地球主线及支线副本任务记录 📝，记录那些值得收藏的瞬间和思考。
        </p>
      </div>

      <div className="card">
        <h2>🎯 我的兴趣</h2>
        <ul style={{ marginLeft: '2rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>💻 技术和编程</li>
          <li style={{ marginBottom: '0.5rem' }}>🎬 视频制作</li>
          <li style={{ marginBottom: '0.5rem' }}>📚 阅读和学习</li>
          <li style={{ marginBottom: '0.5rem' }}>🌍 旅游和探险</li>
          <li style={{ marginBottom: '0.5rem' }}>🎨 创意设计</li>
        </ul>
      </div>

      <div className="card">
        <h2>🔗 联系方式</h2>
        <ul style={{ marginLeft: '2rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            📧 邮箱：<a href="mailto:xueyu131420@126.com" style={{ color: '#667eea' }}>xueyu131420@126.com</a>
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            🐙 GitHub：<a href="https://github.com/xoyo-1022" target="_blank" rel="noopener noreferrer" style={{ color: '#667eea' }}>@xoyo-1022</a>
          </li>
        </ul>
      </div>

      <div className="card">
        <h2>🛠️ 网站技术</h2>
        <ul style={{ marginLeft: '2rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>框架:</strong> Next.js 14 + TypeScript</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>样式:</strong> 自定义 CSS（现代化暗色设计）</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>部署:</strong> GitHub Pages</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>源码:</strong> <a href="https://github.com/xoyo-1022/xoyo-online_earth_game" target="_blank" rel="noopener noreferrer" style={{ color: '#667eea' }}>GitHub 仓库</a></li>
        </ul>
      </div>
    </div>
  )
}
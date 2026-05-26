export default function About() {
  return (
    <div>
      <h1>👋 关于我</h1>

      <div className="card" style={{ marginTop: "2rem" }}>
        <h2>个人介绍</h2>
        <p>
          欢迎来到我的个人网站！我是一名充满热情的创意人，喜欢通过博客和视频与大家分享知识和生活经历。
        </p>
        <p style={{ marginTop: "1rem" }}>
          这个网站是我展示自己、记录学习过程、分享想法的平台。希望能通过这里的内容给你带来帮助或灵感。
        </p>
      </div>

      <div className="card">
        <h2>我的兴趣</h2>
        <ul style={{ marginLeft: "2rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>💻 技术和编程</li>
          <li style={{ marginBottom: "0.5rem" }}>🎬 视频制作</li>
          <li style={{ marginBottom: "0.5rem" }}>📚 阅读和学习</li>
          <li style={{ marginBottom: "0.5rem" }}>🌍 旅游和探险</li>
          <li style={{ marginBottom: "0.5rem" }}>🎨 创意设计</li>
        </ul>
      </div>

      <div className="card">
        <h2>网站信息</h2>
        <ul style={{ marginLeft: "2rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>技术栈:</strong> Next.js + TypeScript + GitHub Pages
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>部署:</strong> GitHub Pages (免费)
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>源代码:</strong>{" "}
            <a href="https://github.com/xoyo-1022/xoyo-online_earth_game" target="_blank" rel="noopener noreferrer">
              GitHub 仓库
            </a>
          </li>
        </ul>
      </div>

      <div className="card">
        <h2>联系方式</h2>
        <p>欢迎与我联系！</p>
        <ul style={{ marginLeft: "2rem", marginTop: "1rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>
            📧 邮箱:{" "}
            <a href="mailto:xueyu131420@126.com" style={{ color: "#667eea" }}>
              xueyu131420@126.com
            </a>
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            🐙 GitHub:{" "}
            <a href="https://github.com/xoyo-1022" target="_blank" rel="noopener noreferrer" style={{ color: "#667eea" }}>
              @xoyo-1022
            </a>
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            ▶️ YouTube:{" "}
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: "#667eea" }}>
              My Channel
            </a>
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            🎬 B站:{" "}
            <a href="https://www.bilibili.com" target="_blank" rel="noopener noreferrer" style={{ color: "#667eea" }}>
              My Channel
            </a>
          </li>
        </ul>
      </div>

      <div className="card">
        <h2>最后</h2>
        <p>
          感谢你访问我的网站！希望这里的内容能对你有所帮助。如果你有任何建议或想要进行合作，欢迎随时与我联系。
        </p>
        <p style={{ marginTop: "1rem", fontStyle: "italic" }}>
          "不断学习，不断分享，一起进步！" 🚀
        </p>
      </div>
    </div>
  );
}

import Link from 'next/link'
import NavBar from '../../NavBar'

export default function FirstPost() {
  return (
    <>
      <NavBar />
      <article className="article">
        <Link href="/blog" className="article-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 16, height: 16 }}>
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          返回博客
        </Link>

        <header className="article-header">
          <div className="article-meta">
            <span>2024-01-20</span>
            <span className="blog-tag">随笔</span>
          </div>
          <h1>第一篇博客：开始记录</h1>
          <p>欢迎来到我的博客！这是第一篇文章，以后会分享更多有趣的内容。</p>
        </header>

        <div className="article-content">
          <p>Hello World! 经过一番折腾，这个博客终于上线了。</p>

          <p>说实话，我一直在想要不要写博客。网上已经有那么多内容了，我还能贡献什么呢？但后来想明白了——记录不是为了别人，是为了自己。若干年后回头看，这些文字会是最好的时光机。</p>

          <h2>为什么叫"地球副本"</h2>

          <p>这个灵感来自于游戏。我们每个人都像是生活在这颗蓝色星球上的玩家，主线任务就是度过这一生，支线副本则是那些精彩的经历：旅行、创业、学习新技能...</p>

          <p>每一个副本都值得被记录，因为它们塑造了我们是谁。</p>

          <blockquote>「生活不是等待风暴过去，而是学会在雨中起舞。」</blockquote>

          <h2>这个博客会写什么</h2>

          <ul>
            <li><strong>旅行记录</strong> - 探索世界的所见所闻</li>
            <li><strong>技术心得</strong> - 踩坑记录和解决方案</li>
            <li><strong>生活感悟</strong> - 那些想要记住的瞬间</li>
            <li><strong>偶尔的Vlog</strong> - 用视频记录生活</li>
          </ul>

          <p>感谢你看到这里。希望在未来的某篇文章中，我们能再次相遇。</p>

          <p>继续探索吧，冒险者。🌟</p>
        </div>
      </article>

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
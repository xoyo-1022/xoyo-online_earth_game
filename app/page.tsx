import Link from 'next/link'
import NavBar from './NavBar'

const archiveModules = [
  {
    index: '01',
    href: '/moments',
    title: 'Moments',
    label: '图像信号',
    desc: '用照片、色彩和几句话，保存那些正在发生的小瞬间。',
  },
  {
    index: '02',
    href: '/vlog',
    title: 'Motion Logs',
    label: '移动影像',
    desc: '把旅途、探店和日常切成一段段有温度的生活镜头。',
  },
  {
    index: '03',
    href: '/blog',
    title: 'Field Notes',
    label: '文字日志',
    desc: '更长的思考、记录和复盘，像给未来自己的慢速信件。',
  },
]

const featuredRecords = [
  { type: 'Moment', title: '山顶日落', desc: '登顶的那一刻，云海像被金色颜料轻轻扫过。', meta: '2024-01-20' },
  { type: 'Vlog', title: '探索未知的小镇', desc: '一次说走就走的旅行，发现意想不到的风景。', meta: '12:34' },
  { type: 'Note', title: '关于记录这件事', desc: '为什么我们要记录生活？也许是为了让某些瞬间留下回声。', meta: '2024-01-05' },
]

const latestLogs = [
  ['2024-01-20', '第一篇博客：开始记录', '/blog/first-post'],
  ['2024-01-15', '旅行日记：某地探秘', '/blog/travel-note'],
  ['2024-01-10', '技术分享：如何搭建个人网站', '/blog/tech-sharing'],
]

export default function Home() {
  return (
    <>
      <NavBar />

      <main>
        <section className="lab-hero">
          <div className="lab-hero-copy animate-fade-in-up">
            <h1>
              <span>xoyo</span>
              <span>的地球副本</span>
            </h1>
            <p>
              把图像、文字、旅途和日常信号，保存成一个温暖的私人实验室。
            </p>
            <div className="hero-buttons">
              <Link href="/moments" className="btn btn-primary">进入档案</Link>
              <Link href="/blog" className="btn btn-secondary">阅读日志</Link>
            </div>
          </div>

          <div className="lab-desk animate-fade-in-up" style={{ animationDelay: '0.12s' }} aria-label="艺术档案桌面">
            <div className="desk-grid" />
            <div className="desk-art">
              <img src="/xoyo-online_earth_game/hero-bg.png" alt="xoyo abstract artwork" />
            </div>
            <div className="desk-note">
              <span>Earth Game</span>
              <strong>Archive 2024</strong>
              <p>moments / motion / notes</p>
            </div>
            <div className="desk-film">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="desk-orbit">
              <span>XO</span>
            </div>
          </div>
        </section>

        <section className="lab-section archive-system">
          <div className="lab-section-head">
            <h2>一个私人档案系统</h2>
            <p>像实验室一样整理生活，又保留艺术笔记的柔软和呼吸感。</p>
          </div>
          <div className="archive-grid">
            {archiveModules.map((item) => (
              <Link key={item.index} href={item.href} className="archive-panel">
                <span className="archive-index">{item.index}</span>
                <div>
                  <p>{item.label}</p>
                  <h3>{item.title}</h3>
                </div>
                <span className="archive-rule" />
                <p className="archive-desc">{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="lab-section featured-records">
          <div className="lab-section-head split">
            <h2>精选记录</h2>
            <p>最近被放进档案盒里的几段生活样本。</p>
          </div>
          <div className="record-board">
            {featuredRecords.map((record) => (
              <article key={record.title} className="record-card">
                <span>{record.type}</span>
                <h3>{record.title}</h3>
                <p>{record.desc}</p>
                <small>{record.meta}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="lab-stats" aria-label="archive stats">
          <div>
            <strong>03</strong>
            <span>archive rooms</span>
          </div>
          <div>
            <strong>10+</strong>
            <span>saved fragments</span>
          </div>
          <div>
            <strong>∞</strong>
            <span>earth-game runs</span>
          </div>
        </section>

        <section className="lab-section latest-lab">
          <div className="lab-section-head split">
            <h2>Latest Logs</h2>
            <p>最新的文字记录，保留给下一个安静的阅读时间。</p>
          </div>
          <div className="log-list">
            {latestLogs.map(([date, title, href]) => (
              <Link key={title} href={href} className="log-row">
                <span>{date}</span>
                <strong>{title}</strong>
                <em>Read</em>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p className="tagline">A warm archive for art, life, and tiny signals.</p>
        <p>© 2024 xoyo.online · 地球副本持续运行中</p>
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

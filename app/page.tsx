import Link from 'next/link'
import NavBar from './NavBar'

const labRooms = [
  {
    index: '01',
    href: '/moments',
    title: 'Moments',
    desc: '捕捉生活中的微光与灵感碎片。',
    action: '浏览瞬间',
    icon: 'sun',
  },
  {
    index: '02',
    href: '/vlog',
    title: 'Motion Logs',
    desc: '记录旅途影像与声音的流动轨迹。',
    action: '观看视频',
    icon: 'mountain',
  },
  {
    index: '03',
    href: '/blog',
    title: 'Field Notes',
    desc: '在地观察与思考，写给未来的自己。',
    action: '阅读笔记',
    icon: 'branch',
  },
]

const featured = [
  { title: '雨后，海边小镇', meta: '2024.05.12', image: 'linear-gradient(135deg, #708A8D, #D7C4A3)' },
  { title: '光影练习 #32', meta: '2024.04.28', image: 'linear-gradient(135deg, #2F2722, #C8B59B)' },
  { title: '从窗到北的慢行', meta: '2024.04.15', image: 'linear-gradient(135deg, #1F2528, #D98A55)' },
  { title: '春日田野记录', meta: '2024.04.03', image: 'linear-gradient(135deg, #6D7B66, #B65E3F)' },
]

const latest = [
  ['关于「慢」的一些练习', '慢下来，才看得见时间的纹理。', '2024.05.08'],
  ['京都街头的薄雾', '在安静的巷子里，遇见温柔的光。', '2024.04.27'],
  ['实验室周记 · 04', '一些新想法和未完成的实验。', '2024.04.19'],
  ['海岸线上的风', '风很大，适合发呆。', '2024.04.06'],
]

function RoomIcon({ type }: { type: string }) {
  if (type === 'mountain') {
    return (
      <svg viewBox="0 0 96 72" aria-hidden="true">
        <path d="M8 62h80M19 58 43 18l17 28 8-12 17 24" />
        <path d="m43 18 3 22 14 6M68 34l-4 18" />
      </svg>
    )
  }

  if (type === 'branch') {
    return (
      <svg viewBox="0 0 72 88" aria-hidden="true">
        <path d="M37 78V17M37 56c-12-8-19-17-20-28M38 45c13-7 20-16 22-29M37 31c-7-3-12-8-15-15M39 65c10-3 17-9 21-19" />
        <path d="M16 28c8 0 14 4 18 12M60 16c-9 0-16 5-21 15M22 16c7 0 12 4 15 10M60 46c-8-1-15 2-21 10" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 88 88" aria-hidden="true">
      <circle cx="44" cy="44" r="13" />
      <path d="M44 6v15M44 67v15M6 44h15M67 44h15M17 17l11 11M60 60l11 11M71 17 60 28M28 60 17 71" />
      <circle cx="44" cy="44" r="24" />
    </svg>
  )
}

export default function Home() {
  return (
    <>
      <NavBar />

      <main className="lab-page">
        <section className="concept-hero">
          <div className="hero-copy" data-reveal>
            <h1><span>xoyo</span> 的地球副本</h1>
            <p>把图像、文字、旅途和日常信号，保存成一个温暖的私人实验室。</p>
            <div className="hero-actions">
              <Link href="/moments" className="lab-button primary">进入档案</Link>
              <Link href="/blog" className="lab-button secondary">阅读日志</Link>
            </div>
          </div>
          <div className="hero-scene" data-reveal>
            <img src="/xoyo-online_earth_game/lab-hero-desk.png" alt="Warm archive lab desk" />
          </div>
          <div className="hero-coordinates" aria-hidden="true">
            <span>22.3193° N</span>
            <span>114.1694° E</span>
          </div>
        </section>

        <section className="room-strip" aria-label="Archive rooms">
          {labRooms.map((room) => (
            <Link href={room.href} className="room-card motion-surface" key={room.index} data-reveal>
              <div>
                <span>{room.index}</span>
                <h2>{room.title}</h2>
                <p>{room.desc}</p>
                <strong>{room.action}</strong>
              </div>
              <RoomIcon type={room.icon} />
            </Link>
          ))}
        </section>

        <section className="lab-dashboard">
          <div className="featured-panel" data-reveal>
            <div className="panel-title">
              <h2>精选档案</h2>
              <Link href="/moments">查看全部</Link>
            </div>
            <div className="featured-grid">
              {featured.map((item, index) => (
                <Link href="/moments" className="featured-item motion-surface" key={item.title}>
                  <span className="feature-image" style={{ background: item.image }}>
                    {index === 2 && <em />}
                  </span>
                  <strong>{item.title}</strong>
                  <small>{item.meta}</small>
                </Link>
              ))}
            </div>
          </div>

          <aside className="stats-panel" data-reveal>
            <div>
              <span>356</span>
              <p>Moments</p>
            </div>
            <div>
              <span>48</span>
              <p>Motion Logs</p>
            </div>
            <div>
              <span>128</span>
              <p>Field Notes</p>
            </div>
            <div>
              <span>19</span>
              <p>Countries</p>
            </div>
            <strong>Keep curiosity. Stay playful.</strong>
          </aside>

          <div className="latest-panel" data-reveal>
            <div className="panel-title">
              <h2>最新日志</h2>
              <Link href="/blog">查看全部</Link>
            </div>
            <div className="latest-list">
              {latest.map(([title, desc, date]) => (
                <Link href="/blog" className="latest-row motion-surface" key={title}>
                  <span />
                  <div>
                    <strong>{title}</strong>
                    <p>{desc}</p>
                  </div>
                  <small>{date}</small>
                </Link>
              ))}
            </div>
            <Link href="/blog" className="read-more">阅读更多日志</Link>
          </div>
        </section>
      </main>

      <footer className="concept-footer">
        <p>© 2024 xoyo.online · Earth Game Lab</p>
        <p>Made with curiosity</p>
      </footer>
    </>
  )
}

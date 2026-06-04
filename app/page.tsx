import Link from 'next/link'
import NavBar from './NavBar'

const channels = [
  {
    number: '01',
    href: '/vlog',
    title: 'Vlog',
    cn: '流动的时间',
    description: '用影像和声音，保存旅途、日常与那些无法复述的空气。',
    action: '观看最新影像',
  },
  {
    number: '02',
    href: '/blog',
    title: 'Blog',
    cn: '思考的页边注',
    description: '写下观察、经验和还没有想明白的问题，留给未来的自己。',
    action: '阅读最近文章',
  },
  {
    number: '03',
    href: '/moments',
    title: 'Moments',
    cn: '日常的切片',
    description: '照片与短句并行，收藏生活里不必成为大事的微光。',
    action: '浏览图文片段',
  },
]

const updates = [
  ['Blog', '关于「慢」的一些练习', '慢下来以后，时间才显出它原来的纹理。', '2024.05.08'],
  ['Moments', '京都街头的薄雾', '在安静的巷子里，遇见温柔的光。', '2024.04.27'],
  ['Vlog', '海岸线上的风', '一段没有旁白的海边散步。', '2024.04.06'],
]

function Arrow() {
  return (
    <svg viewBox="0 0 32 16" aria-hidden="true">
      <path d="M1 8h27M21 1l7 7-7 7" />
    </svg>
  )
}

export default function Home() {
  return (
    <>
      <NavBar />

      <main className="editorial-home">
        <section className="editorial-hero">
          <div className="editorial-hero-copy hero-reveal-copy">
            <h1><em>xoyo</em> 的地球副本</h1>
            <p>记录生活主线任务，也收藏支线里的微光。</p>
            <Link href="/vlog" className="editorial-link">
              开始浏览 <Arrow />
            </Link>
          </div>

          <div className="editorial-hero-image hero-reveal-image" data-scroll-motion data-scroll-speed="0.045">
            <img src="/xoyo-online_earth_game/lab-hero-desk.png" alt="装满影像、文字和旅行记忆的个人书桌" data-parallax-image />
            <span>Earth Game Archive</span>
          </div>

          <p className="editorial-hero-note hero-reveal-note">A personal archive of moving images, field notes and ordinary light.</p>
        </section>

        <section className="editorial-intro" data-reveal data-scroll-motion data-scroll-speed="0.04">
          <p>我相信记录不是为了证明生活发生过，</p>
          <h2>而是为了在很久以后，<em>仍然能认出当时的自己。</em></h2>
        </section>

        <section className="channel-index" aria-label="内容频道">
          {channels.map((channel) => (
            <Link href={channel.href} className="channel-row" key={channel.title} data-reveal>
              <span className="channel-number">{channel.number}</span>
              <div className="channel-title">
                <h2>{channel.title}</h2>
                <p>{channel.cn}</p>
              </div>
              <p className="channel-description">{channel.description}</p>
              <strong>{channel.action}<Arrow /></strong>
            </Link>
          ))}
        </section>

        <section className="featured-story">
          <div className="featured-story-image" data-reveal data-scroll-motion data-scroll-speed="0.08">
            <img src="/xoyo-online_earth_game/lab-hero-desk.png" alt="旅行影像与手写笔记" data-parallax-image />
            <span>Latest film · 12:34</span>
          </div>
          <div className="featured-story-copy" data-reveal data-scroll-motion data-scroll-speed="-0.025">
            <span>Vlog / 2024.05</span>
            <h2>风经过海岸线，也经过镜头之外的我</h2>
            <p>没有特别的目的地，只是沿着海边慢慢走。潮声、树影和远处的船，组成了这一段没有旁白的日记。</p>
            <Link href="/vlog" className="editorial-link">
              观看最新影像 <Arrow />
            </Link>
          </div>
        </section>

        <section className="mixed-feature">
          <div className="mixed-feature-heading" data-reveal>
            <span>Selected notes</span>
            <h2>文字负责靠近，<br />照片负责停留。</h2>
          </div>
          <Link href="/blog/life-reflection" className="feature-note" data-reveal>
            <span>Blog</span>
            <h3>关于记录这件事</h3>
            <p>为什么我们总想留下什么？也许不是害怕忘记，而是想在时间里拥有一条返回自己的路。</p>
            <strong>阅读全文 <Arrow /></strong>
          </Link>
          <Link href="/moments" className="feature-moment" data-reveal data-scroll-motion data-scroll-speed="0.05">
            <img src="/xoyo-online_earth_game/lab-hero-desk.png" alt="暖光下的旅行照片与笔记" data-parallax-image />
            <div>
              <span>Moments</span>
              <h3>黄昏落在书桌上</h3>
              <p>光停留了十分钟，足够成为一天的注脚。</p>
            </div>
          </Link>
        </section>

        <section className="latest-updates">
          <div className="latest-heading" data-reveal>
            <h2>Latest updates</h2>
            <p>最近留下的影像、文字和片段。</p>
          </div>
          <div className="latest-update-list">
            {updates.map(([type, title, description, date]) => (
              <Link href={type === 'Blog' ? '/blog' : type === 'Vlog' ? '/vlog' : '/moments'} className="latest-update-row" key={title} data-reveal>
                <span>{type}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <time>{date}</time>
                <Arrow />
              </Link>
            ))}
          </div>
        </section>

        <section className="editorial-closing" data-reveal data-scroll-motion data-scroll-speed="0.035">
          <p>Keep curiosity. Stay playful.</p>
          <h2>愿每一次记录，<br />都让生活重新变得具体。</h2>
          <Link href="/moments" className="editorial-link light">
            浏览图文片段 <Arrow />
          </Link>
        </section>
      </main>

      <footer className="editorial-footer">
        <p>© 2024 xoyo.online</p>
        <p>Vlog · Blog · Moments</p>
      </footer>
    </>
  )
}

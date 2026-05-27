import Link from 'next/link'
import NavBar from '../NavBar'

export default function Moments() {
  return (
    <>
      <NavBar />
      <div className="page-header">
        <h1>📸 图文分享</h1>
        <p>照片与文字，定格每一个值得记住的瞬间</p>
      </div>

      <div className="masonry">
        {[
          { emoji: '🏔️', bg: 'linear-gradient(145deg, #E8D8C8, #D4C4B0)', title: '山顶日落', date: '2024-01-20', desc: '登顶的那一刻，整个世界都在脚下。呼吸着稀薄的空气，看夕阳把云海染成金红色。' },
          { emoji: '☕', bg: 'linear-gradient(145deg, #E8D0D8, #D4BCC4)', title: '晨间咖啡', date: '2024-01-15', desc: '一杯咖啡，一本书，一个安静的早晨。阳光透过窗帘洒进来，这就是生活的小确幸。' },
          { emoji: '🌸', bg: 'linear-gradient(145deg, #F0E4DC, #E4D4C8)', title: '春日樱花', date: '2024-01-10', desc: '短暂的美丽，更值得珍藏。樱花树下的人来人往，而我只想记住这一刻。' },
          { emoji: '🌊', bg: 'linear-gradient(145deg, #D8E4E0, #C8D4D0)', title: '海边日落', date: '2024-01-05', desc: '潮水退去，留下贝壳和海藻。海风带着盐的味道，看太阳一点点沉入地平线。' },
          { emoji: '🍂', bg: 'linear-gradient(145deg, #ECE4D8, #DCD4C8)', title: '秋日漫游', date: '2024-01-02', desc: '踩着厚厚的落叶，聆听它们碎裂的声音。秋天的阳光温暖而不刺眼。' },
          { emoji: '🎨', bg: 'linear-gradient(145deg, #E8DCE8, #D8CCDC)', title: '城市灯光', date: '2023-12-28', desc: '夜色中的城市像一幅流动的画，车灯拖出光的轨迹，霓虹闪烁不停。' },
        ].map((m, i) => (
          <div key={i} className="moment-card">
            <div className="moment-img" style={{ background: m.bg }}>{m.emoji}</div>
            <div className="moment-content">
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
              <p className="moment-date">{m.date}</p>
            </div>
          </div>
        ))}
      </div>

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
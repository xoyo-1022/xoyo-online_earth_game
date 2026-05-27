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
          { emoji: '🏔️', bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', title: '山顶日落', date: '2024-01-20', desc: '登顶的那一刻，整个世界都在脚下。呼吸着稀薄的空气，看夕阳把云海染成金红色。' },
          { emoji: '☕', bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', title: '晨间咖啡', date: '2024-01-15', desc: '一杯咖啡，一本书，一个安静的早晨。阳光透过窗帘洒进来，这就是生活的小确幸。' },
          { emoji: '🌸', bg: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', title: '春日樱花', date: '2024-01-10', desc: '短暂的美丽，更值得珍藏。樱花树下的人来人往，而我只想记住这一刻。' },
          { emoji: '🌊', bg: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', title: '海边日落', date: '2024-01-05', desc: '潮水退去，留下贝壳和海藻。海风带着盐的味道，看太阳一点点沉入地平线。' },
          { emoji: '🍂', bg: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', title: '秋日漫游', date: '2024-01-02', desc: '踩着厚厚的落叶，聆听它们碎裂的声音。秋天的阳光温暖而不刺眼。' },
          { emoji: '🎨', bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', title: '城市灯光', date: '2023-12-28', desc: '夜色中的城市像一幅流动的画，车灯拖出光的轨迹，霓虹闪烁不停。' },
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
        <p>用热爱书写属于自己的故事</p>
        <p style={{ fontSize: '0.85rem', marginTop: 8 }}>© 2024 xoyo.online · 记录生活</p>
        <div className="social-links">
          <a href="https://github.com/xoyo-1022" target="_blank" rel="noopener">🐙</a>
          <a href="mailto:your@email.com">📧</a>
        </div>
      </footer>
    </>
  )
}
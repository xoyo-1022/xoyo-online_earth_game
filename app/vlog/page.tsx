import Link from 'next/link'
import NavBar from '../NavBar'

export default function Vlog() {
  return (
    <>
      <NavBar />
      <div className="page-header">
        <h1>🎥 Vlog 视频</h1>
        <p>用镜头捕捉生活的每一帧，从旅行探店到日常 vlog</p>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem 4rem' }}>
        <div className="vlog-grid">
          {[
            { emoji: '🎬', bg: 'linear-gradient(135deg, #1a1a2e, #16213e)', title: '旅行Vlog | 探索未知的小镇', desc: '一次说走就走的旅行，发现意想不到的风景', duration: '12:34' },
            { emoji: '🌴', bg: 'linear-gradient(135deg, #2d132c, #801336)', title: '探店Vlog | 隐藏在巷子里的咖啡馆', desc: '发现一家超级有氛围的小店，推荐给大家', duration: '08:45' },
            { emoji: '☕', bg: 'linear-gradient(135deg, #0f3460, #e94560)', title: '日常Vlog | 我的早晨routine', desc: '记录一个平凡又美好的早晨时光', duration: '15:20' },
            { emoji: '🏔️', bg: 'linear-gradient(135deg, #11998e, #38ef7d)', title: '徒步Vlog | 登山的全过程记录', desc: '用镜头记录挑战自我的过程', duration: '18:55' },
            { emoji: '🍜', bg: 'linear-gradient(135deg, #fc4a1a, #f7b733)', title: '美食Vlog | 探访当地特色小吃', desc: '跟着我一起品尝地道美食', duration: '10:12' },
            { emoji: '🎭', bg: 'linear-gradient(135deg, #3a1c71, #d76d77)', title: '城市漫步Vlog | 夜色中的都市', desc: '用脚步丈量城市，用镜头记录夜晚', duration: '22:08' },
          ].map((v, i) => (
            <div key={i} className="vlog-card">
              <div className="vlog-thumb" style={{ background: v.bg }}>{v.emoji}</div>
              <div className="vlog-play">▶</div>
              <span style={{ position:'absolute', top:12, right:12, padding:'0.35rem 0.75rem', background:'rgba(0,0,0,0.7)', borderRadius:6, fontSize:'0.8rem' }}>{v.duration}</span>
              <div className="vlog-info">
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
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
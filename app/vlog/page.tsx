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
        <div className="vlog-grid stagger-children">
          {[
            { emoji: '🎬', bg: 'linear-gradient(145deg, #E4DCF0, #D4CCEC)', title: '旅行Vlog | 探索未知的小镇', desc: '一次说走就走的旅行，发现意想不到的风景', duration: '12:34' },
            { emoji: '🌴', bg: 'linear-gradient(145deg, #D8E8D4, #C8DCC4)', title: '探店Vlog | 隐藏在巷子里的咖啡馆', desc: '发现一家超级有氛围的小店，推荐给大家', duration: '08:45' },
            { emoji: '☕', bg: 'linear-gradient(145deg, #D4D8E4, #C4CCDC)', title: '日常Vlog | 我的早晨routine', desc: '记录一个平凡又美好的早晨时光', duration: '15:20' },
            { emoji: '🏔️', bg: 'linear-gradient(145deg, #D4E8E0, #C4DCD0)', title: '徒步Vlog | 登山的全过程记录', desc: '用镜头记录挑战自我的过程', duration: '18:55' },
            { emoji: '🍜', bg: 'linear-gradient(145deg, #ECE4D4, #DCDCC4)', title: '美食Vlog | 探访当地特色小吃', desc: '跟着我一起品尝地道美食', duration: '10:12' },
            { emoji: '🎭', bg: 'linear-gradient(145deg, #E8E4DC, #DCDCC8)', title: '城市漫步Vlog | 夜色中的都市', desc: '用脚步丈量城市，用镜头记录夜晚', duration: '22:08' },
          ].map((v, i) => (
            <div key={i} className="vlog-card">
              <div className="vlog-thumb" style={{ background: v.bg }}>{v.emoji}</div>
              <div className="vlog-play">
                <svg viewBox="0 0 24 24" style={{ width: 20, height: 20 }}>
                  <polygon points="5 3 19 12 5 21 5 3" fill="#C9956A" />
                </svg>
              </div>
              <span style={{ position: 'absolute', top: 12, right: 12, padding: '0.3rem 0.75rem', background: 'rgba(61,53,49,0.7)', borderRadius: 6, fontSize: '0.8rem', color: 'white' }}>
                {v.duration}
              </span>
              <div className="vlog-info">
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
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
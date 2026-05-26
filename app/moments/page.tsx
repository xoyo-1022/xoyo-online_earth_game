'use client'

const moments = [
  {
    id: 'm1',
    emoji: '🏔️',
    title: '山顶日落',
    date: '2024-01-20',
    desc: '登顶的那一刻，整个世界都在脚下',
  },
  {
    id: 'm2',
    emoji: '☕',
    title: '晨间咖啡',
    date: '2024-01-15',
    desc: '一杯咖啡，一本书，一个安静的早晨',
  },
  {
    id: 'm3',
    emoji: '🌸',
    title: '春日樱花',
    date: '2024-01-10',
    desc: '短暂的美丽，更值得珍藏',
  },
]

export default function MomentsPage() {
  return (
    <div>
      <div className="page-header">
        <h1>📸 图文分享</h1>
        <p>用照片和文字，定格每一个值得记住的瞬间</p>
      </div>

      <div className="grid grid-2">
        {moments.map((m) => (
          <div key={m.id} className="card moment-card">
            <div className="moment-placeholder">{m.emoji}</div>
            <h3>{m.title}</h3>
            <p className="moment-date">{m.date}</p>
            <p className="desc">{m.desc}</p>
            <span className="tag">图文</span>
          </div>
        ))}

        <div className="card moment-card" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '240px',
          background: 'rgba(0, 113, 227, 0.04)',
          border: '1.5px dashed rgba(0, 113, 227, 0.2)',
          cursor: 'pointer',
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>➕</div>
          <p style={{ margin: 0, color: 'var(--primary)', fontWeight: 500 }}>添加新图文</p>
        </div>
      </div>

      <div className="card" style={{ marginTop: '1.5rem', background: 'rgba(0, 113, 227, 0.04)', borderColor: 'rgba(0, 113, 227, 0.2)' }}>
        <h3>📌 如何添加图文</h3>
        <p>告诉我想分享的内容，我来帮你生成卡片！支持：</p>
        <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
          <li>文字描述 + emoji 装饰</li>
          <li>上传图片（通过飞书发给我）</li>
        </ul>
      </div>
    </div>
  )
}
'use client'

const moments = [
  { id: 'm1', emoji: '🏔️', label: '图文', title: '山顶日落', date: '2024-01-20', desc: '登顶的那一刻，整个世界都在脚下' },
  { id: 'm2', emoji: '☕', label: '图文', title: '晨间咖啡', date: '2024-01-15', desc: '一杯咖啡，一本书，一个安静的早晨' },
  { id: 'm3', emoji: '🌸', label: '图文', title: '春日樱花', date: '2024-01-10', desc: '短暂的美丽，更值得珍藏' },
  { id: 'm4', emoji: '🌊', label: '图文', title: '海边日落', date: '2024-01-05', desc: '海风、浪潮和橘色的天空' },
  { id: 'm5', emoji: '🎭', label: '图文', title: '舞台灯光', date: '2023-12-28', desc: '聚光灯下的那一刻' },
  { id: 'm6', emoji: '🍜', label: '图文', title: '街头美食', date: '2023-12-20', desc: '发现一家藏在巷子里的宝藏小店' },
]

export default function MomentsPage() {
  return (
    <div>
      <div className="page-header">
        <h1>📸 图文分享</h1>
        <p>用照片和文字，定格每一个值得记住的瞬间</p>
      </div>

      <div className="card-grid" style={{ paddingBottom: '80px' }}>
        {moments.map((m) => (
          <a key={m.id} href="#" className="picture-card">
            <div className="card-media-placeholder">{m.emoji}</div>
            <div className="card-body">
              <p className="card-label">{m.label}</p>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
              <p className="card-date">{m.date}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
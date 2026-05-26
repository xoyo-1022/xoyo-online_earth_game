'use client'

// Vlog 视频数据
// 添加新视频：填入 youtubeId 或 biliId
const vlogs = [
  {
    id: 'sample-vlog',
    title: 'Sample Vlog',
    description: '示例视频，替换成你的第一个 Vlog 吧！',
    youtubeId: '',
    biliId: '',
    date: '2024-01-20',
    tags: ['日常'],
  },
]

function VideoEmbed({ vlog }: { vlog: typeof vlogs[0] }) {
  if (vlog.youtubeId) {
    return (
      <div className="video-card">
        <iframe
          src={`https://www.youtube.com/embed/${vlog.youtubeId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={vlog.title}
        />
      </div>
    )
  }
  if (vlog.biliId) {
    return (
      <div className="video-card">
        <iframe
          src={`https://player.bilibili.com/player.html?bvid=${vlog.biliId}&page=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={vlog.title}
        />
      </div>
    )
  }
  return (
    <div className="video-card" style={{ background: 'var(--bg-card-hover)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ color: 'var(--text-secondary)' }}>暂无视频</span>
    </div>
  )
}

export default function VlogPage() {
  return (
    <div>
      <div className="page-header">
        <h1>🎥 Vlog</h1>
        <p>用镜头记录生活，定格每一个值得纪念的瞬间</p>
      </div>

      <div className="grid grid-2">
        {vlogs.map((vlog) => (
          <div key={vlog.id} className="card">
            <VideoEmbed vlog={vlog} />
            <div style={{ marginTop: '1rem' }}>
              <h3>{vlog.title}</h3>
              <p className="date">{vlog.date}</p>
              <p className="desc">{vlog.description}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {vlog.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginTop: '2rem', background: 'rgba(102,126,234,0.08)', borderColor: 'rgba(102,126,234,0.3)' }}>
        <h3>📌 如何添加 Vlog</h3>
        <p>编辑 <code>app/vlog/page.tsx</code> 中的 vlogs 数组：</p>
        <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
          <li><strong>YouTube:</strong> 填入 youtubeId（链接中 v= 后面的部分）</li>
          <li><strong>B站:</strong> 填入 biliId（BV 开头的 ID）</li>
        </ul>
        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
          告诉我视频链接，我帮你处理！
        </p>
      </div>
    </div>
  )
}
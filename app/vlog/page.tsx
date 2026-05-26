'use client'

const vlogs = [
  {
    id: 'v1',
    title: 'Sample Vlog',
    desc: '示例视频，替换成你的第一个 Vlog 吧！',
    youtubeId: '',
    biliId: '',
    date: '2024-01-20',
  },
]

function VideoEmbed({ vlog }: { vlog: typeof vlogs[0] }) {
  if (vlog.youtubeId) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${vlog.youtubeId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={vlog.title}
        style={{ width: '100%', aspectRatio: '16/9', border: 'none', borderRadius: 'var(--radius)' }}
      />
    )
  }
  if (vlog.biliId) {
    return (
      <iframe
        src={`https://player.bilibili.com/player.html?bvid=${vlog.biliId}&page=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={vlog.title}
        style={{ width: '100%', aspectRatio: '16/9', border: 'none', borderRadius: 'var(--radius)' }}
      />
    )
  }
  return (
    <div style={{
      width: '100%',
      aspectRatio: '16/9',
      background: 'linear-gradient(135deg, #f0f0f5 0%, #e8e8ed 100%)',
      borderRadius: 'var(--radius)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '3rem',
    }}>
      ▶️
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

      <div style={{ padding: '0 0 80px' }}>
        {vlogs.map((vlog) => (
          <div key={vlog.id} style={{ marginBottom: '60px' }}>
            <VideoEmbed vlog={vlog} />
            <div style={{ marginTop: '20px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '6px' }}>{vlog.title}</h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>{vlog.date}</p>
              <p style={{ color: 'var(--text-secondary)' }}>{vlog.desc}</p>
            </div>
          </div>
        ))}

        <div style={{
          border: '1.5px dashed var(--border)',
          borderRadius: 'var(--radius)',
          padding: '48px',
          textAlign: 'center',
          color: 'var(--text-secondary)',
        }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '8px' }}>🎬 还没有 Vlog</p>
          <p style={{ fontSize: '0.9rem' }}>发给我视频链接，我来帮你嵌入</p>
        </div>
      </div>
    </div>
  )
}
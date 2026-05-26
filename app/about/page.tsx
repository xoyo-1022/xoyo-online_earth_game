export default function About() {
  return (
    <div>
      <div className="page-header">
        <h1>👋 关于我</h1>
      </div>

      <div style={{ maxWidth: '680px', padding: '0 0 100px' }}>
        <div style={{
          width: '100%',
          aspectRatio: '16/6',
          background: 'linear-gradient(135deg, #f0f0f5 0%, #e0e0e8 100%)',
          borderRadius: 'var(--radius)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '4rem',
          marginBottom: '48px',
        }}>
          🌍
        </div>

        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '16px' }}>你好</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            欢迎来到 xoyo.online！这里是 xoyo 的地球主线及支线副本任务记录 📝。
            记录那些值得收藏的瞬间、旅途中的风景、以及生活中的思考。
          </p>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '16px' }}>🎯 我在做什么</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['💻 技术和编程', '🎬 视频制作', '📚 阅读和学习', '🌍 旅游和探险', '🎨 创意设计'].map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>{item.split(' ')[0]}</span>
                <span>{item.split(' ').slice(1).join(' ')}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '16px' }}>🔗 联系我</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { icon: '📧', label: '邮箱', value: 'xueyu131420@126.com', href: 'mailto:xueyu131420@126.com' },
              { icon: '🐙', label: 'GitHub', value: '@xoyo-1022', href: 'https://github.com/xoyo-1022' },
            ].map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 20px',
                background: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-sm)',
                textDecoration: 'none',
                color: 'var(--text)',
                transition: 'background 0.2s',
              }}>
                <span style={{ fontSize: '1.3rem' }}>{item.icon}</span>
                <div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '2px' }}>{item.label}</p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--accent)' }}>{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'xoyo的地球副本 | 个人博客 & Vlog',
  description: 'xoyo的地球主线及支线副本任务记录',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <nav className="navbar">
          <div className="navbar-inner">
            <a href="/" className="logo">🌍 xoyo.online</a>
            <ul className="nav-links">
              <li><a href="/">首页</a></li>
              <li><a href="/blog">博客</a></li>
              <li><a href="/vlog">Vlog</a></li>
              <li><a href="/about">关于</a></li>
            </ul>
          </div>
        </nav>

        <main className="container">
          {children}
        </main>

        <footer className="footer">
          <p>© 2024 xoyo.online · 用热爱记录生活 🌟</p>
        </footer>
      </body>
    </html>
  )
}
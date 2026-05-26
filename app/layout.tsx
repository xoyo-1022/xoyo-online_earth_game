import './globals.css'
import type { Metadata } from 'next'
import NavBar from './NavBar'

export const metadata: Metadata = {
  title: 'xoyo的地球副本 | 个人博客 & Vlog',
  description: 'xoyo的地球主线及支线副本任务记录',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <NavBar />
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
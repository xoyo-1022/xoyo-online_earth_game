import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'xoyo的地球副本 | 个人博客 & Vlog',
  description: '记录生活主线任务 & 支线副本通关日志，用热爱书写属于自己的故事',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="aurora-bg">
          <div className="aurora-layer"></div>
        </div>
        {children}
      </body>
    </html>
  )
}
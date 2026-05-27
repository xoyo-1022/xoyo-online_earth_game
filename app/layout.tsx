import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'xoyo的地球副本 | Art & Life',
  description: '记录生活主线任务 & 支线副本通关日志，用热爱书写属于自己的故事',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* Page transition - smooth zoom circle */}
        <div id="page-transition" className="page-transition">
          <div className="wipe-circle" />
        </div>
        {/* Dynamic animated background */}
        <div className="dynamic-bg">
          <div className="bg-layer-3" />
        </div>
        {children}
      </body>
    </html>
  )
}
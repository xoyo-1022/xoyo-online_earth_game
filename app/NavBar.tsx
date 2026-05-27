'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function NavBar() {
  useEffect(() => {
    // Page transition: intercept all link clicks
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest('a[href]') as HTMLAnchorElement | null
      if (!link) return
      if (link.target === '_blank') return
      if (link.href.startsWith('#')) return
      if (link.href.startsWith('mailto')) return
      if (link.href.startsWith('http')) return
      e.preventDefault()
      const el = document.getElementById('page-transition')
      if (el) {
        el.classList.add('active')
        setTimeout(() => { window.location.href = link.href }, 480)
      } else {
        window.location.href = link.href
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <nav>
      <Link href="/" className="logo">xoyo<span>.online</span></Link>
      <button className="menu-toggle" onClick={() => document.querySelector('.nav-links')?.classList.toggle('active')}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 22, height: 22 }}>
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>
      <ul className="nav-links">
        <li><Link href="/moments">📸 图文</Link></li>
        <li><Link href="/vlog">🎥 Vlog</Link></li>
        <li><Link href="/blog">📝 博客</Link></li>
      </ul>
    </nav>
  )
}
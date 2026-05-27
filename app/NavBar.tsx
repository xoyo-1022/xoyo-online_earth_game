'use client'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav>
      <Link href="/" className="logo">xoyo.online</Link>
      <button className="menu-toggle" onClick={() => document.querySelector('.nav-links')?.classList.toggle('active')}>☰</button>
      <ul className="nav-links">
        <li><Link href="/moments">图文</Link></li>
        <li><Link href="/vlog">Vlog</Link></li>
        <li><Link href="/blog">博客</Link></li>
      </ul>
    </nav>
  )
}
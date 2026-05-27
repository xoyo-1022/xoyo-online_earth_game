'use client'

import Link from 'next/link'

const NavIcon = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
    <path d={d} />
  </svg>
)

export default function NavBar() {
  return (
    <nav>
      <Link href="/" className="logo">
        xoyo<span>.online</span>
      </Link>
      <button className="menu-toggle" onClick={() => document.querySelector('.nav-links')?.classList.toggle('active')}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 22, height: 22 }}>
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>
      <ul className="nav-links">
        <li>
          <Link href="/moments">
            <NavIcon d="M4 16l3-3-1.5-1.5L8 14m8-8l-3 3L17 7M10 6l4 4-4 4-4-4z" />
            图文
          </Link>
        </li>
        <li>
          <Link href="/vlog">
            <NavIcon d="M15 10l4.5-2.5v9L15 14v-4zM5.5 5.5l13 7-13 7V5.5z" />
            Vlog
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <NavIcon d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
            博客
          </Link>
        </li>
      </ul>
    </nav>
  )
}
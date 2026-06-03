'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/moments', label: 'Moments' },
  { href: '/vlog', label: 'Vlog' },
  { href: '/blog', label: 'Blog' },
]

export default function NavBar() {
  const pathname = usePathname()

  return (
    <nav>
      <Link href="/" className="logo" aria-label="回到首页">
        xoyo<span>.online</span>
      </Link>
      <button
        className="menu-toggle"
        aria-label="打开导航菜单"
        onClick={() => document.querySelector('.nav-links')?.classList.toggle('active')}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 22, height: 22 }}>
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>
      <ul className="nav-links">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
          return (
            <li key={item.href}>
              <Link href={item.href} className={isActive ? 'active' : undefined}>
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: '首页' },
  { href: '/blog', label: '博客' },
  { href: '/vlog', label: 'Vlog' },
  { href: '/moments', label: '图文' },
  { href: '/about', label: '关于' },
]

export default function NavBar() {
  const pathname = usePathname()

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="logo">xoyo.online</Link>
        <ul className="nav-links">
          {navItems.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
            return (
              <li key={item.href}>
                <Link href={item.href} className={isActive ? 'active' : ''}>
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const TRANSITION_MS = 620

export default function RouteTransition({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isEntering, setIsEntering] = useState(true)
  const navigationTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const transition = document.getElementById('page-transition')
    transition?.classList.remove('active')
    transition?.classList.add('settle')

    setIsEntering(true)
    const settleTimer = setTimeout(() => {
      transition?.classList.remove('settle')
      setIsEntering(false)
    }, 560)

    return () => clearTimeout(settleTimer)
  }, [pathname])

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const target = event.target as Element | null
      const link = target?.closest('a[href]') as HTMLAnchorElement | null
      if (!link) return
      if (link.target && link.target !== '_self') return
      if (link.hasAttribute('download')) return

      const destination = new URL(link.href, window.location.href)
      const current = new URL(window.location.href)

      if (destination.origin !== current.origin) return
      if (destination.pathname === current.pathname && destination.search === current.search) return

      event.preventDefault()

      const transition = document.getElementById('page-transition')
      const rect = link.getBoundingClientRect()
      const originX = rect.left + rect.width / 2
      const originY = rect.top + rect.height / 2

      transition?.style.setProperty('--wipe-x', `${originX}px`)
      transition?.style.setProperty('--wipe-y', `${originY}px`)
      transition?.classList.remove('settle')
      transition?.classList.add('active')

      if (navigationTimer.current) clearTimeout(navigationTimer.current)
      navigationTimer.current = setTimeout(() => {
        router.push(`${destination.pathname}${destination.search}${destination.hash}`)
      }, TRANSITION_MS)
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
      if (navigationTimer.current) clearTimeout(navigationTimer.current)
    }
  }, [router])

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (!revealItems.length) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending')
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.16 })

    revealItems.forEach((item) => {
      item.classList.add('reveal-pending')
      observer.observe(item)
    })
    return () => observer.disconnect()
  }, [pathname])

  useEffect(() => {
    const motionItems = Array.from(document.querySelectorAll<HTMLElement>('[data-scroll-motion]'))
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!motionItems.length || reducedMotion.matches) return

    let frame = 0
    const updateMotion = () => {
      frame = 0
      const viewportHeight = window.innerHeight
      const scrollRange = document.documentElement.scrollHeight - viewportHeight
      const pageProgress = scrollRange > 0 ? window.scrollY / scrollRange : 0
      document.documentElement.style.setProperty('--page-progress', pageProgress.toFixed(4))

      motionItems.forEach((item) => {
        const rect = item.getBoundingClientRect()
        const centerOffset = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight
        const speed = Number(item.dataset.scrollSpeed ?? '1')
        const shift = Math.max(-1.25, Math.min(1.25, centerOffset)) * speed
        item.style.setProperty('--scroll-shift', shift.toFixed(4))
      })
    }

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateMotion)
    }

    updateMotion()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      document.documentElement.style.removeProperty('--page-progress')
      motionItems.forEach((item) => item.style.removeProperty('--scroll-shift'))
    }
  }, [pathname])

  return (
    <div className={`route-stage${isEntering ? ' route-stage-enter' : ''}`}>
      {children}
    </div>
  )
}

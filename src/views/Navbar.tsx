import { useState, useEffect } from 'react'
import type { NavSection } from '../models/types'
import gdgLogo from '../assets/GDG_LOGO.png'

interface NavbarProps {
  navSections: NavSection[]
  activeSection: string
  mobileMenuOpen: boolean
  onToggleMobileMenu: () => void
  onCloseMobileMenu: () => void
}

function TypewriterText({
  text,
  speed = 60,
  delay = 0,
}: {
  text: string
  speed?: number
  delay?: number
}) {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>

    const timer = setTimeout(() => {
      let currentIndex = 0
      interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(interval)
        }
      }, speed)
    }, delay)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [text, speed, delay])

  return <span>{displayedText}</span>
}

export function Navbar({
  navSections,
  activeSection,
  mobileMenuOpen,
  onToggleMobileMenu,
  onCloseMobileMenu,
}: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left Brand: GDG Logo + Brand Titles (Pure White Text) */}
        <a
          href="#home"
          className="flex items-center gap-3.5 group text-left no-underline"
        >
          <img
            src={gdgLogo}
            alt="GDG Logo"
            className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col justify-center leading-tight font-orbitron">
            <span className="text-[10px] sm:text-xs tracking-[0.2em] text-white uppercase font-bold">
              AGAINST ALL ODDS:
            </span>
            <span className="text-lg sm:text-2xl font-extrabold tracking-widest text-white uppercase">
              ESCAPADE
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links (Typewriter Animation for Tabs & Pure White Bolder/Larger Text) */}
        <nav className="hidden md:flex items-center gap-8 font-orbitron">
          {navSections.map((link, index) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-base sm:text-lg font-extrabold uppercase tracking-wider transition-opacity duration-300 py-1 ${
                  isActive ? 'text-white opacity-100' : 'text-white opacity-80 hover:opacity-100'
                }`}
              >
                <TypewriterText
                  text={link.name}
                  speed={70}
                  delay={150 + index * 200}
                />
              </a>
            )
          })}
        </nav>


        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={onToggleMobileMenu}
          className="md:hidden p-2 text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07090e]/95 backdrop-blur-xl border-b border-white/10 px-4 py-6 space-y-4">
          {navSections.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={onCloseMobileMenu}
              className={`block font-orbitron text-base uppercase tracking-wider py-2 ${
                activeSection === link.id ? 'text-white font-bold' : 'text-white/70'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

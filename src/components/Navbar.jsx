import { useState, useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import './Navbar.css'

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  )
}

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  // Cmd/Ctrl+K opens search
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(o => !o)
      }
      if (e.key === 'Escape') setSearchOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    if (searchOpen && inputRef.current) inputRef.current.focus()
  }, [searchOpen])

  return (
    <>
      <nav className="navbar">
        <div className="container navbar-inner">
          <div className="navbar-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#work" className="nav-link">Work</a>
            <a href="https://github.com/Aryandadhich" target="_blank" rel="noreferrer" className="nav-link">GitHub</a>
            <a href="/Aryan_Dadheech_CV.pdf" target="_blank" rel="noreferrer" className="nav-link">Resume</a>
          </div>
          <div className="navbar-actions">
            <button className="search-btn" onClick={() => setSearchOpen(true)} aria-label="Search">
              <SearchIcon />
              <span className="search-hint">
                <kbd>Ctrl</kbd><kbd>K</kbd>
              </span>
            </button>
            <button className="theme-btn" onClick={toggle} aria-label="Toggle theme">
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </nav>

      {searchOpen && (
        <div className="search-overlay" onClick={() => setSearchOpen(false)}>
          <div className="search-modal" onClick={e => e.stopPropagation()}>
            <div className="search-input-wrap">
              <SearchIcon />
              <input
                ref={inputRef}
                className="search-input"
                placeholder="Search..."
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
              <kbd className="search-esc" onClick={() => setSearchOpen(false)}>Esc</kbd>
            </div>
            <div className="search-empty">Start typing to search...</div>
          </div>
        </div>
      )}
    </>
  )
}

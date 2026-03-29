import { useState, useEffect, useRef } from 'react'
import { useIsMobile } from '../../../hooks/useIsMobile'
import Text from '../../ui/Text'
import Button from '../../ui/Button'
import logo from '../../../public/logo.svg'

const menuItems = [
  { label: 'Home', href: '#top' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Sobre mim', href: '#about' },
  { label: 'Perguntas Frequentes', href: '#faq' },
  { label: 'Contato', href: '#contact' },
]

function Header() {
  const isMobile = useIsMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMobile && isMenuOpen && headerRef.current && !headerRef.current.contains(e.target as Node)) {
        closeMenu()
      }
    }
    if (isMenuOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen, isMobile])

  const closeMenu = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsMenuOpen(false)
      setIsClosing(false)
    }, 150)
  }

  const handleNavClick = (href: string) => {
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    closeMenu()
  }

  const scrolled = isScrolled || isMenuOpen

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-20 px-4 pt-0 transition-all duration-500"
      style={{ paddingTop: scrolled ? '16px' : '0px', paddingLeft: scrolled ? '16px' : '0px', paddingRight: scrolled ? '16px' : '0px' }}
    >
      <div
        ref={headerRef}
        className="transition-all duration-500 mx-auto bg-[#0B0B0B] backdrop-blur-md"
        style={{
          maxWidth: scrolled ? '72rem' : '100%',
          borderRadius: scrolled ? '1.5rem' : '0rem',
          boxShadow: scrolled ? '0 10px 40px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        <nav className={`flex items-center justify-between py-5 px-6 max-w-6xl mx-auto ${isMobile && isMenuOpen ? 'border-b border-white/10' : ''}`}>
          <img src={logo} alt="Logo" className="h-8 w-auto" />

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-text-default hover:text-purple transition-colors cursor-pointer"
                >
                  <Text variant="small" tag="span" text={item.label} />
                </button>
              ))}
            </div>
          )}

          {!isMobile && (
            <Button variant="curriculum" onClick={() => window.open('#', '_blank')}>
              <span className="flex items-center gap-1.5">
                Currículo
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </Button>
          )}

          {isMobile && (
            <button
              onClick={() => isMenuOpen ? closeMenu() : setIsMenuOpen(true)}
              className="text-text-default cursor-pointer"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          )}
        </nav>

        {isMobile && isMenuOpen && (
          <div className={`px-6 pb-6 pt-4 ${isClosing ? 'animate-[slideUp_0.15s_ease-out]' : 'animate-[slideDown_0.3s_ease-out]'}`}>
            <ul className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <li
                  key={item.href}
                  className={`${isClosing ? 'animate-[fadeOut_0.1s_ease-out]' : 'animate-[fadeIn_0.4s_ease-out] opacity-0'}`}
                  style={{ animationDelay: isClosing ? '0s' : `${index * 0.08}s`, animationFillMode: 'forwards' }}
                >
                  <button onClick={() => handleNavClick(item.href)} className="text-text-default hover:text-purple transition-colors cursor-pointer">
                    <Text variant="small" tag="span" text={item.label} />
                  </button>
                </li>
              ))}
              <li
                className={`${isClosing ? 'animate-[fadeOut_0.1s_ease-out]' : 'animate-[fadeIn_0.4s_ease-out] opacity-0'}`}
                style={{ animationDelay: isClosing ? '0s' : `${menuItems.length * 0.08}s`, animationFillMode: 'forwards' }}
              >
                <Button variant="curriculum-small" wide keepSize onClick={() => window.open('#', '_blank')}>
                  <span className="flex items-center gap-1.5">
                    Currículo
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

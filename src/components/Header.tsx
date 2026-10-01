import { brand, navLinks, ui } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = navLinks.map((link) => link.href.replace('#', ''))

export default function Header() {
  const { activeId, scrolled } = useActiveSection(sectionIds)

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="site-header-inner">
        <a className="brand" href="#top">
          {brand}
        </a>
        <nav className="site-nav" aria-label={ui.navLabel}>
          {navLinks.map((link) => {
            const isActive = activeId === link.href.replace('#', '')
            return (
              <a
                key={link.href}
                href={link.href}
                className={isActive ? 'active' : undefined}
                aria-current={isActive ? 'true' : undefined}
              >
                {link.label}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

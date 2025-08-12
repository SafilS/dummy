import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import ThemeToggle from '../ThemeToggle.jsx';
import { useTheme } from '../ThemeContent.jsx';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [location] = useLocation();
  const { theme } = useTheme();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/products', label: 'Products' },
    { path: '/features', label: 'Features' },
    { path: '/careers', label: 'Careers' },
  ];

  const aboutMenuItems = [
    { path: '/mission', label: 'Our Mission' },
    { path: '/teams', label: 'Our Teams' },
    { path: '/journey', label: 'Our Journey' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const styles = {
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: theme === 'light' 
        ? 'rgba(255,255,255,0.95)' 
        : 'rgba(10,10,10,0.9)',
      backdropFilter: 'blur(20px)',
      borderBottom: theme === 'light' 
        ? '1px solid rgba(0,0,0,0.1)' 
        : '1px solid rgba(255,255,255,0.1)',
      zIndex: 50,
      padding: 'var(--spacing-md) 0',
    },
    headerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 700,
      textDecoration: 'none',
    },
    nav: {
      display: 'flex',
      gap: 'var(--spacing-xl)',
    },
    navMobile: {
      display: 'none',
      position: 'fixed',
      top: '80px',
      left: 0,
      right: 0,
      bottom: 0,
      background: 'var(--color-bg-primary)',
      flexDirection: 'column',
      padding: 'var(--spacing-xl)',
      gap: 'var(--spacing-lg)',
      zIndex: 40,
    },
    navMobileOpen: {
      display: 'flex',
    },
    navLink: {
      color: theme === 'light' ? '#1a1a1a' : '#ffffff',
      textDecoration: 'none',
      fontWeight: 500,
      transition: 'var(--transition-fast)',
      position: 'relative',
      padding: 'var(--spacing-sm) 0',
    },
    navLinkActive: {
      color: 'var(--color-accent-3)',
    },
    navLinkActiveAfter: {
      content: '""',
      position: 'absolute',
      bottom: '-4px',
      left: 0,
      right: 0,
      height: '2px',
      background: 'var(--gradient-primary)',
    },
    headerActions: {
      display: 'flex',
      gap: 'var(--spacing-md)',
      alignItems: 'center',
    },
    mobileMenuBtn: {
      display: 'none',
      background: 'none',
      border: 'none',
      color: theme === 'light' ? '#1a1a1a' : '#ffffff',
      fontSize: '24px',
      cursor: 'pointer',
      padding: '4px',
    },
    userMenu: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-sm)',
    },
    username: {
      fontWeight: 500,
      color: 'var(--color-accent-3)',
    },
    dropdownContainer: {
      position: 'relative',
      display: 'inline-block',
      height: '100%',
    },
    dropdownButton: {
      color: 'var(--color-text-primary)',
      textDecoration: 'none',
      fontWeight: 500,
      transition: 'var(--transition-fast)',
      position: 'relative',
      padding: 'var(--spacing-sm) 0',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 'inherit',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      fontFamily: 'inherit',
      lineHeight: 'inherit',
    },
    dropdownButtonActive: {
      color: 'var(--color-accent-3)',
    },
    dropdownMenu: {
      position: 'absolute',
      top: '100%',
      right: 0,
      minWidth: '180px',
      background: 'rgba(10,10,10,0.95)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 'var(--radius-md)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      padding: 'var(--spacing-sm) 0',
      zIndex: 100,
      opacity: 0,
      visibility: 'hidden',
      transform: 'translateY(-10px)',
      transition: 'all 0.2s ease-in-out',
    },
    dropdownMenuOpen: {
      opacity: 1,
      visibility: 'visible',
      transform: 'translateY(0)',
    },
    dropdownItem: {
      display: 'block',
      padding: 'var(--spacing-sm) var(--spacing-md)',
      color: 'var(--color-text-primary)',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: 500,
      transition: 'var(--transition-fast)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
    },
    dropdownItemLast: {
      borderBottom: 'none',
    },
    dropdownItemHover: {
      background: 'rgba(255,255,255,0.1)',
      color: 'var(--color-accent-3)',
    },
    chevron: {
      fontSize: '12px',
      transition: 'transform 0.2s ease',
    },
    chevronRotated: {
      transform: 'rotate(180deg)',
    }
  };

  const mobileStyles = `
    @media (max-width: 768px) {
      .nav-desktop { display: none !important; }
      .mobile-menu-btn { display: block !important; }
    }
  `;

  return (
    <>
      <style>{mobileStyles}</style>
      <header style={styles.header}>
        <div className="container">
          <div style={styles.headerContent}>
            <Link href="/" style={styles.logo} className="text-gradient">
              VIRUZVERSE
            </Link>
            
            <nav style={styles.nav} className="nav-desktop" role="navigation" aria-label="Main navigation">
              {navItems.map(item => {
                if (item.label === 'About') {
                  return (
                    <div 
                      key={item.path}
                      style={{position: 'relative'}}
                      onMouseEnter={() => setIsContactDropdownOpen(true)}
                      onMouseLeave={() => setIsContactDropdownOpen(false)}
                    >
                      <Link 
                        href={item.path}
                        className={`nav-link-enhanced ${location === item.path ? 'active' : ''}`}
                        style={{
                          ...styles.navLink,
                          ...(location === item.path ? styles.navLinkActive : {})
                        }}
                      >
                        {item.label}
                        {location === item.path && <div style={styles.navLinkActiveAfter}></div>}
                      </Link>
                      {isContactDropdownOpen && (
                        <div style={{position: 'absolute', top: '100%', left: '-50%', zIndex: 100}}>
                           <Contact />
                        </div>
                      )}
                    </div>
                  );
                } else {
                  return (
                    <Link 
                      key={item.path} 
                      href={item.path}
                      className={`nav-link-enhanced ${location === item.path ? 'active' : ''}`}
                      style={{
                        ...styles.navLink,
                        ...(location === item.path ? styles.navLinkActive : {})
                      }}
                    >
                      {item.label}
                      {location === item.path && <div style={styles.navLinkActiveAfter}></div>}
                    </Link>
                  );
                }
              })}
              
              {/* About Dropdown */}
              <div 
                style={styles.dropdownContainer}
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <button
                  style={{
                    ...styles.dropdownButton,
                    ...(aboutMenuItems.some(item => location === item.path) ? styles.dropdownButtonActive : {})
                  }}
                  className="nav-link-enhanced"
                >
                  About
                  <span 
                    style={{
                      ...styles.chevron,
                      ...(isAboutDropdownOpen ? styles.chevronRotated : {})
                    }}
                  >
                    ▼
                  </span>
                  {aboutMenuItems.some(item => location === item.path) && 
                    <div style={styles.navLinkActiveAfter}></div>
                  }
                </button>
                
                <div 
                  style={{
                    ...styles.dropdownMenu,
                    ...(isAboutDropdownOpen ? styles.dropdownMenuOpen : {})
                  }}
                >
                  {aboutMenuItems.map((item, index) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      style={{
                        ...styles.dropdownItem,
                        ...(index === aboutMenuItems.length - 1 ? styles.dropdownItemLast : {})
                      }}
                      onMouseEnter={(e) => {
                        Object.assign(e.target.style, styles.dropdownItemHover);
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = 'var(--color-text-primary)';
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
            
            <div style={styles.headerActions}>
              <ThemeToggle />
              <button 
                style={styles.mobileMenuBtn}
                className="mobile-menu-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav 
          style={{
            ...styles.navMobile,
            ...(isMobileMenuOpen ? styles.navMobileOpen : {})
          }} 
          role="navigation" 
          aria-label="Mobile navigation"
        >
          {navItems.map(item => (
            <Link 
              key={item.path} 
              href={item.path}
              style={{
                ...styles.navLink,
                ...(location === item.path ? styles.navLinkActive : {})
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          
          {/* About Section in Mobile */}
          <div style={{ marginTop: 'var(--spacing-md)', paddingTop: 'var(--spacing-md)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ ...styles.navLink, fontWeight: 600, color: 'var(--color-accent-3)', marginBottom: 'var(--spacing-sm)' }}>
              About
            </div>
            {aboutMenuItems.map(item => (
              <Link 
                key={item.path} 
                href={item.path}
                style={{
                  ...styles.navLink,
                  paddingLeft: 'var(--spacing-md)',
                  fontSize: '14px',
                  ...(location === item.path ? styles.navLinkActive : {})
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}

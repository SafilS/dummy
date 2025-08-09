import { useState } from 'react';
import { Link, useLocation } from 'wouter';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/vr-3d', label: 'VR & 3D' },
    { path: '/products', label: 'Products' },
    { path: '/features', label: 'Features' },
    { path: '/about', label: 'About' },
  ];

  const styles = {
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'rgba(10,10,10,0.9)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
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
      color: 'var(--color-text-primary)',
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
      color: 'white',
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
              {navItems.map(item => (
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
              ))}
            </nav>
            
            <div style={styles.headerActions}>
              <Link href="/products" className="btn-primary btn-enhanced hover-glow-intense">
                Explore Products
              </Link>
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
          <Link href="/products" className="btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
            Explore Products
          </Link>
        </nav>
      </header>
    </>
  );
}

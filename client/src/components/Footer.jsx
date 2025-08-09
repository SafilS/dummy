import { Link } from 'wouter';

export default function Footer() {
  const styles = {
    footer: {
      background: 'var(--color-surface)',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      padding: 'var(--spacing-2xl) 0',
      marginTop: 'var(--spacing-3xl)',
    },
    footerContent: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: 'var(--spacing-xl)',
    },
    footerSection: {
      
    },
    footerTitle: {
      marginBottom: 'var(--spacing-md)',
      fontSize: '18px',
      fontWeight: 600,
    },
    footerLinks: {
      listStyle: 'none',
      padding: 0,
    },
    footerLink: {
      display: 'block',
      color: 'rgba(255,255,255,0.8)',
      textDecoration: 'none',
      marginBottom: 'var(--spacing-sm)',
      transition: 'var(--transition-fast)',
    },
    footerLinkHover: {
      color: 'var(--color-accent-3)',
    },
    socialIcons: {
      display: 'flex',
      gap: 'var(--spacing-md)',
      marginTop: 'var(--spacing-md)',
    },
    socialIcon: {
      width: '40px',
      height: '40px',
      background: 'var(--gradient-primary)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textDecoration: 'none',
      transition: 'var(--transition-medium)',
      fontSize: '18px',
    },
    socialIconHover: {
      transform: 'translateY(-2px)',
      boxShadow: 'var(--shadow-glow)',
    },
    footerBottom: {
      marginTop: 'var(--spacing-2xl)',
      paddingTop: 'var(--spacing-lg)',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      textAlign: 'center',
      opacity: 0.7,
    }
  };

  return (
    <footer style={styles.footer}>
      <div className="container">
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle} className="text-gradient">VIRUZVERSE</h3>
            <p>Pioneering the future of digital solutions with cutting-edge VR, AI, and cybersecurity technologies.</p>
            <div style={styles.socialIcons}>
              <a href="#" style={styles.socialIcon} aria-label="Twitter">
                🐦
              </a>
              <a href="#" style={styles.socialIcon} aria-label="LinkedIn">
                💼
              </a>
              <a href="#" style={styles.socialIcon} aria-label="GitHub">
                🐙
              </a>
              <a href="#" style={styles.socialIcon} aria-label="Discord">
                💬
              </a>
            </div>
          </div>
          
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle} className="text-gradient">Products</h3>
            <ul style={styles.footerLinks}>
              <li><Link href="/products" style={styles.footerLink}>Sentinel AI</Link></li>
              <li><Link href="/products" style={styles.footerLink}>VR Training Suite</Link></li>
              <li><Link href="/products" style={styles.footerLink}>CafeAura</Link></li>
              <li><Link href="/products" style={styles.footerLink}>BillBro</Link></li>
              <li><Link href="/products" style={styles.footerLink}>GetMe</Link></li>
            </ul>
          </div>
          
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle} className="text-gradient">Solutions</h3>
            <ul style={styles.footerLinks}>
              <li><Link href="/solutions" style={styles.footerLink}>Cybersecurity</Link></li>
              <li><Link href="/vr-3d" style={styles.footerLink}>VR & 3D</Link></li>
              <li><Link href="/products" style={styles.footerLink}>Mobile Apps</Link></li>
              <li><Link href="/products" style={styles.footerLink}>Enterprise Tools</Link></li>
            </ul>
          </div>
          
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle} className="text-gradient">Contact</h3>
            <ul style={styles.footerLinks}>
              <li><a href="mailto:hello@viruzverse.com" style={styles.footerLink}>hello@viruzverse.com</a></li>
              <li><a href="tel:+15551234567" style={styles.footerLink}>+1 (555) 123-4567</a></li>
              <li><span style={styles.footerLink}>San Francisco, CA</span></li>
            </ul>
          </div>
        </div>
        
        <div style={styles.footerBottom}>
          <p>&copy; 2024 VIRUZVERSE. All rights reserved. Pioneering the future of digital solutions.</p>
        </div>
      </div>
    </footer>
  );
}

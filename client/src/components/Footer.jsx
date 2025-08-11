import { Link } from 'wouter';

export default function Footer() {
  const styles = {
    footer: {
      background: 'linear-gradient(135deg, rgba(110,75,195,0.1) 0%, rgba(163,75,110,0.1) 50%, rgba(69,183,209,0.1) 100%)',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      padding: 'var(--spacing-xl) 0',
      marginTop: 'var(--spacing-3xl)',
      position: 'relative',
      overflow: 'hidden',
    },
    footerContent: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr',
      gap: 'var(--spacing-xl)',
      alignItems: 'start',
    },
    brandSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-md)',
    },
    logo: {
      fontSize: '28px',
      fontWeight: 800,
      background: 'var(--gradient-primary)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      letterSpacing: '0.5px',
    },
    tagline: {
      color: 'rgba(255,255,255,0.9)',
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    socialIcons: {
      display: 'flex',
      gap: 'var(--spacing-sm)',
      marginTop: 'var(--spacing-sm)',
    },
    socialIcon: {
      width: '36px',
      height: '36px',
      background: 'rgba(255,255,255,0.1)',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(255,255,255,0.8)',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      fontSize: '16px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.1)',
    },
    quickLinks: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-sm)',
    },
    sectionTitle: {
      fontSize: '16px',
      fontWeight: 700,
      color: '#ffffff',
      marginBottom: 'var(--spacing-sm)',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    footerLink: {
      color: 'rgba(255,255,255,0.7)',
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'all 0.3s ease',
      padding: '2px 0',
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-xs)',
    },
    contactItem: {
      color: 'rgba(255,255,255,0.7)',
      fontSize: '14px',
      textDecoration: 'none',
    },
    footerBottom: {
      marginTop: 'var(--spacing-lg)',
      paddingTop: 'var(--spacing-md)',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '14px',
      color: 'rgba(255,255,255,0.6)',
    },
    copyright: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-xs)',
    },
    legalLinks: {
      display: 'flex',
      gap: 'var(--spacing-md)',
    },
    legalLink: {
      color: 'rgba(255,255,255,0.6)',
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'color 0.3s ease',
    },
  };

  return (
    <footer style={styles.footer}>
      <style>{`
        .footer-hover:hover {
          color: #ffffff !important;
          transform: translateY(-1px);
        }
        .social-hover:hover {
          background: var(--gradient-primary) !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(110,75,195,0.4);
        }
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: var(--spacing-lg) !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            gap: var(--spacing-sm) !important;
          }
        }
      `}</style>
      
      <div className="container">
        <div style={styles.footerContent} className="footer-content">
          {/* Brand Section */}
          <div style={styles.brandSection}>
            <h2 style={styles.logo}>VIRUZVERSE</h2>
            <p style={styles.tagline}>
              Pioneering the future with VR, AI & Cybersecurity
            </p>
            <div style={styles.socialIcons}>
              <a href="#" style={styles.socialIcon} className="social-hover" title="LinkedIn">
                💼
              </a>
              <a href="#" style={styles.socialIcon} className="social-hover" title="Twitter">
                🐦
              </a>
              <a href="#" style={styles.socialIcon} className="social-hover" title="GitHub">
                💻
              </a>
              <a href="mailto:viruzverse@proton.me" style={styles.socialIcon} className="social-hover" title="Email">
                ✉️
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={styles.quickLinks}>
            <h3 style={styles.sectionTitle}>Quick Links</h3>
            <Link href="/products" style={styles.footerLink} className="footer-hover">Products</Link>
            <Link href="/solutions" style={styles.footerLink} className="footer-hover">Solutions</Link>
            <Link href="/teams" style={styles.footerLink} className="footer-hover">Our Teams</Link>
            <Link href="/about" style={styles.footerLink} className="footer-hover">About Us</Link>
            <Link href="/contact" style={styles.footerLink} className="footer-hover">Contact</Link>
          </div>

          {/* Contact Info */}
          <div style={styles.contactInfo}>
            <h3 style={styles.sectionTitle}>Connect</h3>
            <a href="mailto:viruzverse@proton.me" style={styles.contactItem} className="footer-hover">
              📧 viruzverse@proton.me
            </a>
            <a href="tel:+917418676100" style={styles.contactItem} className="footer-hover">
              📞 +91 7418676100
            </a>
            <span style={styles.contactItem}>
              🌍 India, Tamil Nadu
            </span>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div style={styles.footerBottom} className="footer-bottom">
          <div style={styles.copyright}>
            <span>© 2024 VIRUZVERSE</span>
            <span>•</span>
            <span>Innovating Tomorrow</span>
          </div>
          <div style={styles.legalLinks}>
            <Link href="/privacy" style={styles.legalLink} className="footer-hover">Privacy</Link>
            <Link href="/terms" style={styles.legalLink} className="footer-hover">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

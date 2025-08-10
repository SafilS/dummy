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
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 'var(--spacing-xl)',
      flexWrap: 'wrap',
    },
    footerSection: {
      flex: '1',
      minWidth: '200px',
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
    },
    footerDescription: {
      marginTop: 'var(--spacing-sm)',
      color: 'rgba(255,255,255,0.8)',
    },
    productsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: 'var(--spacing-md)',
      marginTop: 'var(--spacing-md)',
    },
    productColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-sm)',
    },
  };

  return (
    <footer style={styles.footer}>
      <style>{`
        @media (max-width: 1200px) {
          .footer-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .footer-section {
            min-width: auto;
            width: 100%;
            max-width: 300px;
          }
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--spacing-lg);
          }
        }
        @media (max-width: 768px) {
          .footer-content {
            gap: var(--spacing-lg);
          }
          .footer-section {
            max-width: 100%;
          }
          .products-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }
          .product-column {
            align-items: center;
          }
        }
      `}</style>
      
      <div className="container">
        <div style={styles.footerContent} className="footer-content">
          <div style={styles.footerSection} className="footer-section">
            <h3 style={styles.footerTitle} className="text-gradient">VIRUZVERSE</h3>
            <p style={styles.footerDescription}>
              Pioneering the future of digital solutions with cutting-edge VR, AI, and cybersecurity technologies.
            </p>
          </div>

          <div style={styles.footerSection} className="footer-section">
            <h3 style={styles.footerTitle} className="text-gradient">Products</h3>
            <div style={styles.productsGrid} className="products-grid">
              <div style={styles.productColumn}>
                <Link href="/products/sentinel-ai" style={styles.footerLink}>Sentinel AI</Link>
                <Link href="/products/vr-training-suite" style={styles.footerLink}>VR Training Suite</Link>
                <Link href="/products/cafeaura" style={styles.footerLink}>CafeAura</Link>
              </div>
              <div style={styles.productColumn}>
                <Link href="/products/billbro" style={styles.footerLink}>BillBro</Link>
                <Link href="/products/getme" style={styles.footerLink}>GetMe</Link>
                <Link href="/products/broker-app" style={styles.footerLink}>Broker App</Link>
              </div>
              <div style={styles.productColumn}>
                <Link href="/products/invoicify" style={styles.footerLink}>Invoicify</Link>
                <Link href="/products/vr-interior-exterior-designs" style={styles.footerLink}>VR Interior & Exterior</Link>
                <Link href="/products/3d-elevation" style={styles.footerLink}>3D Elevation</Link>
              </div>
            </div>
          </div>
          
          <div style={styles.footerSection} className="footer-section">
            <h3 style={styles.footerTitle} className="text-gradient">Solutions</h3>
            <ul style={styles.footerLinks}>
              <li><Link href="/solutions" style={styles.footerLink}>Cybersecurity</Link></li>
              <li><Link href="/solutions" style={styles.footerLink}>VR & 3D</Link></li>
              <li><Link href="/solutions" style={styles.footerLink}>Mobile Apps</Link></li>
              <li><Link href="/solutions" style={styles.footerLink}>Enterprise Tools</Link></li>
            </ul>
          </div>
          
          <div style={styles.footerSection} className="footer-section">
            <h3 style={styles.footerTitle} className="text-gradient">Company</h3>
            <ul style={styles.footerLinks}>
              <li><Link href="/about" style={styles.footerLink}>About Us</Link></li>
              <li><Link href="/careers" style={styles.footerLink}>Careers</Link></li>
              <li><Link href="/features" style={styles.footerLink}>Features</Link></li>
            </ul>
          </div>
          
          <div style={styles.footerSection} className="footer-section">
            <h3 style={styles.footerTitle} className="text-gradient">Contact</h3>
            <ul style={styles.footerLinks}>
              <li><Link href="/contact" style={styles.footerLink}>Contact Form</Link></li>
              <li><a href="mailto:viruzverse@proton.me" style={styles.footerLink}>viruzverse@proton.me</a></li>
              <li><a href="tel:+917418676100" style={styles.footerLink}>+91 7418676100</a></li>
              <li style={styles.footerLink}>India, Tamil Nadu</li>
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

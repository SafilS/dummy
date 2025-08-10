import { Link } from 'wouter';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (index, isHovering) => {
    setHoveredCard(isHovering ? index : null);
  };

  const styles = {
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, rgba(163,75,110,0.1) 0%, rgba(110,75,195,0.1) 50%, rgba(69,183,209,0.1) 100%)',
    },
    heroContent: {
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 var(--spacing-lg)',
    },
    heroTitle: {
      fontSize: 'clamp(48px, 8vw, 80px)',
      fontWeight: 700,
      marginBottom: 'var(--spacing-lg)',
      lineHeight: 1.1,
    },
    heroSubtitle: {
      fontSize: 'clamp(18px, 3vw, 24px)',
      marginBottom: 'var(--spacing-2xl)',
      opacity: 0.9,
      lineHeight: 1.4,
    },
    heroActions: {
      display: 'flex',
      gap: 'var(--spacing-lg)',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    sectionTitle: {
      fontSize: '48px',
      fontWeight: 700,
      textAlign: 'center',
      marginBottom: 'var(--spacing-md)',
    },
    sectionSubtitle: {
      textAlign: 'center',
      fontSize: '18px',
      opacity: 0.8,
      marginBottom: 'var(--spacing-2xl)',
      maxWidth: '600px',
      margin: '0 auto var(--spacing-2xl)',
    },
    ctaSection: {
      padding: 'var(--spacing-3xl) 0',
      textAlign: 'center',
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-xl)',
      margin: 'var(--spacing-3xl) 0',
    },
    capabilitiesRow: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'nowrap',
      gap: 'var(--spacing-lg)',
      marginTop: 'var(--spacing-2xl)',
    },
    capabilityCard: {
      flex: '1',
      minWidth: '250px',
      padding: 'var(--spacing-xl)',
      textAlign: 'center',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--color-surface-light)',
      boxShadow: 'var(--shadow-md)',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    capabilityCardHover: {
      transform: 'translateY(-8px)',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid rgba(255,255,255,0.2)',
      background: 'var(--color-surface)',
    },
    capabilityIcon: {
      fontSize: '48px',
      marginBottom: 'var(--spacing-md)',
    },
    capabilityTitle: {
      fontSize: '24px',
      fontWeight: 600,
      marginBottom: 'var(--spacing-md)',
    },
    capabilityDescription: {
      fontSize: '16px',
      opacity: 0.8,
      marginBottom: 'var(--spacing-lg)',
    },
    capabilityFeatures: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      textAlign: 'left',
    },
    capabilityFeatureItem: {
      marginBottom: 'var(--spacing-sm)',
      fontSize: '14px',
      opacity: 0.7,
    }
  };

  const mobileStyles = `
    @media (max-width: 1200px) {
      .capabilities-row {
        flex-wrap: wrap;
        justify-content: center;
        gap: var(--spacing-md);
      }
      .capability-card {
        min-width: 280px;
        max-width: 300px;
        flex: 0 1 calc(50% - var(--spacing-md));
      }
    }
    @media (max-width: 768px) {
      .hero-actions {
        flex-direction: column;
        align-items: center;
      }
      .capabilities-row {
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-lg);
      }
      .capability-card {
        min-width: auto;
        width: 100%;
        max-width: 350px;
        flex: none;
      }
    }
  `;

  return (
    <>
      <style>{mobileStyles}</style>
      
      {/* Hero Section */}
      <section style={styles.hero}>
        <div className="container">
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle} className="text-shimmer fade-in-up">
              Welcome to the Future
            </h1>
            <p style={styles.heroSubtitle} className="fade-in-up">At Viruzverse, we blend technology and innovation to build solutions for real-world problems, while nurturing the next generation of IT leaders. Join us to shape the future together. and digital solutions for tomorrow's challenges
            </p>
            <div style={styles.heroActions} className="hero-actions fade-in-up">
              <Link href="/about" className="btn-secondary btn-enhanced hover-glow-intense">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Digital Capabilities */}
      <section style={styles.section}>
        <div className="container">
          <h2 style={styles.sectionTitle} className="text-gradient">Our Digital Capabilities</h2>
          <p style={styles.sectionSubtitle}>Cutting-edge technologies that drive innovation across industries</p>
          
          <div style={styles.capabilitiesRow} className="capabilities-row">
            <div 
              style={{
                ...styles.capabilityCard,
                ...(hoveredCard === 0 ? styles.capabilityCardHover : {})
              }} 
              className="capability-card"
              onMouseEnter={() => handleCardHover(0, true)}
              onMouseLeave={() => handleCardHover(0, false)}
            >
              <div style={styles.capabilityIcon}>🎓</div>
              <h3 style={styles.capabilityTitle}>Immersive Training Simulations</h3>
              <p style={styles.capabilityDescription}>Create realistic training environments that improve learning retention and reduce costs.</p>
              <ul style={styles.capabilityFeatures}>
                <li style={styles.capabilityFeatureItem}>Realistic Physics</li>
                <li style={styles.capabilityFeatureItem}>Multi-user Support</li>
                <li style={styles.capabilityFeatureItem}>Progress Tracking</li>
                <li style={styles.capabilityFeatureItem}>Custom Scenarios</li>
              </ul>
            </div>
            
            <div 
              style={{
                ...styles.capabilityCard,
                ...(hoveredCard === 1 ? styles.capabilityCardHover : {})
              }} 
              className="capability-card"
              onMouseEnter={() => handleCardHover(1, true)}
              onMouseLeave={() => handleCardHover(1, false)}
            >
              <div style={styles.capabilityIcon}>🏗️</div>
              <h3 style={styles.capabilityTitle}>3D Visualization & Modeling</h3>
              <p style={styles.capabilityDescription}>Advanced 3D rendering and modeling tools for architectural and product visualization.</p>
              <ul style={styles.capabilityFeatures}>
                <li style={styles.capabilityFeatureItem}>Real-time Rendering</li>
                <li style={styles.capabilityFeatureItem}>CAD Integration</li>
                <li style={styles.capabilityFeatureItem}>Material Libraries</li>
                <li style={styles.capabilityFeatureItem}>Lighting Systems</li>
              </ul>
            </div>
            
            <div 
              style={{
                ...styles.capabilityCard,
                ...(hoveredCard === 2 ? styles.capabilityCardHover : {})
              }} 
              className="capability-card"
              onMouseEnter={() => handleCardHover(2, true)}
              onMouseLeave={() => handleCardHover(2, false)}
            >
              <div style={styles.capabilityIcon}>👥</div>
              <h3 style={styles.capabilityTitle}>Virtual Collaboration</h3>
              <p style={styles.capabilityDescription}>Enable remote teams to collaborate in shared virtual spaces with natural interactions.</p>
              <ul style={styles.capabilityFeatures}>
                <li style={styles.capabilityFeatureItem}>Spatial Audio</li>
                <li style={styles.capabilityFeatureItem}>Gesture Recognition</li>
                <li style={styles.capabilityFeatureItem}>Screen Sharing</li>
                <li style={styles.capabilityFeatureItem}>Cross-platform</li>
              </ul>
            </div>
            
            <div 
              style={{
                ...styles.capabilityCard,
                ...(hoveredCard === 3 ? styles.capabilityCardHover : {})
              }} 
              className="capability-card"
              onMouseEnter={() => handleCardHover(3, true)}
              onMouseLeave={() => handleCardHover(3, false)}
            >
              <div style={styles.capabilityIcon}>⚙️</div>
              <h3 style={styles.capabilityTitle}>Digital Development</h3>
              <p style={styles.capabilityDescription}>Custom digital application development for various industries and use cases.</p>
              <ul style={styles.capabilityFeatures}>
                <li style={styles.capabilityFeatureItem}>Unity/Unreal</li>
                <li style={styles.capabilityFeatureItem}>WebXR Support</li>
                <li style={styles.capabilityFeatureItem}>Mobile Apps</li>
                <li style={styles.capabilityFeatureItem}>Cross-platform</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section style={{ padding: 'var(--spacing-3xl) 0', background: 'var(--color-surface)' }}>
        <div className="container">
          <h2 style={styles.sectionTitle} className="text-gradient pulse-glow slide-in-left">
            Solutions
          </h2>
          <p style={styles.sectionSubtitle} className="slide-in-right">
            Comprehensive solutions tailored to your industry needs
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--spacing-xl)',
            marginTop: 'var(--spacing-2xl)'
          }}>
            <div className="card hover-lift" style={{ 
              padding: 'var(--spacing-xl)', 
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '36px', marginBottom: 'var(--spacing-md)' }}>🔒</div>
              <h3 style={{ fontSize: '20px', fontWeight: 600 }}>Cybersecurity</h3>
            </div>

            <div className="card hover-lift" style={{ 
              padding: 'var(--spacing-xl)', 
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '36px', marginBottom: 'var(--spacing-md)' }}>🥽</div>
              <h3 style={{ fontSize: '20px', fontWeight: 600 }}>VR & 3D</h3>
            </div>

            <div className="card hover-lift" style={{ 
              padding: 'var(--spacing-xl)', 
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '36px', marginBottom: 'var(--spacing-md)' }}>📱</div>
              <h3 style={{ fontSize: '20px', fontWeight: 600 }}>Mobile Apps</h3>
            </div>

            <div className="card hover-lift" style={{ 
              padding: 'var(--spacing-xl)', 
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '36px', marginBottom: 'var(--spacing-md)' }}>🏢</div>
              <h3 style={{ fontSize: '20px', fontWeight: 600 }}>Enterprise Tools</h3>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
            <Link href="/solutions" className="btn-primary btn-enhanced bounce-hover">
              Explore All Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="container">
          <div style={styles.ctaSection}>
            <h2 style={{ fontSize: '36px', marginBottom: 'var(--spacing-md)' }} className="text-gradient floating-element">
              Ready to Transform Your Business?
            </h2>
            <p style={{ fontSize: '18px', opacity: 0.8, marginBottom: 'var(--spacing-xl)' }} className="fade-in-up">
              Join thousands of companies leveraging our cutting-edge solutions
            </p>
            <div style={{ display: 'flex', gap: 'var(--spacing-lg)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/about" className="btn-secondary btn-enhanced hover-rotate-scale">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Only on Homepage */}
      <Footer />
    </>
  );
}

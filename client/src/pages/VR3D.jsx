import { Link } from 'wouter';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';

export default function VR3D() {
  const { data: products, isLoading } = useProducts({ category: 'vr-3d', status: 'published' });

  const digitalCapabilities = [
    {
      title: 'Immersive Training Simulations',
      description: 'Create realistic training environments that improve learning retention and reduce costs.',
      icon: '🎓',
      features: ['Realistic Physics', 'Multi-user Support', 'Progress Tracking', 'Custom Scenarios']
    },
    {
      title: '3D Visualization & Modeling',
      description: 'Advanced 3D rendering and modeling tools for architectural and product visualization.',
      icon: '🏗️',
      features: ['Real-time Rendering', 'CAD Integration', 'Material Libraries', 'Lighting Systems']
    },
    {
      title: 'Virtual Collaboration',
      description: 'Enable remote teams to collaborate in shared virtual spaces with natural interactions.',
      icon: '👥',
      features: ['Spatial Audio', 'Gesture Recognition', 'Screen Sharing', 'Cross-platform']
    },
    {
      title: 'Digital Development',
      description: 'Custom digital application development for various industries and use cases.',
      icon: '⚙️',
      features: ['Unity/Unreal', 'WebXR Support', 'Mobile Apps', 'Cross-platform']
    }
  ];

  const industries = [
    { name: 'Education & Training', icon: '📚', description: 'Interactive learning experiences' },
    { name: 'Healthcare', icon: '🏥', description: 'Medical training and therapy' },
    { name: 'Manufacturing', icon: '🏭', description: 'Assembly line training' },
    { name: 'Real Estate', icon: '🏠', description: 'Virtual property tours' },
    { name: 'Entertainment', icon: '🎮', description: 'Immersive gaming experiences' },
    { name: 'Automotive', icon: '🚗', description: 'Vehicle design and testing' }
  ];

  const styles = {
    pageHeader: {
      padding: 'var(--spacing-3xl) 0',
      paddingTop: '120px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, rgba(163,75,110,0.1) 0%, rgba(110,75,195,0.1) 50%, rgba(69,183,209,0.1) 100%)',
      position: 'relative',
      overflow: 'hidden',
    },
    pageTitle: {
      fontSize: 'clamp(40px, 7vw, 72px)',
      fontWeight: 700,
      marginBottom: 'var(--spacing-md)',
    },
    pageSubtitle: {
      fontSize: '22px',
      opacity: 0.9,
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: 1.4,
    },
    capabilitiesSection: {
      padding: 'var(--spacing-3xl) 0',
    },
    sectionTitle: {
      fontSize: '42px',
      fontWeight: 700,
      textAlign: 'center',
      marginBottom: 'var(--spacing-xl)',
    },
    capabilitiesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'var(--spacing-xl)',
      marginBottom: 'var(--spacing-3xl)',
    },
    capabilityCard: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--spacing-xl)',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'var(--transition-medium)',
      textAlign: 'center',
    },
    capabilityIcon: {
      fontSize: '64px',
      marginBottom: 'var(--spacing-lg)',
      display: 'block',
    },
    capabilityTitle: {
      fontSize: '22px',
      fontWeight: 600,
      marginBottom: 'var(--spacing-md)',
    },
    capabilityDescription: {
      opacity: 0.8,
      lineHeight: 1.6,
      marginBottom: 'var(--spacing-lg)',
    },
    featureList: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--spacing-sm)',
      listStyle: 'none',
      padding: 0,
    },
    featureItem: {
      fontSize: '12px',
      opacity: 0.9,
      padding: 'var(--spacing-xs)',
      background: 'rgba(255,255,255,0.05)',
      borderRadius: 'var(--radius-sm)',
      textAlign: 'center',
    },
    industriesSection: {
      padding: 'var(--spacing-3xl) 0',
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-xl)',
      margin: 'var(--spacing-3xl) 0',
    },
    industriesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: 'var(--spacing-lg)',
      marginBottom: 'var(--spacing-xl)',
    },
    industryCard: {
      background: 'rgba(255,255,255,0.03)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--spacing-lg)',
      textAlign: 'center',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'var(--transition-medium)',
    },
    industryIcon: {
      fontSize: '36px',
      marginBottom: 'var(--spacing-md)',
    },
    industryName: {
      fontSize: '16px',
      fontWeight: 600,
      marginBottom: 'var(--spacing-sm)',
    },
    industryDescription: {
      fontSize: '12px',
      opacity: 0.7,
    },
    productsSection: {
      padding: 'var(--spacing-3xl) 0',
    },
    productsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: 'var(--spacing-xl)',
    },
    ctaSection: {
      textAlign: 'center',
      padding: 'var(--spacing-3xl) 0',
      background: 'linear-gradient(135deg, rgba(163,75,110,0.1) 0%, rgba(110,75,195,0.1) 50%, rgba(69,183,209,0.1) 100%)',
      borderRadius: 'var(--radius-xl)',
      margin: 'var(--spacing-3xl) 0',
    },
    ctaTitle: {
      fontSize: '36px',
      fontWeight: 700,
      marginBottom: 'var(--spacing-md)',
    },
    ctaDescription: {
      fontSize: '18px',
      opacity: 0.9,
      marginBottom: 'var(--spacing-xl)',
      maxWidth: '600px',
      margin: '0 auto var(--spacing-xl)',
    },
    ctaActions: {
      display: 'flex',
      gap: 'var(--spacing-lg)',
      justifyContent: 'center',
      flexWrap: 'wrap',
    }
  };

  const mobileStyles = `
    @media (max-width: 768px) {
      .capabilities-grid {
        grid-template-columns: 1fr;
      }
      .industries-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .products-grid {
        grid-template-columns: 1fr;
      }
      .cta-actions {
        flex-direction: column;
        align-items: center;
      }
      .feature-list {
        grid-template-columns: 1fr !important;
      }
    }
  `;

  const handleCardHover = (e, isHovering) => {
    if (isHovering) {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
      e.currentTarget.style.borderColor = 'var(--color-accent-2)';
    } else {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = '';
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
    }
  };

  return (
    <>
      <style>{mobileStyles}</style>
      
      {/* Page Header */}
      <section style={styles.pageHeader}>
        <div className="container">
          <h1 style={styles.pageTitle} className="text-gradient">
            Industry Focus
          </h1>
          <p style={styles.pageSubtitle}>
            Comprehensive digital solutions that transform training, collaboration, and visualization across industries
          </p>
        </div>
      </section>

      {/* VR Capabilities */}
      <section style={styles.capabilitiesSection}>
        <div className="container">
          <h2 style={styles.sectionTitle} className="text-gradient">
            Our Digital Capabilities
          </h2>
          
          <div style={styles.capabilitiesGrid} className="capabilities-grid">
            {digitalCapabilities.map((capability, index) => (
              <div 
                key={index}
                style={styles.capabilityCard}
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                <span style={styles.capabilityIcon}>{capability.icon}</span>
                <h3 style={styles.capabilityTitle} className="text-gradient">
                  {capability.title}
                </h3>
                <p style={styles.capabilityDescription}>
                  {capability.description}
                </p>
                <ul style={styles.featureList} className="feature-list">
                  {capability.features.map((feature, idx) => (
                    <li key={idx} style={styles.featureItem}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section>
        <div className="container">
          <div style={styles.industriesSection}>
            <h2 style={styles.sectionTitle} className="text-gradient">
              Industries We Serve
            </h2>
            
            <div style={styles.industriesGrid} className="industries-grid">
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  style={styles.industryCard}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <div style={styles.industryIcon}>{industry.icon}</div>
                  <h4 style={styles.industryName}>{industry.name}</h4>
                  <p style={styles.industryDescription}>{industry.description}</p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link href="/products" className="btn-secondary">
                Explore Industry Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VR Products */}
      <section style={styles.productsSection}>
        <div className="container">
          
          {isLoading ? (
            <div style={styles.productsGrid} className="products-grid">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="card">
                  <div style={{ height: '200px', marginBottom: 'var(--spacing-md)' }} className="skeleton"></div>
                  <div style={{ height: '24px', marginBottom: 'var(--spacing-sm)' }} className="skeleton"></div>
                  <div style={{ height: '16px', marginBottom: 'var(--spacing-md)' }} className="skeleton"></div>
                  <div style={{ height: '32px' }} className="skeleton"></div>
                </div>
              ))}
            </div>
          ) : products && products.length > 0 ? (
            <div style={styles.productsGrid} className="products-grid">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="card" style={{ textAlign: 'center', padding: 'var(--spacing-3xl)' }}>
              
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="container">
          <div style={styles.ctaSection}>
            <h2 style={styles.ctaTitle} className="text-gradient">
              Ready to Transform Your Industry?
            </h2>
            <p style={styles.ctaDescription}>
              Let us help you create innovative digital solutions that will transform your business and engage your audience like never before.
            </p>
            <div style={styles.ctaActions} className="cta-actions">
              <Link href="/products" className="btn-primary">
                Explore Industry Solutions
              </Link>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfMUoIF_F4OUKpihGhofkuU036__orZgC8lena-zpfj1BLRBQ/viewform" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { Link } from 'wouter';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';

export default function Solutions() {
  const { data: products, isLoading } = useProducts({ status: 'published' });

  const solutions = [
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      description: 'Advanced AI-powered security platforms that protect your digital infrastructure with real-time threat detection and automated response capabilities.',
      icon: '🛡️',
      features: ['Real-time Threat Detection', 'Automated Response', 'Behavioral Analysis', 'Cloud-native Architecture'],
      category: 'cybersecurity',
      benefits: [
        'Protect against evolving cyber threats',
        'Reduce security incident response time',
        'Comply with industry regulations',
        'Scale security with your business growth'
      ]
    },
    {
      id: 'vr-3d',
      title: 'VR & 3D Experiences',
      description: 'Immersive virtual reality and 3D applications for training, education, and entertainment that transform how people learn and interact.',
      icon: '🥽',
      features: ['Immersive Training', 'Educational Simulations', '3D Visualization', 'Multi-platform Support'],
      category: 'vr-3d',
      benefits: [
        'Improve learning retention by up to 80%',
        'Reduce training costs and risks',
        'Enable remote collaboration in 3D spaces',
        'Create engaging customer experiences'
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile Applications',
      description: 'Comprehensive mobile solutions for business management, delivery services, and customer engagement across iOS and Android platforms.',
      icon: '📱',
      features: ['Cross-platform Development', 'Real-time Updates', 'Offline Capabilities', 'Cloud Integration'],
      category: 'mobile-app',
      benefits: [
        'Reach customers on their preferred devices',
        'Improve operational efficiency',
        'Enable real-time business monitoring',
        'Reduce development and maintenance costs'
      ]
    },
    {
      id: 'fintech',
      title: 'FinTech Solutions',
      description: 'Innovative financial technology platforms for trading, billing, and payment processing with enterprise-grade security and compliance.',
      icon: '💰',
      features: ['Secure Transactions', 'Real-time Analytics', 'Regulatory Compliance', 'API Integration'],
      category: 'fintech',
      benefits: [
        'Streamline financial operations',
        'Ensure regulatory compliance',
        'Provide real-time financial insights',
        'Enhance customer payment experience'
      ]
    },
    {
      id: 'utilities',
      title: 'Business Utilities',
      description: 'Productivity tools and utilities that streamline business operations, from invoice management to workflow automation.',
      icon: '⚡',
      features: ['Workflow Automation', 'Data Analytics', 'Integration APIs', 'Scalable Infrastructure'],
      category: 'utilities',
      benefits: [
        'Automate repetitive tasks',
        'Improve decision-making with data',
        'Integrate with existing systems',
        'Scale operations efficiently'
      ]
    }
  ];

  const styles = {
    pageHeader: {
      padding: 'var(--spacing-3xl) 0 var(--spacing-2xl)',
      paddingTop: '120px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, rgba(163,75,110,0.1) 0%, rgba(110,75,195,0.1) 50%, rgba(69,183,209,0.1) 100%)',
    },
    pageTitle: {
      fontSize: 'clamp(36px, 6vw, 64px)',
      fontWeight: 700,
      marginBottom: 'var(--spacing-md)',
    },
    pageSubtitle: {
      fontSize: '20px',
      opacity: 0.9,
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: 1.4,
    },
    solutionsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: 'var(--spacing-xl)',
      marginBottom: 'var(--spacing-3xl)',
    },
    solutionCard: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--spacing-xl)',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'var(--transition-medium)',
      cursor: 'pointer',
    },
    solutionIcon: {
      fontSize: '48px',
      marginBottom: 'var(--spacing-lg)',
      display: 'block',
    },
    solutionTitle: {
      fontSize: '24px',
      fontWeight: 600,
      marginBottom: 'var(--spacing-md)',
    },
    solutionDescription: {
      opacity: 0.8,
      lineHeight: 1.6,
      marginBottom: 'var(--spacing-lg)',
    },
    featureList: {
      listStyle: 'none',
      padding: 0,
      marginBottom: 'var(--spacing-lg)',
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-sm)',
      marginBottom: 'var(--spacing-sm)',
      fontSize: '14px',
      opacity: 0.9,
    },
    featureIcon: {
      width: '16px',
      height: '16px',
      color: 'var(--color-accent-3)',
    },
    benefitsList: {
      listStyle: 'none',
      padding: 0,
      marginBottom: 'var(--spacing-lg)',
    },
    benefitItem: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-sm)',
      marginBottom: 'var(--spacing-sm)',
      fontSize: '14px',
      opacity: 0.8,
      color: 'var(--color-accent-2)',
    },
    relatedSection: {
      padding: 'var(--spacing-3xl) 0',
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-xl)',
      margin: 'var(--spacing-3xl) 0',
    },
    sectionTitle: {
      fontSize: '36px',
      fontWeight: 700,
      textAlign: 'center',
      marginBottom: 'var(--spacing-xl)',
    },
    productsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: 'var(--spacing-xl)',
    }
  };

  const mobileStyles = `
    @media (max-width: 768px) {
      .solutions-grid {
        grid-template-columns: 1fr;
      }
      .products-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  const handleSolutionClick = (categorySlug) => {
    // Navigate to products page with category filter
    window.location.href = `/products?category=${categorySlug}`;
  };

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
            Our Solutions
          </h1>
          <p style={styles.pageSubtitle}>
            Comprehensive digital solutions designed to transform your business with cutting-edge technology
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section style={{ padding: 'var(--spacing-3xl) 0' }}>
        <div className="container">
          <div style={styles.solutionsGrid} className="solutions-grid">
            {solutions.map(solution => (
              <div 
                key={solution.id}
                style={styles.solutionCard}
                onClick={() => handleSolutionClick(solution.category)}
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleSolutionClick(solution.category);
                  }
                }}
              >
                <span style={styles.solutionIcon}>{solution.icon}</span>
                <h3 style={styles.solutionTitle} className="text-gradient">
                  {solution.title}
                </h3>
                <p style={styles.solutionDescription}>
                  {solution.description}
                </p>
                
                <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: 'var(--spacing-sm)', color: 'var(--color-accent-3)' }}>
                  Key Features:
                </h4>
                <ul style={styles.featureList}>
                  {solution.features.map((feature, index) => (
                    <li key={index} style={styles.featureItem}>
                      <svg style={styles.featureIcon} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: 'var(--spacing-sm)', color: 'var(--color-accent-2)' }}>
                  Business Benefits:
                </h4>
                <ul style={styles.benefitsList}>
                  {solution.benefits.map((benefit, index) => (
                    <li key={index} style={styles.benefitItem}>
                      <svg style={styles.featureIcon} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <span className="btn-secondary btn-sm">
                    Explore Products →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section>
        <div className="container">
          <div style={styles.relatedSection}>
            <h2 style={styles.sectionTitle} className="text-gradient">
              Featured Products
            </h2>
            
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
                {products.slice(0, 3).map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="card" style={{ textAlign: 'center', padding: 'var(--spacing-3xl)' }}>
                <h3>Products Coming Soon</h3>
                <p style={{ opacity: 0.7, marginTop: 'var(--spacing-md)' }}>
                  We're working on exciting new solutions for you
                </p>
              </div>
            )}

            <div style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
              <Link href="/products" className="btn-primary">
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

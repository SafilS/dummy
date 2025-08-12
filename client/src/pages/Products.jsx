import { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [filters] = useState({
    search: '',
    category: '',
    tags: [],
    sort: 'newest'
  });

  const { data: products, isLoading, error } = useProducts(filters);

  const styles = {
    pageHeader: {
      padding: 'var(--spacing-3xl) 0 var(--spacing-2xl)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      // Using your abstract geometric heads image
      backgroundImage: 'url("https://images.prismic.io/paddle/0a59eee2-3ede-43c4-a06d-eaa07341c788_abstract-heads-1.png?auto=format%2Ccompress&fit=max&w=1080")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    headerOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      // Enhanced blur effect with darker overlay for better text readability
      background: 'rgba(0, 0, 0, 0.6)',
      backdropFilter: 'blur(2px)', // Increased blur for better effect
      WebkitBackdropFilter: 'blur(2px)', // Safari support
      filter: 'blur(2px)', // Additional blur layer
      pointerEvents: 'none',
    },
    pageTitle: {
      fontSize: 'clamp(36px, 5vw, 56px)',
      fontWeight: 800,
      marginBottom: 'var(--spacing-lg)',
      position: 'relative',
      zIndex: 1,
      letterSpacing: '-0.02em',
      color: 'white',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', 
    },
    pageSubtitle: {
      fontSize: 'clamp(16px, 2.5vw, 20px)',
      opacity: 0.9,
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: 1.6,
      position: 'relative',
      zIndex: 1,
      color: 'white',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
    },
    statsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: 'var(--spacing-xl)',
      marginTop: 'var(--spacing-xl)',
      flexWrap: 'wrap',
      position: 'relative',
      zIndex: 1,
    },
    statItem: {
      textAlign: 'center',
      padding: 'var(--spacing-lg)',
      background: 'rgba(255, 255, 255, 0.15)',
      borderRadius: '16px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      minWidth: '120px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', 
    },
    statNumber: {
      fontSize: '32px',
      fontWeight: 700,
      display: 'block',
      marginBottom: 'var(--spacing-xs)',
      color: 'white',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
    },
    statLabel: {
      fontSize: '14px',
      opacity: 0.9,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      color: 'white',
    },
    // Clean products section
    productsSection: {
      padding: 'var(--spacing-2xl) 0',
      minHeight: '60vh',
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: 'var(--spacing-xl)',
      padding: 'var(--spacing-lg)',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    productsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: 'var(--spacing-xl)',
      marginTop: 'var(--spacing-xl)',
    },
    loadingGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: 'var(--spacing-xl)',
      marginTop: 'var(--spacing-xl)',
    },
    skeletonCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '16px',
      padding: 'var(--spacing-lg)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      animation: 'pulse 2s infinite',
    },
    emptyState: {
      textAlign: 'center',
      padding: 'var(--spacing-3xl)',
      background: 'rgba(255, 255, 255, 0.02)',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      maxWidth: '500px',
      margin: '0 auto',
    },
    emptyIcon: {
      fontSize: '64px',
      opacity: 0.3,
      marginBottom: 'var(--spacing-lg)',
    },
    errorState: {
      textAlign: 'center',
      padding: 'var(--spacing-3xl)',
      background: 'rgba(239, 68, 68, 0.05)',
      borderRadius: '20px',
      border: '1px solid rgba(239, 68, 68, 0.2)',
      maxWidth: '500px',
      margin: '0 auto',
    },
    errorIcon: {
      fontSize: '48px',
      color: '#ef4444',
      marginBottom: 'var(--spacing-lg)',
    },
    actionButton: {
      background: 'linear-gradient(135deg, #a34b6e, #6e4bc3)',
      color: 'white',
      border: 'none',
      padding: 'var(--spacing-md) var(--spacing-xl)',
      borderRadius: '12px',
      fontSize: '16px',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(163, 75, 110, 0.3)',
    }
  };

  const mobileStyles = `
    @media (max-width: 768px) {
      .products-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
      }
      
      .stats-container {
        gap: var(--spacing-md);
      }
      
      .stat-item {
        min-width: 100px;
        padding: var(--spacing-md);
      }
      
      .page-header {
        background-attachment: scroll;
      }
    }

    @keyframes pulse {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 0.8; }
    }

    .action-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(163, 75, 110, 0.4);
    }
  `;

  const featuredProducts = products?.filter(product => [
    'GetMe', 
    'Broker App', 
    'CafeAura', 
    'Viruzverse Billing', 
    'Invoicify', 
    'VR Interior & Exterior Designs', 
    '3D Elevation',
    'FPS Shooting Game'
  ].includes(product.title)) || [];

  const totalProducts = products?.length || 0;

  return (
    <>
      <style>{mobileStyles}</style>
      
      {/* Page Header with Your Abstract Geometric Heads Background */}
      <section style={styles.pageHeader} className="page-header">
        <div style={styles.headerOverlay}></div>
        <div className="container">
          <h1 style={styles.pageTitle} className="text-gradient">
            Our Products
          </h1>
          <p style={styles.pageSubtitle}>
            Discover our innovative solutions across mobile apps, VR/3D experiences, and business utilities designed to transform your digital journey
          </p>
          
          <div style={styles.statsContainer} className="stats-container">
            <div style={styles.statItem} className="stat-item">
              <span style={styles.statNumber} className="text-gradient">{totalProducts}+</span>
              <span style={styles.statLabel}>Products</span>
            </div>
            <div style={styles.statItem} className="stat-item">
              <span style={styles.statNumber} className="text-gradient">3</span>
              <span style={styles.statLabel}>Categories</span>
            </div>
            <div style={styles.statItem} className="stat-item">
              <span style={styles.statNumber} className="text-gradient">100%</span>
              <span style={styles.statLabel}>Innovation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section - Clean Background */}
      <section style={styles.productsSection}>
        <div className="container">
          {isLoading ? (
            <div style={styles.loadingGrid} className="products-grid">
              {[...Array(6)].map((_, i) => (
                <div key={i} style={styles.skeletonCard} className="skeleton-card">
                  <div style={{ 
                    height: '200px', 
                    marginBottom: 'var(--spacing-md)', 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    borderRadius: '12px' 
                  }}></div>
                  <div style={{ 
                    height: '24px', 
                    marginBottom: 'var(--spacing-sm)', 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    borderRadius: '6px',
                    width: '80%' 
                  }}></div>
                  <div style={{ 
                    height: '16px', 
                    marginBottom: 'var(--spacing-md)', 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    borderRadius: '4px',
                    width: '60%' 
                  }}></div>
                  <div style={{ 
                    height: '32px', 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    borderRadius: '8px',
                    width: '40%' 
                  }}></div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div style={styles.errorState}>
              <div style={styles.errorIcon}>⚠️</div>
              <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: '24px', fontWeight: 600 }}>
                Oops! Something went wrong
              </h3>
              <p style={{ marginBottom: 'var(--spacing-lg)', opacity: 0.8, lineHeight: 1.6 }}>
                {error.message || 'We encountered an issue while loading the products. Please try again.'}
              </p>
              <button 
                onClick={() => window.location.reload()}
                style={styles.actionButton}
                className="action-button"
              >
                Refresh Page
              </button>
            </div>
          ) : featuredProducts.length > 0 ? (
            <>
              <div style={styles.sectionHeader}>
                <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: 'var(--spacing-sm)' }}>
                  Our Featured Products
                </h2>
                <p style={{ opacity: 0.8, fontSize: '16px' }}>
                  Showcasing {featuredProducts.length} innovative solutions
                </p>
              </div>
              
              <div style={styles.productsGrid} className="products-grid">
                {featuredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div style={styles.emptyState}>
              <div style={styles.emptyIcon}>📦</div>
              <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: '24px', fontWeight: 600 }}>
                No Products Available
              </h3>
              <p style={{ opacity: 0.7, marginBottom: 'var(--spacing-lg)', lineHeight: 1.6 }}>
                We're working on adding amazing products. Please check back soon!
              </p>
              <button 
                onClick={() => window.location.reload()}
                style={styles.actionButton}
                className="action-button"
              >
                Refresh Page
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

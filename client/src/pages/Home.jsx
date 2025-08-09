import { Link } from 'wouter';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const { data: products, isLoading } = useProducts({ featured: true });

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
    featuredSection: {
      padding: 'var(--spacing-3xl) 0',
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
    productsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: 'var(--spacing-xl)',
    },
    ctaSection: {
      padding: 'var(--spacing-3xl) 0',
      textAlign: 'center',
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-xl)',
      margin: 'var(--spacing-3xl) 0',
    }
  };

  const mobileStyles = `
    @media (max-width: 768px) {
      .hero-actions {
        flex-direction: column;
        align-items: center;
      }
      .products-grid {
        grid-template-columns: 1fr;
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
            <p style={styles.heroSubtitle} className="fade-in-up">
              Cutting-edge VR, cybersecurity, and digital solutions for tomorrow's challenges
            </p>
            <div style={styles.heroActions} className="hero-actions fade-in-up">
              <Link href="/products" className="btn-primary btn-enhanced bounce-hover">
                Explore Products
              </Link>
              <Link href="/about" className="btn-secondary btn-enhanced hover-glow-intense">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section style={styles.featuredSection}>
        <div className="container">
          <h2 style={styles.sectionTitle} className="text-gradient pulse-glow slide-in-left">
            Featured Solutions
          </h2>
          <p style={styles.sectionSubtitle} className="slide-in-right">
            Discover our most innovative and impactful products that are transforming industries
          </p>

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
              <h3>No featured products available</h3>
              <p style={{ opacity: 0.7, marginTop: 'var(--spacing-md)' }}>
                Check back soon for our latest innovations
              </p>
            </div>
          )}
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
              <Link href="/products" className="btn-primary btn-enhanced bounce-hover">
                View All Products
              </Link>
              <Link href="/about" className="btn-secondary btn-enhanced hover-rotate-scale">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

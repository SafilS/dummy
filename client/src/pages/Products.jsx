import { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import SearchToolbar from '../components/SearchToolbar';

export default function Products() {
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    tags: [],
    sort: 'newest'
  });

  const { data: products, isLoading, error } = useProducts(filters);

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const styles = {
    pageHeader: {
      padding: 'var(--spacing-2xl) 0',
      textAlign: 'center',
      background: 'linear-gradient(135deg, rgba(163,75,110,0.1) 0%, rgba(110,75,195,0.1) 50%, rgba(69,183,209,0.1) 100%)',
    },
    pageTitle: {
      fontSize: '48px',
      fontWeight: 700,
      marginBottom: 'var(--spacing-md)',
    },
    pageSubtitle: {
      fontSize: '18px',
      opacity: 0.8,
      maxWidth: '600px',
      margin: '0 auto',
    },
    productsSection: {
      padding: 'var(--spacing-2xl) 0',
    },
    productsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: 'var(--spacing-xl)',
      marginTop: 'var(--spacing-xl)',
    },
    emptyState: {
      textAlign: 'center',
      padding: 'var(--spacing-3xl)',
    },
    errorState: {
      textAlign: 'center',
      padding: 'var(--spacing-3xl)',
      color: '#ef4444',
    }
  };

  const mobileStyles = `
    @media (max-width: 768px) {
      .products-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  return (
    <>
      <style>{mobileStyles}</style>
      
      {/* Page Header */}
      <section style={styles.pageHeader}>
        <div className="container">
          <h1 style={styles.pageTitle} className="text-gradient">
            Our Products
          </h1>
          <p style={styles.pageSubtitle}>
            Discover our innovative solutions across VR, cybersecurity, and digital platforms
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section style={styles.productsSection}>
        <div className="container">
          <SearchToolbar 
            filters={filters}
            onFilterChange={handleFilterChange}
          />

          {isLoading ? (
            <div style={styles.productsGrid} className="products-grid">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="card">
                  <div style={{ height: '200px', marginBottom: 'var(--spacing-md)' }} className="skeleton"></div>
                  <div style={{ height: '24px', marginBottom: 'var(--spacing-sm)' }} className="skeleton"></div>
                  <div style={{ height: '16px', marginBottom: 'var(--spacing-md)' }} className="skeleton"></div>
                  <div style={{ height: '32px' }} className="skeleton"></div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="card" style={styles.errorState}>
              <h3>Error Loading Products</h3>
              <p style={{ marginTop: 'var(--spacing-md)' }}>
                {error.message || 'Failed to load products. Please try again later.'}
              </p>
            </div>
          ) : products && products.length > 0 ? (
            <>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                marginBottom: 'var(--spacing-lg)',
                flexWrap: 'wrap',
                gap: 'var(--spacing-md)'
              }}>
                <p style={{ opacity: 0.8 }}>
                  {products.length} product{products.length !== 1 ? 's' : ''} found
                </p>
              </div>
              
              <div style={styles.productsGrid} className="products-grid">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="card" style={styles.emptyState}>
              <h3>No Products Found</h3>
              <p style={{ opacity: 0.7, marginTop: 'var(--spacing-md)' }}>
                Try adjusting your search criteria or browse all categories
              </p>
              <button 
                onClick={() => setFilters({ search: '', category: '', tags: [], sort: 'newest' })}
                className="btn-secondary"
                style={{ marginTop: 'var(--spacing-lg)' }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

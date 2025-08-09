import { useState } from 'react';
import { useParams, Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { apiGet } from '../lib/api';
import RequestAccessModal from '../components/RequestAccessModal';

export default function ProductDetail() {
  const { slug } = useParams();
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const { data: product, isLoading, error } = useQuery({
    queryKey: ['/api/products/slug', slug],
    queryFn: () => apiGet(`/api/products/slug/${slug}`),
    enabled: !!slug
  });

  const styles = {
    hero: {
      position: 'relative',
      height: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 'var(--spacing-2xl)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, rgba(163,75,110,0.1) 0%, rgba(110,75,195,0.1) 50%, rgba(69,183,209,0.1) 100%)',
    },
    heroBg: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: product?.images?.[0] ? `url(${product.images[0]})` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.3,
    },
    heroContent: {
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
      padding: '0 var(--spacing-lg)',
    },
    heroTitle: {
      fontSize: '48px',
      fontWeight: 700,
      marginBottom: 'var(--spacing-md)',
    },
    heroSubtitle: {
      fontSize: '18px',
      opacity: 0.9,
    },
    detailLayout: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--spacing-2xl)',
      marginBottom: 'var(--spacing-3xl)',
    },
    imageSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-md)',
    },
    mainImage: {
      width: '100%',
      height: '300px',
      objectFit: 'cover',
      borderRadius: 'var(--radius-md)',
      border: '1px solid rgba(255,255,255,0.1)',
    },
    thumbnails: {
      display: 'flex',
      gap: 'var(--spacing-sm)',
      flexWrap: 'wrap',
    },
    thumbnail: {
      width: '80px',
      height: '60px',
      objectFit: 'cover',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      transition: 'var(--transition-fast)',
      border: '2px solid transparent',
    },
    thumbnailActive: {
      borderColor: 'var(--color-accent-2)',
    },
    productInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-lg)',
    },
    badges: {
      display: 'flex',
      gap: 'var(--spacing-sm)',
      flexWrap: 'wrap',
      marginBottom: 'var(--spacing-md)',
    },
    badge: {
      padding: '6px 12px',
      borderRadius: 'var(--radius-sm)',
      fontSize: '12px',
      fontWeight: 600,
      background: 'var(--gradient-primary)',
    },
    featureList: {
      listStyle: 'none',
      padding: 0,
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-sm)',
      marginBottom: 'var(--spacing-sm)',
    },
    featureIcon: {
      width: '20px',
      height: '20px',
      color: 'var(--color-accent-3)',
    },
    techStack: {
      display: 'flex',
      gap: 'var(--spacing-xs)',
      flexWrap: 'wrap',
    },
    techChip: {
      background: 'rgba(255,255,255,0.1)',
      padding: '4px 8px',
      borderRadius: 'var(--radius-sm)',
      fontSize: '12px',
    },
    actions: {
      display: 'flex',
      gap: 'var(--spacing-md)',
      flexWrap: 'wrap',
    },
    metrics: {
      display: 'flex',
      gap: 'var(--spacing-lg)',
      marginTop: 'var(--spacing-md)',
    },
    metric: {
      textAlign: 'center',
    },
    metricValue: {
      fontSize: '24px',
      fontWeight: 700,
      color: 'var(--color-accent-3)',
    },
    metricLabel: {
      fontSize: '12px',
      opacity: 0.7,
    }
  };

  const mobileStyles = `
    @media (max-width: 768px) {
      .detail-layout {
        grid-template-columns: 1fr;
      }
      .hero-title {
        font-size: 32px !important;
      }
      .actions {
        flex-direction: column;
      }
    }
  `;

  if (isLoading) {
    return (
      <div className="container" style={{ padding: 'var(--spacing-3xl) 0' }}>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container" style={{ padding: 'var(--spacing-3xl) 0' }}>
        <div className="card" style={{ textAlign: 'center', padding: 'var(--spacing-3xl)' }}>
          <h1>Product Not Found</h1>
          <p style={{ marginTop: 'var(--spacing-md)', opacity: 0.7 }}>
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/products" className="btn-primary" style={{ marginTop: 'var(--spacing-lg)' }}>
            View All Products
          </Link>
        </div>
      </div>
    );
  }

  const features = [
    'Real-time threat detection with 99.9% accuracy',
    'Automated incident response and mitigation',
    'Advanced behavioral analysis and anomaly detection',
    'Cloud-native architecture with global scalability',
    'Enterprise-grade security and compliance'
  ];

  return (
    <>
      <style>{mobileStyles}</style>
      
      <div className="container" style={{ padding: 'var(--spacing-2xl) 0' }}>
        {/* Product Hero */}
        <div style={styles.hero}>
          {product.images?.[0] && <div style={styles.heroBg}></div>}
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle} className="text-gradient hero-title">
              {product.title}
            </h1>
            <p style={styles.heroSubtitle}>
              {product.shortDescription}
            </p>
          </div>
        </div>

        {/* Product Details */}
        <div style={styles.detailLayout} className="detail-layout">
          {/* Images Section */}
          <div style={styles.imageSection}>
            {product.images && product.images.length > 0 ? (
              <>
                <img 
                  src={product.images[selectedImageIndex] || product.images[0]} 
                  alt={product.title}
                  style={styles.mainImage}
                />
                {product.images.length > 1 && (
                  <div style={styles.thumbnails}>
                    {product.images.map((image, index) => (
                      <img 
                        key={index}
                        src={image}
                        alt={`${product.title} screenshot ${index + 1}`}
                        style={{
                          ...styles.thumbnail,
                          ...(selectedImageIndex === index ? styles.thumbnailActive : {})
                        }}
                        onClick={() => setSelectedImageIndex(index)}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div style={{
                ...styles.mainImage,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--color-surface)',
                color: 'rgba(255,255,255,0.5)'
              }}>
                No image available
              </div>
            )}
          </div>

          {/* Product Info */}
          <div style={styles.productInfo}>
            <div className="card">
              <h3>Product Overview</h3>
              <p style={{ marginTop: 'var(--spacing-md)' }}>
                {product.longDescription}
              </p>
              
              <div style={styles.badges}>
                <span style={styles.badge}>{product.category?.name}</span>
                <span style={styles.badge}>{product.status === 'published' ? 'Available' : 'Coming Soon'}</span>
              </div>

              <div style={styles.actions} className="actions">
                {product.demoUrl && (
                  <a href={product.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Live Demo
                  </a>
                )}
                <button onClick={() => setShowRequestModal(true)} className="btn-secondary">
                  Request Access
                </button>
                {product.repoUrl && (
                  <a href={product.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    View Repository
                  </a>
                )}
              </div>

              {/* Product Metrics */}
              <div style={styles.metrics}>
                <div style={styles.metric}>
                  <div style={styles.metricValue}>{product.downloads?.toLocaleString() || '0'}</div>
                  <div style={styles.metricLabel}>Downloads</div>
                </div>
                <div style={styles.metric}>
                  <div style={styles.metricValue}>{product.users?.toLocaleString() || '0'}</div>
                  <div style={styles.metricLabel}>Active Users</div>
                </div>
                <div style={styles.metric}>
                  <div style={styles.metricValue}>{'★'.repeat(product.rating || 0)}</div>
                  <div style={styles.metricLabel}>Rating</div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3>Key Features</h3>
              <ul style={styles.featureList}>
                {features.map((feature, index) => (
                  <li key={index} style={styles.featureItem}>
                    <svg style={styles.featureIcon} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {product.techStack && product.techStack.length > 0 && (
              <div className="card">
                <h3>Technology Stack</h3>
                <div style={styles.techStack}>
                  {product.techStack.map((tech, index) => (
                    <span key={index} style={styles.techChip}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Back to Products */}
        <div style={{ textAlign: 'center', marginTop: 'var(--spacing-3xl)' }}>
          <Link href="/products" className="btn-secondary">
            ← Back to Products
          </Link>
        </div>
      </div>

      {/* Request Access Modal */}
      <RequestAccessModal 
        isOpen={showRequestModal}
        onClose={() => setShowRequestModal(false)}
        productId={product.id}
        productTitle={product.title}
      />
    </>
  );
}

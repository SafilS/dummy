import { Link } from 'wouter';

export default function ProductCard({ product }) {
  const styles = {
    card: {
      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(168, 85, 247, 0.08) 50%, rgba(236, 72, 153, 0.08) 100%)',
      borderRadius: '20px',
      overflow: 'hidden',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '1px solid rgba(99, 102, 241, 0.2)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      backdropFilter: 'blur(15px)',
      boxShadow: '0 4px 20px rgba(99, 102, 241, 0.1)',
      cursor: 'pointer',
    },
    cardTopBorder: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'linear-gradient(90deg, #6366f1, #a855f7, #ec4899)',
      opacity: 0.8,
    },
    cardGlow: {
      position: 'absolute',
      top: '-50%',
      left: '-50%',
      width: '200%',
      height: '200%',
      background: 'radial-gradient(circle, rgba(99, 102, 241, 0.03) 0%, transparent 70%)',
      opacity: 0,
      transition: 'opacity 0.4s ease',
      pointerEvents: 'none',
    },
    imageContainer: {
      position: 'relative',
      overflow: 'hidden',
      height: '200px',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.4s ease',
    },
    imageOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 100%)',
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
    statusBadge: {
      position: 'absolute',
      top: '12px',
      right: '12px',
      background: 'rgba(16, 185, 129, 0.9)',
      color: 'white',
      padding: '4px 8px',
      borderRadius: '12px',
      fontSize: '10px',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      backdropFilter: 'blur(10px)',
    },
    info: {
      padding: 'var(--spacing-lg)',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      zIndex: 1,
    },
    title: {
      fontSize: '20px',
      fontWeight: 700,
      marginBottom: 'var(--spacing-sm)',
      color: '#374151',
      lineHeight: 1.3,
      transition: 'color 0.3s ease',
    },
    description: {
      color: '#6b7280',
      marginBottom: 'var(--spacing-lg)',
      fontSize: '14px',
      display: '-webkit-box',
      WebkitLineClamp: 4,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      lineHeight: 1.5,
      flex: 1,
    },
    metaContainer: {
      marginBottom: 'var(--spacing-lg)',
    },
    categoryBadge: {
      background: 'rgba(99, 102, 241, 0.1)',
      color: '#6366f1',
      padding: '6px 12px',
      borderRadius: '12px',
      fontSize: '11px',
      fontWeight: 600,
      border: '1px solid rgba(99, 102, 241, 0.2)',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      display: 'inline-block',
      marginRight: 'var(--spacing-xs)',
      marginBottom: 'var(--spacing-xs)',
      transition: 'all 0.3s ease',
    },
    featuredBadge: {
      background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
      color: 'white',
      padding: '6px 12px',
      borderRadius: '12px',
      fontSize: '11px',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      display: 'inline-block',
      marginRight: 'var(--spacing-xs)',
      marginBottom: 'var(--spacing-xs)',
      boxShadow: '0 2px 8px rgba(245, 158, 11, 0.3)',
    },
    actions: {
      display: 'flex',
      gap: 'var(--spacing-sm)',
      marginTop: 'auto',
    },
    primaryButton: {
      background: 'linear-gradient(135deg, #6366f1, #a855f7)',
      color: 'white',
      border: 'none',
      padding: 'var(--spacing-sm) var(--spacing-md)',
      borderRadius: '10px',
      fontSize: '13px',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      flex: 1,
      position: 'relative',
      overflow: 'hidden',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    secondaryButton: {
      background: 'rgba(99, 102, 241, 0.1)',
      color: '#6366f1',
      border: '1px solid rgba(99, 102, 241, 0.3)',
      padding: 'var(--spacing-sm) var(--spacing-md)',
      borderRadius: '10px',
      fontSize: '13px',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '80px',
    },
    buttonShimmer: {
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
      transition: 'left 0.5s ease',
    },
    noImage: {
      height: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))',
      color: '#6b7280',
      fontSize: '14px',
      fontWeight: 500,
    },
  };

  const handleMouseEnter = (e) => {
    const card = e.currentTarget;
    const image = card.querySelector('.product-image');
    const glow = card.querySelector('.card-glow');
    const overlay = card.querySelector('.image-overlay');
    
    // Card hover effects
    card.style.transform = 'translateY(-8px) scale(1.02)';
    card.style.boxShadow = '0 25px 50px rgba(99, 102, 241, 0.2)';
    card.style.borderColor = 'rgba(99, 102, 241, 0.4)';
    card.style.background = 'linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(168, 85, 247, 0.12) 50%, rgba(236, 72, 153, 0.12) 100%)';
    
    // Image effects
    if (image) {
      image.style.transform = 'scale(1.05)';
    }
    
    // Glow effect
    if (glow) {
      glow.style.opacity = '1';
    }
    
    // Image overlay
    if (overlay) {
      overlay.style.opacity = '1';
    }
    
    // Title color change
    const title = card.querySelector('.product-title');
    if (title) {
      title.style.color = '#6366f1';
    }
    
    // Category badge hover
    const categoryBadge = card.querySelector('.category-badge');
    if (categoryBadge) {
      categoryBadge.style.background = 'rgba(99, 102, 241, 0.15)';
      categoryBadge.style.borderColor = 'rgba(99, 102, 241, 0.3)';
      categoryBadge.style.transform = 'translateY(-1px)';
    }
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    const image = card.querySelector('.product-image');
    const glow = card.querySelector('.card-glow');
    const overlay = card.querySelector('.image-overlay');
    
    // Reset card styles
    card.style.transform = '';
    card.style.boxShadow = '0 4px 20px rgba(99, 102, 241, 0.1)';
    card.style.borderColor = 'rgba(99, 102, 241, 0.2)';
    card.style.background = 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(168, 85, 247, 0.08) 50%, rgba(236, 72, 153, 0.08) 100%)';
    
    // Reset image
    if (image) {
      image.style.transform = '';
    }
    
    // Reset glow
    if (glow) {
      glow.style.opacity = '0';
    }
    
    // Reset overlay
    if (overlay) {
      overlay.style.opacity = '0';
    }
    
    // Reset title color
    const title = card.querySelector('.product-title');
    if (title) {
      title.style.color = '#374151';
    }
    
    // Reset category badge
    const categoryBadge = card.querySelector('.category-badge');
    if (categoryBadge) {
      categoryBadge.style.background = 'rgba(99, 102, 241, 0.1)';
      categoryBadge.style.borderColor = 'rgba(99, 102, 241, 0.2)';
      categoryBadge.style.transform = '';
    }
  };

  const getCategoryColor = (category) => {
    const categoryLower = category?.toLowerCase() || '';
    if (categoryLower.includes('mobile') || categoryLower.includes('app')) {
      return { bg: 'rgba(16, 185, 129, 0.1)', color: '#10b981', border: 'rgba(16, 185, 129, 0.2)' };
    } else if (categoryLower.includes('vr') || categoryLower.includes('3d')) {
      return { bg: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', border: 'rgba(245, 158, 11, 0.2)' };
    } else if (categoryLower.includes('business') || categoryLower.includes('utility')) {
      return { bg: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6', border: 'rgba(139, 92, 246, 0.2)' };
    }
    return { bg: 'rgba(99, 102, 241, 0.1)', color: '#6366f1', border: 'rgba(99, 102, 241, 0.2)' };
  };

  const categoryColors = getCategoryColor(product.category?.name);

  return (
    <Link href={`/products/${product.slug}`} style={{ textDecoration: 'none' }}>
      <div 
        className="product-card"
        style={styles.card}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Top Border */}
        <div style={styles.cardTopBorder}></div>
        
        {/* Glow Effect */}
        <div className="card-glow" style={styles.cardGlow}></div>
        
        {/* Image Container */}
        <div style={styles.imageContainer} className="product-card-image">
          {product.images && product.images[0] ? (
            <>
              <img 
                src={product.images[0]} 
                alt={product.title}
                style={styles.image}
                className="product-image"
              />
              <div className="image-overlay" style={styles.imageOverlay}></div>
            </>
          ) : (
            <div style={styles.noImage}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '32px', marginBottom: '8px', opacity: 0.5 }}>📱</div>
                <div>No image available</div>
              </div>
            </div>
          )}
          
          {/* Status Badge */}
          {product.status === 'published' && (
            <div style={styles.statusBadge}>Live</div>
          )}
        </div>
        
        {/* Card Info */}
        <div style={styles.info}>
          <h3 className="product-card-title product-title" style={styles.title}>
            {product.title}
          </h3>
          
          <p className="product-card-description" style={styles.description}>
            {product.shortDescription || product.description}
          </p>
          
          {/* Category & Featured Badges */}
          <div style={styles.metaContainer} className="product-card-tags">
            <span 
              className="category-badge product-card-tag"
              style={{
                ...styles.categoryBadge,
                background: categoryColors.bg,
                color: categoryColors.color,
                borderColor: categoryColors.border,
              }}
            >
              {product.category?.name || 'General'}
            </span>
            
            {product.featured && (
              <span style={styles.featuredBadge} className="product-card-tag">
                ⭐ Featured
              </span>
            )}
          </div>
          
          {/* Action Buttons */}
          <div style={styles.actions} className="product-card-footer">
            <button 
              className="product-card-button"
              style={styles.primaryButton}
              onMouseEnter={(e) => {
                const shimmer = e.target.querySelector('.button-shimmer');
                if (shimmer) shimmer.style.left = '100%';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 10px 25px rgba(99, 102, 241, 0.3)';
                e.target.style.background = 'linear-gradient(135deg, #5855f0, #9333ea)';
              }}
              onMouseLeave={(e) => {
                const shimmer = e.target.querySelector('.button-shimmer');
                if (shimmer) shimmer.style.left = '-100%';
                e.target.style.transform = '';
                e.target.style.boxShadow = '';
                e.target.style.background = 'linear-gradient(135deg, #6366f1, #a855f7)';
              }}
            >
              <span className="button-shimmer" style={styles.buttonShimmer}></span>
              View Details
            </button>
            
            {product.demoUrl && (
              <a 
                href={product.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.secondaryButton}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(99, 102, 241, 0.15)';
                  e.target.style.borderColor = 'rgba(99, 102, 241, 0.4)';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(99, 102, 241, 0.1)';
                  e.target.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                  e.target.style.transform = '';
                }}
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

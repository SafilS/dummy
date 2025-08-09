import { Link } from 'wouter';

export default function ProductCard({ product }) {
  const styles = {
    card: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      transition: 'var(--transition-medium)',
      border: '1px solid rgba(255,255,255,0.1)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    },
    cardHover: {
      transform: 'scale(1.02)',
      boxShadow: 'var(--shadow-glow)',
      borderColor: 'var(--color-accent-2)',
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      transition: 'var(--transition-medium)',
    },
    imageContainer: {
      position: 'relative',
      overflow: 'hidden',
    },
    imageHover: {
      transform: 'scale(1.05)',
    },
    info: {
      padding: 'var(--spacing-lg)',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      fontSize: '20px',
      fontWeight: 600,
      marginBottom: 'var(--spacing-sm)',
      color: 'var(--color-text-primary)',
    },
    description: {
      opacity: 0.8,
      marginBottom: 'var(--spacing-md)',
      fontSize: '14px',
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      lineHeight: 1.4,
      flex: 1,
    },
    meta: {
      display: 'flex',
      gap: 'var(--spacing-sm)',
      marginBottom: 'var(--spacing-md)',
      flexWrap: 'wrap',
    },
    badge: {
      background: 'var(--gradient-primary)',
      padding: '4px 8px',
      borderRadius: 'var(--radius-sm)',
      fontSize: '12px',
      fontWeight: 500,
    },
    techStack: {
      display: 'flex',
      gap: 'var(--spacing-xs)',
      marginBottom: 'var(--spacing-md)',
      flexWrap: 'wrap',
    },
    techChip: {
      background: 'rgba(255,255,255,0.1)',
      padding: '2px 6px',
      borderRadius: 'var(--radius-sm)',
      fontSize: '11px',
    },
    actions: {
      display: 'flex',
      gap: 'var(--spacing-sm)',
      marginTop: 'auto',
    },
    metrics: {
      display: 'flex',
      gap: 'var(--spacing-md)',
      marginBottom: 'var(--spacing-md)',
      fontSize: '12px',
      opacity: 0.7,
    },
    metric: {
      display: 'flex',
      alignItems: 'center',
      gap: '2px',
    }
  };

  const handleMouseEnter = (e) => {
    const card = e.currentTarget;
    const image = card.querySelector('.product-image');
    Object.assign(card.style, styles.cardHover);
    if (image) {
      Object.assign(image.style, styles.imageHover);
    }
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    const image = card.querySelector('.product-image');
    card.style.transform = '';
    card.style.boxShadow = '';
    card.style.borderColor = 'rgba(255,255,255,0.1)';
    if (image) {
      image.style.transform = '';
    }
  };

  return (
    <Link href={`/products/${product.slug}`}>
      <div 
        className="product-card-enhanced hover-lift"
        style={styles.card}
      >
        <div style={styles.imageContainer}>
        {product.images && product.images[0] ? (
          <img 
            src={product.images[0]} 
            alt={product.title}
            style={styles.image}
            className="product-image"
          />
        ) : (
          <div 
            style={{
              ...styles.image,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--color-surface)',
              color: 'rgba(255,255,255,0.5)',
              fontSize: '14px'
            }}
          >
            No image available
          </div>
        )}
      </div>
      
      <div style={styles.info}>
        <h3 style={styles.title}>{product.title}</h3>
        <p style={styles.description}>{product.shortDescription}</p>
        
        <div style={styles.meta}>
          <span style={styles.badge}>{product.category?.name || 'General'}</span>
          {product.featured && <span style={styles.badge}>Featured</span>}
          {product.status === 'published' && <span style={styles.badge}>Available</span>}
        </div>
        
        {product.techStack && product.techStack.length > 0 && (
          <div style={styles.techStack}>
            {product.techStack.slice(0, 4).map((tech, index) => (
              <span key={index} style={styles.techChip}>
                {tech}
              </span>
            ))}
            {product.techStack.length > 4 && (
              <span style={styles.techChip}>+{product.techStack.length - 4}</span>
            )}
          </div>
        )}

        {/* Product Metrics */}
        <div style={styles.metrics}>
          {product.downloads > 0 && (
            <div style={styles.metric}>
              <span>📥</span>
              <span>{product.downloads.toLocaleString()}</span>
            </div>
          )}
          {product.users > 0 && (
            <div style={styles.metric}>
              <span>👥</span>
              <span>{product.users.toLocaleString()}</span>
            </div>
          )}
          {product.rating > 0 && (
            <div style={styles.metric}>
              <span>⭐</span>
              <span>{product.rating}/5</span>
            </div>
          )}
        </div>
        
        <div style={styles.actions}>
          <button className="btn-primary btn-sm">
            View Details
          </button>
          {product.demoUrl && (
            <a 
              href={product.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary btn-sm"
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

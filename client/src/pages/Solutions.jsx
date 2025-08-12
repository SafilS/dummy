import { Link } from 'wouter';
import backgroundVideo from './assets/background.mp4';

export default function Solutions() {
  const industries = [
    { 
      name: 'Education & Training', 
      icon: '📚', 
      description: 'Interactive learning experiences enhanced by immersive simulations and virtual classrooms for skill mastery.', 
      img: 'https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?w=800&auto=format&fit=crop&q=80'
    },
    { 
      name: 'Mobile Application Development', 
      icon: '📱', 
      description: 'Cross-platform mobile apps with real-time data synchronization and offline capabilities for seamless user experiences.', 
      img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D'
    },
    { 
      name: 'Hospitality', 
      icon: '🏨', 
      description:'Applications for hotels, restaurants, and travel agencies to enhance customer engagement.', 
      img: 'https://plus.unsplash.com/premium_photo-1661302861607-6f3c68a2140d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9zcGl0YWxpdHl8ZW58MHx8MHx8fDA%3D0'
    },
    { 
      name: 'Real Estate', 
      icon: '🏠', 
      description: 'Virtual tours and interactive 3D layouts to showcase properties remotely with lifelike precision.', 
      img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80'
    },
    { 
      name: 'Entertainment', 
      icon: '🎮', 
      description: 'Immersive gaming experiences with real-time interaction and enhanced realism.', 
      img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80'
    },
    { 
      name: 'Virtual Reality (VR)', 
      icon: '🕶', 
      description: 'Immersive VR experiences for training, design, entertainment, and collaboration in fully virtual environments.', 
      img: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlydHVhbCUyMHJlYWxpdHl8ZW58MHx8MHx8fDA%3D'
    },
    { 
      name: '3D Modeling', 
      icon: '🖌', 
      description: 'High-detail 3D models for product design, architecture, and simulation with realistic rendering.', 
      img: 'https://images.unsplash.com/photo-1719345539016-f84748d48e37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fDNEJTIwbW9kZWxsaW5nfGVufDB8fDB8fHww'
    }
  ];

  const styles = {
    pageHeader: {
      padding: 'var(--spacing-3xl) 0 var(--spacing-2xl)',
      paddingTop: '120px',
      textAlign: 'center',
      marginBottom: 'var(--spacing-2xl)',
    },
    industryRow: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-xl)',
      marginBottom: 'var(--spacing-xl)',
      flexWrap: 'wrap',
      padding: 'var(--spacing-md)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'all 0.4s ease',
      cursor: 'pointer',
      background: 'rgba(20, 0, 40, 0.4)',
      backdropFilter: 'blur(6px)'
    },
    industryImage: {
      flex: '1 1 300px',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      aspectRatio: '16/9',
      minHeight: '220px',
      transition: 'transform 0.5s ease'
    },
    industryContent: {
      flex: '1 1 300px',
    },
    industryImgTag: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transition: 'transform 0.5s ease'
    },
    industryIcon: {
      fontSize: '2.5rem',
      marginBottom: 'var(--spacing-sm)'
    },
    industryName: {
      fontSize: '2rem',
      marginBottom: 'var(--spacing-xs)',
      fontWeight: 'bold'
    },
    industryDescription: {
      fontSize: '1.1rem',
      opacity: 0.9,
      lineHeight: 1.6
    }
  };

 const mobileStyles = `
  @media (max-width: 768px) {
    .industry-row {
      flex-direction: column !important;
      text-align: center;
    }
    .industry-row img {
      height: 200px;
    }
  }
  @keyframes glowPulse {
    0% { box-shadow: 0 0 25px rgba(120, 0, 180, 0.8); }
    50% { box-shadow: 0 0 60px rgba(180, 0, 255, 1); }
    100% { box-shadow: 0 0 25px rgba(120, 0, 180, 0.8); }
  }
`;


 const handleHover = (e, isHovering) => {
  const img = e.currentTarget.querySelector('img'); // grab the image element
  if (isHovering) {
    e.currentTarget.style.transform = 'translateY(-6px)';
    e.currentTarget.style.animation = 'glowPulse 1.5s infinite';
    e.currentTarget.style.borderColor = 'rgba(180, 0, 255, 1)';
    e.currentTarget.style.boxShadow = '0 0 40px rgba(180, 0, 255, 0.9)';
    if (img) img.style.transform = 'scale(1.08)';
  } else {
    e.currentTarget.style.transform = '';
    e.currentTarget.style.animation = '';
    e.currentTarget.style.boxShadow = '';
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
    if (img) img.style.transform = '';
  }
};

  return (
    <>
      <style>{mobileStyles}</style>
      
      {/* Industry Served Hero Section */}
      <section style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginBottom: 'var(--spacing-3xl)',
        overflow: 'hidden'
      }}>
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'blur(2px)',
            opacity: 0.8,
            zIndex: 1
          }}
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for better text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 2
        }}></div>
        
        {/* Content */}
        <div className="container" style={{ 
          position: 'relative', 
          zIndex: 3, 
          textAlign: 'center',
          color: 'white',
          padding: 'var(--spacing-3xl) var(--spacing-lg)'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 700,
            marginBottom: 'var(--spacing-lg)',
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
          }}>
            Industry Served
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            opacity: 0.9,
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.6,
            textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
          }}>
            We provide innovative solutions across diverse industries, leveraging cutting-edge technology 
            to transform businesses and drive digital excellence in every sector we serve.
          </p>
        </div>
      </section>

      {/* Industries Grid Section */}
      <section>
        <div className="container">
          <h2 style={styles.sectionTitle} className="text-gradient">
            Our Solutions
          </h2>
          {industries.map((industry, index) => (
            <div
              key={index}
              className="industry-row"
              style={{
                ...styles.industryRow,
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
              }}
              onMouseEnter={(e) => handleHover(e, true)}
              onMouseLeave={(e) => handleHover(e, false)}
            >
              <div style={styles.industryImage}>
                <img src={industry.img} alt={industry.name} style={styles.industryImgTag} />
              </div>
              <div style={styles.industryContent}>
                <div style={styles.industryIcon}>{industry.icon}</div>
                <h4 className="text-gradient" style={{ ...styles.industryName }}>
                  {industry.name}
                </h4>
                <p style={styles.industryDescription}>{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
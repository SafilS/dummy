import { useState, useEffect } from 'react';
import '../styles/journey-animations.css';
import journeyBg from '../assests/journey.jpeg';

export default function Journey() {
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleViewDetails = (milestone) => {
    setSelectedMilestone(milestone);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedMilestone(null);
  };
  const journeyMilestones = [
    {
      phase: 'Phase 01',
      year: '2020',
      title: 'The Spark of Innovation',
      subtitle: 'From Vision to Reality',
      icon: '💡',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop&crop=center',
      description: 'VIRUZVERSE was born from a simple question: What if technology could solve real-world problems while nurturing the next generation of IT leaders?',
      shortDescription: 'The birth of VIRUZVERSE from a vision to solve real-world problems with technology.',
      fullDescription: 'It all began with a simple yet profound question: What if technology could solve real-world problems while nurturing the next generation of IT leaders? In the depths of a global pandemic, when the world needed digital solutions more than ever, VIRUZVERSE was born from the convergence of three passionate minds.',
      achievements: [
        'Founded with vision to bridge technology and education',
        'Identified gap in immersive learning solutions',
        'Established core values: Innovation, Security, Global Impact'
      ],
      highlight: 'Virtual reality wasn\'t just entertainment—it was the future of learning.'
    },
    {
      phase: 'Phase 02',
      year: '2021',
      title: 'Building the Foundation',
      subtitle: 'First Steps into Tomorrow',
      icon: '🚀',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop&crop=center',
      description: 'We launched GetMe, a revolutionary school bus tracking solution that showcased our ability to blend cutting-edge technology with practical applications.',
      shortDescription: 'Launched GetMe - our flagship school bus tracking solution.',
      fullDescription: 'Our first year was about proving concepts and building trust. We launched with GetMe, a revolutionary school bus tracking solution that showcased our ability to blend cutting-edge technology with practical applications. Parents could finally track their children\'s school buses in real-time, while schools gained unprecedented attendance management capabilities.',
      achievements: [
        'Launched GetMe - flagship school tracking solution',
        'Served 1,000+ students across multiple schools',
        'Developed cross-platform expertise',
        'Established reputation for reliable solutions'
      ],
      highlight: 'GetMe was proof that technology could make families feel safer.'
    },
    {
      phase: 'Phase 03',
      year: '2022',
      title: 'Expanding Horizons',
      subtitle: 'Diversifying Our Digital DNA',
      icon: '🎯',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center',
      description: 'We ventured into real estate with Broker App and hospitality with CafeAura, learning that great technology is industry-intelligent.',
      shortDescription: 'Expanded into real estate and hospitality sectors.',
      fullDescription: 'Growth meant exploring new territories. We ventured into real estate with our Broker App, revolutionizing how brokers find and present properties. Simultaneously, we entered the hospitality sector with CafeAura, making food ordering seamless for both mobile and desktop users. Each project taught us something new about different industries.',
      achievements: [
        'Launched Broker App with property matching',
        'Introduced CafeAura with QR verification',
        'Expanded team with domain specialists',
        'Achieved 95% client satisfaction rate'
      ],
      highlight: 'Great technology isn\'t one-size-fits-all—it\'s industry-intelligent.'
    },
    {
      phase: 'Phase 04',
      year: '2023',
      title: 'The VR Revolution',
      subtitle: 'Stepping into Virtual Realities',
      icon: '🥽',
      image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=500&h=300&fit=crop&crop=center',
      description: 'We established our VR Division, creating immersive experiences that transformed how architects and clients collaborate through virtual walkthroughs.',
      shortDescription: 'Established VR Division for immersive architectural experiences.',
      fullDescription: 'This was our breakthrough year. We officially established our VR Division, creating immersive interior and exterior design experiences that transformed how architects and clients collaborate. Our 3D elevation renderings became the gold standard for showcasing building exteriors, while our VR solutions enabled clients to \'walk through\' their future spaces before construction began.',
      achievements: [
        'Established dedicated VR and 3D Division',
        'Created photorealistic architectural visualizations',
        'Developed Unity and Blender expertise',
        'Completed 50+ VR projects'
      ],
      highlight: 'When clients first \'walked\' through unbuilt homes, we knew VR had unlimited potential.'
    },
    {
      phase: 'Phase 05',
      year: '2024',
      title: 'Enterprise Evolution',
      subtitle: 'Scaling Solutions, Amplifying Impact',
      icon: '🌍',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop&crop=center',
      description: 'VIRUZVERSE evolved into a comprehensive digital solutions powerhouse with BillBro, Invoicify, and Sentinel AI protecting enterprises globally.',
      shortDescription: 'Evolved into a comprehensive digital solutions powerhouse.',
      fullDescription: 'Today, VIRUZVERSE stands as a comprehensive digital solutions powerhouse. From BillBro\'s lightning-fast billing for retail shops to Invoicify\'s advanced inventory analytics, we\'ve proven that innovation scales. Our Sentinel AI security platform now protects enterprises globally, while our VR training simulations are reshaping professional education across industries.',
      achievements: [
        'Launched Sentinel AI for enterprise cybersecurity',
        'Deployed solutions across 10+ countries',
        'Achieved 99.9% uptime across platforms',
        'Built global network of 10,000+ users'
      ],
      highlight: 'We\'re crafting the digital infrastructure for tomorrow\'s world.'
    }
  ];

  const coreValues = [
    {
      icon: '🔬',
      title: 'Innovation Through Experimentation',
      description: 'Every breakthrough starts with curiosity. We embrace failure as a stepping stone to innovation.'
    },
    {
      icon: '🛡️',
      title: 'Security by Design',
      description: 'In a digital world, trust is everything. We build security into every line of code, every user interaction.'
    },
    {
      icon: '🌟',
      title: 'People-Centered Technology',
      description: 'Technology should amplify human potential, not replace it. Every solution we create puts people first.'
    },
    {
      icon: '🎓',
      title: 'Learning Never Stops',
      description: 'We\'re not just building the future—we\'re learning from it. Every project teaches us something new.'
    }
  ];

  const styles = {
    pageContainer: {
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      color: '#ffffff'
    },
    heroSection: {
      position: 'relative',
      height: '60vh',
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${journeyBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
    heroContent: {
      maxWidth: '800px',
      padding: '0 20px'
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    heroSubtitle: {
      fontSize: '1.3rem',
      color: '#b0b0b0',
      marginBottom: '2rem'
    },
    milestonesSection: {
      padding: '80px 0',
      backgroundColor: '#111111'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '3rem',
      color: '#ffffff'
    },
    cardsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    milestoneCard: {
      backgroundColor: '#1a1a1a',
      borderRadius: '16px',
      border: '1px solid #333',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden'
    },
    cardImage: {
      width: '100%',
      height: '280px',
      objectFit: 'cover',
      borderRadius: '12px 12px 0 0'
    },
    cardContent: {
      padding: '1.5rem'
    },
    viewDetailsBtn: {
      backgroundColor: '#667eea',
      color: 'white',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '8px',
      fontSize: '0.9rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '1rem',
      width: '100%'
    },
    detailsModal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    },
    detailsContent: {
      backgroundColor: '#1a1a1a',
      borderRadius: '16px',
      padding: '2rem',
      maxWidth: '800px',
      maxHeight: '90vh',
      overflow: 'auto',
      position: 'relative',
      border: '1px solid #333'
    },
    closeBtn: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      backgroundColor: 'transparent',
      border: 'none',
      color: '#ffffff',
      fontSize: '1.5rem',
      cursor: 'pointer',
      padding: '0.5rem',
      borderRadius: '50%',
      transition: 'background-color 0.3s ease'
    },
    detailsImage: {
      width: '100%',
      height: '300px',
      objectFit: 'cover',
      borderRadius: '12px',
      marginBottom: '2rem'
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '1.5rem'
    },
    phaseLabel: {
      backgroundColor: '#667eea',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontSize: '0.9rem',
      fontWeight: '600'
    },
    yearBadge: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#667eea'
    },
    cardTitle: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '0.5rem'
    },
    cardSubtitle: {
      fontSize: '1rem',
      color: '#b0b0b0',
      marginBottom: '1.5rem',
      fontStyle: 'italic'
    },
    cardDescription: {
      fontSize: '1rem',
      lineHeight: '1.6',
      color: '#d0d0d0',
      marginBottom: '1.5rem'
    },
    achievementsList: {
      listStyle: 'none',
      padding: 0,
      margin: '1.5rem 0'
    },
    achievementItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '0.8rem',
      fontSize: '0.95rem',
      color: '#c0c0c0'
    },
    achievementIcon: {
      color: '#667eea',
      marginRight: '0.8rem',
      marginTop: '0.2rem',
      fontSize: '0.8rem'
    },
    highlight: {
      backgroundColor: '#2a2a2a',
      padding: '1rem',
      borderRadius: '8px',
      borderLeft: '4px solid #667eea',
      fontSize: '0.95rem',
      color: '#e0e0e0',
      fontStyle: 'italic'
    },
    cardIcon: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      fontSize: '1.5rem',
      opacity: '0.8',
      backgroundColor: 'rgba(0,0,0,0.7)',
      padding: '0.5rem',
      borderRadius: '50%'
    },
    valuesSection: {
      padding: '80px 0',
      backgroundColor: '#0a0a0a'
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '0 20px'
    },
    valueCard: {
      backgroundColor: '#1a1a1a',
      padding: '2rem',
      borderRadius: '12px',
      textAlign: 'center',
      border: '1px solid #333',
      transition: 'all 0.3s ease'
    },
    valueIcon: {
      fontSize: '3rem',
      marginBottom: '1rem'
    },
    valueTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '1rem'
    },
    valueDescription: {
      color: '#b0b0b0',
      lineHeight: '1.6'
    },
    ctaSection: {
      textAlign: 'center',
      padding: '80px 20px',
      backgroundColor: '#111111'
    },
    ctaTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#ffffff'
    },
    ctaDescription: {
      fontSize: '1.2rem',
      color: '#b0b0b0',
      marginBottom: '2rem',
      maxWidth: '600px',
      margin: '0 auto 2rem'
    }
  };

  const handleCardHover = (e, isHovering) => {
    if (isHovering) {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.3)';
      e.currentTarget.style.borderColor = '#667eea';
    } else {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
      e.currentTarget.style.borderColor = '#333';
    }
  };

  return (
    <div style={styles.pageContainer}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Our Journey Through Innovation
          </h1>
          <p style={styles.heroSubtitle}>
            From Vision to Virtual Reality - Discover how VIRUZVERSE evolved through each milestone
          </p>
        </div>
      </section>

      {/* Journey Milestones Cards */}
      <section style={styles.milestonesSection}>
        <div className="container">
          <h2 style={styles.sectionTitle}>
            Our Journey Milestones
          </h2>
          <div style={styles.cardsGrid}>
            {journeyMilestones.map((milestone, index) => (
              <div 
                key={index}
                style={styles.milestoneCard}
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                <img 
                  src={milestone.image} 
                  alt={milestone.title}
                  style={styles.cardImage}
                />
                
                <div style={styles.cardContent}>
                  <div style={styles.cardIcon}>
                    {milestone.icon}
                  </div>
                  
                  <div style={styles.cardHeader}>
                    <div style={styles.phaseLabel}>
                      {milestone.phase}
                    </div>
                    <div style={styles.yearBadge}>
                      {milestone.year}
                    </div>
                  </div>
                  
                  <h3 style={styles.cardTitle}>
                    {milestone.title}
                  </h3>
                  
                  <div style={styles.cardSubtitle}>
                    {milestone.subtitle}
                  </div>
                  
                  <p style={styles.cardDescription}>
                    {milestone.shortDescription}
                  </p>
                  
                  <button 
                    style={styles.viewDetailsBtn}
                    onClick={() => handleViewDetails(milestone)}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#5a67d8';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#667eea';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={styles.valuesSection}>
        <div className="container">
          <h2 style={styles.sectionTitle}>
            The Values That Drive Us Forward
          </h2>
          <div style={styles.valuesGrid}>
            {coreValues.map((value, index) => (
              <div 
                key={index}
                style={styles.valueCard}
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                <div style={styles.valueIcon}>
                  {value.icon}
                </div>
                <h3 style={styles.valueTitle}>
                  {value.title}
                </h3>
                <p style={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div className="container">
          <h2 style={styles.ctaTitle}>
            The Journey Continues
          </h2>
          <p style={styles.ctaDescription}>
            We're just getting started. Join us as we continue to push the boundaries of what's possible in the digital realm.
          </p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/about" className="btn-primary">
              Learn About Our Mission
            </a>
            <a href="/products" className="btn-secondary">
              Explore Our Solutions
            </a>
          </div>
        </div>
      </section>

      {/* Details Modal */}
      {showDetails && selectedMilestone && (
        <div style={styles.detailsModal} onClick={handleCloseDetails}>
          <div style={styles.detailsContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeBtn} onClick={handleCloseDetails}>
              ×
            </button>
            
            <img 
              src={selectedMilestone.image} 
              alt={selectedMilestone.title}
              style={styles.detailsImage}
            />
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={styles.phaseLabel}>
                {selectedMilestone.phase}
              </div>
              <div style={styles.yearBadge}>
                {selectedMilestone.year}
              </div>
            </div>
            
            <h2 style={{ ...styles.cardTitle, fontSize: '2.5rem', marginBottom: '0.5rem' }}>
              {selectedMilestone.title}
            </h2>
            
            <div style={{ ...styles.cardSubtitle, fontSize: '1.2rem', marginBottom: '2rem' }}>
              {selectedMilestone.subtitle}
            </div>
            
            <p style={{ ...styles.cardDescription, fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              {selectedMilestone.fullDescription}
            </p>
            
            <h3 style={{ color: '#ffffff', fontSize: '1.3rem', marginBottom: '1rem' }}>Key Achievements</h3>
            <ul style={styles.achievementsList}>
              {selectedMilestone.achievements.map((achievement, idx) => (
                <li key={idx} style={{ ...styles.achievementItem, fontSize: '1rem', marginBottom: '1rem' }}>
                  <span style={styles.achievementIcon}>
                    ✦
                  </span>
                  {achievement}
                </li>
              ))}
            </ul>
            
            <div style={{ ...styles.highlight, marginTop: '2rem', fontSize: '1rem', padding: '1.5rem' }}>
              <strong>💫 The Breakthrough:</strong> {selectedMilestone.highlight}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { useState, useEffect } from 'react';
import '../styles/journey-animations.css';

export default function Journey() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  const journeyMilestones = [
    {
      phase: 'Phase 01',
      year: '2020',
      title: 'The Spark of Innovation',
      subtitle: 'From Vision to Reality',
      icon: '💡',
      description: 'It all began with a simple yet profound question: What if technology could solve real-world problems while nurturing the next generation of IT leaders? In the depths of a global pandemic, when the world needed digital solutions more than ever, VIRUZVERSE was born from the convergence of three passionate minds.',
      achievements: [
        'Founded with a clear vision to bridge technology and education',
        'Identified the gap in immersive learning solutions',
        'Established core values: Innovation, Security, and Global Impact'
      ],
      highlight: 'The moment we realized that virtual reality wasn\'t just entertainment—it was the future of learning.'
    },
    {
      phase: 'Phase 02',
      year: '2021',
      title: 'Building the Foundation',
      subtitle: 'First Steps into Tomorrow',
      icon: '🚀',
      description: 'Our first year was about proving concepts and building trust. We launched with GetMe, a revolutionary school bus tracking solution that showcased our ability to blend cutting-edge technology with practical applications. Parents could finally track their children\'s school buses in real-time, while schools gained unprecedented attendance management capabilities.',
      achievements: [
        'Launched GetMe - our flagship school tracking solution',
        'Served 1,000+ students across multiple schools',
        'Developed cross-platform expertise (Mobile and Desktop)',
        'Established our reputation for reliable, user-focused solutions'
      ],
      highlight: 'GetMe wasn\'t just our first product—it was proof that technology could make families feel safer.'
    },
    {
      phase: 'Phase 03',
      year: '2022',
      title: 'Expanding Horizons',
      subtitle: 'Diversifying Our Digital DNA',
      icon: '🎯',
      description: 'Growth meant exploring new territories. We ventured into real estate with our Broker App, revolutionizing how brokers find and present properties. Simultaneously, we entered the hospitality sector with CafeAura, making food ordering seamless for both mobile and desktop users. Each project taught us something new about different industries.',
      achievements: [
        'Launched Broker App with location-based property matching',
        'Introduced CafeAura with QR code verification system',
        'Expanded team to include specialists in multiple domains',
        'Achieved 95% client satisfaction rate'
      ],
      highlight: 'The year we learned that great technology isn\'t one-size-fits-all—it\'s industry-intelligent.'
    },
    {
      phase: 'Phase 04',
      year: '2023',
      title: 'The VR Revolution',
      subtitle: 'Stepping into Virtual Realities',
      icon: '🥽',
      description: 'This was our breakthrough year. We officially established our VR Division, creating immersive interior and exterior design experiences that transformed how architects and clients collaborate. Our 3D elevation renderings became the gold standard for showcasing building exteriors, while our VR solutions enabled clients to \'walk through\' their future spaces before construction began.',
      achievements: [
        'Established dedicated VR and 3D Division',
        'Created photorealistic architectural visualizations',
        'Developed Unity and Blender expertise',
        'Completed 50+ VR projects across architecture and training'
      ],
      highlight: 'The moment our clients first \'walked\' through their unbuilt homes—that\'s when we knew VR had unlimited potential.'
    },
    {
      phase: 'Phase 05',
      year: '2024',
      title: 'Enterprise Evolution',
      subtitle: 'Scaling Solutions, Amplifying Impact',
      icon: '🌍',
      description: 'Today, VIRUZVERSE stands as a comprehensive digital solutions powerhouse. From BillBro\'s lightning-fast billing for retail shops to Invoicify\'s advanced inventory analytics, we\'ve proven that innovation scales. Our Sentinel AI security platform now protects enterprises globally, while our VR training simulations are reshaping professional education across industries.',
      achievements: [
        'Launched Sentinel AI for enterprise cybersecurity',
        'Deployed solutions across 10+ countries',
        'Achieved 99.9% uptime across all platforms',
        'Built a global network of 10,000+ active users'
      ],
      highlight: 'We\'re no longer just building products—we\'re crafting the digital infrastructure for tomorrow\'s world.'
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
    pageHeader: {
      padding: 'var(--spacing-3xl) 0',
      textAlign: 'center',
      background: 'linear-gradient(135deg, rgba(163,75,110,0.1) 0%, rgba(110,75,195,0.1) 50%, rgba(69,183,209,0.1) 100%)',
      marginTop: '80px',
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
    introSection: {
      padding: 'var(--spacing-3xl) 0',
      textAlign: 'center',
    },
    introTitle: {
      fontSize: '36px',
      fontWeight: 600,
      marginBottom: 'var(--spacing-lg)',
    },
    introText: {
      fontSize: '20px',
      lineHeight: 1.6,
      maxWidth: '900px',
      margin: '0 auto',
      opacity: 0.9,
    },
    journeySection: {
      padding: 'var(--spacing-3xl) 0',
    },
    timelineContainer: {
      position: 'relative',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    milestone: {
      display: 'flex',
      gap: 'var(--spacing-2xl)',
      marginBottom: 'var(--spacing-3xl)',
      alignItems: 'flex-start',
      position: 'relative',
    },
    milestoneReverse: {
      flexDirection: 'row-reverse',
    },
    milestoneIcon: {
      fontSize: '48px',
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      background: 'var(--gradient-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      position: 'relative',
      zIndex: 2,
    },
    milestoneContent: {
      flex: 1,
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--spacing-xl)',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'var(--transition-medium)',
    },
    milestonePhase: {
      fontSize: '12px',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '1px',
      opacity: 0.7,
      marginBottom: 'var(--spacing-xs)',
    },
    milestoneYear: {
      fontSize: '24px',
      fontWeight: 700,
      color: 'var(--color-accent-3)',
      marginBottom: 'var(--spacing-sm)',
    },
    milestoneTitle: {
      fontSize: '28px',
      fontWeight: 600,
      marginBottom: 'var(--spacing-xs)',
    },
    milestoneSubtitle: {
      fontSize: '16px',
      opacity: 0.8,
      fontStyle: 'italic',
      marginBottom: 'var(--spacing-lg)',
    },
    milestoneDescription: {
      fontSize: '16px',
      lineHeight: 1.6,
      marginBottom: 'var(--spacing-lg)',
      opacity: 0.9,
    },
    achievementsList: {
      listStyle: 'none',
      padding: 0,
      marginBottom: 'var(--spacing-lg)',
    },
    achievementItem: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--spacing-sm)',
      marginBottom: 'var(--spacing-sm)',
      fontSize: '14px',
      opacity: 0.8,
    },
    achievementIcon: {
      color: 'var(--color-accent-3)',
      fontSize: '16px',
    },
    highlight: {
      background: 'rgba(110,75,195,0.1)',
      border: '1px solid rgba(110,75,195,0.3)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--spacing-md)',
      fontStyle: 'italic',
      fontSize: '15px',
      opacity: 0.9,
      position: 'relative',
    },
    valuesSection: {
      padding: 'var(--spacing-3xl) 0',
      background: 'var(--color-surface)',
    },
    sectionTitle: {
      fontSize: '42px',
      fontWeight: 700,
      textAlign: 'center',
      marginBottom: 'var(--spacing-xl)',
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: 'var(--spacing-xl)',
      marginTop: 'var(--spacing-2xl)',
    },
    valueCard: {
      background: 'rgba(255,255,255,0.03)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--spacing-xl)',
      textAlign: 'center',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'var(--transition-medium)',
    },
    valueIcon: {
      fontSize: '48px',
      marginBottom: 'var(--spacing-md)',
    },
    valueTitle: {
      fontSize: '20px',
      fontWeight: 600,
      marginBottom: 'var(--spacing-md)',
    },
    valueDescription: {
      fontSize: '14px',
      lineHeight: 1.6,
      opacity: 0.8,
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
    }
  };

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section, index) => {
        const offsetTop = section.offsetTop;
        const height = section.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          setActiveSection(index);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Simple card hover effect
  const handleCardHover = (e, isHovering) => {
    if (isHovering) {
      e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
      e.currentTarget.style.boxShadow = '0 20px 60px rgba(110, 75, 195, 0.4), 0 0 50px rgba(163, 75, 110, 0.2)';
      e.currentTarget.style.borderColor = 'rgba(110, 75, 195, 0.5)';
      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))';
    } else {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = '';
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
      e.currentTarget.style.background = 'var(--color-surface)';
    }
  };

  // Enhanced styles with animations
  const enhancedStyles = {
    ...styles,
    pageContainer: {
      position: 'relative',
      minHeight: '100vh',
      background: 'linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(15,10,30,0.98) 50%, rgba(0,0,0,0.95) 100%)',
      overflow: 'hidden'
    },
    threeCanvas: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none'
    },
    scrollProgress: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: `${(scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`,
      height: '3px',
      background: 'linear-gradient(90deg, #a34b6e, #6e4bc3, #45b7d1)',
      zIndex: 1000,
      transition: 'width 0.1s ease',
      boxShadow: '0 0 10px rgba(110,75,195,0.8)'
    },
    floatingNav: {
      position: 'fixed',
      right: '30px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 100,
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    },
    navDot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.3)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      border: '2px solid transparent'
    },
    navDotActive: {
      background: 'linear-gradient(45deg, #a34b6e, #6e4bc3)',
      transform: 'scale(1.2)',
      boxShadow: '0 0 15px rgba(110,75,195,0.8)'
    },
    parallaxElement: {
      transform: `translateY(${scrollY * 0.5}px) translateZ(0)`,
      willChange: 'transform'
    },
    timelineConnector: {
      position: 'absolute',
      left: '50%',
      top: '0',
      width: '2px',
      height: '100%',
      background: 'linear-gradient(to bottom, transparent, rgba(110,75,195,0.4), rgba(163,75,110,0.4), transparent)',
      transform: 'translateX(-50%)',
      zIndex: 1
    }
  };

  return (
    <div style={enhancedStyles.pageContainer}>
      {/* Scroll Progress Bar */}
      <div style={enhancedStyles.scrollProgress} />
      
      {/* Floating Navigation */}
      <div style={enhancedStyles.floatingNav}>
        {['Header', 'Intro', 'Timeline', 'Values', 'CTA'].map((section, index) => (
          <div
            key={section}
            style={{
              ...enhancedStyles.navDot,
              ...(activeSection === index ? enhancedStyles.navDotActive : {})
            }}
            onClick={() => {
              const element = document.querySelectorAll('section')[index];
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          />
        ))}
      </div>
      
      {/* Page Header */}
      <section style={styles.pageHeader}>
        <div className="container">
          <h1 style={{
            ...styles.pageTitle,
            background: 'linear-gradient(135deg, #ffffff, #a34b6e, #6e4bc3, #45b7d1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'shimmer 3s ease-in-out infinite'
          }}>
            Our Journey
          </h1>
          <p style={styles.pageSubtitle}>
            From a spark of innovation to a global digital powerhouse—this is the VIRUZVERSE story
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section style={styles.introSection}>
        <div className="container">
          <h2 style={styles.introTitle}>
            Where Innovation Meets Purpose
          </h2>
          <p style={styles.introText}>
            Every great journey begins with a simple question. Ours was: <em>"What if technology could not only solve today's problems but also prepare us for tomorrow's possibilities?"</em> 
            What started as a vision has evolved into a mission—to create digital solutions that don't just work, but inspire, protect, and empower.
          </p>
        </div>
      </section>

      {/* Journey Timeline */}
      <section style={styles.journeySection}>
        <div className="container">
          <div style={styles.timelineContainer}>
            {journeyMilestones.map((milestone, index) => (
              <div 
                key={index}
                style={{
                  ...styles.milestone,
                  ...(index % 2 === 1 ? styles.milestoneReverse : {})
                }}
              >
                <div style={styles.milestoneIcon}>
                  {milestone.icon}
                </div>
                
                <div 
                  style={styles.milestoneContent}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <div style={styles.milestonePhase}>
                    {milestone.phase}
                  </div>
                  
                  <div style={styles.milestoneYear}>
                    {milestone.year}
                  </div>
                  
                  <h3 style={styles.milestoneTitle}>
                    {milestone.title}
                  </h3>
                  
                  <div style={styles.milestoneSubtitle}>
                    {milestone.subtitle}
                  </div>
                  
                  <p style={styles.milestoneDescription}>
                    {milestone.description}
                  </p>
                  
                  <ul style={styles.achievementsList}>
                    {milestone.achievements.map((achievement, idx) => (
                      <li key={idx} style={styles.achievementItem}>
                        <span style={styles.achievementIcon}>
                          ✦
                        </span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  
                  <div style={styles.highlight}>
                    <strong>💫 The Breakthrough:</strong> {milestone.highlight}
                  </div>
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
      <section>
        <div className="container">
          <div style={styles.ctaSection}>
            <h2 style={styles.ctaTitle}>
              The Journey Continues
            </h2>
            <p style={styles.ctaDescription}>
              We're just getting started. Join us as we continue to push the boundaries of what's possible in the digital realm.
            </p>
            <div style={{ display: 'flex', gap: 'var(--spacing-lg)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/about" className="btn-primary">
                Learn About Our Mission
              </a>
              <a href="/products" className="btn-secondary">
                Explore Our Solutions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

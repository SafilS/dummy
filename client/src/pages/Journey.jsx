import { useState } from 'react';
import '../styles/journey-animations.css';
import journeyBg from '../assests/journey.jpeg';

export default function Journey() {
  const [hoveredMilestone, setHoveredMilestone] = useState(null);

  const journeyMilestones = [
    {
      year: '2020',
      title: 'The Spark of Innovation',
      icon: '💡',
      description: 'VIRUZVERSE was born from a simple question: What if technology could solve real-world problems while nurturing the next generation of IT leaders?'
    },
    {
      year: '2021',
      title: 'Building the Foundation',
      icon: '🚀',
      description: 'We launched GetMe, a revolutionary school bus tracking solution that showcased our ability to blend cutting-edge technology with practical applications.'
    },
    {
      year: '2022',
      title: 'Expanding Horizons',
      icon: '🎯',
      description: 'We ventured into real estate with Broker App and hospitality with CafeAura, learning that great technology is industry-intelligent.'
    },
    {
      year: '2023',
      title: 'The VR Revolution',
      icon: '🥽',
      description: 'We established our VR Division, creating immersive experiences that transformed how architects and clients collaborate through virtual walkthroughs.'
    },
    {
      year: '2024',
      title: 'Enterprise Evolution',
      icon: '🌍',
      description: 'VIRUZVERSE evolved into a comprehensive digital solutions powerhouse with BillBro, Invoicify, and Sentinel AI protecting enterprises globally.'
    }
  ];

  const styles = {
    pageContainer: {
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    },
    heroSection: {
      position: 'relative',
      height: '60vh',
      backgroundImage: `linear-gradient(rgba(248, 181, 181, 0.7),   rgba(208, 143, 143, 0.7)), url(${journeyBg})`,
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
    timelineSection: {
      padding: '100px 20px',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    },
    timelineWrapper: {
      position: 'relative',
      width: '80%',
      height: '300px',
      margin: '0 auto',
    },
    timelinePath: {
      position: 'absolute',
      top: '50%',
      left: '0',
      right: '0',
      height: '2px',
      backgroundColor: '#333',
      transform: 'translateY(-50%)',
    },
    milestoneNode: {
      position: 'absolute',
      width: '100px',
      textAlign: 'center',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    milestoneIconContainer: {
      backgroundColor: '#1a1a1a',
      border: '1px solid #2a2a2a',
      borderRadius: '12px',
      padding: '20px',
      display: 'inline-block',
      fontSize: '32px',
      transition: 'all 0.3s ease',
    },
    milestoneYear: {
      color: '#888',
      fontWeight: 'bold',
      marginTop: '10px',
    },
    milestoneConnector: {
      width: '2px',
      height: '50px',
      backgroundColor: '#444',
      margin: '5px 0',
    },
    milestoneDetails: {
      marginTop: '40px',
      backgroundColor: '#1c1c1c',
      padding: '25px',
      borderRadius: '12px',
      border: '1px solid #333',
      width: '60%',
      textAlign: 'center',
      minHeight: '150px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      transition: 'opacity 0.3s ease'
    },
    detailsTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#667eea',
      marginBottom: '10px'
    },
    detailsDescription: {
      fontSize: '1rem',
      color: '#ccc',
      lineHeight: '1.6'
    }
  };

  return (
    <div style={styles.pageContainer}>
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Our Journey Through Innovation</h1>
          <p style={styles.heroSubtitle}>From Vision to Virtual Reality - Discover how VIRUZVERSE evolved through each milestone</p>
        </div>
      </section>

      <section style={styles.timelineSection}>
        <div style={styles.timelineWrapper}>
          <div style={styles.timelinePath}></div>
          {journeyMilestones.map((milestone, index) => {
            const isAbove = index % 2 === 0;
            const nodeStyle = {
              ...styles.milestoneNode,
              left: `${(index / (journeyMilestones.length - 1)) * 100}%`,
              top: isAbove ? 'auto' : '50%',
              bottom: isAbove ? '50%' : 'auto',
              transform: `translate(-50%, ${isAbove ? '0' : '0'})`,
            };

            return (
              <div 
                key={index} 
                style={nodeStyle}
                onMouseEnter={() => setHoveredMilestone(milestone)} 
                onMouseLeave={() => setHoveredMilestone(null)}
              >
                {isAbove ? (
                  <>
                    <div style={styles.milestoneIconContainer}>{milestone.icon}</div>
                    <div style={styles.milestoneYear}>{milestone.year}</div>
                    <div style={styles.milestoneConnector}></div>
                  </>
                ) : (
                  <>
                    <div style={styles.milestoneConnector}></div>
                    <div style={styles.milestoneIconContainer}>{milestone.icon}</div>
                    <div style={styles.milestoneYear}>{milestone.year}</div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        <div style={{...styles.milestoneDetails, opacity: hoveredMilestone ? 1 : 0}}>
          {hoveredMilestone ? (
            <>
              <h3 style={styles.detailsTitle}>{hoveredMilestone.title}</h3>
              <p style={styles.detailsDescription}>{hoveredMilestone.description}</p>
            </>
          ) : (
            <p style={styles.detailsDescription}>Hover over a milestone to see the details.</p>
          )}
        </div>
      </section>
    </div>
  );
}

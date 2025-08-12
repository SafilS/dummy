import { useState } from 'react';

export default function Careers() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Image variables
  const headerBackgroundImage = 'https://i.pinimg.com/736x/4e/77/91/4e779138901d7a9c049f74ebcf83140d.jpg';
  const floatingShapesImage = 'https://i.pinimg.com/originals/63/59/92/6359927786655355830b3c3d2c5d9c3f.jpg';
  const ctaBackgroundImage = 'https://i.pinimg.com/1200x/5e/cc/02/5ecc02c20947ae6059dbc1068cd8cf5a.jpg';

  const styles = {
    pageHeader: {
      padding: '150px 0 100px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: `url(${headerBackgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    headerOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(10, 10, 20, 0.85)',
    },
    headerContent: {
      position: 'relative',
      zIndex: 2,
    },
    pageTitle: {
      fontSize: '72px',
      fontWeight: 800,
      marginBottom: '20px',
      color: 'white',
      textShadow: '0 4px 20px rgba(0,0,0,0.3)',
      lineHeight: 1.2,
      position: 'relative',
      display: 'inline-block',
    },
    titleBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: `url(${floatingShapesImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      mixBlendMode: 'overlay',
      opacity: 0.7,
      zIndex: -1,
      borderRadius: '20px',
      padding: '0 20px',
    },
    pageSubtitle: {
      fontSize: '22px',
      opacity: 0.9,
      maxWidth: '700px',
      margin: '0 auto',
      color: 'white',
      textShadow: '0 2px 10px rgba(0,0,0,0.2)',
      lineHeight: 1.5,
    },
    floatingShapes: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1,
      overflow: 'hidden',
    },
    shape: {
      position: 'absolute',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.1)',
      filter: 'blur(30px)',
    },
    mainSection: {
      padding: '80px 0',
      background: '#0a0a14',
    },
    rolesContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    roleCard: {
      display: 'flex',
      alignItems: 'center',
      gap: '60px',
      marginBottom: '120px',
    },
    roleCardReverse: {
      flexDirection: 'row-reverse',
    },
    roleImage: {
      width: '50%',
      borderRadius: '20px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
      transition: 'all 0.3s ease',
      position: 'relative',
      cursor: 'pointer',
    },
    roleImageHover: {
      transform: 'scale(1.02)',
      boxShadow: `
        0 0 5px #fff,
        0 0 10px #fff,
        0 0 15px #a34b6e,
        0 0 20px #6e4bc3,
        0 0 25px #45b7d1,
        0 0 30px #45b7d1
      `,
    },
    roleContent: {
      width: '50%',
    },
    roleTitle: {
      fontSize: '42px',
      fontWeight: 700,
      marginBottom: '20px',
      background: 'linear-gradient(90deg, #a34b6e, #6e4bc3, #45b7d1)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    roleDescription: {
      fontSize: '18px',
      lineHeight: 1.7,
      color: 'rgba(255,255,255,0.8)',
      marginBottom: '30px',
    },
    roleSkills: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      marginBottom: '30px',
    },
    skillTag: {
      padding: '8px 15px',
      background: 'rgba(255,255,255,0.05)',
      borderRadius: '50px',
      fontSize: '14px',
      color: 'rgba(255,255,255,0.8)',
    },
    applyButton: {
      display: 'inline-block',
      padding: '12px 30px',
      background: 'linear-gradient(90deg, #a34b6e, #6e4bc3)',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '50px',
      fontWeight: 600,
      fontSize: '16px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 5px 15px rgba(110, 75, 195, 0.4)',
    },
    applyButtonHover: {
      transform: 'translateY(-3px)',
      boxShadow: '0 8px 25px rgba(110, 75, 195, 0.6)',
    },
    ctaSection: {
      textAlign: 'center',
      padding: '80px 0 40px',
      backgroundImage: `url(${ctaBackgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      borderRadius: '20px',
      margin: '0 40px',
      overflow: 'hidden',
    },
    ctaOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(10, 10, 20, 0.85)',
      zIndex: 1,
    },
    ctaContent: {
      position: 'relative',
      zIndex: 2,
    },
    ctaTitle: {
      fontSize: '36px',
      fontWeight: 700,
      marginBottom: '20px',
      background: 'linear-gradient(90deg, #a34b6e, #6e4bc3)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    ctaText: {
      fontSize: '18px',
      maxWidth: '700px',
      margin: '0 auto 30px',
      color: 'rgba(255,255,255,0.8)',
      lineHeight: 1.6,
    },
  };

  const roles = [
    {
      title: "Cloud Architect",
      description: "Design and implement cutting-edge cloud solutions that power our global infrastructure using AWS, Azure, and GCP to build scalable, secure systems.",
      image: "https://media.istockphoto.com/id/2203755012/photo/big-data-storage-cloud-computing-concepts.webp?a=1&b=1&s=612x612&w=0&k=20&c=btKH9iH8Cl6fHyrtY-HvMM7COn6cDKVwDFOlMPTEjS0=",
      skills: ["Cloud Infrastructure", "Security", "DevOps", "Microservices", "Serverless", "Monitoring"]
    },
    {
      title: "Fullstack Developer",
      description: "Create seamless digital experiences from frontend to backend using modern frameworks like React, Node.js, and Next.js to build performant applications.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      skills: ["React/Vue/Angular", "Node.js/Python", "Databases", "APIs", "UI/UX", "Performance"]
    },
    {
      title: "Digital Marketing Strategist",
      description: "Craft data-driven marketing campaigns that drive growth and engagement through creative strategies combined with analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      skills: ["Analytics", "SEO/SEM", "Social Media", "Content Creation", "Growth", "Targeting"]
    },
    {
      title: "VR/AR Developer",
      description: "Push the boundaries of immersive technology by creating groundbreaking virtual and augmented reality experiences using Unity and Unreal Engine.",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      skills: ["Game Engines", "3D Modeling", "XR Hardware", "Spatial Computing", "Performance", "AI Integration"]
    },
    {
      title: "Mobile App Developer",
      description: "Build performant, beautiful mobile applications for iOS and Android that users love and rely on every day.",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      skills: ["Native Development", "Performance", "Security", "State Management", "Analytics", "Tooling"]
    },
    {
      title: "Brand Designer",
      description: "Shape our visual identity and create compelling brand experiences through stunning visuals, animations, and branding.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      skills: ["Visual Design", "Typography", "Motion Design", "Creative Tools", "Brand Strategy", "Digital Design"]
    }
  ];

  const generateRandomShapes = () => {
    const shapes = [];
    for (let i = 0; i < 10; i++) {
      const size = Math.random() * 300 + 100;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const opacity = Math.random() * 0.2 + 0.1;
      
      shapes.push(
        <div 
          key={i}
          style={{
            ...styles.shape,
            width: `${size}px`,
            height: `${size}px`,
            left: `${x}%`,
            top: `${y}%`,
            opacity: opacity,
            background: i % 2 === 0 
              ? 'rgba(163,75,110,0.3)' 
              : i % 3 === 0 
                ? 'rgba(110,75,195,0.3)' 
                : 'rgba(69,183,209,0.3)',
          }}
        />
      );
    }
    return shapes;
  };

  return (
    <div style={{ background: '#0a0a14', color: 'white' }}>
      {/* Hero Section */}
      <section style={styles.pageHeader}>
        <div style={styles.headerOverlay}></div>
        <div style={styles.floatingShapes}>
          {generateRandomShapes()}
        </div>
        <div style={styles.headerContent} className="container">
          <h1 style={styles.pageTitle}>
            <span style={styles.titleBackground}></span>
            Build the Future With Us
          </h1>
          <p style={styles.pageSubtitle}>
            Join our team of innovators and help create cutting-edge digital experiences.
            Explore exciting career opportunities across multiple disciplines.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={styles.mainSection}>
        <div style={styles.rolesContainer}>
          {roles.map((role, index) => (
            <div 
              key={index} 
              style={{
                ...styles.roleCard,
                ...(index % 2 !== 0 && styles.roleCardReverse)
              }}
            >
              <img 
                src={role.image}
                alt={role.title}
                style={{
                  ...styles.roleImage,
                  ...(hoveredCard === `image-${index}` && styles.roleImageHover)
                }}
                onMouseEnter={() => setHoveredCard(`image-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => window.open(role.image, '_blank')}
              />
              <div style={styles.roleContent}>
                <h2 style={styles.roleTitle}>{role.title}</h2>
                <p style={styles.roleDescription}>{role.description}</p>
                <div style={styles.roleSkills}>
                  {role.skills.map((skill, i) => (
                    <span key={i} style={styles.skillTag}>{skill}</span>
                  ))}
                </div>
                <button 
                  style={{
                    ...styles.applyButton,
                    ...(hoveredCard === `apply-${index}` && styles.applyButtonHover)
                  }}
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeS51F1uURL-dk5mHmT0IU58j2geAuEBMe7KQt4QLBMpUbLLA/viewform', '_blank')}
                  onMouseEnter={() => setHoveredCard(`apply-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={styles.ctaSection}>
          <div style={styles.ctaOverlay}></div>
          <div style={styles.ctaContent}>
            <h3 style={styles.ctaTitle}>Not Seeing Your Perfect Role?</h3>
            <p style={styles.ctaText}>
              We're always looking for talented individuals. Send us your resume and portfolio,
              and we'll contact you when a matching opportunity becomes available.
            </p>
            <button 
              style={{
                ...styles.applyButton,
                ...(hoveredCard === 'general-apply' && styles.applyButtonHover)
              }}
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeS51F1uURL-dk5mHmT0IU58j2geAuEBMe7KQt4QLBMpUbLLA/viewform', '_blank')}
              onMouseEnter={() => setHoveredCard('general-apply')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              Submit General Application
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
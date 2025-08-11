import { useState } from 'react';

export default function Careers() {
  const [activeTab, setActiveTab] = useState('trainee');

  const styles = {
    pageHeader: {
      padding: 'var(--spacing-2xl) 0',
      textAlign: 'center',
      background: 'linear-gradient(135deg, rgba(163,75,110,0.1) 0%, rgba(110,75,195,0.1) 50%, rgba(69,183,209,0.1) 100%)',
    paddingTop: '120px',
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
    mainSection: {
      padding: 'var(--spacing-2xl) 0',
    },
    tabsContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 'var(--spacing-2xl)',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
    },
    tab: {
      padding: 'var(--spacing-md) var(--spacing-xl)',
      background: 'none',
      border: 'none',
      color: 'rgba(255,255,255,0.7)',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: 500,
      transition: 'var(--transition-medium)',
      borderBottom: '3px solid transparent',
    },
    activeTab: {
      color: 'var(--color-accent-3)',
      borderBottomColor: 'var(--color-accent-3)',
    },
    tabContent: {
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center',
    },
    tabTitle: {
      fontSize: '32px',
      fontWeight: 600,
      marginBottom: 'var(--spacing-lg)',
      color: 'var(--color-text-primary)',
    },
    tabDescription: {
      fontSize: '18px',
      lineHeight: 1.6,
      marginBottom: 'var(--spacing-xl)',
      opacity: 0.8,
    },
    requirementsList: {
      textAlign: 'left',
      maxWidth: '600px',
      margin: '0 auto var(--spacing-xl)',
      padding: 'var(--spacing-lg)',
      background: 'rgba(255,255,255,0.05)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid rgba(255,255,255,0.1)',
    },
    requirementsTitle: {
      fontSize: '20px',
      fontWeight: 600,
      marginBottom: 'var(--spacing-md)',
      color: 'var(--color-accent-2)',
    },
    requirementsItem: {
      marginBottom: 'var(--spacing-sm)',
      paddingLeft: 'var(--spacing-md)',
      position: 'relative',
    },
    requirementsItemBefore: {
      content: '"•"',
      position: 'absolute',
      left: 0,
      color: 'var(--color-accent-3)',
    },
    ctaSection: {
      marginTop: 'var(--spacing-2xl)',
      padding: 'var(--spacing-xl)',
      background: 'rgba(255,255,255,0.05)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid rgba(255,255,255,0.1)',
    },
    ctaTitle: {
      fontSize: '24px',
      fontWeight: 600,
      marginBottom: 'var(--spacing-md)',
      color: 'var(--color-accent-3)',
    },
    ctaDescription: {
      marginBottom: 'var(--spacing-lg)',
      opacity: 0.8,
    },
    applyButton: {
      display: 'inline-block',
      padding: 'var(--spacing-md) var(--spacing-xl)',
      background: 'var(--gradient-primary)',
      color: 'white',
      textDecoration: 'none',
      borderRadius: 'var(--radius-md)',
      fontWeight: 600,
      transition: 'var(--transition-medium)',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
    },
    applyButtonHover: {
      transform: 'translateY(-2px)',
      boxShadow: 'var(--shadow-glow)',
    },
    benefitsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: 'var(--spacing-lg)',
      marginTop: 'var(--spacing-xl)',
    },
    benefitCard: {
      padding: 'var(--spacing-lg)',
      background: 'rgba(255,255,255,0.05)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid rgba(255,255,255,0.1)',
      textAlign: 'center',
      transition: 'var(--transition-medium)',
    },
    benefitCardHover: {
      transform: 'translateY(-4px)',
      boxShadow: 'var(--shadow-glow)',
      borderColor: 'var(--color-accent-2)',
    },
    benefitIcon: {
      fontSize: '32px',
      marginBottom: 'var(--spacing-md)',
    },
    benefitTitle: {
      fontSize: '18px',
      fontWeight: 600,
      marginBottom: 'var(--spacing-sm)',
      color: 'var(--color-accent-2)',
    },
    benefitDescription: {
      fontSize: '14px',
      opacity: 0.8,
      lineHeight: 1.5,
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleApplyClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeS51F1uURL-dk5mHmT0IU58j2geAuEBMe7KQt4QLBMpUbLLA/viewform', '_blank', 'noopener,noreferrer');
  };

  const benefits = [
    {
      icon: '🎓',
      title: 'Learning & Growth',
      description: 'Access to cutting-edge technologies and mentorship from industry experts'
    },
    {
      icon: '💼',
      title: 'Real Projects',
      description: 'Work on actual client projects and build your portfolio'
    },
    {
      icon: '🚀',
      title: 'Career Launch',
      description: 'Potential for full-time positions upon successful completion'
    },
    {
      icon: '🌍',
      title: 'Remote Work',
      description: 'Flexible work arrangements and modern work culture'
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section style={styles.pageHeader}>
        <div className="container">
          <h1 style={styles.pageTitle} className="text-gradient">
            Join Our Team
          </h1>
          <p style={styles.pageSubtitle}>
            Be part of the future of digital innovation. Join VIRUZVERSE and help us build tomorrow's solutions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={styles.mainSection}>
        <div className="container">
          {/* Tabs */}
          <div style={styles.tabsContainer}>
            <button
              style={{
                ...styles.tab,
                ...(activeTab === 'trainee' ? styles.activeTab : {})
              }}
              onClick={() => handleTabChange('trainee')}
            >
              Trainee Program
            </button>
            <button
              style={{
                ...styles.tab,
                ...(activeTab === 'professional' ? styles.activeTab : {})
              }}
              onClick={() => handleTabChange('professional')}
            >
              Professional
            </button>
            <button
              style={{
                ...styles.tab,
                ...(activeTab === 'fulltime' ? styles.activeTab : {})
              }}
              onClick={() => handleTabChange('fulltime')}
            >
              Full-Time Positions
            </button>
            <button
              style={{
                ...styles.tab,
                ...(activeTab === 'internship' ? styles.activeTab : {})
              }}
              onClick={() => handleTabChange('internship')}
            >
              Internships
            </button>
          </div>

          {/* Tab Content */}
          <div style={styles.tabContent}>
            {activeTab === 'trainee' && (
              <>
                <h2 style={styles.tabTitle}>Trainee Program</h2>
                <p style={styles.tabDescription}>
                  Start your journey in the tech industry with our comprehensive trainee program. 
                  Learn from experienced professionals while working on real-world projects.
                </p>

                <div style={styles.requirementsList}>
                  <h3 style={styles.requirementsTitle}>Requirements:</h3>
                  <div style={styles.requirementsItem}>
                    <span style={styles.requirementsItemBefore}>•</span>
                    Currently pursuing or completed B.Tech/B.Sc/M.Tech in Computer Science or related field
                  </div>
                  <div style={styles.requirementsItem}>
                    <span style={styles.requirementsItemBefore}>•</span>
                    Basic knowledge of programming languages (Java, Python, C++, etc.)
                  </div>
                  <div style={styles.requirementsItem}>
                    <span style={styles.requirementsItemBefore}>•</span>
                    Understanding of web development fundamentals (HTML, CSS, JavaScript)
                  </div>
                  <div style={styles.requirementsItem}>
                    <span style={styles.requirementsItemBefore}>•</span>
                    Familiarity with databases and basic software development concepts
                  </div>
                  <div style={styles.requirementsItem}>
                    <span style={styles.requirementsItemBefore}>•</span>
                    Strong problem-solving skills and eagerness to learn
                  </div>
                </div>

                <div style={styles.ctaSection}>
                  <h3 style={styles.ctaTitle}>Ready to Start Your Journey?</h3>
                  <p style={styles.ctaDescription}>
                    Apply now for our trainee program and take the first step towards an exciting career in technology.
                  </p>
                  <button 
                    style={styles.applyButton}
                    onClick={handleApplyClick}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = 'var(--shadow-glow)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = '';
                      e.target.style.boxShadow = '';
                    }}
                  >
                    Apply Now
                  </button>
                </div>

                <div style={styles.benefitsGrid}>
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      style={styles.benefitCard}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                        e.currentTarget.style.borderColor = 'var(--color-accent-2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = '';
                        e.currentTarget.style.boxShadow = '';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                      }}
                    >
                      <div style={styles.benefitIcon}>{benefit.icon}</div>
                      <h4 style={styles.benefitTitle}>{benefit.title}</h4>
                      <p style={styles.benefitDescription}>{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === 'professional' && (
              <>
                <h2 style={styles.tabTitle}>Professional Opportunities</h2>
                <p style={styles.tabDescription}>
                  Join our team of experienced professionals and contribute to cutting-edge projects. 
                  We're looking for talented individuals who can bring expertise and innovation to our organization.
                </p>

                <div style={styles.requirementsList}>
                  <h3 style={styles.requirementsTitle}>What We're Looking For:</h3>
                  <div style={styles.requirementsItem}>
                    <span style={styles.requirementsItemBefore}>•</span>
                    Experienced developers with 3+ years in software development
                  </div>
                  <div style={styles.requirementsItem}>
                    <span style={styles.requirementsItemBefore}>•</span>
                    Strong expertise in modern technologies and frameworks
                  </div>
                  <div style={styles.requirementsItem}>
                    <span style={styles.requirementsItemBefore}>•</span>
                    Proven track record of delivering high-quality software solutions
                  </div>
                  <div style={styles.requirementsItem}>
                    <span style={styles.requirementsItemBefore}>•</span>
                    Experience with cloud platforms and DevOps practices
                  </div>
                  <div style={styles.requirementsItem}>
                    <span style={styles.requirementsItemBefore}>•</span>
                    Strong communication and team collaboration skills
                  </div>
                </div>

                <div style={styles.ctaSection}>
                  <h3 style={styles.ctaTitle}>Ready to Join Our Team?</h3>
                  <p style={styles.ctaDescription}>
                    Apply for professional positions and become part of our innovative team working on cutting-edge solutions.
                  </p>
                  <button 
                    style={styles.applyButton}
                    onClick={() => window.open('https://forms.gle/WYdzUCdc19YQ46t48', '_blank', 'noopener,noreferrer')}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = 'var(--shadow-glow)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = '';
                      e.target.style.boxShadow = '';
                    }}
                  >
                    Apply Now
                  </button>
                </div>

                <div style={styles.benefitsGrid}>
                  {[
                    {
                      icon: '💡',
                      title: 'Innovation',
                      description: 'Work on cutting-edge projects and shape the future of technology'
                    },
                    {
                      icon: '🚀',
                      title: 'Growth',
                      description: 'Continuous learning opportunities and career advancement'
                    },
                    {
                      icon: '🤝',
                      title: 'Collaboration',
                      description: 'Work with talented professionals in a supportive environment'
                    },
                    {
                      icon: '🌍',
                      title: 'Impact',
                      description: 'Make a real difference in the digital transformation landscape'
                    }
                  ].map((benefit, index) => (
                    <div 
                      key={index}
                      style={styles.benefitCard}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                        e.currentTarget.style.borderColor = 'var(--color-accent-2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = '';
                        e.currentTarget.style.boxShadow = '';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                      }}
                    >
                      <div style={styles.benefitIcon}>{benefit.icon}</div>
                      <h4 style={styles.benefitTitle}>{benefit.title}</h4>
                      <p style={styles.benefitDescription}>{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === 'fulltime' && (
              <>
                <h2 style={styles.tabTitle}>Full-Time Positions</h2>
                <p style={styles.tabDescription}>
                  We're always looking for talented individuals to join our team. 
                  Check back soon for open positions in development, design, and more.
                </p>
                <div style={styles.ctaSection}>
                  <h3 style={styles.ctaTitle}>No Open Positions Currently</h3>
                  <p style={styles.ctaDescription}>
                    We don't have any full-time positions open at the moment, but we're always accepting applications for our trainee program.
                  </p>
                  <button 
                    style={styles.applyButton}
                    onClick={() => setActiveTab('trainee')}
                  >
                    View Trainee Program
                  </button>
                </div>
              </>
            )}

            {activeTab === 'internship' && (
              <>
                <h2 style={styles.tabTitle}>Internship Opportunities</h2>
                <p style={styles.tabDescription}>
                  Gain valuable experience through our internship programs. 
                  Work on real projects while building your skills and network.
                </p>
                <div style={styles.ctaSection}>
                  <h3 style={styles.ctaTitle}>Internships Coming Soon</h3>
                  <p style={styles.ctaDescription}>
                    Our internship program is currently under development. 
                    In the meantime, consider applying for our trainee program to get started.
                  </p>
                  <button 
                    style={styles.applyButton}
                    onClick={() => setActiveTab('trainee')}
                  >
                    View Trainee Program
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
} 
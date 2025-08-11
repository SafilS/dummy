import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Globe, Shield, Users, Zap, Award, BarChart2, Lightbulb, Target, TrendingUp, Code2, Smartphone, Database, Cloud, Lock, Briefcase, CheckCircle, ArrowRight, Calendar } from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Completed Projects
const completedProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce solution with inventory management, payment processing, and customer analytics.',
    year: '2024',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    features: [
      'Multi-vendor marketplace',
      'Real-time inventory tracking',
      'Secure payment processing',
      'Customer analytics dashboard'
    ],
    results: 'Increased client revenue by 200% and reduced cart abandonment by 45%',
    category: 'Web Development'
  },
  {
    id: 2,
    title: 'Healthcare Management System',
    description: 'Comprehensive healthcare platform for patient records, appointment scheduling, and telemedicine capabilities.',
    year: '2023',
    technologies: ['React Native', 'Python', 'PostgreSQL', 'WebRTC'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    features: [
      'Electronic Health Records (EHR)',
      'Video consultations',
      'Prescription management',
      'HIPAA compliant'
    ],
    results: 'Reduced administrative workload by 60% and improved patient satisfaction scores',
    category: 'Healthcare Tech'
  },
  {
    id: 3,
    title: 'Smart Home Automation',
    description: 'IoT solution for home automation with AI-powered energy optimization and security features.',
    year: '2024',
    technologies: ['IoT', 'Python', 'TensorFlow', 'React Native'],
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    features: [
      'Voice control integration',
      'Energy usage analytics',
      'Smart security system',
      'Cross-platform mobile app'
    ],
    results: 'Reduced energy consumption by 35% and enhanced home security',
    category: 'IoT Solutions'
  },
  {
    id: 4,
    title: 'Financial Analytics Dashboard',
    description: 'Real-time financial data visualization and predictive analytics platform for investment firms.',
    year: '2023',
    technologies: ['React', 'D3.js', 'Python', 'Kubernetes'],
    image: 'https://images.unsplash.com/photo-1551285563-d1f9cfae8514?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    features: [
      'Interactive data visualizations',
      'Predictive analytics',
      'Custom reporting',
      'Role-based access control'
    ],
    results: 'Enabled data-driven decisions leading to 28% better investment returns',
    category: 'FinTech'
  }
];

// Project Categories
const projectCategories = [
  { name: 'All', count: completedProjects.length, active: true },
  { name: 'Web Development', count: 2 },
  { name: 'Mobile Apps', count: 1 },
  { name: 'AI/ML', count: 1 },
  { name: 'IoT', count: 1 },
  { name: 'FinTech', count: 1 }
];

// Testimonials from clients
const clientTestimonials = [
  {
    quote: "The e-commerce platform transformed our business operations and significantly boosted our online sales.",
    author: "Sarah Johnson",
    position: "CEO, RetailPro",
    project: "E-Commerce Platform"
  },
  {
    quote: "Their healthcare management system streamlined our processes and improved patient care quality.",
    author: "Dr. Michael Chen",
    position: "Medical Director, HealthPlus",
    project: "Healthcare Management System"
  },
  {
    quote: "The smart home solution exceeded our expectations in both functionality and user experience.",
    author: "Emily Rodriguez",
    position: "Product Manager, SmartLiving",
    project: "Smart Home Automation"
  }
];

const teamMembers = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'CEO & Co-Founder',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Visionary leader with 12+ years of experience in tech entrepreneurship and business strategy.',
    projects: [
      { name: 'Enterprise Solutions', role: 'Lead Architect' },
      { name: 'AI Integration', role: 'Strategy Lead' }
    ]
  }
];

const AnimatedSection = ({ children, delay = 0 }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeInUp}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

export default function Journey() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(0);
  
  const filteredProjects = activeCategory === 'All' 
    ? completedProjects 
    : completedProjects.filter(project => project.category === activeCategory);
  
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    pageHeader: {
      padding: '80px 0 60px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, rgba(74, 108, 247, 0.1) 0%, rgba(74, 108, 247, 0.05) 100%)',
      marginTop: '80px',
      marginBottom: '40px',
    },
    pageTitle: {
      fontSize: '48px',
      fontWeight: 700,
      marginBottom: '16px',
      color: '#1a1a1a',
    },
    pageSubtitle: {
      fontSize: '18px',
      color: '#666666',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    section: {
      marginBottom: '80px',
    },
    sectionTitle: {
      fontSize: '32px',
      fontWeight: 600,
      marginBottom: '30px',
      color: '#1a1a1a',
      textAlign: 'center',
      position: 'relative',
      paddingBottom: '15px',
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '30px',
      marginTop: '40px',
    },
    teamCard: {
      background: '#ffffff',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
      },
    },
    teamImage: {
      width: '100%',
      height: '250px',
      objectFit: 'cover',
    },
    teamContent: {
      padding: '24px',
    },
    teamName: {
      fontSize: '20px',
      fontWeight: 600,
      marginBottom: '4px',
      color: '#1a1a1a',
    },
    teamRole: {
      fontSize: '14px',
      color: '#4a6cf7',
      marginBottom: '12px',
      fontWeight: 500,
    },
    teamBio: {
      fontSize: '14px',
      color: '#666666',
      marginBottom: '16px',
      lineHeight: '1.6',
    },
    projectsTitle: {
      fontSize: '14px',
      fontWeight: 600,
      marginBottom: '8px',
      color: '#333333',
    },
    projectItem: {
      fontSize: '13px',
      color: '#666666',
      marginBottom: '4px',
      '&:last-child': {
        marginBottom: 0,
      },
    },
    timeline: {
      position: 'relative',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 0',
      '&::before': {
        content: '""',
        position: 'absolute',
        width: '2px',
        backgroundColor: '#e9ecef',
        top: 0,
        bottom: 0,
        left: '50%',
        marginLeft: '-1px',
        '@media (max-width: 768px)': {
          left: '31px',
        },
      },
    },
    timelineItem: {
      padding: '20px 40px',
      position: 'relative',
      backgroundColor: 'inherit',
      width: '50%',
      '&:nth-child(odd)': {
        left: 0,
        '&::after': {
          right: '-16px',
        },
      },
      '&:nth-child(even)': {
        left: '50%',
        '&::after': {
          left: '-16px',
        },
      },
      '&::after': {
        content: "''",
        position: 'absolute',
        width: '30px',
        height: '30px',
        right: '-16px',
        backgroundColor: '#ffffff',
        border: '4px solid #4a6cf7',
        top: '30px',
        borderRadius: '50%',
        zIndex: 1,
      },
      '@media (max-width: 768px)': {
        width: '100%',
        paddingLeft: '70px',
        paddingRight: '25px',
        '&:nth-child(even)': {
          left: '0%',
          '&::after': {
            left: '15px',
          },
        },
        '&::after': {
          left: '15px',
        },
      },
    },
    timelineContent: {
      padding: '20px',
      backgroundColor: '#ffffff',
      position: 'relative',
      borderRadius: '8px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
    },
    timelineYear: {
      fontSize: '16px',
      fontWeight: 600,
      color: '#4a6cf7',
      marginBottom: '8px',
    },
    timelineTitle: {
      fontSize: '18px',
      fontWeight: 600,
      marginBottom: '8px',
      color: '#1a1a1a',
    },
    timelineDesc: {
      fontSize: '14px',
      color: '#666666',
      lineHeight: '1.6',
    },
    iconContainer: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundColor: 'rgba(74, 108, 247, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '16px',
      color: '#4a6cf7',
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <motion.section 
        style={styles.heroSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div style={styles.heroContent}>
          <motion.h1 
            style={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Our <span style={{ color: '#4a6cf7' }}>Projects</span>
          </motion.h1>
          <motion.p 
            style={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Discover our portfolio of successful projects and innovative solutions that have helped businesses transform and grow.
          </motion.p>
          <motion.div 
            style={styles.heroStats}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div style={styles.statItem}>
              <div style={styles.statNumber}>{completedProjects.length}+</div>
              <div style={styles.statLabel}>Projects Completed</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>50+</div>
              <div style={styles.statLabel}>Technologies Used</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>98%</div>
              <div style={styles.statLabel}>Client Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <AnimatedSection>
        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionSubtitle}>Our Work</div>
            <h2 style={styles.sectionTitle}>Project Showcase</h2>
            <p style={styles.sectionDescription}>
              Explore our portfolio of innovative solutions that have helped businesses transform and grow.
            </p>
            
            {/* Project Categories */}
            <div style={styles.categories}>
              {projectCategories.map((category, index) => (
                <button
                  key={index}
                  style={{
                    ...styles.categoryBtn,
                    ...(activeCategory === category.name ? styles.activeCategory : {})
                  }}
                  onClick={() => setActiveCategory(category.name)}
                >
                  {category.name}
                  <span style={styles.categoryCount}>({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <motion.div 
            style={styles.projectsGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id} 
                style={styles.projectCard}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                onClick={() => setActiveProject(index)}
              >
                <div style={styles.projectImageContainer}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={styles.projectImage}
                  />
                  <div style={styles.projectYear}>{project.year}</div>
                  <div style={styles.projectCategory}>{project.category}</div>
                </div>
                <div style={styles.projectContent}>
                  <h3 style={styles.projectTitle}>{project.title}</h3>
                  <p style={styles.projectDescription}>{project.description}</p>
                  
                  <div style={styles.techTags}>
                    {project.technologies.map((tech, i) => (
                      <span key={i} style={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                  
                  <div style={styles.projectResults}>
                    <CheckCircle size={16} style={{ color: '#4CAF50', marginRight: '8px' }} />
                    <span>{project.results}</span>
                  </div>
                  
                  <button style={styles.viewProjectBtn}>
                    View Case Study <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </AnimatedSection>
      
      {/* Project Details Modal */}
      {filteredProjects[activeProject] && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>{filteredProjects[activeProject].title}</h2>
              <button 
                style={styles.closeBtn}
                onClick={() => setActiveProject(null)}
              >
                &times;
              </button>
            </div>
            
            <div style={styles.modalContent}>
              <div style={styles.modalImageContainer}>
                <img 
                  src={filteredProjects[activeProject].image} 
                  alt={filteredProjects[activeProject].title}
                  style={styles.modalImage}
                />
                <div style={styles.modalBadges}>
                  <span style={styles.modalBadge}>
                    <Briefcase size={16} style={{ marginRight: '6px' }} />
                    {filteredProjects[activeProject].category}
                  </span>
                  <span style={styles.modalBadge}>
                    <Calendar size={16} style={{ marginRight: '6px' }} />
                    {filteredProjects[activeProject].year}
                  </span>
                </div>
              </div>
              
              <div style={styles.modalDetails}>
                <h3 style={styles.modalSectionTitle}>Project Overview</h3>
                <p style={styles.modalText}>{filteredProjects[activeProject].description}</p>
                
                <h3 style={styles.modalSectionTitle}>Key Features</h3>
                <ul style={styles.featuresList}>
                  {filteredProjects[activeProject].features.map((feature, index) => (
                    <li key={index} style={styles.featureItem}>
                      <CheckCircle size={18} style={{ color: '#4a6cf7', marginRight: '10px', flexShrink: 0 }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <h3 style={styles.modalSectionTitle}>Technologies Used</h3>
                <div style={styles.techList}>
                  {filteredProjects[activeProject].technologies.map((tech, index) => (
                    <span key={index} style={styles.techItem}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h3 style={styles.modalSectionTitle}>Results</h3>
                <p style={styles.modalText}>
                  <strong>Outcome: </strong> {filteredProjects[activeProject].results}
                </p>
                
                <button style={styles.visitSiteBtn}>
                  Visit Website <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      <AnimatedSection>
        <section style={{ ...styles.section, backgroundColor: '#f8f9ff' }}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionSubtitle}>Client Feedback</div>
            <h2 style={styles.sectionTitle}>What Our Clients Say</h2>
            <p style={styles.sectionDescription}>
              Hear from the businesses we've helped transform through our innovative solutions.
            </p>
          </div>
          
          <div style={styles.testimonialsGrid}>
            {clientTestimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                style={styles.testimonialCard}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div style={styles.quoteIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 4H10V20H14V4Z" fill="#4a6cf7" fillOpacity="0.1"/>
                    <path d="M4 4H10V12H4V4Z" fill="#4a6cf7" fillOpacity="0.2"/>
                    <path d="M20 12H14V20H20V12Z" fill="#4a6cf7" fillOpacity="0.2"/>
                    <path d="M14 12H20V4H14V12Z" fill="#4a6cf7" fillOpacity="0.1"/>
                  </svg>
                </div>
                <p style={styles.testimonialText}>"{testimonial.quote}"</p>
                <div style={styles.testimonialAuthor}>
                  <div style={styles.testimonialAuthorInfo}>
                    <h4 style={styles.testimonialName}>{testimonial.author}</h4>
                    <p style={styles.testimonialPosition}>{testimonial.position}</p>
                  </div>
                </div>
                <div style={styles.testimonialProject}>
                  <Briefcase size={14} style={{ marginRight: '6px' }} />
                  {testimonial.project}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </AnimatedSection>
      
      {/* CTA Section */}
      <AnimatedSection>
        <section style={{ ...styles.section, padding: '80px 0' }}>
          <div style={styles.ctaContainer}>
            <div style={styles.ctaContent}>
              <h2 style={styles.ctaTitle}>Ready to Start Your Project?</h2>
              <p style={styles.ctaText}>
                Let's discuss how we can help you achieve your business goals with our innovative solutions.
              </p>
              <div style={styles.ctaButtons}>
                <a href="/contact" style={styles.ctaPrimaryBtn}>
                  Get in Touch
                </a>
                <a href="#" style={styles.ctaSecondaryBtn}>
                  View All Projects
                </a>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}

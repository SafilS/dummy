import { useState, useEffect } from 'react';
import '../styles/journey-animations.css';
import journeyBg from '../assests/journey.jpeg';

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
      padding: 'var(--spacing-3xl) 0',
      padding: '80px 0 60px',
      textAlign: 'center',
      background: `linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.6) 100%), url(${journeyBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      paddingTop: '120px',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, rgba(74, 108, 247, 0.1) 0%, rgba(74, 108, 247, 0.05) 100%)',
      marginTop: '80px',
      marginBottom: '40px',
    },
    pageTitle: {
      fontSize: 'clamp(40px, 7vw, 72px)',
      fontWeight: 700,
      marginBottom: 'var(--spacing-md)',
      color: '#ffffff',
      textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
      zIndex: 2,
      position: 'relative',
      marginBottom: '16px',
      color: '#1a1a1a',
    },
    pageSubtitle: {
      fontSize: '22px',
      color: '#ffffff',
      opacity: 0.95,
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: 1.4,
      textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
      zIndex: 2,
      position: 'relative',
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
      marginBottom: '16px',
      color: '#4a6cf7',
    },
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
          <h1 style={styles.pageTitle}>
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

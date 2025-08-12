import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageCircle } from 'lucide-react';
import contactBg from '../assests/contact.jpeg';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const styles = {
    pageContainer: {
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    },
    header: {
      position: 'relative',
      height: '60vh',
      backgroundImage: `url(${contactBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#ffffff',
      textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
      textAlign: 'center'
    },
    heroContent: {
      maxWidth: '800px',
      padding: '0 20px',
      textAlign: 'center'
    },
    subtitle: {
      fontSize: '1.3rem',
      color: '#b0b0b0',
      maxWidth: '600px',
      margin: '0 auto',
      marginBottom: '2rem'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem',
      '@media (min-width: 1024px)': {
        gridTemplateColumns: '1fr 1.5fr',
      },
    },
    contactInfo: {
      backgroundColor: '#1a1a1a',
      border: '1px solid #2a2a2a',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 10px 15px -3px rgba(0,0,0,0.3), 0 4px 6px -2px rgba(0,0,0,0.2)',
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '1.5rem',
      color: '#ffffff',
      borderBottom: '2px solid #667eea',
      paddingBottom: '0.5rem',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1.5rem',
    },
    contactIcon: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      width: '44px',
      height: '44px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '1rem',
      flexShrink: 0,
    },
    contactText: {},
    contactLabel: {
      display: 'block',
      fontSize: '0.875rem',
      color: '#888',
      marginBottom: '0.25rem',
    },
    contactValue: {
      display: 'block',
      fontSize: '1rem',
      color: '#ffffff',
      textDecoration: 'none',
      transition: 'color 0.2s',
      fontWeight: 500,
    },
    formContainer: {
      backgroundColor: '#1a1a1a',
      border: '1px solid #2a2a2a',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 10px 15px -3px rgba(0,0,0,0.3), 0 4px 6px -2px rgba(0,0,0,0.2)',
    },
    formGroup: {
      marginBottom: '1.5rem',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: 500,
      color: '#ffffff',
    },
    input: {
      width: '100%',
      padding: '0.75rem 1rem',
      fontSize: '1rem',
      border: '1px solid #2a2a2a',
      borderRadius: '8px',
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      transition: 'all 0.2s',
    },
    textarea: {
      width: '100%',
      minHeight: '120px',
      padding: '0.75rem 1rem',
      fontSize: '1rem',
      border: '1px solid #2a2a2a',
      borderRadius: '8px',
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      resize: 'vertical',
      transition: 'all 0.2s',
    },
    submitButton: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '0.75rem 2rem',
      fontSize: '1rem',
      fontWeight: 500,
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s',
      width: '100%',
    },
    successMessage: {
      backgroundColor: '#d1fae5',
      color: '#065f46',
      padding: '1rem',
      borderRadius: '8px',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.pageContainer}>
      <header style={styles.header}>
        <div style={styles.heroContent}>
            <h1 style={styles.title}>Get in Touch</h1>
            <p style={styles.subtitle}>
              Have questions or want to discuss a project? We'd love to hear from you. 
              Fill out the form below or reach out using the contact information provided.
            </p>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ ...styles.container, padding: '0 1.5rem 4rem' }}>
        <div style={styles.contactGrid}>
          {/* Contact Information */}
          <div style={styles.contactInfo}>
            <h3 style={styles.sectionTitle}>Contact Information</h3>
            
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>
                <Mail size={20} />
              </div>
              <div style={styles.contactText}>
                <span style={styles.contactLabel}>Email</span>
                <a href="mailto:viruzverse@proton.me" style={styles.contactValue}>
                  viruzverse@proton.me
                </a>
              </div>
            </div>

            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>
                <Phone size={20} />
              </div>
              <div style={styles.contactText}>
                <span style={styles.contactLabel}>Phone</span>
                <a href="tel:+917418676100" style={styles.contactValue}>
                  +91 7418676100
                </a>
              </div>
            </div>

            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>
                <MapPin size={20} />
              </div>
              <div style={styles.contactText}>
                <span style={styles.contactLabel}>Location</span>
                <span style={{ ...styles.contactValue, color: '#4b5563' }}>
                  India, Tamil Nadu
                </span>
              </div>
            </div>

            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>
                <Clock size={20} />
              </div>
              <div style={styles.contactText}>
                <span style={styles.contactLabel}>Business Hours</span>
                <span style={{ ...styles.contactValue, color: '#4b5563', display: 'block' }}>
                  Monday - Friday: 9:00 AM - 6:00 PM
                </span>
                <span style={{ ...styles.contactValue, color: '#4b5563' }}>
                  Saturday - Sunday: Closed
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={styles.formContainer}>
            <h3 style={styles.sectionTitle}>Send us a Message</h3>
            
            {status === 'success' ? (
              <div style={styles.successMessage}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                  <label htmlFor="name" style={styles.label}>
                    Full Name <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <User size={18} style={{
                      position: 'absolute',
                      left: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#9ca3af',
                    }} />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      style={{ ...styles.input, paddingLeft: '40px' }}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label htmlFor="email" style={styles.label}>
                    Email Address <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={18} style={{
                      position: 'absolute',
                      left: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#9ca3af',
                    }} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      style={{ ...styles.input, paddingLeft: '40px' }}
                      required
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label htmlFor="subject" style={styles.label}>
                    Subject <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <MessageCircle size={18} style={{
                      position: 'absolute',
                      left: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#9ca3af',
                    }} />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      style={{ ...styles.input, paddingLeft: '40px' }}
                      required
                      placeholder="How can we help you?"
                    />
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label htmlFor="message" style={styles.label}>
                    Your Message <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    style={styles.textarea}
                    required
                    placeholder="Type your message here..."
                  />
                </div>

                <button
                  type="submit"
                  style={styles.submitButton}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={18} style={{ marginRight: '8px' }} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

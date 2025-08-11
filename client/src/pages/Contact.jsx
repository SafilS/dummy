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
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1.5rem',
    },
    pageHeader: {
      padding: 'var(--spacing-2xl) 0',
      textAlign: 'center',
      background: `linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.6) 100%), url(${contactBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      paddingTop: '120px',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '40vh',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '4rem',
    },
    pageTitle: {
      fontSize: 'clamp(36px, 6vw, 56px)',
      fontWeight: 700,
      marginBottom: '1rem',
      color: '#ffffff',
      textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
      zIndex: 2,
      position: 'relative',
    },
    pageSubtitle: {
      fontSize: '18px',
      color: '#ffffff',
      opacity: 0.95,
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: 1.6,
      textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
      zIndex: 2,
      position: 'relative',
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginBottom: '4rem',
    },
    contactInfo: {
      padding: '2rem',
      backgroundColor: '#f8f9fa',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: 600,
      marginBottom: '1.5rem',
      color: '#111827',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '1.5rem',
      '&:last-child': {
        marginBottom: 0,
      },
    },
    contactIcon: {
      backgroundColor: '#4f46e5',
      color: 'white',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '1rem',
      flexShrink: 0,
    },
    contactText: {
      flex: 1,
    },
    contactLabel: {
      display: 'block',
      fontSize: '0.875rem',
      color: '#6b7280',
      marginBottom: '0.25rem',
    },
    contactValue: {
      display: 'block',
      fontSize: '1rem',
      color: '#1f2937',
      textDecoration: 'none',
      transition: 'color 0.2s',
      fontWeight: 500,
      '&:hover': {
        color: '#4f46e5',
      },
    },
    formContainer: {
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      border: '1px solid #e5e7eb',
    },
    formGroup: {
      marginBottom: '1.5rem',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: 500,
      color: '#374151',
    },
    input: {
      width: '100%',
      padding: '0.75rem 1rem',
      fontSize: '1rem',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      backgroundColor: '#f9fafb',
      transition: 'all 0.2s',
      '&:focus': {
        outline: 'none',
        borderColor: '#4f46e5',
        boxShadow: '0 0 0 3px rgba(79, 70, 229, 0.1)',
        backgroundColor: 'white',
      },
    },
    textarea: {
      width: '100%',
      minHeight: '150px',
      padding: '0.75rem 1rem',
      fontSize: '1rem',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      backgroundColor: '#f9fafb',
      resize: 'vertical',
      transition: 'all 0.2s',
      '&:focus': {
        outline: 'none',
        borderColor: '#4f46e5',
        boxShadow: '0 0 0 3px rgba(79, 70, 229, 0.1)',
        backgroundColor: 'white',
      },
    },
    submitButton: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#4f46e5',
      color: 'white',
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      fontWeight: 500,
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s',
      '&:hover': {
        backgroundColor: '#4338ca',
        transform: 'translateY(-1px)',
      },
      '&:active': {
        transform: 'translateY(0)',
      },
      '&:disabled': {
        opacity: 0.7,
        cursor: 'not-allowed',
      },
    },
    successMessage: {
      backgroundColor: '#ecfdf5',
      color: '#065f46',
      padding: '1rem',
      borderRadius: '8px',
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
  };

  return (
    <>
      {/* Page Header */}
      <header style={styles.pageHeader}>
        <div style={styles.container}>
          <h1 style={styles.pageTitle}>Contact Us</h1>
          <p style={styles.pageSubtitle}>
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
    </>
  );
}

import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';

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
    }, 1500);
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.header}>
        <h1 style={styles.title}>Get in Touch</h1>
        <p style={styles.subtitle}>
          Have questions or want to discuss a project? We'd love to hear from you. 
          Fill out the form below or reach out using the contact information provided.
        </p>
      </div>

      <div style={styles.contactGrid}>
        {/* Contact Information */}
        <div style={styles.contactInfo}>
          <div style={styles.contactItem}>
            <div style={styles.contactIcon}>
              <Mail size={24} />
            </div>
            <div style={styles.contactText}>
              <span style={styles.contactLabel}>Email</span>
              <a href="mailto:info@viruzverse.tech" style={styles.contactValue}>
                info@viruzverse.tech
              </a>
            </div>
          </div>

          <div style={styles.contactItem}>
            <div style={styles.contactIcon}>
              <Phone size={24} />
            </div>
            <div style={styles.contactText}>
              <span style={styles.contactLabel}>Phone</span>
              <a href="tel:+1234567890" style={styles.contactValue}>
                +1 (234) 567-890
              </a>
            </div>
          </div>

          <div style={styles.contactItem}>
            <div style={styles.contactIcon}>
              <MapPin size={24} />
            </div>
            <div style={styles.contactText}>
              <span style={styles.contactLabel}>Location</span>
              <span style={styles.contactValue}>
                123 Tech Street, Silicon Valley, CA 94025, USA
              </span>
            </div>
          </div>

          <div style={styles.contactItem}>
            <div style={styles.contactIcon}>
              <Clock size={24} />
            </div>
            <div style={styles.contactText}>
              <span style={styles.contactLabel}>Business Hours</span>
              <span style={styles.contactValue}>
                Monday - Friday: 9:00 AM - 6:00 PM
              </span>
              <span style={styles.contactValue}>
                Saturday - Sunday: Closed
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div style={styles.formContainer}>
          {status === 'success' ? (
            <div style={styles.successMessage}>
              <h3>Thank you for your message!</h3>
              <p>We'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label htmlFor="name" style={styles.label}>Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="email" style={styles.label}>Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="subject" style={styles.label}>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="message" style={styles.label}>Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={styles.textarea}
                  required
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
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Map Placeholder */}
      <div style={styles.mapContainer}>
        <div style={styles.mapPlaceholder}>
          <MapPin size={48} style={styles.mapIcon} />
          <p>Map will be displayed here</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '4rem 2rem',
    minHeight: 'calc(100vh - 80px)',
    backgroundColor: '#ffffff',
    color: '#333333',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.125rem',
    color: '#666666',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.5fr',
    gap: '2rem',
    marginTop: '2rem',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
  contactInfo: {
    padding: '2rem',
    borderRadius: '12px',
    backgroundColor: '#f8f9fa',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    height: 'fit-content',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '1.5rem',
    paddingBottom: '1.5rem',
    borderBottom: '1px solid #e9ecef',
    '&:last-child': {
      borderBottom: 'none',
      marginBottom: '0',
      paddingBottom: '0',
    },
  },
  contactIcon: {
    color: '#4a6cf7',
    marginRight: '1rem',
    marginTop: '0.25rem',
    flexShrink: 0,
  },
  contactText: {
    flex: 1,
  },
  contactLabel: {
    display: 'block',
    fontSize: '0.875rem',
    color: '#6c757d',
    marginBottom: '0.25rem',
  },
  contactValue: {
    display: 'block',
    color: '#495057',
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'color 0.2s',
    '&:hover': {
      color: '#4a6cf7',
    },
  },
  formContainer: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e9ecef',
  },
  formGroup: {
    marginBottom: '1.5rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#495057',
  },
  input: {
    width: '100%',
    padding: '0.75rem 1rem',
    fontSize: '1rem',
    border: '1px solid #ced4da',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    color: '#495057',
    transition: 'all 0.2s',
    '&:focus': {
      outline: 'none',
      borderColor: '#4a6cf7',
      boxShadow: '0 0 0 3px rgba(74, 108, 247, 0.25)',
    },
  },
  textarea: {
    width: '100%',
    minHeight: '150px',
    padding: '0.75rem 1rem',
    fontSize: '1rem',
    border: '1px solid #ced4da',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    color: '#495057',
    resize: 'vertical',
    transition: 'all 0.2s',
    '&:focus': {
      outline: 'none',
      borderColor: '#4a6cf7',
      boxShadow: '0 0 0 3px rgba(74, 108, 247, 0.25)',
    },
  },
  submitButton: {
    width: '100%',
    padding: '0.875rem 1rem',
    fontSize: '1rem',
    fontWeight: '600',
    color: 'white',
    backgroundColor: '#4a6cf7',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    '&:hover': {
      backgroundColor: '#3a5bd9',
      transform: 'translateY(-1px)',
    },
    '&:active': {
      transform: 'translateY(0)',
    },
    '&:disabled': {
      opacity: '0.7',
      cursor: 'not-allowed',
    },
  },
  successMessage: {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#e8f5e9',
    border: '1px solid #c8e6c9',
    borderRadius: '8px',
    color: '#2e7d32',
  },
  mapContainer: {
    marginTop: '3rem',
    height: '300px',
    borderRadius: '12px',
    overflow: 'hidden',
    backgroundColor: '#f8f9fa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e9ecef',
  },
  mapPlaceholder: {
    textAlign: 'center',
    color: '#6c757d',
    padding: '2rem',
  },
  mapIcon: {
    margin: '0 auto 1rem',
    color: '#4a6cf7',
  },
};



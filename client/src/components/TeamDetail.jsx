import { useState } from 'react';
import { Link } from 'wouter';

export default function TeamDetail({ team }) {
  const [selectedMember, setSelectedMember] = useState(null);
  const [hoveredMember, setHoveredMember] = useState(null);

  const handleMemberHover = (index, isHovering) => {
    setHoveredMember(isHovering ? index : null);
  };

  const openMemberModal = (member) => {
    setSelectedMember(member);
  };

  const closeMemberModal = () => {
    setSelectedMember(null);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      paddingTop: '80px',
    },
    backButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--spacing-sm)',
      padding: 'var(--spacing-sm) var(--spacing-md)',
      background: 'rgba(255,255,255,0.1)',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: 'var(--radius-md)',
      color: 'inherit',
      textDecoration: 'none',
      fontSize: '14px',
      marginBottom: 'var(--spacing-xl)',
      transition: 'var(--transition-medium)',
    },
    teamHeader: {
      textAlign: 'center',
      padding: 'var(--spacing-3xl) 0',
      background: `linear-gradient(135deg, ${team.color}20 0%, ${team.color}10 50%, ${team.color}05 100%)`,
      borderRadius: 'var(--radius-xl)',
      marginBottom: 'var(--spacing-3xl)',
    },
    teamIcon: {
      fontSize: '80px',
      marginBottom: 'var(--spacing-lg)',
      display: 'block',
    },
    teamName: {
      fontSize: 'clamp(36px, 6vw, 56px)',
      fontWeight: 700,
      marginBottom: 'var(--spacing-md)',
      background: 'linear-gradient(135deg, #ffffff, #a34b6e, #6e4bc3, #45b7d1)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    teamDescription: {
      fontSize: '20px',
      opacity: 0.9,
      maxWidth: '800px',
      margin: '0 auto var(--spacing-xl)',
      lineHeight: 1.6,
    },
    teamStatsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: 'var(--spacing-lg)',
      maxWidth: '600px',
      margin: '0 auto',
    },
    teamStat: {
      textAlign: 'center',
      padding: 'var(--spacing-md)',
      background: 'rgba(255,255,255,0.05)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid rgba(255,255,255,0.1)',
    },
    statNumber: {
      fontSize: '24px',
      fontWeight: 700,
      color: team.color,
      marginBottom: 'var(--spacing-xs)',
    },
    statLabel: {
      fontSize: '14px',
      opacity: 0.8,
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    specialtiesSection: {
      padding: 'var(--spacing-3xl) 0',
      background: 'var(--color-surface)',
    },
    sectionTitle: {
      fontSize: '32px',
      fontWeight: 700,
      textAlign: 'center',
      marginBottom: 'var(--spacing-xl)',
    },
    specialtiesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: 'var(--spacing-lg)',
      maxWidth: '800px',
      margin: '0 auto',
    },
    specialtyCard: {
      background: 'rgba(255,255,255,0.03)',
      padding: 'var(--spacing-lg)',
      borderRadius: 'var(--radius-lg)',
      textAlign: 'center',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'var(--transition-medium)',
    },
    membersSection: {
      padding: 'var(--spacing-3xl) 0',
    },
    membersGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'var(--spacing-xl)',
    },
    memberCard: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--spacing-xl)',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'var(--transition-medium)',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
    },
    memberAvatar: {
      fontSize: '64px',
      marginBottom: 'var(--spacing-md)',
      display: 'block',
      textAlign: 'center',
    },
    memberName: {
      fontSize: '22px',
      fontWeight: 700,
      marginBottom: 'var(--spacing-xs)',
      textAlign: 'center',
    },
    memberRole: {
      fontSize: '14px',
      padding: '4px 12px',
      background: `${team.color}30`,
      border: `1px solid ${team.color}60`,
      borderRadius: 'var(--radius-sm)',
      display: 'inline-block',
      marginBottom: 'var(--spacing-md)',
      textAlign: 'center',
      width: '100%',
    },
    memberBio: {
      fontSize: '14px',
      lineHeight: 1.6,
      opacity: 0.8,
      marginBottom: 'var(--spacing-md)',
    },
    memberSkills: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--spacing-xs)',
      marginBottom: 'var(--spacing-md)',
    },
    skillTag: {
      background: 'rgba(255,255,255,0.1)',
      padding: '2px 6px',
      borderRadius: 'var(--radius-sm)',
      fontSize: '11px',
      opacity: 0.8,
    },
    contactInfo: {
      display: 'flex',
      gap: 'var(--spacing-sm)',
      justifyContent: 'center',
    },
    contactLink: {
      padding: 'var(--spacing-xs)',
      background: 'rgba(255,255,255,0.1)',
      borderRadius: 'var(--radius-sm)',
      color: 'inherit',
      textDecoration: 'none',
      fontSize: '12px',
      transition: 'var(--transition-medium)',
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: 'var(--spacing-lg)',
    },
    modalContent: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--spacing-2xl)',
      maxWidth: '600px',
      width: '100%',
      maxHeight: '90vh',
      overflowY: 'auto',
      position: 'relative',
      border: '1px solid rgba(255,255,255,0.1)',
    },
    closeButton: {
      position: 'absolute',
      top: 'var(--spacing-md)',
      right: 'var(--spacing-md)',
      background: 'rgba(255,255,255,0.1)',
      border: 'none',
      borderRadius: '50%',
      width: '32px',
      height: '32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'inherit',
      fontSize: '18px',
    },
    modalAvatar: {
      fontSize: '80px',
      textAlign: 'center',
      marginBottom: 'var(--spacing-lg)',
    },
    modalName: {
      fontSize: '28px',
      fontWeight: 700,
      textAlign: 'center',
      marginBottom: 'var(--spacing-sm)',
    },
    modalRole: {
      fontSize: '16px',
      textAlign: 'center',
      padding: '6px 16px',
      background: `${team.color}30`,
      border: `1px solid ${team.color}60`,
      borderRadius: 'var(--radius-md)',
      display: 'inline-block',
      marginBottom: 'var(--spacing-lg)',
      width: '100%',
    },
    modalSection: {
      marginBottom: 'var(--spacing-lg)',
    },
    modalSectionTitle: {
      fontSize: '18px',
      fontWeight: 600,
      marginBottom: 'var(--spacing-md)',
      color: team.color,
    },
    modalList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    modalListItem: {
      padding: 'var(--spacing-xs) 0',
      fontSize: '14px',
      opacity: 0.9,
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--spacing-sm)',
    },
    modalBullet: {
      color: team.color,
      fontWeight: 700,
      marginTop: '2px',
    },
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--spacing-md)',
      marginBottom: 'var(--spacing-lg)',
    },
    infoItem: {
      background: 'rgba(255,255,255,0.05)',
      padding: 'var(--spacing-md)',
      borderRadius: 'var(--radius-md)',
    },
    infoLabel: {
      fontSize: '12px',
      opacity: 0.7,
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: 'var(--spacing-xs)',
    },
    infoValue: {
      fontSize: '14px',
      fontWeight: 600,
    }
  };

  return (
    <div style={styles.container}>
      <div className="container">
        {/* Back Button */}
        <Link 
          href="/teams" 
          style={styles.backButton}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
          }}
        >
          ← Back to All Teams
        </Link>

        {/* Team Header */}
        <div style={styles.teamHeader}>
          <div style={styles.teamIcon}>{team.icon}</div>
          <h1 style={styles.teamName}>{team.name}</h1>
          <p style={styles.teamDescription}>{team.description}</p>
          
          <div style={styles.teamStatsGrid}>
            <div style={styles.teamStat}>
              <div style={styles.statNumber}>{team.memberCount}</div>
              <div style={styles.statLabel}>Members</div>
            </div>
            <div style={styles.teamStat}>
              <div style={styles.statNumber}>{team.specialties.length}</div>
              <div style={styles.statLabel}>Specialties</div>
            </div>
            <div style={styles.teamStat}>
              <div style={styles.statNumber}>5+</div>
              <div style={styles.statLabel}>Years Avg</div>
            </div>
          </div>
        </div>

        {/* Team Specialties */}
        <section style={styles.specialtiesSection}>
          <div className="container">
            <h2 style={styles.sectionTitle}>Team Specialties</h2>
            <div style={styles.specialtiesGrid}>
              {team.specialties.map((specialty, index) => (
                <div 
                  key={index} 
                  style={styles.specialtyCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${team.color}20`;
                    e.currentTarget.style.borderColor = `${team.color}40`;
                    e.currentTarget.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.transform = '';
                  }}
                >
                  {specialty}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section style={styles.membersSection}>
          <div className="container">
            <h2 style={styles.sectionTitle}>Meet the Team</h2>
            <div style={styles.membersGrid}>
              {team.members.map((member, index) => (
                <div
                  key={member.id}
                  style={{
                    ...styles.memberCard,
                    transform: hoveredMember === index ? 'translateY(-8px) scale(1.02)' : '',
                    boxShadow: hoveredMember === index ? `0 20px 40px ${team.color}40` : '',
                    borderColor: hoveredMember === index ? `${team.color}80` : 'rgba(255,255,255,0.1)'
                  }}
                  onMouseEnter={() => handleMemberHover(index, true)}
                  onMouseLeave={() => handleMemberHover(index, false)}
                  onClick={() => openMemberModal(member)}
                >
                  <div style={styles.memberAvatar}>{member.avatar}</div>
                  <h3 style={styles.memberName}>{member.name}</h3>
                  <div style={styles.memberRole}>{member.role}</div>
                  <p style={styles.memberBio}>{member.bio}</p>
                  
                  <div style={styles.memberSkills}>
                    {member.skills.slice(0, 4).map((skill, idx) => (
                      <span key={idx} style={styles.skillTag}>{skill}</span>
                    ))}
                    {member.skills.length > 4 && (
                      <span style={styles.skillTag}>+{member.skills.length - 4} more</span>
                    )}
                  </div>

                  <div style={styles.contactInfo}>
                    <a 
                      href={`mailto:${member.email}`} 
                      style={styles.contactLink}
                      onClick={(e) => e.stopPropagation()}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${team.color}40`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                      }}
                    >
                      📧 Email
                    </a>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={styles.contactLink}
                      onClick={(e) => e.stopPropagation()}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${team.color}40`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                      }}
                    >
                      💼 LinkedIn
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Member Detail Modal */}
      {selectedMember && (
        <div style={styles.modal} onClick={closeMemberModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={closeMemberModal}>
              ×
            </button>
            
            <div style={styles.modalAvatar}>{selectedMember.avatar}</div>
            <h2 style={styles.modalName}>{selectedMember.name}</h2>
            <div style={styles.modalRole}>{selectedMember.role}</div>

            <div style={styles.infoGrid}>
              <div style={styles.infoItem}>
                <div style={styles.infoLabel}>Experience</div>
                <div style={styles.infoValue}>{selectedMember.experience}</div>
              </div>
              <div style={styles.infoItem}>
                <div style={styles.infoLabel}>Education</div>
                <div style={styles.infoValue}>{selectedMember.education}</div>
              </div>
            </div>

            <div style={styles.modalSection}>
              <h3 style={styles.modalSectionTitle}>About</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6, opacity: 0.9 }}>
                {selectedMember.bio}
              </p>
            </div>

            <div style={styles.modalSection}>
              <h3 style={styles.modalSectionTitle}>Skills & Expertise</h3>
              <div style={{ ...styles.memberSkills, gap: 'var(--spacing-sm)' }}>
                {selectedMember.skills.map((skill, idx) => (
                  <span key={idx} style={{ ...styles.skillTag, background: `${team.color}30`, padding: '4px 8px', fontSize: '12px' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div style={styles.modalSection}>
              <h3 style={styles.modalSectionTitle}>Key Achievements</h3>
              <ul style={styles.modalList}>
                {selectedMember.achievements.map((achievement, idx) => (
                  <li key={idx} style={styles.modalListItem}>
                    <span style={styles.modalBullet}>▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', marginTop: 'var(--spacing-lg)' }}>
              <a 
                href={`mailto:${selectedMember.email}`}
                className="btn-primary"
                style={{ fontSize: '14px', padding: '8px 16px' }}
              >
                📧 Send Email
              </a>
              <a 
                href={selectedMember.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ fontSize: '14px', padding: '8px 16px' }}
              >
                💼 LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import { useTheme } from './ThemeContent';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const styles = {
    themeToggle: {
      background: theme === 'light' 
        ? 'rgba(255, 255, 255, 0.9)' 
        : 'var(--color-surface)',
      border: theme === 'light' 
        ? '1px solid rgba(0, 0, 0, 0.2)' 
        : '1px solid var(--color-accent-2)',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '18px',
      fontWeight: '600',
      color: theme === 'light' ? '#1a1a1a' : '#ffffff',
      transition: 'all 0.3s ease',
      boxShadow: theme === 'light' 
        ? '0 4px 15px rgba(0, 0, 0, 0.1)' 
        : 'var(--shadow-glow)',
      padding: '0',
    }
  };

  return (
    <button 
      style={styles.themeToggle} 
      onClick={toggleTheme}
      className="hover-glow-intense"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? '🌙' : '🔆'}
    </button>
  );
};

export default ThemeToggle;

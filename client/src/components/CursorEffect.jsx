import { useEffect, useState } from 'react';
import { useTheme } from '../ThemeContent.jsx';

export default function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = target.tagName === 'A' || 
                         target.tagName === 'BUTTON' || 
                         target.classList.contains('btn-professional') ||
                         target.classList.contains('professional-card') ||
                         target.classList.contains('capability-card') ||
                         target.style.cursor === 'pointer' ||
                         window.getComputedStyle(target).cursor === 'pointer';
      setIsPointer(isClickable);
    };

    const handleMouseOut = () => {
      setIsPointer(false);
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const cursorStyle = {
    position: 'fixed',
    left: mousePosition.x,
    top: mousePosition.y,
    width: isPointer ? '40px' : '20px',
    height: isPointer ? '40px' : '20px',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 9999,
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.3s ease, height 0.3s ease, background 0.3s ease',
    mixBlendMode: 'difference',
    background: theme === 'dark' 
      ? `radial-gradient(circle, rgba(163,75,110,0.8) 0%, rgba(110,75,195,0.6) 50%, rgba(69,183,209,0.4) 100%)`
      : `radial-gradient(circle, rgba(163,75,110,0.6) 0%, rgba(110,75,195,0.4) 50%, rgba(69,183,209,0.3) 100%)`,
    border: theme === 'dark' 
      ? '2px solid rgba(255,255,255,0.3)'
      : '2px solid rgba(0,0,0,0.3)',
    boxShadow: isPointer 
      ? `0 0 20px ${theme === 'dark' ? 'rgba(110,75,195,0.6)' : 'rgba(110,75,195,0.4)'}`
      : `0 0 10px ${theme === 'dark' ? 'rgba(110,75,195,0.4)' : 'rgba(110,75,195,0.3)'}`,
  };

  const trailStyle = {
    position: 'fixed',
    left: mousePosition.x,
    top: mousePosition.y,
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 9998,
    transform: 'translate(-50%, -50%)',
    background: theme === 'dark' 
      ? 'rgba(110,75,195,0.8)'
      : 'rgba(110,75,195,0.6)',
    transition: 'all 0.1s ease-out',
  };

  return (
    <>
      <div style={cursorStyle} className="custom-cursor" />
      <div style={trailStyle} className="cursor-trail" />
      <style jsx>{`
        * {
          cursor: none !important;
        }
        
        .custom-cursor::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: ${isPointer ? '60px' : '30px'};
          height: ${isPointer ? '60px' : '30px'};
          border-radius: 50%;
          background: ${theme === 'dark' 
            ? 'rgba(110,75,195,0.1)' 
            : 'rgba(110,75,195,0.08)'};
          transition: all 0.3s ease;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.7;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
        }
        
        .cursor-trail {
          animation: fadeOut 0.5s ease-out forwards;
        }
        
        @keyframes fadeOut {
          to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0);
          }
        }
      `}</style>
    </>
  );
}

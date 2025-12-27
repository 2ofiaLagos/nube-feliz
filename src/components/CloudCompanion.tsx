import { useState, useEffect } from 'react';

interface CloudCompanionProps {
  emotion?: string;
  isBreathing?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const CloudCompanion = ({ emotion = 'happy', isBreathing = false, size = 'large' }: CloudCompanionProps) => {
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 150);
    }, 3000);
    return () => clearInterval(blinkInterval);
  }, []);

  const sizeClasses = {
    small: 'w-16 h-12',
    medium: 'w-24 h-18',
    large: 'w-40 h-32',
  };

  const getExpression = () => {
    switch (emotion) {
      case 'sad':
        return { eyeY: 2, mouthPath: 'M 35 75 Q 50 68 65 75' };
      case 'angry':
        return { eyeY: 0, mouthPath: 'M 38 72 L 62 72' };
      case 'scared':
        return { eyeY: -2, mouthPath: 'M 45 75 Q 50 70 55 75' };
      case 'calm':
        return { eyeY: 1, mouthPath: 'M 40 72 Q 50 76 60 72' };
      case 'tired':
        return { eyeY: 2, mouthPath: 'M 42 73 Q 50 75 58 73' };
      default: // happy
        return { eyeY: 0, mouthPath: 'M 35 70 Q 50 82 65 70' };
    }
  };

  const { eyeY, mouthPath } = getExpression();

  return (
    <div className={`relative ${sizeClasses[size]} ${isBreathing ? 'animate-breathe' : 'animate-float'}`}>
      <svg
        viewBox="0 0 100 80"
        className="w-full h-full drop-shadow-lg"
        style={{ filter: 'drop-shadow(0 8px 16px rgba(14, 186, 246, 0.3))' }}
      >
        {/* Cloud body with gradient */}
        <defs>
          <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4BDBF5" />
            <stop offset="50%" stopColor="#0EBAF6" />
            <stop offset="100%" stopColor="#2269F9" />
          </linearGradient>
        </defs>
        
        {/* Main cloud shape */}
        <path
          d="M 20 55 
             Q 5 55 10 42 
             Q 8 28 25 28 
             Q 28 15 45 18 
             Q 55 8 70 18 
             Q 88 15 90 35 
             Q 98 42 90 55 
             Q 90 65 75 65 
             L 25 65 
             Q 10 65 20 55 Z"
          fill="url(#cloudGradient)"
          stroke="#0A053C"
          strokeWidth="2"
        />
        
        {/* Left eye */}
        <ellipse
          cx="38"
          cy={50 + eyeY}
          rx={blink ? 4 : 4}
          ry={blink ? 1 : 5}
          fill="#0A053C"
          className="transition-all duration-100"
        />
        
        {/* Right eye */}
        <ellipse
          cx="62"
          cy={50 + eyeY}
          rx={blink ? 4 : 4}
          ry={blink ? 1 : 5}
          fill="#0A053C"
          className="transition-all duration-100"
        />
        
        {/* Eye highlights */}
        {!blink && (
          <>
            <circle cx="40" cy={47 + eyeY} r="1.5" fill="white" />
            <circle cx="64" cy={47 + eyeY} r="1.5" fill="white" />
          </>
        )}
        
        {/* Blush */}
        <ellipse cx="28" cy="58" rx="6" ry="3" fill="#FF9999" opacity="0.4" />
        <ellipse cx="72" cy="58" rx="6" ry="3" fill="#FF9999" opacity="0.4" />
        
        {/* Mouth */}
        <path
          d={mouthPath}
          fill="none"
          stroke="#0A053C"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="transition-all duration-300"
        />
      </svg>
    </div>
  );
};

export default CloudCompanion;

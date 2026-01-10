interface CloudCompanionProps {
  emotion?: string;
  isBreathing?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const CloudCompanion = ({ emotion = 'happy', isBreathing = false, size = 'large' }: CloudCompanionProps) => {
  const sizeClasses = {
    small: 'w-24 h-24',
    medium: 'w-36 h-36',
    large: 'w-52 h-52',
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${isBreathing ? 'animate-breathe' : 'animate-float'}`}>
      <svg
        viewBox="0 0 200 160"
        className="w-full h-full drop-shadow-lg"
        style={{ filter: 'drop-shadow(0 8px 20px rgba(14, 186, 246, 0.4))' }}
      >
        <defs>
          <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4BDBF5" />
            <stop offset="50%" stopColor="#0EBAF6" />
            <stop offset="100%" stopColor="#2269F9" />
          </linearGradient>
        </defs>
        
        {/* Main cloud shape - cute fluffy cloud */}
        <ellipse cx="100" cy="95" rx="75" ry="50" fill="url(#cloudGradient)" />
        <ellipse cx="55" cy="80" rx="40" ry="35" fill="url(#cloudGradient)" />
        <ellipse cx="145" cy="80" rx="40" ry="35" fill="url(#cloudGradient)" />
        <ellipse cx="75" cy="55" rx="35" ry="30" fill="url(#cloudGradient)" />
        <ellipse cx="125" cy="55" rx="35" ry="30" fill="url(#cloudGradient)" />
        <ellipse cx="100" cy="45" rx="30" ry="25" fill="url(#cloudGradient)" />
        
        {/* Left eye */}
        <ellipse cx="75" cy="85" rx="10" ry="13" fill="#0A053C" />
        <ellipse cx="78" cy="81" rx="4" ry="5" fill="white" />
        
        {/* Right eye */}
        <ellipse cx="125" cy="85" rx="10" ry="13" fill="#0A053C" />
        <ellipse cx="128" cy="81" rx="4" ry="5" fill="white" />
        
        {/* Blush */}
        <ellipse cx="50" cy="105" rx="12" ry="7" fill="#FFB6C1" opacity="0.6" />
        <ellipse cx="150" cy="105" rx="12" ry="7" fill="#FFB6C1" opacity="0.6" />
        
        {/* Smile */}
        <path
          d="M 85 110 Q 100 125 115 110"
          fill="none"
          stroke="#0A053C"
          strokeWidth="4"
          strokeLinecap="round"
        />
        
        {/* Left hand */}
        <path
          d="M 35 100 Q 25 95 30 110 Q 35 120 45 115"
          fill="none"
          stroke="#0A053C"
          strokeWidth="3"
          strokeLinecap="round"
        />
        
        {/* Right hand */}
        <path
          d="M 165 100 Q 175 95 170 110 Q 165 120 155 115"
          fill="none"
          stroke="#0A053C"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default CloudCompanion;

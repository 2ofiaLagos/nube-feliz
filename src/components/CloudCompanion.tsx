import cloudLogo from '@/assets/cloud-logo.png';

interface CloudCompanionProps {
  emotion?: string;
  isBreathing?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const CloudCompanion = ({ emotion = 'happy', isBreathing = false, size = 'large' }: CloudCompanionProps) => {
  const sizeClasses = {
    small: 'w-28 h-28',
    medium: 'w-44 h-44',
    large: 'w-64 h-64',
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${isBreathing ? 'animate-breathe' : 'animate-float'}`}>
      <img
        src={cloudLogo}
        alt="Nubecita amigable"
        className="w-full h-full object-contain drop-shadow-lg"
        style={{ filter: 'drop-shadow(0 8px 16px rgba(14, 186, 246, 0.3))' }}
      />
    </div>
  );
};

export default CloudCompanion;

import cloudLogo from '@/assets/cloud-logo.png';

interface CloudCompanionProps {
  emotion?: string;
  isBreathing?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const CloudCompanion = ({ emotion = 'happy', isBreathing = false, size = 'large' }: CloudCompanionProps) => {
  const sizeClasses = {
    small: 'w-20 h-20',
    medium: 'w-32 h-32',
    large: 'w-48 h-48',
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

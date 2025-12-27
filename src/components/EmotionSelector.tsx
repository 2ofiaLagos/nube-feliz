import { useState } from 'react';

interface Emotion {
  id: string;
  emoji: string;
  label: string;
  color: string;
}

const emotions: Emotion[] = [
  { id: 'happy', emoji: '😊', label: 'Feliz', color: 'bg-emotion-happy' },
  { id: 'sad', emoji: '😢', label: 'Triste', color: 'bg-emotion-sad' },
  { id: 'angry', emoji: '😠', label: 'Enojado', color: 'bg-emotion-angry' },
  { id: 'scared', emoji: '😨', label: 'Asustado', color: 'bg-emotion-scared' },
  { id: 'calm', emoji: '😌', label: 'Tranquilo', color: 'bg-emotion-calm' },
  { id: 'tired', emoji: '😴', label: 'Cansado', color: 'bg-emotion-tired' },
];

interface EmotionSelectorProps {
  onSelect: (emotion: Emotion) => void;
  selectedEmotion?: string;
}

const EmotionSelector = ({ onSelect, selectedEmotion }: EmotionSelectorProps) => {
  const [tapped, setTapped] = useState<string | null>(null);

  const handleSelect = (emotion: Emotion) => {
    setTapped(emotion.id);
    setTimeout(() => setTapped(null), 300);
    onSelect(emotion);
  };

  return (
    <div className="grid grid-cols-3 gap-4 px-2">
      {emotions.map((emotion, index) => (
        <button
          key={emotion.id}
          onClick={() => handleSelect(emotion)}
          className={`
            emotion-button flex flex-col items-center justify-center
            ${emotion.color} bg-opacity-20 
            ${selectedEmotion === emotion.id ? 'ring-4 ring-primary ring-offset-2' : ''}
            ${tapped === emotion.id ? 'animate-wiggle' : ''}
          `}
          style={{ 
            animationDelay: `${index * 0.05}s`,
            backgroundColor: `hsl(var(--emotion-${emotion.id}) / 0.2)`
          }}
        >
          <span className="text-5xl mb-2 drop-shadow-md">{emotion.emoji}</span>
          <span className="text-ink font-semibold text-sm">{emotion.label}</span>
        </button>
      ))}
    </div>
  );
};

export default EmotionSelector;

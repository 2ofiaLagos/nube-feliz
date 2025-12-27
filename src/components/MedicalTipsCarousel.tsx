import { ChevronLeft } from 'lucide-react';
import { useState, useRef } from 'react';
import CloudCompanion from './CloudCompanion';

interface MedicalTipsCarouselProps {
  onBack: () => void;
}

const tips = [
  {
    id: 1,
    title: '¿Qué hace la vacuna?',
    emoji: '💉',
    content: 'La vacuna es como un escudo mágico que protege tu cuerpo de los villanos invisibles llamados virus.',
    illustration: '🛡️',
    color: 'from-blue-200 to-blue-300',
  },
  {
    id: 2,
    title: 'El estetoscopio',
    emoji: '🩺',
    content: 'Es un aparato especial que le permite al doctor escuchar tu corazón. ¡Tu corazón hace música!',
    illustration: '💓',
    color: 'from-pink-200 to-pink-300',
  },
  {
    id: 3,
    title: 'Las máquinas que pitan',
    emoji: '🖥️',
    content: 'Son ayudantes del cuerpo que nos cuentan cómo te sientes. Los pitidos son su forma de hablar.',
    illustration: '📊',
    color: 'from-green-200 to-green-300',
  },
  {
    id: 4,
    title: 'La bata del hospital',
    emoji: '🥼',
    content: 'Es como un pijama especial para superhéroes del hospital. ¡Te ayuda a sentirte cómodo!',
    illustration: '🦸‍♂️',
    color: 'from-purple-200 to-purple-300',
  },
  {
    id: 5,
    title: 'Las medicinas',
    emoji: '💊',
    content: 'Son pequeños ayudantes que viajan por tu cuerpo para pelear contra lo que te hace sentir mal.',
    illustration: '⚔️',
    color: 'from-orange-200 to-orange-300',
  },
];

const MedicalTipsCarousel = ({ onBack }: MedicalTipsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = 296; // 280px + 16px gap
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="gradient-background min-h-screen pb-8">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-6 pb-4">
        <button 
          onClick={onBack}
          className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 text-ink" />
        </button>
        <h1 className="text-2xl font-bold text-ink">Tips Médicos</h1>
        <div className="w-12" />
      </div>

      {/* Cloud companion */}
      <div className="flex justify-center mb-4">
        <CloudCompanion emotion="calm" size="medium" />
      </div>

      {/* Introduction */}
      <div className="px-6 mb-6">
        <p className="text-center text-ink/80 font-medium">
          Desliza para aprender cosas increíbles 👆
        </p>
      </div>

      {/* Carousel */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto px-6 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {tips.map((tip, index) => (
          <div
            key={tip.id}
            className={`
              flashcard flex flex-col items-center text-center
              bg-gradient-to-br ${tip.color}
              animate-scale-in
            `}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-5xl mb-4">{tip.emoji}</div>
            <h3 className="font-bold text-ink text-xl mb-3">{tip.title}</h3>
            <p className="text-ink/80 text-base leading-relaxed mb-4">{tip.content}</p>
            <div className="text-6xl opacity-50">{tip.illustration}</div>
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-4">
        {tips.map((_, index) => (
          <div
            key={index}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${index === currentIndex ? 'w-6 bg-primary' : 'bg-ink/20'}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default MedicalTipsCarousel;

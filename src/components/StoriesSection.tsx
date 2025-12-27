import { Play, ChevronLeft } from 'lucide-react';
import CloudCompanion from './CloudCompanion';

interface StoriesSectionProps {
  onBack: () => void;
}

const stories = [
  {
    id: 1,
    title: 'Sofía y su valentía',
    duration: '3 min',
    emoji: '🦋',
    color: 'bg-purple-100',
    description: 'Sofía aprendió que ser valiente no es no tener miedo...',
  },
  {
    id: 2,
    title: 'El superhéroe del hospital',
    duration: '4 min',
    emoji: '🦸',
    color: 'bg-blue-100',
    description: 'Lucas descubrió sus superpoderes secretos...',
  },
  {
    id: 3,
    title: 'Mi amigo el doctor',
    duration: '2 min',
    emoji: '👨‍⚕️',
    color: 'bg-green-100',
    description: 'Emma hizo un nuevo amigo muy especial...',
  },
  {
    id: 4,
    title: 'Las estrellas del cuarto',
    duration: '3 min',
    emoji: '⭐',
    color: 'bg-yellow-100',
    description: 'Una noche mágica en el hospital...',
  },
];

const StoriesSection = ({ onBack }: StoriesSectionProps) => {
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
        <h1 className="text-2xl font-bold text-ink">Historias</h1>
        <div className="w-12" />
      </div>

      {/* Cloud companion */}
      <div className="flex justify-center mb-6">
        <CloudCompanion emotion="happy" size="medium" />
      </div>

      {/* Introduction */}
      <div className="px-6 mb-6">
        <p className="text-center text-ink/80 font-medium">
          Escucha historias de otros niños valientes como tú 💪
        </p>
      </div>

      {/* Stories list */}
      <div className="px-4 space-y-4">
        {stories.map((story, index) => (
          <div
            key={story.id}
            className="card-child flex items-center gap-4 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`w-16 h-16 ${story.color} rounded-2xl flex items-center justify-center text-3xl shadow-md`}>
              {story.emoji}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-ink text-lg">{story.title}</h3>
              <p className="text-muted-foreground text-sm line-clamp-1">{story.description}</p>
              <span className="text-xs text-primary font-semibold">{story.duration}</span>
            </div>
            <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <Play className="w-5 h-5 text-primary-foreground ml-0.5" fill="currentColor" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoriesSection;

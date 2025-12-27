import { BookOpen, Stethoscope, Wind } from 'lucide-react';

interface ShortcutButtonsProps {
  onNavigate: (section: string) => void;
}

const shortcuts = [
  {
    id: 'stories',
    icon: BookOpen,
    label: 'Historias',
    emoji: '📖',
    description: 'Escucha historias de otros niños',
    gradient: 'from-purple-400 to-pink-400',
  },
  {
    id: 'tips',
    icon: Stethoscope,
    label: 'Tips Médicos',
    emoji: '💊',
    description: 'Aprende sobre los doctores',
    gradient: 'from-green-400 to-teal-400',
  },
  {
    id: 'breathing',
    icon: Wind,
    label: 'Respirar',
    emoji: '🌬️',
    description: 'Relájate con ejercicios',
    gradient: 'from-blue-400 to-cyan-400',
  },
];

const ShortcutButtons = ({ onNavigate }: ShortcutButtonsProps) => {
  return (
    <div className="grid grid-cols-3 gap-3 px-2">
      {shortcuts.map((shortcut, index) => (
        <button
          key={shortcut.id}
          onClick={() => onNavigate(shortcut.id)}
          className="btn-shortcut group animate-slide-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className={`
            w-14 h-14 rounded-2xl flex items-center justify-center
            bg-gradient-to-br ${shortcut.gradient}
            group-hover:scale-110 transition-transform duration-300
            shadow-lg
          `}>
            <span className="text-2xl">{shortcut.emoji}</span>
          </div>
          <span className="text-ink font-bold text-sm text-center leading-tight">
            {shortcut.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default ShortcutButtons;

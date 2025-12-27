import { useState, useEffect } from 'react';
import { ChevronLeft, Play, Pause, RefreshCw } from 'lucide-react';
import CloudCompanion from './CloudCompanion';

interface BreathingExerciseProps {
  onBack: () => void;
}

const miniActions = [
  { id: 1, emoji: '🏝️', label: 'Lugar seguro', description: 'Imagina tu lugar favorito' },
  { id: 2, emoji: '🎵', label: 'Sonidos', description: 'Elige un sonido relajante' },
  { id: 3, emoji: '🎨', label: 'Dibujar', description: 'Dibuja tu emoción' },
];

const BreathingExercise = ({ onBack }: BreathingExerciseProps) => {
  const [isBreathing, setIsBreathing] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [count, setCount] = useState(4);
  const [cycles, setCycles] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isBreathing) {
      interval = setInterval(() => {
        setCount((prev) => {
          if (prev <= 1) {
            setPhase((currentPhase) => {
              if (currentPhase === 'inhale') return 'hold';
              if (currentPhase === 'hold') return 'exhale';
              setCycles((c) => c + 1);
              return 'inhale';
            });
            return 4;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isBreathing]);

  const getPhaseText = () => {
    switch (phase) {
      case 'inhale': return 'Respira... 🌬️';
      case 'hold': return 'Mantén... ✨';
      case 'exhale': return 'Suelta... 🍃';
    }
  };

  const getPhaseColor = () => {
    switch (phase) {
      case 'inhale': return 'from-blue-300 to-cyan-300';
      case 'hold': return 'from-purple-300 to-pink-300';
      case 'exhale': return 'from-green-300 to-teal-300';
    }
  };

  const reset = () => {
    setIsBreathing(false);
    setPhase('inhale');
    setCount(4);
    setCycles(0);
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
        <h1 className="text-2xl font-bold text-ink">Respirar</h1>
        <div className="w-12" />
      </div>

      {/* Main breathing exercise */}
      <div className="flex flex-col items-center px-6">
        {/* Cloud companion - breathing animation */}
        <div className="mb-6">
          <CloudCompanion emotion="calm" size="large" isBreathing={isBreathing} />
        </div>

        {/* Breathing circle */}
        <div 
          className={`
            w-48 h-48 rounded-full flex flex-col items-center justify-center
            bg-gradient-to-br ${getPhaseColor()}
            transition-all duration-1000 shadow-xl
            ${isBreathing ? (phase === 'inhale' ? 'scale-110' : phase === 'exhale' ? 'scale-90' : 'scale-100') : 'scale-100'}
          `}
        >
          <span className="text-5xl font-bold text-ink mb-2">{count}</span>
          <span className="text-lg font-semibold text-ink/80">{getPhaseText()}</span>
        </div>

        {/* Cycles counter */}
        {cycles > 0 && (
          <div className="mt-4 text-center">
            <span className="text-ink font-semibold">🌟 {cycles} respiraciones completas</span>
          </div>
        )}

        {/* Controls */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={() => setIsBreathing(!isBreathing)}
            className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          >
            {isBreathing ? (
              <Pause className="w-7 h-7 text-primary-foreground" fill="currentColor" />
            ) : (
              <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
            )}
          </button>
          <button
            onClick={reset}
            className="w-16 h-16 rounded-full bg-card flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          >
            <RefreshCw className="w-6 h-6 text-ink" />
          </button>
        </div>

        {/* Instructions */}
        <p className="text-center text-ink/70 font-medium mt-6 px-4">
          Respira junto con la nubecita. Ella te guiará 💙
        </p>
      </div>

      {/* Mini-actions section */}
      <div className="mt-10 px-4">
        <h2 className="text-lg font-bold text-ink mb-4 px-2">Mini-acciones ✨</h2>
        <div className="grid grid-cols-3 gap-3">
          {miniActions.map((action, index) => (
            <button
              key={action.id}
              className="btn-shortcut animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-4xl mb-2">{action.emoji}</span>
              <span className="text-ink font-bold text-sm">{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreathingExercise;

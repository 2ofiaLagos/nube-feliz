import { Flame } from 'lucide-react';

interface EmotionStreakProps {
  streak: number;
}

const EmotionStreak = ({ streak }: EmotionStreakProps) => {
  return (
    <div className="card-child flex items-center gap-3 px-5 py-3 inline-flex">
      <div className="relative">
        <Flame className="w-8 h-8 text-orange-400 animate-pulse-soft" />
        <Flame className="w-8 h-8 text-yellow-400 absolute top-0 left-0 opacity-50 animate-bounce-gentle" />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-ink">{streak}</span>
        <span className="text-xs text-muted-foreground font-medium">días seguidos</span>
      </div>
    </div>
  );
};

export default EmotionStreak;

import { useState, useEffect } from 'react';
import CloudCompanion from '@/components/CloudCompanion';
import EmotionSelector from '@/components/EmotionSelector';
import EmotionStreak from '@/components/EmotionStreak';
import ShortcutButtons from '@/components/ShortcutButtons';
import StoriesSection from '@/components/StoriesSection';
import MedicalTipsCarousel from '@/components/MedicalTipsCarousel';
import BreathingExercise from '@/components/BreathingExercise';

interface Emotion {
  id: string;
  emoji: string;
  label: string;
  color: string;
}

const Index = () => {
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);
  const [streak, setStreak] = useState(5);
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleEmotionSelect = (emotion: Emotion) => {
    setSelectedEmotion(emotion);
    // Simulate streak update
    setStreak((prev) => prev + 1);
  };

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
  };

  const handleBack = () => {
    setCurrentSection(null);
  };

  // Render different sections
  if (currentSection === 'stories') {
    return <StoriesSection onBack={handleBack} />;
  }

  if (currentSection === 'tips') {
    return <MedicalTipsCarousel onBack={handleBack} />;
  }

  if (currentSection === 'breathing') {
    return <BreathingExercise onBack={handleBack} />;
  }

  return (
    <div className="gradient-background min-h-screen pb-8 overflow-hidden">
      {/* Welcome overlay */}
      {showWelcome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#DCE0B5] to-[#AADFD5]">
          <div className="text-center animate-scale-in">
            <CloudCompanion emotion="happy" size="large" />
            <h1 className="text-3xl font-bold text-ink mt-6">¡Hola!</h1>
            <p className="text-ink/70 mt-2">Soy tu nubecita amiga</p>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className={`transition-opacity duration-500 ${showWelcome ? 'opacity-0' : 'opacity-100'}`}>
        {/* Header with streak */}
        <div className="flex justify-end px-4 pt-6">
          <EmotionStreak streak={streak} />
        </div>

        {/* Cloud companion */}
        <div className="flex justify-center mt-4 mb-6">
          <CloudCompanion 
            emotion={selectedEmotion?.id || 'happy'} 
            size="large" 
          />
        </div>

        {/* Question */}
        <div className="text-center px-6 mb-8">
          <h1 className="text-3xl font-bold text-ink leading-tight">
            ¿Cómo te sientes hoy?
          </h1>
          {selectedEmotion && (
            <p className="text-lg text-ink/70 mt-2 animate-fade-in">
              Te sientes {selectedEmotion.label.toLowerCase()} {selectedEmotion.emoji}
            </p>
          )}
        </div>

        {/* Emotion selector */}
        <div className="px-4 mb-10">
          <EmotionSelector 
            onSelect={handleEmotionSelect} 
            selectedEmotion={selectedEmotion?.id}
          />
        </div>

        {/* Shortcuts - only show after emotion selection */}
        {selectedEmotion && (
          <div className="px-4 animate-slide-up">
            <h2 className="text-lg font-bold text-ink mb-4 px-2">
              ¿Qué quieres hacer? ✨
            </h2>
            <ShortcutButtons onNavigate={handleNavigate} />
          </div>
        )}

        {/* Floating decoration elements */}
        <div className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none overflow-hidden">
          <div className="absolute bottom-4 left-8 text-4xl opacity-30 animate-float" style={{ animationDelay: '0s' }}>
            ☁️
          </div>
          <div className="absolute bottom-12 right-12 text-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>
            ⭐
          </div>
          <div className="absolute bottom-6 right-1/3 text-2xl opacity-25 animate-float" style={{ animationDelay: '2s' }}>
            🌈
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

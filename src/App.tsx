import './App.scss'
import { useEffect, useState } from 'react';
import MainButton from './components/mainButton/MainButton';
import CommentsScreen from './components/commentsScreen/CommentsScreen';
import CrackerAnimation from './components/animations/CrackerAnimation';
import HiddenText from './components/hiddenText/HiddenText';
import SpiritScreen from './components/spiritScreen/SpiritScreen';

function App() {
  const [phase, setPhase] = useState(1);

  const handlePhase = (phase: number) => {
    setPhase(phase);
  };

  const isMessageVisible = phase === 3;

  const handleKeyDown = (e: { key: string }) => {
    if (e.key === 'Enter') {
      setPhase(5);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div className='all-cn'>
      <div className='cn'>
        <MainButton
          phase={phase}
          setPhase={handlePhase}
        />
        <div className='message-cn-top'>
          <HiddenText
            text='全力で向き合って'
            index={1}
            isVisible={isMessageVisible}
          />
          <HiddenText
            text='自分も楽しんで'
            index={2}
            isVisible={isMessageVisible}
          />
        </div>
        <div className='message-cn-bottom'>
          <HiddenText
            text='メンバーみんなが成長して'
            index={3}
            isVisible={isMessageVisible}
          />
          <HiddenText
            text='楽しんでもらう！'
            index={4}
            isVisible={isMessageVisible}
          />
          <HiddenText
            text='以上！'
            index={6}
            isVisible={isMessageVisible}
          />
        </div>
      </div>
      {phase === 2 && (
        <CommentsScreen setPhase={handlePhase} />
      )}
      {phase === 3 && (
        <div className='cracker-cn'>
          <CrackerAnimation />
        </div>
      )}
      {phase === 5 && (
        <SpiritScreen />
      )}
    </div>
  )
}

export default App

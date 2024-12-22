import { motion } from 'framer-motion';
import { comments } from '../../lib/comments';
import './commentsScreen.scss';
import { useEffect, useRef, useState } from 'react';

function CommentsScreen({
  setPhase,
}: {
  setPhase: (phase: number) => void
}) {
  const [screenComments, setScreenComments] = useState(comments);
  const [switchIndex, setSwitchIndex] = useState(0);
  const [duration, setDuration] = useState(0.1);
  const [height, setHeight] = useState(0);
  const bgRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (bgRef.current) {
      const clientHeight = bgRef?.current.clientHeight;

      if (clientHeight < 900) {
        setScreenComments(screenComments.slice(0, screenComments.length - 15));
        setDuration(0.2);
      }
      setHeight(clientHeight);
    }
  }, [bgRef]);

  useEffect(() => {
    if (screenComments.length >= height / 30) {
      setSwitchIndex(Math.floor(height / 31));
    }
  }, [height]);

  useEffect(() => {
    const triggerPhase = setTimeout(() => {
      setPhase(3);
    }, 14000);

    return () => {
      clearTimeout(triggerPhase)
    };
  }, []);

  return (
    <motion.div
      className='comments-bg'
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      ref={bgRef}
    >
      <div className='comments-cn'>
      {height !== 0 && (
        screenComments.map((comment, index) => {
          const topIndex = height > (index * 30) ? (index * 30) : ((index - switchIndex) * 30);

          return (
            <motion.div
              className='comment'
              style={{
                top: `${topIndex}px`,
              }}
              initial={{ x: '100%' }}
              animate={{ x: '-100%' }}
              transition={{
                delay: index * duration + Math.random(),
                duration: 12 + Math.random() * 5,
              }}
              key={index}
            >
              {comment}
            </motion.div>
          );
        })
      )}
      </div>
    </motion.div>
  );
}

export default CommentsScreen;

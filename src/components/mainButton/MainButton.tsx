import { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import './mainButton.scss';
import { iconImages } from "../../lib/iconImages";

function MainButton({
  phase,
  setPhase,
}: {
  phase: number,
  setPhase: (phase: number) => void,
}) {
  const circleLength = 2 * Math.PI * 16 * 8;
  const buttonTexts = ["Click!!", "自己紹介", "意気込み", "Let's go!!"];
  const [buttonTextIndex, setButtonTextIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const images = iconImages;

  const handleButton = () => {
    if (buttonTextIndex < 3) {
      if (buttonTextIndex === 2) {
        setPhase(2);
      }
      setButtonTextIndex(buttonTextIndex + 1);
    }
  };

  const isStopAnimation = phase === 2;

  useEffect(() => {
    if (phase !== 3) return;

    const interval = setTimeout(() => {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }, 3000);

    return () => {
      clearTimeout(interval);
    };
  }, [imageIndex, phase]);

  return (
    <div className='btn-cn'>
      <div className="main-btn-bg">
        <motion.img
          src={images[imageIndex].src}
          className="main-btn-img"
          exit={{ opacity: 0 }}
        />
        <motion.div
          className='main-btn'
          initial={{opacity: 1}}
          animate={{opacity: phase === 3 ? 0 : 1}}
          transition={{ duration: 1.5 }}
          onClick={handleButton}
        >
          <p className='main-btn-text'>
            {buttonTexts[buttonTextIndex]}
          </p>
        </motion.div>
      </div>
      <svg className='btn-circle-svg'>
        <defs>
          <linearGradient id='gradientStroke' x1="0%" y1="0%" x2="0%" y2="100%">
            <stop stopColor='var(--purple)' offset="0%" />
            <stop stopColor='var(--light-purple)' offset="100%" />
          </linearGradient>
        </defs>
        <motion.circle
          className='btn-circle'
          stroke='url(#gradientStroke)'
          key={isStopAnimation ? "fixed" : "animating"}
          animate={{
            strokeDashoffset: isStopAnimation ? 0 : [circleLength, 0],
            rotate: [0, 360],
          }}
          strokeDasharray={circleLength}
          strokeDashoffset={circleLength}
          transition={{
            repeat: isStopAnimation ? 0 : Infinity,
            duration: 2.5,
            repeatType: "loop",
            ease: [0.4, 0, 0.2, 1],
          }}
          initial={{strokeDashoffset: circleLength}}
        />
      </svg>
    </div>
  );
}

export default MainButton;

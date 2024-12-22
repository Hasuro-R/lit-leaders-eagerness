import Lottie from 'lottie-react';
import Cracker from '../../assets/animations/cracker.json';
import './animations.scss';
import { useEffect, useState } from 'react';

function CrackerAnimation() {
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const triggerEnd = setTimeout(() => {
      setIsEnd(true);
    }, 3000);

    return () => {
      clearTimeout(triggerEnd);
    };
  }, []);

  return (
    <div
      className='animation-cn'
      style={{ display: isEnd ? 'none' : 'block' }}
    >
      <Lottie
        animationData={Cracker}
        autoplay
        loop={false}
        defer
      />
    </div>
  );
}

export default CrackerAnimation;

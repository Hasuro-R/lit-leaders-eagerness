import { motion } from 'framer-motion';
import './hiddenText.scss';

function HiddenText({
  isVisible,
  index,
  text,
}: {
  isVisible: boolean,
  index: number,
  text: string,
}) {
  return (
    <div className="hidden-text">
      {text}
      <motion.div
        className='hidden-box'
        animate={
          isVisible ? { opacity: 0.6, width: 0 } : { opacity: 1 }
        }
        transition={{ duration: 1.5, delay: index * 1 }}
      />
    </div>
  );
}

export default HiddenText;

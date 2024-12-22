import { motion } from 'framer-motion';
import mapImage from '../../assets/images/map.png';
import styles from './spiritScreen.module.scss';

export default function SpiritScreen() {
  return (
    <motion.div
      className={styles['screen']}
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: '100vw' }}
      transition={{ duration: 1.5 }}
    >
      <motion.p
        className={styles['title']}
        initial={{ opacity: 0, fontSize: '1rem' }}
        animate={{ opacity: 1, fontSize: '3rem' }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        根性見せます💪
      </motion.p>
      <motion.img
        src={mapImage}
        className={styles['image']}
        alt='map'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 4 }}
      />
      <motion.div
        className={styles['bg-text']}
        initial={{ opacity: 0, fontSize: '1rem' }}
        animate={{ opacity: 1, fontSize: '3rem' }}
        transition={{ duration: 0.5, delay: 6 }}
      >
        渋谷〜船橋の30km歩きます🤩
      </motion.div>
    </motion.div>
  );
}

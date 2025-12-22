import useHamburger from '@/context/hamburger';
import { motion, AnimatePresence } from "motion/react"
import { Link } from 'react-router-dom';

const animation = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    whileHover: { scale: 1.01 },
    whileTap: { scale: 0.95 },
	class: "hover:text-primary"
}

const Hamburger = () => {
  const isOpen = useHamburger((state) => state.isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          // Use motion for the panel itself for smoother entry
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed top-0 right-0 h-full bg-white z-40 shadow-2xl w-full xl:w-7xl"
        >
          <div className="flex flex-col h-full p-8 pt-24">
            <ul className="space-y-6 text-2xl font-medium">
              {/* Add unique keys and staggered children if desired */}
              <motion.li key="home" {...animation}><Link to="/">Home</Link></motion.li>
              <motion.li key="about" {...animation}><Link to="/about">About</Link></motion.li>
              <motion.li key="services" {...animation}><Link to="/services">Services</Link></motion.li>
              <motion.li key="contact" {...animation}><Link to="/contact">Contact</Link></motion.li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Hamburger;
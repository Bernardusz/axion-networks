import useHamburger from "@/context/hamburger";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

const animation = {
    class: "hover:text-primary",
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    whileHover: { scale: 1.01 },
    whileTap: { scale: 0.95 },
};

const Hamburger = () => {
    const isOpen = useHamburger(state => state.isOpen);
    const closeState = useHamburger(state => state.closeState);
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    // Use motion for the panel itself for smoother entry
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed top-0 right-0 z-40 h-full w-full bg-white shadow-2xl xl:w-7xl"
                >
                    <div className="flex h-full flex-col p-8 pt-24">
                        <ul className="space-y-6 text-2xl font-medium">
                            {/* Add unique keys and staggered children if desired */}
                            <motion.li key="home" {...animation}>
                                <Link onClick={closeState} to="/">
                                    Home
                                </Link>
                            </motion.li>
                            <motion.li key="products" {...animation}>
                                <Link onClick={closeState} to="/products">
                                    Products
                                </Link>
                            </motion.li>
                            <motion.li key="pricing" {...animation}>
                                <Link onClick={closeState} to="/pricing">
                                    Pricing
                                </Link>
                            </motion.li>
                            <motion.li key="login" {...animation}>
                                <Link onClick={closeState} to="/login">
                                    Login
                                </Link>
                            </motion.li>
                            <motion.li key="signup" {...animation}>
                                <Link onClick={closeState} to="/signup">
                                    Sign Up
                                </Link>
                            </motion.li>
                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Hamburger;

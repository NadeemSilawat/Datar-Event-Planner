import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FloatingRings, ParticleField } from './Scene3D';
import './Hero.css';

const Hero = () => {
    const handleScroll = (id) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-3d">
                <Canvas
                    camera={{ position: [0, 0, 8], fov: 45 }}
                    gl={{ alpha: true, antialias: true }}
                >
                    <Suspense fallback={null}>
                        <FloatingRings />
                        <ParticleField />
                    </Suspense>
                </Canvas>
            </div>

            <div className="hero-content container">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.span
                        className="hero-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Crafting Unforgettable Moments
                    </motion.span>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        Your Dream Wedding
                        <br />
                        <span className="text-gold">Brought to Life</span>
                    </motion.h1>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        Experience elegance, sophistication, and perfection with Datar Event.
                        We transform your vision into a magnificent celebration that tells your unique story.
                    </motion.p>

                    <motion.div
                        className="hero-ctas"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <motion.button
                            className="btn btn-primary btn-large"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleScroll('#contact')}
                        >
                            Start Planning
                            <ArrowRight size={20} />
                        </motion.button>

                        <motion.button
                            className="btn btn-secondary btn-large"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleScroll('#gallery')}
                        >
                            View Gallery
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            <div className="hero-scroll-indicator">
                <motion.div
                    className="scroll-arrow"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    ↓
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

import { motion } from 'framer-motion';
import { Heart, Users, Award, Calendar } from 'lucide-react';
import './About.css';

const About = () => {
    const stats = [
        { icon: Calendar, number: '500+', label: 'Events Completed' },
        { icon: Heart, number: '1000+', label: 'Happy Couples' },
        { icon: Users, number: '50+', label: 'Team Members' },
        { icon: Award, number: '25+', label: 'Awards Won' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section id="about" className="about section">
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>About Datar Event</h2>
                    <p className="section-subtitle">Creating Magical Moments Since 2010</p>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3>Your Wedding, Our Passion</h3>
                        <p>
                            At Datar Event, we believe every wedding should be a masterpiece. With over a decade
                            of experience in crafting extraordinary celebrations, we've perfected the art of
                            turning dreams into reality.
                        </p>
                        <p>
                            Our team of passionate professionals works tirelessly to ensure every detail of your
                            special day is flawless. From intimate gatherings to grand celebrations, we bring
                            creativity, elegance, and meticulous planning to every event.
                        </p>
                        <p>
                            We don't just plan weddings—we create unforgettable experiences that reflect your
                            unique love story. Let us transform your vision into a celebration that you and your
                            guests will cherish forever.
                        </p>
                    </motion.div>

                    <motion.div
                        className="about-stats"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="stat-card"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <div className="stat-icon">
                                    <stat.icon size={32} />
                                </div>
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

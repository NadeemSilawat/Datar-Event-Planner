import { motion } from 'framer-motion';
import { Sparkles, Palette, UtensilsCrossed, Music, Camera, Flower2 } from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: Sparkles,
            title: 'Complete Wedding Planning',
            description: 'From concept to execution, we handle every detail of your special day with precision and care.',
            features: ['Timeline Management', 'Vendor Coordination', 'Budget Planning', 'Day-of Coordination']
        },
        {
            icon: Palette,
            title: 'Venue Decoration',
            description: 'Transform any space into a breathtaking celebration with our creative decoration and design services.',
            features: ['Floral Arrangements', 'Lighting Design', 'Stage Setup', 'Theme Decoration']
        },
        {
            icon: UtensilsCrossed,
            title: 'Catering Services',
            description: 'Delight your guests with exquisite cuisine tailored to your taste and preferences.',
            features: ['Custom Menus', 'Multi-Cuisine Options', 'Live Stations', 'Dessert Bars']
        },
        {
            icon: Camera,
            title: 'Photography & Videography',
            description: 'Capture every precious moment with our professional photography and cinematic videography.',
            features: ['Pre-Wedding Shoots', 'Candid Photography', 'Drone Coverage', 'Same-Day Edits']
        },
        {
            icon: Music,
            title: 'Entertainment',
            description: 'Keep your guests entertained with live music, DJs, and unique performance options.',
            features: ['Live Bands', 'DJ Services', 'Cultural Performances', 'Interactive Activities']
        },
        {
            icon: Flower2,
            title: 'Floral Design',
            description: 'Stunning floral arrangements that add elegance and beauty to your celebration.',
            features: ['Bridal Bouquets', 'Centerpieces', 'Garlands', 'Floral Installations']
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section id="services" className="services section">
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Our Services</h2>
                    <p className="section-subtitle">Comprehensive Solutions for Your Perfect Wedding</p>
                </motion.div>

                <motion.div
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            variants={cardVariants}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="service-icon">
                                <service.icon size={40} />
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <ul className="service-features">
                                {service.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <span className="feature-bullet">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;

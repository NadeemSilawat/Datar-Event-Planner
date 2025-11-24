import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Twitter, href: '#', label: 'Twitter' },
    ];

    const footerLinks = {
        Company: [
            { name: 'About Us', href: '#about' },
            { name: 'Our Services', href: '#services' },
            { name: 'Gallery', href: '#gallery' },
            { name: 'Contact', href: '#contact' },
        ],
        Services: [
            { name: 'Wedding Planning', href: '#services' },
            { name: 'Venue Decoration', href: '#services' },
            { name: 'Catering', href: '#services' },
            { name: 'Photography', href: '#services' },
        ],
        Resources: [
            { name: 'Blog', href: '#' },
            { name: 'FAQs', href: '#' },
            { name: 'Terms of Service', href: '#' },
            { name: 'Privacy Policy', href: '#' },
        ],
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <motion.div
                        className="footer-brand"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="footer-logo">
                            <span className="logo-text">Datar</span>
                            <span className="logo-accent">Event</span>
                        </div>
                        <p className="footer-tagline">
                            Crafting unforgettable moments and turning dreams into reality since 2010.
                        </p>
                        <div className="footer-social">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    className="social-link"
                                    aria-label={social.label}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {Object.entries(footerLinks).map(([title, links], index) => (
                        <motion.div
                            key={title}
                            className="footer-links"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h4>{title}</h4>
                            <ul>
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="footer-bottom"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <p>
                        © {currentYear} Datar Event. All rights reserved. Made with{' '}
                        <Heart size={16} className="heart-icon" fill="currentColor" /> for couples in love.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;

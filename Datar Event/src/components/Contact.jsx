import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would send this to a backend
        alert('Thank you for reaching out! We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', eventDate: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactInfo = [
        {
            icon: Phone,
            title: 'Phone',
            info: '+1 (555) 123-4567',
            link: 'tel:+15551234567'
        },
        {
            icon: Mail,
            title: 'Email',
            info: 'info@datarevent.com',
            link: 'mailto:info@datarevent.com'
        },
        {
            icon: MapPin,
            title: 'Address',
            info: '123 Wedding Lane, Event City, EC 12345',
            link: '#'
        },
        {
            icon: Clock,
            title: 'Business Hours',
            info: 'Mon-Sat: 9AM - 6PM',
            link: '#'
        }
    ];

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Get In Touch</h2>
                    <p className="section-subtitle">Let's Start Planning Your Dream Wedding</p>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3>Contact Information</h3>
                        <p>Ready to bring your dream wedding to life? Contact us today and let's create something extraordinary together.</p>

                        <div className="contact-cards">
                            {contactInfo.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.link}
                                    className="contact-card"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <div className="contact-icon">
                                        <item.icon size={24} />
                                    </div>
                                    <div className="contact-details">
                                        <h4>{item.title}</h4>
                                        <p>{item.info}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-wrapper"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="eventDate">Event Date</label>
                                <input
                                    type="date"
                                    id="eventDate"
                                    name="eventDate"
                                    value={formData.eventDate}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="Tell us about your dream wedding..."
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                className="btn btn-primary btn-large submit-btn"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Send Message
                                <Send size={20} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

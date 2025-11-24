import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const galleryImages = [
        {
            id: 1,
            src: '/gallery1.png',
            alt: 'Elegant Wedding Venue',
            category: 'Venue'
        },
        {
            id: 2,
            src: '/gallery2.png',
            alt: 'Outdoor Wedding Ceremony',
            category: 'Ceremony'
        },
        {
            id: 3,
            src: '/gallery3.png',
            alt: 'Wedding Table Centerpiece',
            category: 'Decor'
        },
        {
            id: 4,
            src: '/gallery4.png',
            alt: 'Luxury Wedding Cake',
            category: 'Catering'
        },
        {
            id: 5,
            src: '/gallery5.png',
            alt: 'Bride and Groom Portrait',
            category: 'Photography'
        },
    ];

    const handlePrevious = () => {
        const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
        const previousIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
        setSelectedImage(galleryImages[previousIndex]);
    };

    const handleNext = () => {
        const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
        const nextIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
        setSelectedImage(galleryImages[nextIndex]);
    };

    return (
        <section id="gallery" className="gallery section">
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Our Gallery</h2>
                    <p className="section-subtitle">Moments We've Created & Memories We've Captured</p>
                </motion.div>

                <motion.div
                    className="gallery-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            className="gallery-item"
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1 },
                            }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setSelectedImage(image)}
                        >
                            <img src={image.src} alt={image.alt} loading="lazy" />
                            <div className="gallery-overlay">
                                <span className="gallery-category">{image.category}</span>
                                <h4>{image.alt}</h4>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="lightbox-close"
                            onClick={() => setSelectedImage(null)}
                            aria-label="Close"
                        >
                            <X size={32} />
                        </button>

                        <button
                            className="lightbox-nav lightbox-prev"
                            onClick={(e) => {
                                e.stopPropagation();
                                handlePrevious();
                            }}
                            aria-label="Previous"
                        >
                            <ChevronLeft size={40} />
                        </button>

                        <button
                            className="lightbox-nav lightbox-next"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleNext();
                            }}
                            aria-label="Next"
                        >
                            <ChevronRight size={40} />
                        </button>

                        <motion.div
                            className="lightbox-content"
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src={selectedImage.src} alt={selectedImage.alt} />
                            <div className="lightbox-info">
                                <span className="lightbox-category">{selectedImage.category}</span>
                                <h3>{selectedImage.alt}</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;

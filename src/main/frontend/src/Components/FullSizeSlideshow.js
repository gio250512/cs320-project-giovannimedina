import React, { useState, useEffect, useRef } from 'react';
import '../Styles/FullSizeSlideshow.css'; // Ensure this CSS file exists
import PropTypes from 'prop-types'; // For prop type validation

// Import local sources
import golden from '../Sources/GoldenGate1.jpg';
import Mountains1 from '../Sources/Mountains.MOV';

const FullSizeSlideshow = ({ mediaItems }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRefs = useRef([]); // Ref to store video elements

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length);
    };

    // Auto-play video when the slide changes
    useEffect(() => {
        if (mediaItems[currentIndex].type === 'video') {
            const video = videoRefs.current[currentIndex];
            if (video) {
                video.play().catch((error) => {
                    console.error('Auto-play failed:', error);
                });
            }
        }
    }, [currentIndex]);

    // Auto-advance slides
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="slideshow-container">
            {mediaItems.map((media, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentIndex ? 'active' : ''}`}
                >
                    {media.type === 'image' ? (
                        <img src={media.url} alt={`Slide ${index}`} />
                    ) : (
                        <video
                            ref={(el) => (videoRefs.current[index] = el)} // Store video reference
                            controls
                            autoPlay={index === currentIndex} // Auto-play only for the active slide
                            muted // Required for auto-play in most browsers
                        >
                            <source src={media.url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}

                    {/* Description Box */}
                    <div className="description-box">
                        <h3>{media.title}</h3>
                        <p>{media.description}</p>
                    </div>
                </div>
            ))}

            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
};

// Default props
FullSizeSlideshow.defaultProps = {
    mediaItems: [], // Default to an empty array if no prop is provided
};

// Prop type validation
FullSizeSlideshow.propTypes = {
    mediaItems: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.oneOf(['image', 'video']).isRequired,
            url: PropTypes.string.isRequired,
            title: PropTypes.string, // Optional title
            description: PropTypes.string, // Optional description
        })
    ).isRequired,
};

export default FullSizeSlideshow;
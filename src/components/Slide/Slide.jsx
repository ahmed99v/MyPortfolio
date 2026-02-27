import React, { useState, useEffect, useRef } from 'react';
import './Slide.css';
import { 
  FaArrowDown, 
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import slide_1 from '../../assets/images/slide/1.jpg';
import slide_2 from '../../assets/images/slide/2.jpg';

const MotionDiv = motion.div;

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const slideRef = useRef(null);
  const [scrollRef, scrollInView] = useInView({ threshold: 0.1 });

  const slides = [
    {
      id: 1,
      image: slide_1,
      alt: 'Welcome to my portfolio',
      title: 'Welcome to my portfolio',
      subtitle: 'I am a senior full stack developer',
      highlight: 'Full Stack Developer'
    },
    {
      id: 2,
      image: slide_2,
      alt: 'AI based Python program for health care',
      title: 'Welcome to my portfolio',
      subtitle: 'I am a Senior Software Engineer.',
      highlight: 'Software Engineer'
    }
  ];

  // Handle mouse movement for parallax effect
  const handleMouseMove = (e) => {
    if (slideRef.current) {
      const rect = slideRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      setMousePosition({
        x: (x - centerX) / centerX * 10,
        y: (y - centerY) / centerY * 10
      });
    }
  };

  // Auto-play slideshow
  useEffect(() => {
    let interval;
    if (isAutoPlaying && !isHovering) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [slides.length, isHovering, isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Animation variants with valid easing
  const slideVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 1.5, 
        ease: [0.43, 0.13, 0.23, 0.96] 
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const badgeVariants = {
    hidden: { 
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  return (
    <section 
      className="slide-section" 
      id="main-content"
      ref={slideRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="slide-slider">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => (
            index === currentSlide && (
              <MotionDiv
                key={slide.id}
                className="slide"
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  transform: `translateX(${mousePosition.x}px) translateY(${mousePosition.y}px)`
                }}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                aria-hidden={index !== currentSlide}
              >
                <div className="slide-overlay"></div>
              </MotionDiv>
            )
          ))}
        </AnimatePresence>
        
        <motion.button 
          className="slider-nav prev" 
          onClick={handlePrev} 
          aria-label="Previous slide"
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 0 25px rgba(212, 175, 55, 0.8)'
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          <FaChevronLeft />
        </motion.button>
        
        <motion.button 
          className="slider-nav next" 
          onClick={handleNext} 
          aria-label="Next slide"
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 0 25px rgba(212, 175, 55, 0.8)'
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          <FaChevronRight />
        </motion.button>
        
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 500, damping: 20 }}
            />
          ))}
        </div>
      </div>
      
      <div className="slide-content">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => (
            index === currentSlide && (
              <MotionDiv
                key={slide.id}
                className="content-wrapper"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <MotionDiv
                  className="highlight-badge"
                  variants={badgeVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {slide.highlight}
                </MotionDiv>
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
              </MotionDiv>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Floating particles effect */}
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 30 + 30}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.2,
              top: '100vh'
            }}
          />
        ))}
      </div>
      
      <div 
        className={`scroll-indicator ${!scrollInView ? 'visible' : 'hidden'}`}
        ref={scrollRef}
      >
        <div className="mouse">
          <div className="scroller"></div>
        </div>
        <p>Scroll to explore</p>
        <FaArrowDown className="arrow-icon" />
      </div>
    </section>
  );
};

export default Slide;
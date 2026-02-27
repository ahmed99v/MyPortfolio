import React, { useState, useEffect } from 'react';
import { 
  FaHome, FaInfoCircle, 
  FaStar, FaEnvelope, FaDownload,
  FaMoon, FaSun
} from 'react-icons/fa';
import { GiGalaxy } from 'react-icons/gi';
import { motion } from 'framer-motion';
import './header.css';

const MotionDiv = motion.div;

const Header = ({ darkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { icon: <FaHome />, text: 'Home', href: '#', delay: 0.3 },
    { icon: <FaInfoCircle />, text: 'About', href: '#about', delay: 0.5 },
    { icon: <FaStar />, text: 'Reviews', href: '#reviews', delay: 0.7 },
    { icon: <FaEnvelope />, text: 'Contact', href: '#contact', delay: 0.8 },
    { icon: <FaDownload />, text: 'Download', href: '/MyPortfolio/src/assets/resume/Ahmed Forneas.pdf', delay: 0.9, download: true }
  ];

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''} ${darkMode ? 'dark' : ''}`}>
        {/* Cosmic Background Elements */}
        <div className="cosmic-elements">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="cosmic-particle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDuration: `${Math.random() * 20 + 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Golden Accent */}
        <div className="golden-accent"></div>

        <nav className="header-container">
          <motion.a 
            href="#" 
            className="logo"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: 'spring' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MotionDiv
              className="logo-icon-container"
              transition={{ duration: 0.5 }}
            >
              <GiGalaxy className="logo-icon" />
            </MotionDiv>
            <div className="logo-text-container">
              <span className="logo-text">Senior Full Stack Developer</span>
              <span className="logo-subtext">Ahmed Forneas</span>
            </div>
            <div className="logo-glow"></div>
          </motion.a>
          
          <div className="nav-links">
            {navLinks.map((link, index) => (
              <motion.a
                key={`nav-${index}`}
                href={link.href}
                className="nav-link"
                download={link.download ? 'Ahmed Forneas.pdf' : undefined}
                target={link.download ? '_blank' : undefined}
                rel={link.download ? 'noopener noreferrer' : undefined}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: link.delay,
                  type: 'spring',
                  stiffness: 300,
                  damping: 20
                }}
              >
                <span className="nav-icon">{link.icon}</span>
                <span className="nav-text">{link.text}</span>
                {hoveredItem === index && (
                  <motion.span 
                    className="nav-hover-effect"
                    layoutId="navHover"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />
                )}
              </motion.a>
            ))}
          </div>
        </nav>
      </header>
  );
};

export default React.memo(Header);

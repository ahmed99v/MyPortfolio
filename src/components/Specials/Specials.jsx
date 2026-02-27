import React, { useEffect, useState } from 'react';
import { FaRegClock, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {BsRobot } from 'react-icons/bs';
import {MdWarehouse}from 'react-icons/md';
import {GiFamilyHouse}from 'react-icons/gi';
import { motion, AnimatePresence } from 'framer-motion';
import './Specials.css';
import special_1 from '../../assets/images/myproject/healthcare.jpg';
import special_2 from '../../assets/images/myproject/realestate.jpg';
import special_3 from '../../assets/images/myproject/warehouse.jpg';
import special_4 from '../../assets/images/myproject/slotgame.jpg';

const MotionDiv = motion.div;
const Specials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const specials = [
    {
      title: "HealthCare AI Assistant",
      description: "This project is an AI-powered tool that analyzes basic health data and provides quick, helpful insights. It makes complex information easier to understand for everyday users. The system responds fast and delivers clean, accurate results.",
      price: "",
      duration: "3 months",
      type: "AI",
      image: special_1,
      url: "https://www.quadrivia.ai/"
    },
    {
      title: "Real Estate Project",
      description: "This real estate platform helps users explore properties with ease. It organizes listings clearly and provides fast access to important details and making navigation smooth. The interface is designed beautiful, responsive and user-friendly.",
      price: "",
      duration: "2 months",
      type: "RealEstate",
      image: special_2
      
    },
    {
      title: "WareHouse Management",
      description: "This warehouse management system is designed to streamline inventory tracking and organization. It allows users to easily add, update, and track items, making it easier to manage selling and purchasing products, and optimize operations.",
      price: "",
      duration: "2 months",
      type: "Warehouse",
      image: special_3,
      url: ""
    },
    {
      title: "Slot Game Website",
      description: "This slot game website is designed to provide a platform for users to play slot games online. It allows users to easily select and play slot games, and provides a variety of slot games to choose from.",
      price: "",
      duration: "12 months",
      type: "Slot Game",
      image: special_4,
      url: "https://betvio777.site",
    }

  ];

  const getSpecialIcon = (type) => {
    switch(type) {
      case 'AI': return <BsRobot />;
      case 'RealEstate': return <GiFamilyHouse  />;
      case 'Warehouse': return <MdWarehouse  />;
      default: return <BsRobot />;
    }
  };

  // Get the 3 cards to display based on current index
  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % specials.length;
      visibleCards.push({ ...specials[index], originalIndex: index });
    }
    return visibleCards;
  };

  // Navigate to previous set of cards
  const goToPrevious = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + specials.length) % specials.length);
    // Resume auto-cycling after 5 seconds
    setTimeout(() => setIsPaused(false), 5000);
  };

  // Navigate to next set of cards
  const goToNext = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % specials.length);
    // Resume auto-cycling after 5 seconds
    setTimeout(() => setIsPaused(false), 5000);
  };

  // Handle card click to open URL
  const handleCardClick = (url) => {
    if (url && url.trim() !== '') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // Auto-cycle through cards
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % specials.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused, specials.length]);

  return (
    <section id="specials" className="specials-section">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Practical projects showcasing my full-stack development skills.
          </motion.p>
        </div>
        
        <div 
          className="specials-grid-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button 
            className="nav-arrow nav-arrow-left"
            onClick={goToPrevious}
            aria-label="Previous cards"
          >
            <FaChevronLeft />
          </button>
          
          <div className="specials-grid">
            <AnimatePresence mode="sync">
              {getVisibleCards().map((special, position) => (
                <MotionDiv 
                  key={`${currentIndex}-${position}-${special.originalIndex}`}
                  className={`special-card ${special.url && special.url.trim() !== '' ? 'clickable' : ''}`}
                  initial={{ opacity: 0, x: position === 0 ? -50 : position === 2 ? 50 : 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: position === 0 ? -50 : position === 2 ? 50 : 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleCardClick(special.url)}
                  style={{ cursor: special.url && special.url.trim() !== '' ? 'pointer' : 'default' }}
                >
                  <div 
                    className="special-image"
                    style={{ backgroundImage: `url(${special.image})` }}
                  >
                    <div className="image-overlay"></div>
                  </div>
                  <div className="special-content">
                    <div className="special-badge">
                      {getSpecialIcon(special.type)}
                    </div>
                    <h3>{special.title}</h3>
                    <p>{special.description}</p>
                    <div className="special-meta">
                      <span className="price">{special.price}</span>
                      <span className="duration">
                        <FaRegClock /> {special.duration}
                      </span>
                    </div>
                  </div>
                </MotionDiv>
              ))}
            </AnimatePresence>
          </div>

          <button 
            className="nav-arrow nav-arrow-right"
            onClick={goToNext}
            aria-label="Next cards"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Specials;
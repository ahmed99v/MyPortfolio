import React, { useState } from 'react';
import './vision.css';
import {   
  FaUserAlt,
  FaArrowRight,
  FaRegHeart,
  FaHeart
} from 'react-icons/fa';
import {TbClockHour1 } from 'react-icons/tb';
import {BiMedal } from 'react-icons/bi';
import { motion, AnimatePresence } from 'framer-motion';

import future_1 from '../../assets/images/future/senior.webp';
import future_2 from '../../assets/images/future/teamleader.webp';
import future_3 from '../../assets/images/future/success.webp';

const MotionDiv = motion.div;

const Vision = () => {
  const [visions, setVisions] = useState([
    {
      id: 1,
      role: "Build top skills",
      title: "Top Software Engineer",
      year: "2028",
      type: "three",
      image: future_1,
      description: "I’m becoming a world-class Senior Software Engineer and AI expert, building innovative products with global impact and inspiring future innovation.",
      featured: true,
      member: "1",
      hourly: "$40",
      liked: false
    },
    {
      id: 2,
      role: "Team Leader",
      title: "With tiny team",
      year: "2030",
      type: "five",
      image: future_2,
      time: "6:30 PM - 9:30 PM",
      description: "I want to be a leader of a small team. I want to be able to lead a team of developers and be able to make decisions for the team.",
      featured: true,
      member: "3~5",
      hourly: "$",
      liked: false
    },
    {
      id: 3,
      role: "Successful Entrepreneur",
      title: "With the team everyone seeks",
      year: "2033",
      type: "eight",
      image: future_3,
      time: "7:00 PM - 10:00 PM",
      description: "I want to be a successful entrepreneur. I want to be able to start my own company and be able to make decisions for the company.",
      featured: true,
      member: "6~10",
      hourly: "$",
      liked: false
    }
  ]);

  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedVision, setExpandedVision] = useState(null);

  const toggleLike = (id) => {
    setVisions(visions.map(vision => 
      vision.id === id ? {...vision, liked: !vision.liked} : vision
    ));
  };

  const toggleExpandVision = (id) => {
    setExpandedVision(expandedVision === id ? null : id);
  };

  const filteredVisions = activeFilter === 'all' 
    ? visions 
    : visions.filter(vision => vision.type === activeFilter);

  const visionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -10,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="vision" className="vision-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Future Dreams</h2>
          <p className="section-subtitle">What kind of person do I want to be in the future?</p>
          
          <div className="vision-filters">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Dreams
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'three' ? 'active' : ''}`}
              onClick={() => setActiveFilter('three')}
            >
              After 3 Years
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'five' ? 'active' : ''}`}
              onClick={() => setActiveFilter('five')}
            >
              After 5 Years
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'eight' ? 'active' : ''}`}
              onClick={() => setActiveFilter('eight')}
            >
              After 8 Years
            </button>
          </div>
        </div>
        
        <div className="vision-grid">
          <AnimatePresence>
            {filteredVisions.map(vision => (
              <MotionDiv
                key={vision.id}
                className={`vision-card ${vision.featured ? 'featured' : ''}`}
                variants={visionVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                layout
                
              >
                <button 
                  className="like-btn"
                  onClick={() => toggleLike(vision.id)}
                  aria-label={vision.liked ? "Remove from favorites" : "Add to favorites"}
                >
                  {vision.liked ? <FaRegHeart className="liked" /> : <FaHeart />}
                </button>
                
                <div 
                  className="vision-date"
                  style={{
                    backgroundImage: `url(${vision.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <span className="date-day">{vision.year}</span>
                </div>
                
                <div className="vision-content">
                  <h3>{vision.title}</h3>
                  <div className="vision-meta">
                    <span><BiMedal /> {vision.role}</span>
                  </div>
                  
                  <p className="vision-description">
                    {expandedVision === vision.id 
                      ? vision.description 
                      : `${vision.description.substring(0, 100)}...`}
                  </p>
                  
                  {expandedVision === vision.id && (
                    <div className="vision-details">
                      <p><FaUserAlt /> Member: {vision.member}</p>
                      <p><TbClockHour1 /> Hourly: {vision.hourly}</p>
                    </div>
                  )}
                  
                  <div className="vision-actions">
                    <button 
                      className="btn btn-primary"
                      onClick={() => {/* Reserve functionality */}}
                    >
                      What should I do <FaArrowRight />
                    </button>
                    <button 
                      className="read-more"
                      onClick={() => toggleExpandVision(vision.id)}
                    >
                      {expandedVision === vision.id ? 'Show Less' : 'Read More'}
                    </button>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </AnimatePresence>
        </div>

        <div className="vision-cta">
          <p>What should I do to achieve my goals?</p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
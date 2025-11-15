import React from 'react';
import { FaRegClock } from 'react-icons/fa';
import {BsRobot } from 'react-icons/bs';
import {MdWarehouse}from 'react-icons/md';
import {GiFamilyHouse}from 'react-icons/gi';
import { motion } from 'framer-motion';
import './Specials.css';
import special_1 from '../../assets/images/myproject/healthcare.jpg';
import special_2 from '../../assets/images/myproject/realestate.jpg';
import special_3 from '../../assets/images/myproject/warehouse.jpg';
const MotionDiv = motion.div;
const Specials = () => {
  const specials = [
    {
      title: "HealthCare AI Assistant",
      description: "This project is an AI-powered tool that analyzes basic health data and provides quick, helpful insights. It makes complex information easier to understand for everyday users. The system responds fast and delivers clean, accurate results.",
      price: "$12 000",
      duration: "3 months",
      type: "AI",
      image: special_1,
    },
    {
      title: "Real Estate Project",
      description: "This real estate platform helps users explore properties with ease. It organizes listings clearly and provides fast access to important details and making navigation smooth. The interface is designed beautiful, responsive and user-friendly.",
      price: "$7 000",
      duration: "2 months",
      type: "RealEstate",
      image: special_2
    },
    {
      title: "WareHouse Management",
      description: "This warehouse management system is designed to streamline inventory tracking and organization. It allows users to easily add, update, and track items, making it easier to manage selling and purchasing products, and optimize operations.",
      price: "$9 000",
      duration: "2 months",
      type: "Warehouse",
      image: special_3,
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
        
        <div className="specials-grid">
          {specials.map((special, index) => (
            <MotionDiv 
              key={index}
              className="special-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
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
        </div>
      </div>
    </section>
  );
};

export default Specials;
import React, { useState, useEffect } from 'react';
import './selfDev.css';
import {  
  FaCloudSunRain,
  FaFilePdf,
  FaPenNib,
  FaGamepad,
  FaDatabase,
  FaSearchPlus
} from 'react-icons/fa';
import { FaShieldHeart } from 'react-icons/fa6';
import { AiOutlineDeploymentUnit } from 'react-icons/ai';
import { PiFoldersBold } from 'react-icons/pi';
import{ IoExtensionPuzzleOutline }  from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import useAOS from "../../hooks/useAOS";

const MotionDiv = motion.div;

import project_1 from '../../assets/images/self/1.jpg';
import project_2 from '../../assets/images/self/2.jpg';
import project_3 from '../../assets/images/self/3.jpg';
import project_4 from '../../assets/images/self/4.jpg';
import project_5 from '../../assets/images/self/5.jpg';
import project_6 from '../../assets/images/self/6.jpg';
import project_7 from '../../assets/images/self/7.jpg';
import project_8 from '../../assets/images/self/8.jpg';

const SelfDev = () => {
  useAOS(); // Initialize animation on scroll

  const [selfDevItems] = useState([
    {
      id: 1,
      image: project_1,
      alt: "Website protect module",
      title: "Website protect module",
      subtitle: "This module is used to protect the website from unauthorized access.",
      category: "protect",
    },
    {
      id: 2,
      image: project_2,
      alt: "Chrome Extension",
      title: "Chrome Extension",
      subtitle: "This extension is add the comment in the website.",
      category: "extension",
    },
    {
      id: 3,
      image: project_3,
      alt: "Folder Compare",
      title: "Folder Compare",
      subtitle: "This tool is used to compare the files in the folder.",
      category: "folder",
    },
    {
      id: 4,
      image: project_4,
      alt: "Weather Service",
      title: "Weather Service",
      subtitle: "This service is used to get the weather information.",
      category: "weather",
    },
    {
      id: 5,
      image: project_5,
      alt: "Convert PDF 2 WORD",
      title: "PDF2WORD",
      subtitle: "This tool is used to convert the PDF file to the WORD file.",
      category: "word",
    },
    {
      id: 6,
      image: project_6, 
      alt: "Add Comment on PDF Files",
      title: "PDF Drawing",
      subtitle: "This tool is used to add the comment on the PDF file.",
      category: "drawing",
    },
    {
      id: 7,
      image: project_7,
      alt: "Slot Crash Mini Games",
      title: "Mini Games",
      subtitle: "This games are crash games.",
      category: "game",
    },
    {
      id: 8,
      image: project_8,
      alt: "Collecting resources and informatio. ",
      title: "Data Collecting",
      subtitle: "This tool is used to collect the data from the website.",
      category: "collect",
    }
  ]);

  const [activeFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for demo purposes
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const filteredItems = activeFilter === 'all' 
    ? selfDevItems 
    : selfDevItems.filter(item => item.category === activeFilter);

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'protect': return <FaShieldHeart />;
      case 'extension': return <IoExtensionPuzzleOutline />;
      case 'folder': return <PiFoldersBold />;
      case 'weather': return <FaCloudSunRain />;
      case 'word': return <FaFilePdf />;
      case 'drawing': return <FaPenNib />;
      case 'game': return <FaGamepad />;
      case 'collect': return <AiOutlineDeploymentUnit />;
      default: return <FaDatabase />;
    }
  };

  const selfDevVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 }
    },
    hover: {
      y: -10,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  if (isLoading) {
    return (
      <section id="selfdev" className="selfdev-section">
        <div className="container">
          <div className="section-header">
            <div className="skeleton-title"></div>
            <div className="skeleton-subtitle"></div>
          </div>
          <div className="selfdev-grid">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="skeleton-item"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="selfdev" className="selfdev-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Self-developed project </h2>
          <p className="section-subtitle">
          Evaluations through my self-developed projects
          </p>
        </div>
        
        <div className="selfdev-grid">
          <AnimatePresence>
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <MotionDiv
                  key={item.id}
                  className="selfdev-item"
                  variants={selfDevVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover="hover"
                  layout
                >
                  <img 
                    src={item.image} 
                    alt={item.alt} 
                    loading="lazy" 
                    onClick={() => openLightbox(index)}
                  />
                  
                  <div className="selfdev-overlay">
                    <div className="action-buttons">
                      <button 
                        className="zoom-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          openLightbox(index);
                        }}
                        aria-label="Zoom in"
                      >
                        <FaSearchPlus />
                      </button>
                    </div>
                    
                    <div className="selfdev-category">
                      {getCategoryIcon(item.category)}
                    </div>
                  </div>
                  
                  <div className="selfdev-caption">
                    <h3 className="caption-title">{item.title}</h3>
                    <p className="caption-subtitle">{item.subtitle}</p>
                  </div>
                </MotionDiv>
              ))
            ) : (
              <MotionDiv 
                className="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p>No photos found in this category</p>
              </MotionDiv>
            )}
          </AnimatePresence>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          mainSrc={filteredItems[currentImageIndex].image}
          nextSrc={filteredItems[(currentImageIndex + 1) % filteredItems.length]?.image}
          prevSrc={filteredItems[(currentImageIndex + filteredItems.length - 1) % filteredItems.length]?.image}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() => setCurrentImageIndex((currentImageIndex + filteredItems.length - 1) % filteredItems.length)}
          onMoveNextRequest={() => setCurrentImageIndex((currentImageIndex + 1) % filteredItems.length)}
          imageTitle={filteredItems[currentImageIndex].title}
          imageCaption={filteredItems[currentImageIndex].subtitle}
          enableZoom={true}
          imageLoadErrorMessage="Unable to load this image"
          prevLabel="Previous photo"
          nextLabel="Next photo"
          zoomInLabel="Zoom in"
          zoomOutLabel="Zoom out"
          closeLabel="Close lightbox"
        />
      )}
    </section>
  );
};

export default SelfDev;
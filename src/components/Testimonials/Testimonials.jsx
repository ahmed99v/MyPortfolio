import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import './Testimonials.css';
import { FaStar, FaQuoteLeft, FaPenAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;
const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "Grows fast, has strong potential, and works with solid fundamentals. He is a reliable ,impressive developer and quick learner.",
    author: "C.Schepke",
    role: "Professor",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    date: "June 2021",
  },
  {
    id: 2,
    rating: 5,
    text: "Working with him was effortless. He quickly understood our needs, delivered on time, and built a solution that exceeded our expectations.", 
    author: "M.Benjamin",
    role: "Recruiter",
    image: "https://randomuser.me/api/portraits/men/49.jpg",
    date: " September 2023"
  },
  {
    id: 3, 
    rating: 5,
    text: "Solved complex problems with ease and communicated clearly throughout the project. Truly a reliable and talented full-stack developer.", 
    author: "D.Silveria",
    role: "Senior TA Manager",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    date: "January 2024",
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="testimonials-section">
      {/* Floating decorations */}
      <div className="floating-decoration"></div>
      
      <div className="testimonials-overlay"></div>
      <div className="container">
        <MotionDiv 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">What Clients Say</h2>
          <p className="section-subtitle"> Reviews from my clients and professors </p>
        </MotionDiv>
        
        <div className="testimonial-carousel">
          <Swiper
            modules={[Pagination, Autoplay, EffectCreative]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
              renderBullet: (index, className) => {
                return `<span class="${className}">
                  <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="4" fill="currentColor"/>
                  </svg>
                </span>`;
              }
            }}
            autoplay={{ 
              delay: 8000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            grabCursor={true}
            effect={'creative'}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
                opacity: 0
              },
              next: {
                translate: ['100%', 0, 0]
              }
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
                effect: 'slide'
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 40,
                effect: 'slide'
              }
            }}
          >
            {testimonials.map(testimonial => (
              <SwiperSlide key={testimonial.id}>
                <MotionDiv 
                  className="testimonial-card"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  {testimonial.featured && (
                    <div className="featured-badge">
                      <FaStar /> Featured Review
                    </div>
                  )}
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={i < testimonial.rating ? 'filled' : 'empty'}
                      />
                    ))}
                  </div>
                  <div className="quote-icon">
                    <FaQuoteLeft />
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        loading="lazy"
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className="author-info">
                      <h4>{testimonial.author}</h4>
                      <span className="role">{testimonial.role}</span>
                      <span className="date">{testimonial.date}</span>
                    </div>
                  </div>
                </MotionDiv>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;
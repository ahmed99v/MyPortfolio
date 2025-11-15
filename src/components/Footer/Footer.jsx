import React, { useState } from 'react';
import './Footer.css';
import { 
  FaInstagram, FaFacebookF, FaTwitter, 
  FaTiktok, FaMapMarkerAlt, FaPhone, 
  FaEnvelope, 
  FaArrowRight, FaRegCalendarAlt
} from 'react-icons/fa';
import {FaHandshakeAngle } from 'react-icons/fa6';
import {IoIosInformationCircleOutline } from 'react-icons/io';

import emailjs from '@emailjs/browser';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // EmailJS Configuration
  // You need to set these up in your EmailJS account:
  // 1. Go to https://www.emailjs.com/ and create a free account
  // 2. Create an Email Service (Gmail)
  // 3. Create an Email Template
  // 4. Get your Public Key from Account > API Keys
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS Service ID
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS Template ID
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS Public Key
  const RECIPIENT_EMAIL = 'ahmedforneas99v@gmail.com'; // Your Gmail address

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Send email using EmailJS
      const templateParams = {
        to_email: RECIPIENT_EMAIL,
        from_email: email,
        message: `New subscription/contact request from: ${email}`,
        reply_to: email,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setError('Failed to send message. Please try again later.');
      setTimeout(() => setError(''), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const quickLinks = [
    { text: 'Home', href: '#', icon: <FaArrowRight /> },
    { text: 'About', href: '#about', icon: <IoIosInformationCircleOutline /> },
    { text: 'Future Dreams', href: '#vision', icon: <FaRegCalendarAlt /> },
    { text: 'Self-developed', href: '#selfdev', icon: <FaInstagram /> },
    { text: 'Contact', href: '#contact', icon: <FaPhone /> },
  ];

  const socialLinks = [
    { platform: 'Instagram', icon: <FaInstagram />, href: '#', className: 'instagram' },
    { platform: 'Facebook', icon: <FaFacebookF />, href: '#', className: 'facebook' },
    { platform: 'Twitter', icon: <FaTwitter />, href: '#', className: 'twitter' },
    { platform: 'TikTok', icon: <FaTiktok />, href: '#', className: 'tiktok' }
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: 'Duque de Caxias, Rio de Janerio, Brazil' },
    { icon: <FaPhone />, text: '+55 21965928723' },
    { icon: <FaEnvelope />, text: 'ahmedforneas99v@gmail.com' }
  ];

  const hours = [
    { days: 'Monday - Friday', time: '8+ hours' },
    { days: 'Saturday', time: '9am - 1pm' },
    { days: 'Sunday', time: 'free time' }
  ];

  const legalLinks = [
    { text: 'Privacy Policy', href: '#' },
    { text: 'Terms of Service', href: '#' },
  ];

  return (
    <footer id="contact" className="site-footer">
      <div className="footer-wave"></div>
      
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="logo-wrapper">
              <FaHandshakeAngle className="logo-icon" />
              <span className="logo-text">Work Together</span>
            </div>
            <p className="footer-tagline">
            I deeply value every opportunity given to me, especially when someone chooses to place their trust in my abilities. I understand that trust is earned through consistent effort, transparency, and reliable results, not just promises. That’s why I approach every task with responsibility and genuine dedication, ensuring that my work reflects both my skills and my respect for the people who rely on me. When I take on a project, I commit fully—delivering carefully executed, dependable work that contributes meaningfully to the team’s goals.
            
            </p>
            <div className="footer-social">
              <h4 className="social-title">Connect With Our World</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    aria-label={social.platform}
                    className={`social-link ${social.className}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="footer-nav">
            <div className="footer-column">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-menu">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      <span className="link-icon">{link.icon}</span>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Contact Me</h4>
              <ul className="footer-contact">
                {contactInfo.map((contact, index) => (
                  <li key={index} className="contact-item">
                    <span className="contact-icon">{contact.icon}</span>
                    <span>{contact.text}</span>
                  </li>
                ))}
              </ul>
              <div className="map-embed">
                <iframe 
                  title="My Location"
                  src= "https://www.google.com/maps?q=Duque+de+Caxias,+Rio+de+Janeiro,+Brazil&output=embed"
                  width="100%" 
                  height="150" 
                  style={{ border: 2, borderRadius: '8px' }} 
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Working Hours</h4>
              <ul className="hours-list">
                {hours.map((hour, index) => (
                  <li key={index} className="hours-item">
                    <span className="hours-days">{hour.days}</span>
                    <span className="hours-time">{hour.time}</span>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
        
        <div className="footer-newsletter">
          <h4 className="newsletter-title">If you would like to connect with me, please leave a message.</h4>
          {subscribed ? (
            <div className="subscription-success">
              Thank you! Your message has been sent successfully.
            </div>
          ) : error ? (
            <div className="subscription-error" style={{ color: '#ff4444', marginBottom: '10px' }}>
              {error}
            </div>
          ) : null}
          {!subscribed && (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder="Please leave a message" 
                className="newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
              <button type="submit" className="newsletter-btn" disabled={isLoading}>
                <FaEnvelope className="btn-icon" />
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
          <p className="newsletter-note" style={{ textAlign: 'center' }}>
            Thank you for visiting my website. I wish you further success in your business.
          </p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; {currentYear} Ahmed Forneas.
          </p>
          <div className="legal-links">
            {legalLinks.map((link, index) => (
              <a key={index} href={link.href} className="legal-link">
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <a href="#top" className="back-to-top" aria-label="Back to top">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 20L12 4M12 4L18 10M12 4L6 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
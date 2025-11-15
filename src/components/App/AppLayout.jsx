import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from './context';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import { FaBell } from 'react-icons/fa';

const MotionDiv = motion.div;

const AppLayout = ({ children }) => {
  const {
    isLoading,
    darkMode,
    notifications,
    toggleDarkMode,
    isScrolled
  } = useApp();

  // Filter out duplicate notifications
  const uniqueNotifications = notifications.reduce((acc, current) => {
    const x = acc.find(item => 
      item.item?.id === current.item?.id && 
      item.type === current.type
    );
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Header 
        isScrolled={isScrolled}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      <div className="notification-container">
        <AnimatePresence>
          {uniqueNotifications.map((notification, index) => (
            <MotionDiv
              key={`notification-${notification.id}`}
              className={`cart-notification ${notification.type}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              style={{ bottom: `${index * 60 + 20}px` }}
            >
              <FaBell className="notification-icon" />
              <span>
                {notification.type === 'added' && `${notification.item?.name} added to cart`}
                {notification.type === 'updated' && `${notification.item?.name} quantity updated`}
                {notification.type === 'removed' && `${notification.item?.name} removed from cart`}
                {notification.type === 'cleared' && 'Cart cleared successfully'}
              </span>
            </MotionDiv>



          ))}
        </AnimatePresence>
      </div>
      
      <main>{children}</main>
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default AppLayout;
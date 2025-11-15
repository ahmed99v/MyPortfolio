import React from 'react';
import Slide from '../Slide/Slide';
import About from '../About/About';
import Specials from '../Specials/Specials';
import Testimonials from '../Testimonials/Testimonials';
import SelfDev from '../SelfDev/selfDev';
import Vision from '../Vision/vision';
import useAOS from '../../hooks/useAOS';

const AppMain = () => {
  useAOS();
  return (
    <>
      <Slide />
      <About />
      <Specials />
      <Testimonials />
      <SelfDev />
      <Vision />
    </>
  );
};

export default AppMain;
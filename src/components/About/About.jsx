import React from 'react';
import './About.css';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { TbBrandVscode } from 'react-icons/tb';
import {AiOutlineCloudServer, AiOutlineDeploymentUnit } from 'react-icons/ai';

import about_1 from '../../assets/images/about_1.jpg';

const About = () => {
  const features = React.useMemo(() => [
    {
      icon: <HiOutlineComputerDesktop  size={28} />,
      title: "Frontend",
      description: "TypeScript, React, Next.js, Tailwind CSS, Vite, HTML5, CSS3"
    },
    {
      icon: <TbBrandVscode  size={28} />,
      title: "Backend",
      description: " Node.js, Express.js, NestJS, Python, Django, FastAPI, Flask"
    },
    {
      icon: <AiOutlineCloudServer size={28} />,
      title: " Database + Cloud",
      description: "MySQL, PostgreSQL, SQLite, MongoDB, Firebase, Redis, AWS"
    },
    {
      icon: <AiOutlineDeploymentUnit size={28} />,
      title: "DevOps + Testing",
      description: "Jest, Cypress, GitHub Actions, CI/CD, AWS Code Pipeline"
    }
  ], []);

  const timeline = [
    { year: "2017", event: "Frontend Developer" },
    { year: "2019", event: "Full-Stack Developer" },
    { year: "2020", event: "Full-Stack Developer (Junior)" },
    { year: "2022", event: "Full-Stack Developer (Senior)" },
    { year: "2024", event: "Senior Software Engineer" }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <h2 className="section-title">
              <span className="title-decorator">WHO AM I</span>
            </h2>
            <p className="highlight">
              <span className="timeline-title">Ahmed Forneas </span>
            </p>
            <p>As a full-stack developer, I’m motivated by a passion for building impactful digital solutions. I enjoy solving technical challenges and continuously improving my skill set by exploring more advanced and demanding areas of development. I’m committed to writing clean, maintainable code and creating products that offer great user experiences.</p>
            
            <div className="timeline-container">
              <h3 className="timeline-title">My Career</h3>
              <div className="timeline">
                {timeline.map((item, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-year">{item.year}</div>
                    <div className="timeline-event">{item.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="about-image" data-aos="fade-left">
            <div className="image-frame">
              <img 
                src= {about_1} 
                alt="Ahmed Forneas" 
                loading="lazy" 
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="feature-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);

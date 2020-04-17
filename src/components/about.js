import React from 'react';
import Image from './image';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="flex-container flex-vcentered">
          <div className="about-img">
            <Image />
          </div>
          <div className="about-me">
            <h3>About Me</h3>
            <p>
              Hi, I'm Carlos, a software developer. I have developed websites,
              mobile apps, iot systems and video games, I really like challenges
              and the attention to detail. I am self-taught, I learn fast and I
              am always improving my self.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

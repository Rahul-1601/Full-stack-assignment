import React from 'react';
import { useSpring, animated } from 'react-spring';

const About = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={fadeIn}>
      <h2>About Me</h2>
      <p>Your about me content goes here...</p>
    </animated.div>
  );
};

export default About;

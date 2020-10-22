import React, { useContext } from 'react';
import './About.scss';
import AnimatedHeader from '../../ui/AnimatedHeader/AnimatedHeader';
import { AppContext } from '../../Routes';

const About = () => {
  const global = useContext(AppContext);
  const { index, logoColors } = global;
  return (
    <>
      <div
        className="flex center page"
        style={{ background: `#${logoColors[index]}` }}
      >
        <AnimatedHeader title="About" />
      </div>
    </>
  );
};
export default About;

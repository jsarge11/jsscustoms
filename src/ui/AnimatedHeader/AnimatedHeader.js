import React, { useEffect, useState } from 'react';
import './AnimatedHeader.scss';

const AnimatedHeader = (props) => {
  const { title } = props;

  const [animation, setAnimation] = useState('initial-text');

  useEffect(() => {
    setTimeout(() => {
      setAnimation('animate-text');
    }, 100);

    return () => {
      setAnimation('initial-text');
    };
  }, []);

  return <h1 className={`title ${animation}`}>{title}</h1>;
};

export default AnimatedHeader;

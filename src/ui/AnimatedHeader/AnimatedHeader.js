import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../Routes';
import './AnimatedHeader.scss';

const AnimatedHeader = (props) => {
  const { title } = props;
  const global = useContext(AppContext);
  const { index, logoColors } = global;

  const [animation, setAnimation] = useState('initial-text');

  useEffect(() => {
    setTimeout(() => {
      setAnimation('animate-text');
    }, 100);

    return () => {
      setAnimation('initial-text');
    };
  }, []);

  return (
    <h1
      style={{ color: `#${logoColors[index]}` }}
      className={`title ${animation}`}
    >
      {title}
    </h1>
  );
};

export default AnimatedHeader;

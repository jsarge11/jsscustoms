import React, { useContext, useEffect, useRef, useState } from 'react';
import './TopBar.scss';
import { Link } from 'react-router-dom';
import blue from '../../assets/blue_logo.png';
import green from '../../assets/green_logo.png';
import pink from '../../assets/pink_logo.png';
import red from '../../assets/red_logo.png';
import teal from '../../assets/teal_logo.png';
import { AppContext } from '../../Routes';

const TopBar = () => {
  const global = useContext(AppContext);
  const [animationClass, setAnimationClass] = useState('');
  const { index, setIndex } = global;
  const pages = ['Pricing', 'Artwork', 'Get Yours'];
  const logos = [blue, green, pink, red, teal];
  const topBarRef = useRef();

  const handleScroll = (e) => {
    if (window.scrollY > 0 && !animationClass) {
      setAnimationClass('animated-height');
    } else if (window.scrollY === 0 && animationClass) {
      setAnimationClass('');
    }
  };
  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  });

  const increment = (x) => {
    if (x === logos.length - 1) {
      return 0;
    } else {
      return x + 1;
    }
  };
  const mappedLinks = pages.map((item) => (
    <Link
      to={`/${item.replace(/\s/g, '').toLowerCase()}`}
      key={item}
      onClick={() => setIndex((v) => increment(v))}
    >
      <h2>{item}</h2>
    </Link>
  ));
  return (
    <span
      className={`border flex ${animationClass}`}
      id="top-bar-span"
      ref={topBarRef}
    >
      <Link to="/">
        <img id="logo" src={logos[index]} alt="logo shoe" />
      </Link>
      {mappedLinks}
    </span>
  );
};

export default TopBar;

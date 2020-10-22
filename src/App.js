import React, { useEffect, useState } from 'react';
import './App.scss';
import Carousel from './ui/Carousel/Carousel';

function App() {
  const [isWider, setIsWider] = useState(window.innerWidth > 550);

  React.useEffect(() => {
    const el = document.getElementById('root');
    el.style.overflowY = 'hidden';
    return () => {
      el.style.overflowY = 'scroll';
    };
  }, []);
  const sizeListener = (e) => {
    const width = e.currentTarget.innerWidth;
    if (width > 550) {
      setIsWider(true);
    } else if (width < 550) {
      setIsWider(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', sizeListener);

    return () => {
      window.removeEventListener('resize', sizeListener);
    };
  }, []);

  return (
    <div className="App">
      <Carousel position="top" />
      {isWider ? null : <Carousel position="bottom" />}
    </div>
  );
}

export default App;

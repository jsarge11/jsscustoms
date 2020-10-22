import React, { useContext, useState, useLayoutEffect } from 'react';
import './Carousel.scss';
import ScrollContainer from 'react-indiana-drag-scroll';
import { AppContext } from '../../Routes';
import Arrow from '../Arrow/Arrow';

const Carousel = (props) => {
  const { position = 'top' } = props;
  const { images } = useContext(AppContext);
  const [isScrolling, setIsScrolling] = useState(false);

  const displayImages = images.map((url) => (
    <div className="front-img-wrapper" key={url}>
      <img draggable={false} src={url} alt="shoe" />
    </div>
  ));

  useLayoutEffect(() => {
    if (position === 'bottom') {
      const el = document.getElementsByClassName('indiana-scroll-container')[1];
      el.scrollLeft = el.scrollWidth;
    }
  }, [images]);
  return (
    <div className="carousel-wrapper">
      <Arrow
        direction="right"
        position={position}
        setIsScrolling={setIsScrolling}
      />
      <Arrow
        direction="left"
        position={position}
        setIsScrolling={setIsScrolling}
      />
      <ScrollContainer
        style={{ scrollBehavior: isScrolling ? 'smooth' : 'unset' }}
        className="flex flex-center full-size"
      >
        {displayImages}
      </ScrollContainer>
    </div>
  );
};
export default Carousel;

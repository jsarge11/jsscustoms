import React from 'react';
import { isMobile } from 'react-device-detect';
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';
import './Arrow.scss';

const Arrow = (props) => {
  const { direction, position, setIsScrolling } = props;
  const classPositionName = position === 'top' ? 'upper-top' : 'lower-top';
  const scrollIndex = position === 'top' ? 0 : 1;
  return (
    <>
      {!isMobile && direction === 'right' && (
        <RightCircleOutlined
          className={`arrows right-arrow ${classPositionName}`}
          onMouseOver={() => {
            setIsScrolling(true);
          }}
          onMouseLeave={() => {
            setIsScrolling(false);
          }}
          onClick={() => {
            const el = document.getElementsByClassName(
              'indiana-scroll-container'
            )[scrollIndex];
            el.scrollLeft += 1000;
          }}
        />
      )}
      {!isMobile && direction === 'left' && (
        <LeftCircleOutlined
          className={`arrows left-arrow ${classPositionName}`}
          onMouseOver={() => {
            setIsScrolling(true);
          }}
          onMouseLeave={() => {
            setIsScrolling(false);
          }}
          onClick={() => {
            const el = document.getElementsByClassName(
              'indiana-scroll-container'
            )[scrollIndex];
            el.scrollLeft -= 1000;
          }}
        />
      )}
    </>
  );
};

export default Arrow;

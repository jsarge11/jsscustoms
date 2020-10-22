import React, { useContext } from 'react';
import './Artwork.scss';
import AnimatedHeader from '../../ui/AnimatedHeader/AnimatedHeader';
import { AppContext } from '../../Routes';

const Artwork = () => {
  const global = useContext(AppContext);
  const { index, logoColors } = global;
  return (
    <>
      <div
        className="flex center page"
        style={{ background: `#${logoColors[index]}` }}
      >
        <AnimatedHeader title="Artwork" />
      </div>
    </>
  );
};
export default Artwork;

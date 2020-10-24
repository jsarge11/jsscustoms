import React from 'react';
import { withRouter } from 'react-router-dom';
import './Footer.scss';

const Footer = (props) => {
  const positionStyle = {
    position: 'fixed',
    bottom: 0,
  };

  const isHome = props.match.path === '/' || props.match.path === '/home';

  return (
    <span
      className="border"
      id="footer-span"
      style={isHome ? positionStyle : null}
    >
      <p>Copyright Scottys Customs 2020®</p>
    </span>
  );
};

export default withRouter(Footer);

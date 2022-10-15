import React from 'react';

// Images

import globe from '../images/globe.png';

const Nav = () => {
  return (
    <nav>
      <img className='globe-img' src={globe} />
      <h3 className='nav-title'>my travel journal.</h3>
    </nav>
  );
};

export default Nav;

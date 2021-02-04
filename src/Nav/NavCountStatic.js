import React, { useState } from 'react';
import Bounce from 'react-reveal/Bounce';
import './Nav.css';

const NavCountStatic = ({ name, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      key={`${index}${Math.random()}`}
      className="navCountStatic"
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => handleLeave()}
    >
      <div
        style={{
          opacity: 1,
          zIndex: -2,
          width: '270px',
          overflowY: 'visible',
          height: '70px',
          backgroundColor: 'transparent',
        }}
      >
        <div
          style={{
            opacity: 1,
            zIndex: -2,
            overflowX: 'hidden',
            width: '270px',
            height: '54px',
            backgroundColor: 'transparent',
          }}
        >
          {isHovered && (
            <Bounce left>
              <div className="navCountAni">{name}</div>
            </Bounce>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavCountStatic;

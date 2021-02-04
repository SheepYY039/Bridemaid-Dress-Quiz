import React from 'react';
import styled, { keyframes } from 'styled-components';
import NavCountStatic from './NavCountStatic';

const navLinkFade = keyframes`
  0% { opacity: 0; transform: translateX(-200px); }
  100% { opacity: 1; transform: translateX(0px); right:-25px; backgroundColor: "#f7bacf"; position: relative; cursor: "pointer"; z-index: 2;}
`;

const NavListItem = styled.div`
  animation: ${navLinkFade} 0.5s ${(props) => props.time} forwards ease;
`;

const NavCount = ({ name, index }) => {
  return (
    <NavListItem time={`${index / 7 + 0.3}s`} key={`${index}${Math.random()}`}>
      <NavCountStatic name={name} index={index} id={index} />
      {index}
    </NavListItem>
  );
};

export default NavCount;

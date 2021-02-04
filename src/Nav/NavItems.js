import React from 'react';
import styled, { keyframes } from 'styled-components';

import Button from '@material-ui/core/Button';

const navLinkFade = keyframes`
  0% { opacity: 0; transform: translateX(-50px); }
  100% { opacity: 1; transform: translateX(0px); background: "#f8bbd0";}
  `;

const NavListItem = styled.li`
  animation: ${navLinkFade} 0.5s ease ${(props) => props.time} forwards;
`;

const NavItems = ({ name, index, question, setQuestion, setIsOpened }) => {
  const onClickAction = () => {
    setIsOpened(false);
    setQuestion(index - 1);
  };

  return (
    <Button
      fullWidth
      variant="contained"
      style={{ zIndex: -1, height: '100%' }}
      color={question + 1 === index ? 'secondary' : 'primary'}
      onClick={() => onClickAction()}
    >
      <NavListItem
        time={`${index / 7 + 0.3}s`}
        key={`${index}${Math.random()}`}
      >
        <span>{name}</span>
      </NavListItem>
    </Button>
  );
};

export default NavItems;

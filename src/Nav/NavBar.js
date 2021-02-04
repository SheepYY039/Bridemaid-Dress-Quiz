import React from 'react';
import './Nav.css';
import Nav from './Nav';
import Hidden from '@material-ui/core/Hidden';

export const NavBurger = ({ isOpened, setIsOpened }) => {
  // check open status of nav bar
  const navSlide = () => {
    isOpened ? setIsOpened(false) : setIsOpened(true);
  };
  return (
    <Hidden only={['sm', 'xs']}>
      <div
        onClick={() => navSlide()}
        className={isOpened === false ? 'burger' : 'burger toggle'}
      >
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </div>
    </Hidden>
  );
};

export const NavSlide = ({
  isOpened,
  categories,
  answer,
  question,
  setQuestion,
  setIsOpened,
}) => {
  return (
    <Hidden only={['sm', 'xs']}>
      <Nav
        isOpened={isOpened}
        categories={categories}
        answer={answer}
        question={question}
        setQuestion={setQuestion}
        setIsOpened={setIsOpened}
      />
    </Hidden>
  );
};

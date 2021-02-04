import React from 'react';
import './Nav.css';
import NavPrint from './NavPrint';
import NavCountPrint from './NavCountPrint';

const Nav = ({
  isOpened,
  categories,
  answer,
  question,
  setQuestion,
  setIsOpened,
}) => {
  return (
    <nav>
      <ol className={isOpened ? 'navLinks navActive' : 'navLinks'}>
        {isOpened && (
          <NavPrint
            navItems={categories}
            question={question}
            setQuestion={setQuestion}
            setIsOpened={setIsOpened}
          />
        )}
        {isOpened && (
          <div className={isOpened ? 'count navActive' : 'count'}>
            <NavCountPrint
              navItems={categories}
              isOpened={isOpened}
              answer={answer}
            />
          </div>
        )}
      </ol>
    </nav>
  );
};

export default Nav;

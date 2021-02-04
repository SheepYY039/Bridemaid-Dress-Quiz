import React from 'react';
import NavCount from './NavCount';

const NavCountPrint = ({ navItems, answer }) => {
  return Object.keys(navItems).map((navItem) => {
    const response = Object.keys(answer).map((ans) => {
      const temp = ans === navItems[navItem].categoryId ? answer[ans] : '';
      return temp;
    });
    return (
      <NavCount
        key={`${navItem}${Math.random()}`}
        name={response}
        index={navItems[navItem].index}
      />
    );
  });
};

export default NavCountPrint;

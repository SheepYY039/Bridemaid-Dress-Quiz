import React from 'react';
import NavItems from './NavItems';

export default class NavPrint extends React.Component {
  render() {
    return Object.keys(this.props.navItems).map((navItem) => (
      <NavItems
        key={`${navItem}${Math.random()}`}
        name={this.props.navItems[navItem].name}
        index={this.props.navItems[navItem].index}
        question={this.props.question}
        setQuestion={this.props.setQuestion}
        setIsOpened={this.props.setIsOpened}
      />
    ));
  }
}

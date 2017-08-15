import React from 'react';
import Nav from './nav';
import Content from './content';
import BaseFooter from './footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div>
        <Nav />
        <Content />
        <BaseFooter />
      </div>
    );
  }
}

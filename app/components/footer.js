import React from 'react';
import{ Footer } from 'react-materialize';

export default class BaseFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <Footer style={{backgroundColor: '#383838'}} copyrights="© 2013 | Buffalo House, 97 Oxford Street North, Saint Paul, MN 55104 Phone: 651-209-0780"
        links={
          <ul>
            <li><a className="grey-text text-lighten-3" href="/">Home</a></li>
            <li><a className="grey-text text-lighten-3" href="/team">Our Team</a></li>
            <li><a className="grey-text text-lighten-3" href="/program">Our Program</a></li>
            <li><a className="grey-text text-lighten-3" href="/contact">Contact Us</a></li>
          </ul>
        }
        className=""
      >
        <h5 className="white-text">The Buffalo House</h5>
        <p className="grey-text text-lighten-4">Make Sober Living A Lifetime Expierence</p>
      </Footer>
    );
  }
}

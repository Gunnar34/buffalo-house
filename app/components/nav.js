import React from 'react';
import{ NavItem, Navbar } from 'react-materialize';
import Logo from '!!file!../images/buffaloIcon.png';
import styles from '../styles/App.css';
export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <Navbar options={{menuWidth: 200}} className={styles.appBar} brand={<img style={{height: '64px'}} src={Logo} />} left>
        <NavItem href="/">Home Page</NavItem>
        <NavItem href="/team">Our Team</NavItem>
        <NavItem href="/program">Our Program</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </Navbar>
    );
  }
}

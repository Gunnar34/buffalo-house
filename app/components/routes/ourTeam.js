import React from 'react';
import{ Carousel } from 'react-materialize';
import Will from '!!file!../../images/will.jpg';

export default class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center', fontFamily: 'Oswald, sans-serif'}}>Meet The Buffalo House Team</h1>
        <Carousel carouselId="teamCarousel" options={{padding: 150}}>
          <div>
            <img src={Will} />
            <h2>Will Rolf</h2>
            <p className="white-text">Will Rolf has been involved in the AA community for almost 20 years.</p>
          </div>
          <div className="amber">
            <h2>Person 2</h2>
            <p className="white-text">This is your second panel</p>
          </div>
          <div className="green">
            <h2>Person 3</h2>
            <p className="white-text">This is your third panel</p>
          </div>
          <div className="white">
            <h2>Person 4</h2>
            <p className="white-text">This is your fourth panel</p>
          </div>
        </Carousel>
        <div style={{height: '30vh'}} />
      </div>
    );
  }
}

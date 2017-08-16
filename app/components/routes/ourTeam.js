import React from 'react';
import{ Carousel, Container } from 'react-materialize';
import Will from '!!file!../../images/will.jpg';

export default class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <Container>
        <h2 style={{textAlign: 'left', fontFamily: 'Oswald, sans-serif', color: '#FFF', textDecoration: 'underline'}}>Meet The Buffalo House Team</h2>
        <Carousel carouselId="teamCarousel" options={{ fullWidth: true, indicators: true }}>
          <div style={{backgroundImage: 'url(' + Will + ')', backgroundRepeat: 'no-repeat', backgroundPosition: 'right'}}>
            <h1 style={{color: '#F1F1F1', marginLeft: '10px' }}>Will Rolf</h1>
            <p style={{color: '#101010', marginLeft: '10px'}} className="white-text">This is your first panel</p>
          </div>
          <div className="amber">
            <h2>Second Panel</h2>
            <p className="white-text">This is your second panel</p>
          </div>
          <div className="green">
            <h2>Third Panel</h2>
            <p className="white-text">This is your third panel</p>
          </div>
          <div className="blue">
            <h2>Fourth Panel</h2>
            <p className="white-text">This is your fourth panel</p>
          </div>
        </Carousel>
        <div>
          <h3 style={{fontFamily: 'Oswald, sans-serif', color: '#F1F1F1'}}>About Our Name</h3>
          <p style={{color: '#101010'}} className="flow-text">
            The buffalo is a survivor. His species has endured across millennia. He will fight for
            himself and for the defense of others in his group. Building upon this, the Buffalo
            Sober House instills in its residents the tools for self-preservation, endurance,
            and mutual support. Just as a group of buffalo bands together, the level of support
            and accountability offered through the lifestyle at the Buffalo Sober House sustains
            and empowers those in recovery. On his own the buffalo is strong, yet vulnerable.
            With his herd surrounding him, defending him, and fighting at his side, the buffalo
            is one of the most robust and formidable creatures on Earth.
          </p>
          <h3 style={{fontFamily: 'Oswald, sans-serif', color: '#F1F1F1'}}>About Us</h3>
          <p style={{color: '#101010'}} className="flow-text">
            At the Buffalo House we offer independent living with accountability. The Buffalo House
            is a place to take the next step towards a new life, and a place to make friends that
            will help support you and your journey. We expect residents to be working a program of
            recovery including attending four meetings outside the house and the house meetings,
            additionally meet at least weekly with a sponsor to do step work. In addition, residents
            should have at least one outside volunteer commitment and have full or part-time work
            or be a full time student.
          </p>
        </div>
      </Container>
    );
  }
}

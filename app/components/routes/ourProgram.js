import React from 'react';
import Img from '!!file!../../images/study.jpg';

export default class Program extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col l4 s12">
            <h2 style={{fontFamily: 'Oswald, sans-serif', color: '#FFF'}}>Our Program</h2>
            <div style={{backgroundColor: '#FFF'}} className="divider" />
            <ol style={{color: '#F4F4F4'}} className="flow-text">
              <li>
                Attend one house meetings per week, which includes a 12 step big book study group.
              </li>
              <li>
                Active participation in Alcoholic Anonymous, including at least four meetings weekly.
              </li>
              <li>
                Mandatory 12 step sponsorship with required face to face weekly meetings.
              </li>
              <li>
                Employment of at least 32 hours per week, or be a full time student.
              </li>
              <li>
                Committed to at least one weekly service commitment at A.A./N.A. meeting preferably a home group.
              </li>
              <li>
                Maintain both personal and community living space that is reflective of respect of one's self
                and our community.
              </li>
              <li>
                We believe a healthy program of recovery involves a commitment to focus on establishing personal
                growth and gain a relationship within, without distraction, for a period of time determined by
                our sponsors
              </li>
            </ol>
          </div>
          <div className="col l8 s12">
            <h2 style={{fontFamily: 'Oswald, sans-serif', color: '#FFF'}}>Our Mission</h2>
            <div style={{backgroundColor: '#FFF'}} className="divider" />
            <img style={{marginTop: 24.920, width: '90%'}} src={Img} />
            <p style={{color: '#F4F4F4'}} className="flow-text">
              The Buffalo House is about supporting the needs of our residents by providing a supportive
              healthy living environment that allows our residents the opportunity to become active
              members in the recovering community as well as the surrounding community in which they
              will reside during their recovery. The Buffalo house provides its residents a sober
              supportive living environment in which they can draw knowledge, strength, and support
              from their peers.
            </p>
            <p style={{color: '#F4F4F4'}} className="flow-text">
              The Buffalo house philosophy is to support our members until they are able to support
              themselves, thus, allowing each member to share their knowledge, strength, and life
              experience with other newly recovering adults. One of the core philosophies and
              principals of the Buffalo house is democracy, we believe that residents should
              have input in the environment they have chosen to explore, grow, and live in the world of recovery.
            </p>
            <h2 style={{fontFamily: 'Oswald, sans-serif', color: '#FFF'}}>Other Sites</h2>
            <div style={{backgroundColor: '#FFF'}} className="divider" />
            <div className="row">
              <div className="col s6">
                <a style={{color: '#F4F4F4'}} target="_blank" href="http://mnsoberhomes.org/"><p className="flow-text">M.A.S.H - Minnesota Association of Sober Homes</p></a>
                <a style={{color: '#F4F4F4'}} target="_blank" href="http://www.aa.org/"><p className="flow-text">Alcoholics Anonymous</p></a>
                <a style={{color: '#F4F4F4'}} target="_blank" href="http://www.aastpaul.org/"><p className="flow-text">Saint Paul Intergroup</p></a>
              </div>
              <div className="col s6">
                <a style={{color: '#F4F4F4'}} target="_blank" href="https://minnesotarecovery.org/"><p style={{marginLeft: '10px'}} className="flow-text">Minnesota Recovery Connection</p></a>
                <a style={{color: '#F4F4F4'}} target="_blank" href="http://www.hazelden.org/"><p style={{marginLeft: '10px'}} className="flow-text">Hazelden</p></a>
                <a style={{color: '#F4F4F4'}} target="_blank" href="https://www.theretreat.org/"><p style={{marginLeft: '10px'}} className="flow-text">The Retreat</p></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

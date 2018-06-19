import React from 'react';
import{ Carousel, Slider, Slide } from 'react-materialize';
import Img1 from '!!file!../../images/slide1.jpg';
import Img2  from '!!file!../../images/slide2.jpg';
import Img3  from '!!file!../../images/slide3.jpg';
import Img4  from '!!file!../../images/slide4.jpg';
import Img5 from '!!file!../../images/pool.png';
import Mash from '!!file!../../images/mash2.png';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div style={{marginTop: '10px'}} className="container">
        <h2 style={{fontFamily: 'Oswald, sans-serif', color: '#FFF', textDecoration: 'underline'}}>The Buffalo House</h2>
        <Carousel options={{ fullWidth: true, indicators: true, interval: 4000 }} images={[
          Img4,
          Img3,
          Img2,
          Img1
        ]} />
        {/* <div>
          <Slider style={{height: '500px !important'}}>
            <Slide src={Img4} />
            <Slide src={Img3} />
            <Slide src={Img2} />
            <Slide src={Img1} />
          </Slider>
        </div> */}
        <div className="row">
          <div className="col s12 center-align">
            <h3 style={{textAlign: 'center', fontFamily: 'Oswald, sans-serif', color: '#FFF'}}>Who We Are</h3>
          </div>
          <div style={{marginBottom: 0}} className="col s8 offset-s2 center-align">
            <div className="divider"></div>
          </div>
        </div>
        <div className="row">
          <div style={{marginTop: '35px'}} className="col l4 offset-l1 hide-on-med-and-down center-align">
            <img style={{width: '100%'}} src={Img5} />
          </div>
          <div className="col l6 s12">
            <p style={{color: '#F4F4F4'}} className="flow-text">
              We recognize the need for a productive, recovery oriented community. We strive to
              provide an organized, safe environment for those who are facing the challenges
              of recovery from the diseases of alcoholism and addiction.
            </p>
          </div>
          <div className="hide-on-large-only s10 offset-s1 center-align">
            <img style={{width: '90%'}} src={Img5} />
          </div>
          <div className="col s12">
            <p style={{color: '#F4F4F4'}} className="flow-text">

            </p>
          </div>
          <div className="col l6 s12">
            <p style={{color: '#F4F4F4'}} className="flow-text">
              We encourage real-life endeavors and dreams. We also assist in setting realistic
              goals that can be achieved during their stay at Buffalo House. We acknowledge
              the necessity of a positive sense of self and individuality.
            </p>
          </div>
          <div className="col l5 offset-l1 hide-on-med-and-down">
            <img style={{marginTop: 55, marginRight: '10px'}} src="http://www.buffalosoberhouse.com/images/t3.jpg" />
            <img src="http://www.buffalosoberhouse.com/images/t14.jpg" />
          </div>
          <div className="col s6 hide-on-large-only">
            <img style={{marginTop: 24.360, marginRight: '10px', width: '100%'}} src="http://www.buffalosoberhouse.com/images/t3.jpg" />
          </div>
          <div className="col s6 hide-on-large-only">
            <img style={{marginTop: 24.360, width: '100%'}} src="http://www.buffalosoberhouse.com/images/t14.jpg" />
          </div>
          <div className="col s12">
            <p style={{color: '#F4F4F4'}} className="flow-text">
              We create an atmosphere that promotes community and support the development
              of healthy recovery relationships that often lead to renewed relationships
              with families and significant others.
            </p>
          </div>
          <div className="col l3 hide-on-med-and-down">
            <img style={{marginTop: '20%'}} src={Mash} />
            <p style={{color: '#F4F4F4'}}>Buffalo House is a Proud Member of the Minnesota Association of Sober Homes.</p>
          </div>
          <div className="col s7 hide-on-large-only">
            <img style={{width: '100%', marginTop: 35}} src={Mash} />
          </div>
          <div className="col s5 hide-on-large-only">
            <p className="flow-text left-align" style={{color: '#F4F4F4', marginTop: 17.136}}>Buffalo House is a Proud Member of the Minnesota Association of Sober Homes.</p>
          </div>
          <div className="col l8 offset-l1 s12">
            <p style={{color: '#F4F4F4'}} className="flow-text">
              We acknowledge and recognize the essential roles of detoxification treatment
              programs as the foundation of recovery. Once completed each one of us is now
              prepared to reside in a sober living transitional environment or half way
              house. It is at Buffalo House that our residents put into practice the tools
              of recovery embraced during treatment.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

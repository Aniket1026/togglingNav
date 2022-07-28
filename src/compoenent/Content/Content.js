import React from "react";

import Hero from './../../images/image-hero-desktop.png'
import dataBiz from './../../images/client-databiz.svg'
import audioPhile from './../../images/client-audiophile.svg'
import meet from './../../images/client-meet.svg'
import maker from './../../images/client-maker.svg'

import './Content.css'


const Content = () => {
    return (
      <div className="content">
        <div className="left-content">
          <div className="section1">
            <p>Make</p>
            <p>remote work</p>
          </div>
          <div className="section2">
            <p>get your team in sync no matter your location</p>
            <p>Steamline processes. Create team rituals, and </p>
            <p>Watch productivity soar</p>
          </div>
          <div className="section3">
            <button className="learn">Learn More</button>
          </div>
          <div className="section4">
            <img src={dataBiz} alt="dataBiz" className="databiz" />
            <img src={audioPhile} alt="audioPhile" className="audiophile" />
            <img src={meet} alt="meet" className="meet" />
            <img src={maker} alt="maker" className="maker" />
          </div>
        </div>
        <div className="right-content">
          <img src={Hero} alt="Hero" className="hero" />
        </div>
      </div>
    );
}

export default Content
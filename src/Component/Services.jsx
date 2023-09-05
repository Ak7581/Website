import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import web1 from '../assest/web1.jpg'
import web3 from '../assest/web3.jpg'
function Services() {
  return (
    <div className="services">
      <Carousel 
      infiniteLoop 
      autoPlay 
      showStatus={false} 
      showArrows={false}
      showThumbs={false}
      interval={1000}>

        <div>
          <img
              src={web1}  alt="adf"
          />
          <p className="legend">Full-Stack</p>
        </div>
        <div>
          <img src={web3} alt="" />
          <p  className="legend"> peer-to-peer support</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Services;

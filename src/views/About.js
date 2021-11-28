import React from "react";
import "../assets/css/about.css";
import 'react-slideshow-image/dist/styles.css';
import 'react-slideshow-image/dist/styles.css';
import aboutImg from "../assets/img/about1.jpg";
import visionImg from "../assets/img/about2.jpeg";
import missionImg from "../assets/img/about3.jpg";
import teamImg from "../assets/img/about4.png";

function About() {
    const names = [
        { name: '1. Bhavesh Shelar (Python Developer)' },
        { name: '2. Dharil Patel (Full Stack Developer)' },
        { name: '3. Jay Gangani (Web Developer)' },
      ];
    
    return (        
        <>
        <div className="about container pb-3">
          <h3 className="about-title pt-3 ">About Us</h3>
          <div className="about-body container">
            <div className="about-main row mt-lg-4 mt-1 ">
              <div className="col-lg-6 d-flex my-auto">
                <h6 style={{ lineHeight: 1.7 }} className="imp-text">
                  We are here to make your stock trading and investing journey easy by our Stock Market Prediction Website.
                  <br />
                </h6>
              </div>
              <img src={aboutImg} className="col-lg-6" alt="financeimage" style={{borderRadius:"31px"}}/>
            </div>
            <div className="brackline"></div>
            <div className="about-vision container">
              <h3 className="head-title">Our Vision</h3>
              <div className="vision-body  row mt-lg-4 mt-1">
                <img src={visionImg} className="col-lg-6" alt="financeimage" style={{borderRadius:"31px"}} />
                <div className="col-lg-6 d-flex my-auto">
                  <h6
                    style={{ lineHeight: 1.7 }}
                    className="mt-sm-2 mt-md-2 imp-text"
                  >
                    Our vision is to make right stock investing easy Through our website we want to help them to invest in right stocks by our Stock Prediction Website.
                  </h6>
                </div>
              </div>
            </div>
  
            <div className="brackline"></div>
            <div className="about-vision container">
              <h3 className="head-title">Our Mission</h3>
              <div className="vision-body  row mt-lg-4 mt-1">
                <div className="col-lg-6 d-flex my-auto">
                  <h6
                    style={{ lineHeight: 1.7 }}
                    className="mt-sm-2 mt-md-2 imp-text"
                  >
                    Our mission is to help more and more people who want to start their journey in stock market by investing in right stocks.
                  </h6>
                </div>
                <img src={missionImg} className="col-lg-6" alt="financeimage" style={{borderRadius:"31px"}} />
              </div>
            </div>

            <div className="brackline"></div>
            <div className="about-vision container">
              <h3 className="head-title">Our Team</h3>
              <div className="vision-body  row mt-lg-4 mt-1">
              <img src={teamImg} className="col-lg-6" alt="teamimage" style={{borderRadius:"31px"}} />
                <div className="col-lg-6 d-flex my-auto">
                  <h3
                    style={{ lineHeight: 1.7 }}
                    className="mt-sm-2 mt-md-2 imp-text"
                  >
                        <div class="names">
                        {names.map(data => (
                            <p>{data.name}</p>
                        ))}
                        </div>
                  </h3>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default About;

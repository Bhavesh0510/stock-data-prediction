import React from 'react'
import "./about.css";
import dharil from "../images/dharil.png";
import jay from "../images/JAY.png";
import bhavesh from "../images/bhavesh.png";

const About = () => {
    return (
        <>
            <div className="about-section">
                <h1>About Us</h1>
                <p>Some Information about who we are and what we do.</p>
            </div>

            <h2 style="text-align:center">Our Team</h2>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src={dharil} alt="Dharil" style="width:100%"/>
                        <div className ="container">
                        <h2>Dharil Patel</h2>
                        <p className ="title">Full Stack Developer</p>
                        <p>CEO OF THE MINE STOCKS</p>
                        <p>dharilpatel61857@example.com</p>
                        <p><button className ="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src={jay} alt="Jay" style="width:100%"/>
                        <div className ="container">
                        <h2>Jay Gangani</h2>
                        <p className ="title">Web Developer</p>
                        <p>FOUNDER OF THE MINE STOCKS</p>
                        <p>jay@example.com</p>
                        <p><button className ="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src={bhavesh} alt="Bhavesh" style="width:100%"/>
                        <div className ="container">
                        <h2>Bhavesh shelar</h2>
                        <p className ="title">Python Developer</p>
                        <p>CO-FOUNDER OF THE MINE STOCKS</p>
                        <p>bhavesh@example.com</p>
                        <p><button className ="button">Contact</button></p>
                        </div>
                    </div>
                </div>
</div>
        </>
    )   
}

export default About

import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg"
import React2 from "../assets/react2.webp"
 

const AboutContent = () => {
    return (
        <div className="about">
    <div className="left">
        <h1> Who Am I?</h1>
        <p>I am A Full Stack Web Developer</p>
        <p>I have finished my Diploma in Full Stack Web Development from Robertson College.</p>
        <Link to = "/contact">
            <button className="btn"> Skills </button>
        </Link>
    </div>
    <div className="right">
        <div className="img-container">
            <div className="img-stack top">  
            <img src={React1} className="img"
             alt="image"></img>

            </div>
            
            <div className="img-stack bottom">  
            <img src={React2} className="img"
             alt="image"></img>

            </div>

        </div>
        
    </div>
    </div>
    



    );
};

export default AboutContent;
import "./FooterStyles.css"

import React from 'react'
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style=
                            {{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>306-357 Tu Pelo Avenue</p>
                            <p>Winnipeg, Manitoba</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style=
                            {{ color: "#fff", marginRight: "2rem" }} />
                            +1-204-295-9005</h4>


                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style=
                            {{ color: "#fff", marginRight: "2rem" }} />
                            manpreetsidhu221987@gmail.com</h4>


                    </div>

                </div>

                <div className="right">
                    <h4> ABOUT ME</h4>
                    <p> I am Manpreet Kaur Sidhu.
                        I am passionate about web application development.
                        I genuinely love to do coding. What started with simple
                        “Hello World” program has become full-fledged passion that only
                        gets more exiting day by day and offered me to improve my
                        developing skills to build complex programs.
                        I am dedicated, honest and fast learner. </p>
                    <div className="social">
                        <a href="https://github.com/ManpreetSidhu369?tab=repositories" target="_blank">
                        <FaGithub size={30} style=
                            {{ color: "#fff", marginRight: "1rem" }} />
                            </a>
                            
                            <a href="https://linkedin.com/in/manpreet-sidhu-369g" target="_blank" >

                        <FaLinkedin size={30} style=
                            {{ color: "#fff", marginRight: "1rem" }} />

                            </a>


                    </div>

                </div>

            </div>

        </div>
    )
}

export default Footer
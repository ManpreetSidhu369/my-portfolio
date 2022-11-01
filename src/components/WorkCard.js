import "./WorkCardStyles.css"

import React from 'react';

import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src= {props.imgsrc} alt="image" />
    <h2 className="project-title">{props.title} </h2>
    <div className="pro-details">
      <p>{props.text}</p>
      <div className="pro-btns">
      <a href="https://github.com/ManpreetSidhu369?tab=repositories" target="_blank">
                        <FaGithub size={30} style=
                            {{ color: "#fff", marginRight: "1rem" }} />
                            </a>
        
      </div>
    </div>

</div>
  )
}

export default WorkCard
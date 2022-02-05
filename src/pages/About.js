import React from "react";
import MultiplePizzas from "../assets/545905.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <h3>project Wess!</h3>
        <p>
          
      wess youraheb bikom
       <strong> saha ya rojla</strong> . <br></br> <br></br> 

        BARRA HAK mrigel SEEHBY

        
        </p>
  
      </div>
    </div>
  );
}

export default About;

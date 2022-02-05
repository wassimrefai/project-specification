import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/532559.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})`,height:"200"}}>
      <div className="headerContainer">
        <h1> project  </h1>
        <p> brouillon</p>
        <Link to="/menu">
          <button> more information </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

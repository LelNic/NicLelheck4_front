import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="imgback">
      <h2>Fallout Help</h2>
      <p className="text">bonjour a tous et bienvenue cette plateforme a ete cree pour t'aider a progresser dans Fallout</p>
      <Link to="login" className="button">
        connection
      </Link>
            <Link to="register" className="button">
        enregistrement
      </Link>
       
    </div>
     );
};

export default Home;

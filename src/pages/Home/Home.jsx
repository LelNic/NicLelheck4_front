import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="imgback">
      <h2>Fallout Help</h2>
      <p className="text">bonjour a tous et bienvenue cette plateforme a ete cree pour t'aider a progresser dans Fallout</p>
      <Link to="login">
        <img
          src={"https://cutewallpaper.org/21/vault-boy-icon/Vault-101-Citizenship-Award-Vault-Boy-With-Pip-Boy-Clipart-.png"}
          className="img"
        />
        connection
      </Link>
      <Link to="register">
        <img
          src={"https://cutewallpaper.org/21/vault-boy-icon/Vault-Tec-bobblehead-Fallout-Wiki-FANDOM-powered-by-Wikia.jpg"}
          className="img"
        />
        enregistrement
      </Link>
      <Link to="register">
        <img
          src={
            "data:image/jpeg;base64,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"
          }
          className="img"
        />
        info Armure Assister
      </Link>
    </div>
  );
};

export default Home;

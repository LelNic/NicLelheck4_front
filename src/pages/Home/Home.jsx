import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="imgback">
      <h2>Fallout Help</h2>
      <p className="text">bonjour a tous et bienvenue cette plateforme a ete cree pour t'aider a progresser dans Fallout</p>

      <Link to="login">
        se connecter
        <img
          src={"https://www.clipartmax.com/png/full/67-679735_cory-diers-vault-boy-with-pip-boy.png"}
          className="img"
          alt="icon"
        />
      </Link>
      <Link to="register">
        inscription
        <img
          src={"https://www.clipartmax.com/png/full/115-1159059_vault-boy-sticker-joan-cornella-vault-boy.png"}
          className="img"
          alt="icon"
        />
      </Link>
      <Link to="armure">
        info Armure Assister
        <img
          src={"https://raw.githubusercontent.com/royxue/Power-Armor/master/misc/power_armor.png"}
          className="img"
          alt="icon"
        />
      </Link>
    </div>
  );
};

export default Home;

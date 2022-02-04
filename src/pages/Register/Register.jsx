import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [birthdate, setBithdate] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const deleteMessage = () => {
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === verifyPassword) {
      axios.post("http://localhost:5000/security/register", {
        pseudo: pseudo,
        email: email,
        password: password,
        birthdate: birthdate,
      });
      setMessageType("success");
      setMessage("Votre inscription a bien été prise en compte");
      setTimeout(deleteMessage, 5000);
    } else {
      setMessageType("alert");
      setMessage("Vos mots de passe sont différents");
      setTimeout(deleteMessage, 5000);
    }
  };
  console.log(email, password, birthdate, pseudo);
  return (
    <div className="Register">
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Pseudo" onChange={(e) => setPseudo(e.target.value)} required />
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} required />
        <input
          type="password"
          placeholder="Vérifier le mot de passe"
          onChange={(e) => setVerifyPassword(e.target.value)}
          required
        />
        <input type="date" placeholder="Date de naissance" onChange={(e) => setBithdate(e.target.value)} required />
        <button type="submit">Inscription</button>
        <Link to="/" className="button">
          home
        </Link>
        {message !== "" ? <div className={`created ${messageType}`}>{message}</div> : ""}
      </form>
    </div>
  );
};

export default Register;

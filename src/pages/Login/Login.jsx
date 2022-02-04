import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const url = "http://localhost:5000/security/login";
  const [email, setEmail] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      const user = { email: email, password: password, pseudo: pseudo };
      axios.post(url, user).then(({ data }) => {
        if (data.error) setError(data.error);
        else {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          window.location.href = "/user/profile";
        }
      });
    } else {
      setError("Veuillez entrez l'email et le mot de passe");
    }
  };

  return (
    <>
      <h1>connection</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Se Connecter</button>
        <div>
          <Link to="/" className="button">
            home
          </Link>
        </div>
      </form>
      {error && <p>{error}</p>}
    </>
  );
};

export default Login;

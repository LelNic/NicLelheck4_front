import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./protected/ProtectedRoute.js";
import { AuthContext } from "./contexts/AuthContexts.js";
import { UserContext } from "./contexts/UserContexts.js";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:5000/security/user-is-auth", {
          headers: {
            "x-access-token": token,
          },
        })
        .then(({ data }) => {
          if (data.auth) {
            setIsAuthenticated(true);
            setUser(JSON.parse(localStorage.getItem("user")));
          }
        })
        .catch(() => {
          localStorage.removeItem("token");
        });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <UserContext.Provider value={{ user, setUser }}>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user" element={<ProtectedRoute />}>
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </main>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;

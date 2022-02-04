// import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContexts";
import "./Profile.css";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [userInfos, setUserInfos] = useState();

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${user.id}`).then(({ data }) => {
      setUserInfos(data);
    });
  }, []);

  console.log("plop", userInfos, "id", user.id);
  return (
    <div className="profile">
      <h2>Profil de : {userInfos?.firstname + " " + userInfos?.lastname}</h2>

      <input type="text" placeholder="email" value={userInfos?.email} />
      <input type="password" placeholder="password" />

      <h3>Infos facultative</h3>
      <p>information relative a votre compte</p>

      <p>{userInfos?.email}</p>
    </div>
  );
};

export default Profile;

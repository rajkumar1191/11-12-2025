import "./../App.css";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <h1 className="heading">Movie App</h1>
      <nav>
        <Link to="/movielist">Home</Link>
        <Link to="/addmovie">Add Movie</Link>
      </nav>
      <span>
        {!isLoggedIn && <button onClick={login}>Login</button>}
        {isLoggedIn && <button onClick={logout}>Logout</button>}
      </span>
    </header>
  );
};

export default Header;

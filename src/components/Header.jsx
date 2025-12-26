import "./../App.css";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <h1 className="heading">Movie App</h1>
      <span>
        {!isLoggedIn && <button onClick={login}>Login</button>}
        {isLoggedIn && <button onClick={logout}>Logout</button>}
      </span>
    </header>
  );
};

export default Header;

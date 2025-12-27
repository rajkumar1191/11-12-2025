import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogin = () => {
    login();
    navigate("/");
  }
  return (
    <>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;

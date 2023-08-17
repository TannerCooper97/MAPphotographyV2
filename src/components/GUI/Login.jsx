import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import Model from "./Model";
import "../../styles/gui-styles/Login.scss"

const LoginModal = ({ onClose }) => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false); // State to track login error

  const handleLogin = () => {
    if (username === "123test" && password === "pass") {
      login();
      onClose();
      setUsername("");
      setPassword("");
      setLoginError(false); // Reset login error state
    } else {
      setLoginError(true); // Set login error state to true
    }
  };

  console.log(username, password);
  return (
    <Model onClose={onClose}>
      <div className="login-container">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {loginError && (
          <p style={{ color: "red" }}>Invalid username or password</p>
        )}
        <button onClick={handleLogin}>Login</button>
      </div>
    </Model>
  );
};

export default LoginModal;

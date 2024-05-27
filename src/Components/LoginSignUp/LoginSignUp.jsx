import React, { useState } from 'react';
import './LoginSignUp.css';
import BuyerHome from '../Buy/BuyerHome';
import NavBar from '../NavBar/NavBar';

const LoginSignUp = () => {
  const [action, setAction] = useState("Sign Up");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (username.trim() !== "" && password.trim() !== "") {
      setIsLoggedIn(true);
    } 
  };

  return (
    <div >
      {!isLoggedIn && (
        <div className="container">
          <div className="header">
            <div className='text'>{action}</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            {action === "Log In" ? null : (
              <div className="input">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            )}
            <div className="input">
              <input
                type="email"
                placeholder="Enter Your Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="submit-container">
            <div
              className={action === "Log In" ? "submit grey" : "submit"}
              onClick={() => setAction("Sign Up")}
            >
              Sign Up
            </div>
            <div
              className={action === "Sign Up" ? "submit grey" : "submit"}
              onClick={() => setAction("Log In")}
            >
              Login
            </div>
            <button className="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
      {isLoggedIn && <BuyerHome />}
    </div>
  );
};

export default LoginSignUp;

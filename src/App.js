import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import BuyerHome from "./Components/Buy/BuyerHome.jsx";
import LoginSignUp from "./Components/LoginSignUp/LoginSignUp"
import SellerHome from './Components/Sell/SellerHome.jsx'
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <LoginSignUp />} />
        <Route path="/home" element={<BuyerHome />} />
        <Route path="/sell" element={<SellerHome />} />
        <Route path="/buy" element={<BuyerHome />} />
      </Routes>
    </Router>
    
  );
}

export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import BuyerHome from "./Components/Home/BuyerHome";
import LoginSignUp from "./Components/LoginSignUp/LoginSignUp"
import SellerHome from './Components/Sell/SellerHome.jsx'
import NavBar from "./Components/NavBar/NavBar.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showSellerHome, setShowSellerHome] = useState(false);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  const toggleComponent = () => {
    setShowSellerHome(prevState => !prevState);
  };
  

  return (
    
    <Router>
      {/* <div>
      <NavBar  toggleComponent={toggleComponent} showSellerHome={showSellerHome}/>
      {showSellerHome? <SellerHome/> : <BuyerHome/>} 
    </div> */}
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <LoginSignUp />} />
        <Route path="/home" element={<BuyerHome />} />
      </Routes>
    </Router>
    
  );
}

export default App;

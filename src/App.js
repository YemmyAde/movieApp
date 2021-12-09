import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignupPage } from "./pages/signUp";
import { SigninPage } from "./pages/signIn";
import Home from "./pages/hompage"

function App() {
  return (
    <Router>
      <Routes> 
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<SignupPage />} />
        <Route exact path="/signIn" element={<SigninPage />} />  
      </Routes>
     </Router>
  );
}

export default App;

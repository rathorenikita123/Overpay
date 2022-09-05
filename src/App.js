import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import LogIn from "./components/Login/LogIn";
import SignUp from "./components/SignUp/SignUp";
import Forgot from "./components/Forgot/Forgot";
import Otp from "./components/Otp/Otp";

const App = () => {
  return (
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/login" element={<LogIn/>} />
          <Route exact path="/signup" element={<SignUp/>} />
          <Route exact path="/forgot" element={<Forgot/>} />
          <Route exact path="/otp" element={<Otp/>} />
      </Routes>
  );
};

export default App;
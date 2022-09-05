import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from '../../Firebase';
import "./Dashboard.css";

const Dashboard = () => {

  const navigate = useNavigate();

  useEffect(() => {
    console.log(auth.currentUser);
  })

  const handleSignOut = async (e) => {
    await auth.signOut();
    if (!auth.currentUser) {
      navigate("/login");
    }
  }

  return (
      <div className="dashboard d-flex flex-column justify-content-between">
        <div className="navbar navbar-expand-lg  navbar-dark p-4  ">
          <div className="container-fluid">
            <div className="d-flex align-items-center">
              <div className="mb-2">
                <img src="/images/logo2.png" alt="" className="logo2" />
                <img src="/images/logo1.png" alt="" className="logo1" />
              </div>
              <div >
                <p className="fw-bold mx-3 fs-5 text-white">Overpay.</p>
              </div>
            </div>
            <button className="btn btn-primary" onClick={handleSignOut}>Log out</button>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center m-5 p-5">
          <h1>Hi, {auth?.currentUser?.displayName}!</h1>
          <p className="m-3">You're logged in. Well done!</p>
          <div className="d-flex">
            <button className="btn btn-primary btn-lg m-3 logout" onClick={handleSignOut} >Log out</button>
          </div>
        </div>
        <div className="footer d-flex  justify-content-between p-3">
          <div>
            <p>Privacy Policy</p>
          </div>
          <div>
            <p>Copyright 2022</p>
          </div>
        </div>
      </div>
  );
};

export default Dashboard;
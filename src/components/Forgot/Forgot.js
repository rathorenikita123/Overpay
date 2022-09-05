import React from "react";
import { useNavigate } from "react-router-dom";
import "./Forgot.css";

const Forgot = () => {

    const navigate = useNavigate();

    const handelnavigate = () => {
        navigate("/login");
    }
    
    return (
        <div className="forgot d-flex flex-column justify-content-between">
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
                    <button className="btn btn-primary" onClick={handelnavigate} >Sign In</button>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center m-5 p-5">
                <div className="card d-flex w-50 border-none p-3">
                    <div className="card-body">
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <div>
                                <h4 className="fw-bold text-center">Need help with your account?</h4>
                            </div>
                            <div>
                                <p className="text-center para">Enter the email address associated with your account and we will send you a link to reset your password</p>
                            </div>
                            <div className="form-outline mb-3">
                                <input type="email" className="form-control forgotemail" placeholder="Enter Email" />
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary btn-md btn-login mb-3 ">Send Link</button>
                            </div>
                            <div>
                                <p className="fw-bold">Forgot your email?</p>
                            </div>

                        </div>
                    </div>
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
}

export default Forgot;
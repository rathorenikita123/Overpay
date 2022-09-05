import React from "react";
import { useNavigate } from "react-router-dom";
import "./Otp.css";

const Otp = () => {

    const navigate = useNavigate();

    const handelnavigate = () => {
        navigate("/login");
    }

    return (
        <div className="otp d-flex flex-column justify-content-between">
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
                <div className="card d-flex border-none p-3">
                    <div className="card-body">
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <div>
                                <h4 className="fw-bold text-center">Verify your email</h4>
                            </div>
                            <div>
                                <p className="text-center para mb-0">We have sent code to your email</p>
                                <p className="text-center fw-bold">123****@gmail.com</p>
                            </div>
                            <div className="form-outline mb-3 d-flex code">
                                <div>
                                    <input type="number" className="form-control forgotemail " value={5} />
                                </div>
                                <div>
                                    <input type="number" className="form-control forgotemail" value={4} />
                                </div>
                                <div>
                                    <input type="number" className="form-control forgotemail" />
                                </div>
                                <div>
                                    <input type="number" className="form-control forgotemail" />
                                </div>
                                <div>
                                    <input type="number" className="form-control forgotemail" />
                                </div>
                                <div>
                                    <input type="number" className="form-control forgotemail" />
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary btn-login mb-3 ">Verify Account</button>
                            </div>
                            <div>
                                <p className=" para">Resend code in <span className="fw-bold text-black"> 59:00 </span></p>
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

export default Otp;
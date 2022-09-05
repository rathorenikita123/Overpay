import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase";
import "./Login.css";

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(false);
    const [show, setShow] = useState();

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const user = await auth.signInWithEmailAndPassword(email, password);
            setEmail("");
            setPassword("");
            if (user) {
                navigate("/dashboard");
            }
        } catch (error) {
            console.log(error);
            alert("User not found");
        }
    }

    const visible = () => {
        setShow(!show);
    }

    return (
            <div className="login">
                <section>
                    <div className="container  p-5">
                        <div className="row d-flex justify-content-center align-items-center w-100">
                            <div className="card text-black " >
                                <div className="card-body px-0">
                                    <div className="row justify-content-evenly">
                                        <div className="col-md-6 col-lg-6 col-xl-4 form d-flex  flex-column  justify-content-between">
                                            <div className="d-flex">
                                                <div>
                                                    <img src="/images/logo2.png" alt="" className="logo2" />
                                                    <img src="/images/logo1.png" alt="" className="logo1" />
                                                </div>
                                                <div >
                                                    <p className="fw-bold mx-3 fs-5">Overpay.</p>
                                                </div>
                                            </div>
                                            <form className=" mx-md-4">
                                                <div className="d-flex flex-column align-items-center justify-content-center justify-content-lg-start">
                                                    <div>
                                                        <h3>Sign in to Overpay</h3>
                                                    </div>
                                                    <div>
                                                        <p className="lead mb-0 ">Send, spend and save smarter</p>
                                                    </div>
                                                    <div>
                                                        <button type="button" className="btn btn-primary  btn-floating signin mt-4">
                                                            <img src="/images/google.png" alt="google" className="img-fluid mx-2" width={28} />
                                                            <a href="#">Sign In with google</a>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="divider d-flex align-items-center my-3">
                                                    <p className="text-center mx-3 mb-0">Or with email</p>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="email" id="form3Example3" className="form-control form-control"
                                                        placeholder="Username or email" onChange={(e) => setEmail(e.target.value)} />
                                                </div>
                                                <div className="form-outline icon d-flex align-items-center mb-3 ">
                                                    <input type={show ? "text" : "password"} id="form3Example4" className="form-control form-control"
                                                        placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                                    <i className="fa fa-eye-slash mr-2" aria-hidden="true" onClick={visible}></i>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="form-check mb-0">
                                                        <input className="form-check-input me-2 circle" type="checkbox" value="" id="form2Example3" />
                                                        <label className="form-check-label" for="form2Example3">
                                                            Remember me
                                                        </label>
                                                    </div>
                                                    <a href="/forgot" className=" text-primary">Forgot password?</a>
                                                </div>
                                                <div className="text-center text-lg-start d-flex flex-column align-items-center justify-content-center mt-3 ">
                                                    <div className="d-flex justify-content-center  mb-3 mb-lg-4">
                                                        <button type="submit" className="btn btn-primary btn-sm btn-login " onClick={handleLogin}>Sign In</button>
                                                    </div>
                                                    <p className="small   mb-0 text-center">Don't have an account?
                                                        <a href="/signup" className="link mx-1 fw-bold">Sign Up</a>
                                                    </p>
                                                </div>
                                            </form>
                                            <div className="footer d-flex  justify-content-between">
                                                <div>
                                                    <p>Privacy Policy</p>
                                                </div>
                                                <div>
                                                    <p>Copyright 2022</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-xl-6 h-50  d-flex align-items-center ">
                                            <img src="/images/backgroundb.png" className="img-fluid background" alt="bg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    );
};

export default LogIn;
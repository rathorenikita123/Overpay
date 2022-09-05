import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase";
import { updateProfile } from "firebase/auth";
import "./SignUp.css"

const SignUp = () => {

    const [show, setShow] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const user = await auth.createUserWithEmailAndPassword(email, password);
        // console.log(user);
        await user.user.updateProfile({
            displayName: firstname + " " + lastname,
        })
        if (user) {
            navigate("/otp");
        }
    }

    const visible = () => {
        setShow(!show);
    }
    //     if(firstname === ""){
    //         alert("Please enter your name");
    //     }
    //     if(lastname === ""){
    //         alert("Please enter your last name");
    //     }

    //     if(email === ""){
    //         return <p>Please enter your email</p>
    //     }
    //     if(password === ""){
    //         return <p>Please enter your password</p>
    //     }
    //     else{
    //         handleRegister();
    //         handleName();
    //     }
    // }

    // if (password.length < 6) {
    //     return <p className="text-danger">Password must be atleast 6 characters</p>
    // }



    // const onImageChange = (e) => {
    //     const [file] = e.target.files;
    //     setImg(URL.createObjectURL(file));
    //     setShow(false);
    // };

    return (
        <div className="login">
            <section>
                <div className="container  p-5">
                    <div className="row d-flex justify-content-center align-items-center w-100">
                        <div className="card text-black " >
                            <div className="card-body px-0">
                                <div className="row justify-content-evenly">
                                    <div className="col-md-6 col-lg-6 col-xl-6 h-50  d-flex align-items-center ">
                                        <img src="/images/rbackground.png" className="img-fluid background" alt="bg" />
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-4 form d-flex  flex-column  justify-content-between mt-5">
                                        <form className=" mx-md-4" onSubmit={handleRegister}>
                                            <div className="d-flex flex-column align-items-center justify-content-center justify-content-lg-start">
                                                <div>
                                                    <h3>Sign up for an account</h3>
                                                </div>
                                                <div>
                                                    <p className="lead mb-0 ">Send, spend and save smarter</p>
                                                </div>
                                                <div>
                                                    <button type="button" className="btn btn-primary btn-sm btn-floating signin mt-4">
                                                        <img src="/images/google.png" alt="google" className="img-fluid mx-2" width={28} />
                                                        <a href="#">Sign Up with google</a>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="divider d-flex align-items-center my-3">
                                                <p className="text-center mx-3 mb-0">Or with email</p>
                                            </div>
                                            <div className="d-flex ">
                                                <div className="form-outline mb-4 mx-1">
                                                    <input required type="text" id="form3Example1" className="form-control" placeholder="First name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                                                </div>
                                                <div className="form-outline mb-4 mx-1">
                                                    <input required type="text" id="form3Example2" className="form-control" placeholder="Last name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="form-outline mb-4 mx-1">
                                                <input type="email" id="form3Example3" className="form-control" required
                                                    placeholder="Username or email" value={email} onChange={(e) => setEmail(e.target.value)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                                            </div>
                                            <div className="form-outline icon d-flex align-items-center mb-3 ">
                                                <input type={show ? "text" : "password"} id="form3Example4" className="form-control"
                                                    placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={6} required />
                                                <i className="fa fa-eye-slash mr-2" aria-hidden="true" onClick={visible}></i>
                                            </div>
                                            <div className="d-flex justify-content-between policy align-items-center">
                                                <p className="mb-2">By creating an account, you agreeing to our<span> Privacy Policy</span> and <span>Electronics Communication Policy.</span></p>
                                            </div>
                                            <div className="text-center text-lg-start d-flex flex-column align-items-center justify-content-center mt-3 ">
                                                <div className="d-flex justify-content-center  mb-3 mb-lg-4">
                                                    <button type="submit" className="btn btn-primary btn-sm btn-login ">Sign Up</button>
                                                </div>
                                                <p className="small   mb-0 text-center">Already have an account?
                                                    <a href="/login" className="link mx-1 fw-bold">Sign In</a>
                                                </p>
                                            </div>
                                        </form>
                                        <div className="footer d-flex  justify-content-between">
                                            <div>
                                                <p className="float-start">Privacy Policy</p>
                                            </div>
                                            <div>
                                                <p>Copyright 2022</p>
                                            </div>
                                        </div>
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

export default SignUp;
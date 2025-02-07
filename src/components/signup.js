import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../assets/css/signup.css";
import { Helmet } from "react-helmet";
import lockimg from "./../assets/images/icons8-lock.svg";

const signup = () => {
  return (
    <div className="contact-body">
      <Helmet>
        <title>Signup Page | Harmony Event Management</title>
      </Helmet>
      <div className="contact-form-body">
        <div
          className="contact-form"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <img src={lockimg}></img>
          <h2>Sign Up</h2>
          <input type="text" placeholder="First Name"></input>
          <input type="text" placeholder="Last Name"></input>
          <input type="text" placeholder="Id"></input>
          <input type="password" placeholder="Password"></input>
          <input type="password" placeholder="Confirm Password"></input>
          <button>SIGNUP</button>
          <Link className="signup" to="/login">
            Already have an Account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default signup;

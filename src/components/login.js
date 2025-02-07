import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../assets/css/login.css";
import lockimg from "./../assets/images/icons8-lock.svg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic
    if (userId === "username" && password === "password") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/"); // Redirect to home page
      window.location.reload();
      alert("you have sucessfully logged in!");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="contact-body">
      <Helmet>
        <title>Login Page | Harmony Event Management</title>
      </Helmet>

      <div className="contact-form-body">
        <div
          className="contact-form"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <img src={lockimg} alt="Lock Icon" />
          <h2>Log In</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Id"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">LOGIN</button>
          </form>
          <Link className="signup" to="/signup">
            Create a new Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

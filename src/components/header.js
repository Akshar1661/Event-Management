import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./../assets/css/header.css";
import logo from "./../assets/images/1.site-logo.png";
import menu from "./../assets/images/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import profileImg from "./../assets/images/pfp.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
    alert("you have sucessfully logged out!");
  };

  return (
    <header className="header">
      <div className="menu-btn" onClick={toggleMenu}>
        <img src={menu} alt="Menu" />
      </div>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/events">EVENTS</Link>
          </li>
          <li>
            <Link to="/gallery">GALLERY</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
      {isLoggedIn ? (
        <div className="profile-container">
          <img
            src={profileImg}
            alt="Profile"
            className="profile-img"
            onClick={toggleProfileMenu}
          />
          {isProfileMenuOpen && (
            <div className="profile-menu">
              <ul>
                <li>
                  <Link to="/mybookings">View My Booking</Link>
                </li>
                <li>
                  <Link to="/profile">Change My Details</Link>
                </li>
                <li onClick={handleLogout}>Log Out</li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <Link to="/login">
          <button className="signin-btn">Log in</button>
        </Link>
      )}
    </header>
  );
};

export default Header;

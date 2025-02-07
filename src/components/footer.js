// Footer.js
import React from "react";
import "./../assets/css/footer.css"; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div
        className="footer-main-text"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        Do You want to Step into the future of your upcoming event
      </div>
      <button className="footer-btn">Request Early Acess</button>
      <div className="footer-content">
        <div className="footer-column">
          <ul>
            <li>Links</li>
            <li>Overview</li>
            <li>Social Media</li>
            <li>Courses</li>
          </ul>
        </div>
        <div className="footer-column">
          <ul>
            <li>Company</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-column">
          <ul>
            <li>Links</li>
            <li>Overview</li>
            <li>Social Media</li>
            <li>Courses</li>
          </ul>
        </div>
        <div className="footer-column">
          <ul>
            <li>Company</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <p className="footer-end">
        &copy; 2024 Lomash Bhuva | All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

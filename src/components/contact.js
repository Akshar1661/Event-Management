import React from "react";
import "./../assets/css/contact.css";
import lockimg from "./../assets/images/icons8-lock.svg";
import { Helmet } from "react-helmet";

const contact = () => {
  return (
    <div className="contact-body">
      <Helmet>
        <title>Contact Page | Harmony Event Management</title>
      </Helmet>

      <div className="top-sec-breadcrumb">
        <div>Contact us now </div>
        <div>
          Keep in <span> Touch</span>
        </div>
        <div>Contact us</div>
      </div>

      <div className="contact-form-body">
        <div
          className="contact-form"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <img src={lockimg}></img>
          <h2>Contact Us</h2>
          <input type="text" placeholder="Name"></input>
          <input type="email" placeholder="Email"></input>
          <input type="text" placeholder="Country"></input>
          <input type="tel" placeholder="Phone Number"></input>
          <input type="text" placeholder="Problem"></input>
          <input type="password" placeholder="Password"></input>
          <button>SEND</button>
        </div>
      </div>

      <div className="location">
        <p>our location</p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d625291.5869044036!2d74.67213666917198!3d26.982768102119827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db799301f3f2b%3A0x5b1e6bef732b76e4!2sHarmony%20eventz%2C%20276%20a%2C%20Frontier%20Colony%2C%20Adarsh%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302004!5e0!3m2!1sen!2sin!4v1720243015129!5m2!1sen!2sin"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default contact;

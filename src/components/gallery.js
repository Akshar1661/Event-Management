import React from "react";
import "./../assets/css/gallery.css";
import { Helmet } from "react-helmet";

const gallery = () => {
  return (
    <div className="gallery-body">
      <Helmet>
        <title>Gallery Page | Harmony Event Management</title>
      </Helmet>

      <div className="top-sec-breadcrumb">
        <div>Harmoni Events</div>
        <div>
          Harmoni <span>Gallery</span>
        </div>
        <div>Harmoni Gallery</div>
      </div>

      <div
        className="gallery-heading"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        Our Gallery
      </div>

      <div className="gallery-sec">
        <div
          className="gallery-box"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="gallery-box-text">
            <h3>Hi, there!</h3>
            <p>Hello, there!</p>
          </div>
        </div>

        <div className="gallery-box">
          <div className="gallery-box-text">
            <h3>Hi, there!</h3>
            <p>Hello, there!</p>
          </div>
        </div>

        <div className="gallery-box">
          <div className="gallery-box-text">
            <h3>Hi, there!</h3>
            <p>Hello, there!</p>
          </div>
        </div>

        <div className="gallery-box">
          <div className="gallery-box-text">
            <h3>Hi, there!</h3>
            <p>Hello, there!</p>
          </div>
        </div>

        <div className="gallery-box">
          <div className="gallery-box-text">
            <h3>Hi, there!</h3>
            <p>Hello, there!</p>
          </div>
        </div>

        <div className="gallery-box">
          <div className="gallery-box-text">
            <h3>Hi, there!</h3>
            <p>Hello, there!</p>
          </div>
        </div>

        <div className="gallery-box">
          <div className="gallery-box-text">
            <h3>Hi, there!</h3>
            <p>Hello, there!</p>
          </div>
        </div>

        <div className="gallery-box">
          <div className="gallery-box-text">
            <h3>Hi, there!</h3>
            <p>Hello, there!</p>
          </div>
        </div>
      </div>

      <div className="location" data-aos="fade-up" data-aos-duration="1500">
        <p>our location</p>

        <iframe
          data-aos="fade-up"
          data-aos-duration="1500"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d625291.5869044036!2d74.67213666917198!3d26.982768102119827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db799301f3f2b%3A0x5b1e6bef732b76e4!2sHarmony%20eventz%2C%20276%20a%2C%20Frontier%20Colony%2C%20Adarsh%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302004!5e0!3m2!1sen!2sin!4v1720243015129!5m2!1sen!2sin"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="get-start">
        <div
          className="get-start-section"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div>
            <div>Request Early acess to get started! </div>
            <div>
              Register today & start exploring the endless possibilities!
            </div>
          </div>
          <button>Get Started!</button>
        </div>
      </div>
    </div>
  );
};

export default gallery;

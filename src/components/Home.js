// src/components/Home.js
import React from "react";
import "./../assets/css/home.css";
import People from "./../assets/images/people.png";
import img1 from "./../assets/images/google.png";
import img2 from "./../assets/images/dropbox.png";
import img3 from "./../assets/images/slack.png";
import img4 from "./../assets/images/shopify.png";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="home-body">
      <Helmet>
        <title>Home Page | Harmony Event Management</title>
      </Helmet>

      <div className="image-section">
        <div
          className="image-section-text"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2>One Stop Event Planner</h2>
          <p>
            yet bed any for travelling assistance indulgence unpleasing. not
            thoughts all exercise blessing. indulgence way everything joy
            attractions bosterous the attachements. party we years to order
            allow asked of.
          </p>
          <h4>Every Event should be perfect.</h4>
          <input type="text" placeholder="Enter your Email."></input>
          <button>Get Started</button>

          <div className="img-top-sec">
            <img src={People}></img>
            <div>1630 peoples aceesed this site in last 24 hours.</div>
          </div>
        </div>
      </div>

      <div
        className="company-section"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <img src={img1}></img>
        <img src={img2}></img>
        <img src={img3}></img>
        <img src={img4}></img>
      </div>

      <div className="text-section" data-aos="fade-up" data-aos-duration="1500">
        <div className="flex1">
          <div className="w40">
            <div className="top-box"></div>
            <div>what is harmoni event</div>
          </div>
          yet bed any for travelling assistance indulgence unpleasing. not
          thoughts all exercise blessing. indulgence way everything joy
          attractions bosterous the attachements. party we years to order allow
          asked of.
        </div>

        <div className="flex2">
          <h3>Your Event will be beyond your Imagination</h3>
          <p>Explore the library</p>
        </div>

        <div className="flex3">
          <div>
            <div className="top-box"></div>
            <h2>Chatbots</h2>
            <p>
              this is lorem insum text and we can use it anywhere in the clde
              wherever needed in the code in the context without context.
            </p>
          </div>
          <div>
            <div className="top-box"></div>
            <h2>Chatbots</h2>
            <p>
              this is lorem insum text and we can use it anywhere in the clde
              wherever needed in the code in the context without context.
            </p>
          </div>
          <div>
            <div className="top-box"></div>
            <h2>Chatbots</h2>
            <p>
              this is lorem insum text and we can use it anywhere in the clde
              wherever needed in the code in the context without context.
            </p>
          </div>
        </div>
      </div>

      <div className="desc-section" data-aos="fade-up" data-aos-duration="1500">
        <div className="desc-sec-1">
          Harmony Event is management firm & wedding planner in the town this is
          lorem insum text and we can use it anywhere in the clde wherever
          needed in the code in the context without context.
        </div>

        <div className="desc-sec-2">
          <div className="desc-sec-21">
            <div>
              <div className="top-box"></div>
              <h3>Photography</h3>
            </div>
            <div>
              a team of 13 talented Photography and photographers very talented
              and passionate about it.
            </div>
          </div>

          <div className="desc-sec-21">
            <div>
              <div className="top-box"></div>
              <h3>Cinematography and videography</h3>
            </div>
            <div>
              a team of 13 talented Photography and photographers very talented
              and passionate about it.
            </div>
          </div>

          <div className="desc-sec-21">
            <div>
              <div className="top-box"></div>
              <h3>full venue decoration</h3>
            </div>
            <div>
              a team of 13 talented Photography and photographers very talented
              and passionate about it.
            </div>
          </div>

          <div className="desc-sec-21">
            <div>
              <div className="top-box"></div>
              <h3>home decoration</h3>
            </div>
            <div>
              a team of 13 talented Photography and photographers very talented
              and passionate about it.
            </div>
          </div>
        </div>
      </div>

      <div className="get-start" data-aos="fade-up" data-aos-duration="1500">
        <div className="get-start-section">
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

export default Home;



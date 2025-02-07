import React from "react";
import "./../assets/css/about.css";
import JourneyImg from "./../assets/images/about/company-banner.png";
import { Helmet } from "react-helmet";

const about = () => {
  return (
    <div className="about-body">
      <Helmet>
        <title>About Page | Harmony Event Management</title>
      </Helmet>

      <div
        className="top-sec-breadcrumb"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div>all you need to know </div>
        <div>
          about <span>harmoni</span>
        </div>
        <div>About us</div>
      </div>

      <div className="about-desc" data-aos="fade-up" data-aos-duration="1500">
        <div>
          <div>We are Harmoni!</div>
          <h2>No 1 Event Management</h2>
          <p>Get Started</p>
        </div>
        <div>
          <h2>Our Mission</h2>
          <div className="top-box"></div>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Sint dolorum, saepe
            praesentium, quis vero recusandae neque, inventore odit iure fuga
            reiciendis in ab.
          </div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
            voluptas aliquid.
          </div>
        </div>
        <div>
          <h2>Our Vision</h2>
          <div className="top-box"></div>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Sint dolorum, saepe
            praesentium, quis vero recusandae neque, inventore odit iure fuga
            reiciendis in ab.
          </div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
            voluptas aliquid.
          </div>
        </div>
      </div>

      <div
        className="img-journey-sec"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="img-image">
          <img src={JourneyImg}></img>
        </div>

        <div className="img-award">
          <p>Harmony Awards</p>
          <h2>Our Awards</h2>

          <div>
            <div className="journey-graph">
              <div className="line"></div>
              <div className="topics">
                <div className="flexneeded">
                  <div>
                    <div className="name">AUG-2019</div>
                    <div className="connect">
                      <div className="circle"></div>
                    </div>
                  </div>

                  <div
                    className="topic-data"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <h3>1st Place for Unique Events 2018</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sint dolorum, saepe praesentium, quis vero recusandae
                      neque, inventore odit iure fuga reiciendis in ab.
                    </p>
                  </div>
                </div>
                <div className="flexneeded">
                  <div>
                    <div className="name">MAY-2014</div>
                    <div className="connect">
                      <div className="circle"></div>
                    </div>
                  </div>

                  <div
                    className="topic-data"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <h3>1st Place for Unique Events 2018</h3>
                    <p>
                      Lorem ipsum, dolor sit adipisicing elit. Sint dolorum,
                      saepe sentium, quis vero recusandae neque, inventore odit
                      iure fuga reiciendis in ab.
                    </p>
                  </div>
                </div>{" "}
                <div className="flexneeded">
                  <div>
                    <div className="name">DEC-2013</div>
                    <div className="connect">
                      <div className="circle"></div>
                    </div>
                  </div>

                  <div
                    className="topic-data"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <h3>1st Place for Unique Events 2018</h3>
                    <p>
                      Lorem iit amet conselit. Sint dolorum, saepe , quis vero
                      recusandae neque, inventore odit iure fuga reiciendis in
                      ab.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flexbox-container">
        <div className="fb-box">
          <h4>Study with us!</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
            dolorum, saepe praesentium, iure fuga reiciendis in ab.
          </p>
        </div>
        <div className="fb-box">
          <h4>Study with us!</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
            dolorum, saepe praesentium, iure fuga reiciendis in ab.
          </p>
        </div>
        <div className="fb-box">
          <h4>Study with us!</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
            dolorum, saepe praesentium, iure fuga reiciendis in ab.
          </p>
        </div>
        <div className="fb-box">
          <h4>Study with us!</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
            dolorum, saepe praesentium, iure fuga reiciendis in ab.
          </p>
        </div>
        <div className="fb-box">
          <h4>Study with us!</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
            dolorum, saepe praesentium, iure fuga reiciendis in ab.
          </p>
        </div>
        <div className="fb-box">
          <h4>Study with us!</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
            dolorum, saepe praesentium, iure fuga reiciendis in ab.
          </p>
        </div>
        <div className="fb-box">
          <h4>Study with us!</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
            dolorum, saepe praesentium, iure fuga reiciendis in ab.
          </p>
        </div>
        <div className="fb-box">
          <h4>Study with us!</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
            dolorum, saepe praesentium, iure fuga reiciendis in ab.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;

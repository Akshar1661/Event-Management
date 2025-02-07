import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import events from "./data/eventdata";
import myBookings from "./data/mybookingdata";
import "../assets/css/eventdetail.css";
import { Helmet } from "react-helmet";

const EventDetail = () => {
  const { eventId } = useParams();
  const location = useLocation();

  const getQueryParams = (search) => {
    return new URLSearchParams(search);
  };

  // Get the source from the query parameters
  const queryParams = getQueryParams(location.search);
  const source = queryParams.get("source") || "events";
  const dataSource = source === "mybookings" ? myBookings : events;

  // Find the event
  const event = dataSource.find((event) => event.id === parseInt(eventId));

  // Handle case where event is not found
  if (!event) {
    return <h2>Event not found</h2>;
  }

  return (
    <div className="event-detail" data-aos="fade-up" data-aos-duration="1500">
      <Helmet>
        <title>{event.title} | Harmony Event Management</title>
      </Helmet>

      <div>
        <div className="event-dtl-img">
          <img
            src={event.image2}
            alt={event.title}
            className="event-detail-image"
          />
        </div>
        <div className="event-dtl-desc">
          <h1>{event.title}</h1>
          <div className="date-location">
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
          </div>
          <p className="event-dtl-description">{event.description}</p>
          <Link className="event-detail-btn" to={`/${source}`}>
            Back to Event List
          </Link>
        </div>
      </div>
      <div className="get-start"></div>
      <div
        className="get-start-section"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div>
          <div>Request Early access to get started!</div>
          <div>Register today & start exploring the endless possibilities!</div>
        </div>
        <button>Get Started!</button>
      </div>
    </div>
  );
};

export default EventDetail;

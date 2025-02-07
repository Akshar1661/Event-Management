import React, { useState } from "react";
import { Link } from "react-router-dom";
import events from "./data/eventdata";
import "./../assets/css/eventlist.css";
import { Helmet } from "react-helmet";

const EventList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter events based on the selected category
  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  // Handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="event-list">
      <Helmet>
        <title>Events Page | Harmony Event Management</title>
      </Helmet>

      <div className="top-sec-breadcrumb">
        <div>Our Events</div>
        <div>
          Harmoni <span>Events</span>
        </div>
        <div>Events Page</div>
      </div>

      <div className="top-sec-types">
        <p>Categories</p>
        <ul>
          <li
            onClick={() => handleCategoryClick("All")}
            className={selectedCategory === "All" ? "selected" : ""}
          >
            All
          </li>
          <li
            onClick={() => handleCategoryClick("Wedding")}
            className={selectedCategory === "Wedding" ? "selected" : ""}
          >
            Wedding
          </li>
          <li
            onClick={() => handleCategoryClick("Sports")}
            className={selectedCategory === "Sports" ? "selected" : ""}
          >
            Sports Events
          </li>
          <li
            onClick={() => handleCategoryClick("Festival")}
            className={selectedCategory === "Festival" ? "selected" : ""}
          >
            Festivals
          </li>
          <li
            onClick={() => handleCategoryClick("Religious")}
            className={selectedCategory === "Religious" ? "selected" : ""}
          >
            Religious
          </li>
          <li
            onClick={() => handleCategoryClick("Workshop")}
            className={selectedCategory === "Workshop" ? "selected" : ""}
          >
            Workshop
          </li>
          <li
            onClick={() => handleCategoryClick("Cultural")}
            className={selectedCategory === "Cultural" ? "selected" : ""}
          >
            Cultural
          </li>
          <li
            onClick={() => handleCategoryClick("Goa")}
            className={selectedCategory === "Goa" ? "selected" : ""}
          >
            Goa
          </li>
        </ul>
      </div>

      <div className="event-item-parent">
        {filteredEvents.length === 0 ? (
          <div className="no-events-message">
            <p>No events found for the selected category.</p>
          </div>
        ) : (
          filteredEvents.map((event) => (
            <div
              key={event.id}
              className="event-item"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <Link to={`/event/${event.id}?source=events`}>
                <img src={event.image} alt={event.title} />
                <div className="event-desc">
                  <h2>{event.title}</h2>
                  <p className="event-date">Date: {event.date}</p>
                  <p className="event-location">Location: {event.location}</p>
                  <button>View Details</button>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EventList;

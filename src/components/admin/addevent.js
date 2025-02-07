import React, { useState } from "react";
import "./../../assets/css/addevent.css";
import { Helmet } from "react-helmet";

const AddEvent = () => {
  const [eventImage, setEventImage] = useState(null);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventPrice, setEventPrice] = useState("");
  const [eventCategory, setEventCategory] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    console.log("Event added:", {
      eventImage,
      eventTitle,
      eventDate,
      eventTime,
      eventPrice,
      eventCategory,
      eventLocation,
      eventDescription,
    });
  };

  const handleImageChange = (e) => {
    setEventImage(e.target.files[0]);
  };

  return (
    <div className="add-event">
      <Helmet>
        <title>Add Event | Admin</title>
      </Helmet>

      <h2>Add New Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select an Image</label>
          <input type="file" onChange={handleImageChange} />
        </div>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input
            type="time"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            value={eventPrice}
            onChange={(e) => setEventPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            value={eventCategory}
            onChange={(e) => setEventCategory(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default AddEvent;

import React from "react";
import "./../../assets/css/viewevent.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const events = [
  {
    id: 1,
    name: "Wedding of Ananya & Raj",
    date: "2024-07-15",
    location: "Mumbai",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    name: "Birthday Bash of Aryan",
    date: "2024-07-20",
    location: "Delhi",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    name: "Startup Expo",
    date: "2024-08-01",
    location: "Bangalore",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 4,
    name: "Classical Music Concert",
    date: "2024-08-05",
    location: "Chennai",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 5,
    name: "Art Exhibition by Priya",
    date: "2024-08-10",
    location: "Kolkata",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 6,
    name: "Corporate Meeting for Infosys",
    date: "2024-08-15",
    location: "Hyderabad",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 7,
    name: "Gourmet Food Festival",
    date: "2024-08-20",
    location: "Ahmedabad",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 8,
    name: "Fashion Show by Manish Malhotra",
    date: "2024-08-25",
    location: "Mumbai",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 9,
    name: "Marathon for Charity",
    date: "2024-09-01",
    location: "Delhi",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 10,
    name: "Science Fair at IIT",
    date: "2024-09-05",
    location: "Kanpur",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 11,
    name: "Book Launch by Amish Tripathi",
    date: "2024-09-10",
    location: "Pune",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 12,
    name: "Film Festival",
    date: "2024-09-15",
    location: "Goa",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 13,
    name: "Tech Talk by Sundar Pichai",
    date: "2024-09-20",
    location: "Bangalore",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 14,
    name: "Dance Competition",
    date: "2024-09-25",
    location: "Chennai",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 15,
    name: "Charity Dinner",
    date: "2024-10-01",
    location: "Hyderabad",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 16,
    name: "Yoga Retreat",
    date: "2024-10-05",
    location: "Rishikesh",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 17,
    name: "Diwali Fest",
    date: "2024-10-10",
    location: "Varanasi",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 18,
    name: "Product Launch by Tata",
    date: "2024-10-15",
    location: "Mumbai",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 19,
    name: "Poetry Slam",
    date: "2024-10-20",
    location: "Kolkata",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 20,
    name: "Stand-Up Comedy Night",
    date: "2024-10-25",
    location: "Delhi",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 21,
    name: "Health & Wellness Expo",
    date: "2024-11-01",
    location: "Pune",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 22,
    name: "Art Fair",
    date: "2024-11-05",
    location: "Jaipur",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 23,
    name: "Photography Workshop",
    date: "2024-11-10",
    location: "Bangalore",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 24,
    name: "Winter Music Fest",
    date: "2024-11-15",
    location: "Shimla",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 25,
    name: "Christmas Carnival",
    date: "2024-12-01",
    location: "Goa",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 26,
    name: "New Year’s Eve Gala",
    date: "2024-12-31",
    location: "Delhi",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 27,
    name: "Republic Day Parade",
    date: "2024-01-26",
    location: "Delhi",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 28,
    name: "Holi Celebration",
    date: "2024-03-10",
    location: "Mathura",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 29,
    name: "Independence Day Festivities",
    date: "2024-08-15",
    location: "Delhi",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 30,
    name: "Navratri Dance Festival",
    date: "2024-09-29",
    location: "Ahmedabad",
    image: "https://via.placeholder.com/50",
  },
];

const handleEdit = (id) => {
  // Add logic to handle event edit
  console.log("Edit event:", id);
};

const handleDelete = (id) => {
  // Add logic to handle event delete
  console.log("Delete event:", id);
};

const ViewEvents = () => {
  return (
    <div className="view-events">
      <Helmet>
        <title>View Events | Admin</title>
      </Helmet>

      <div className="events-header">
        <h2>View Events</h2>
        <Link to="/admin/add-event">
          <button>Add Event</button>
        </Link>
      </div>
      {events.length === 0 ? (
        <p>No events available.</p>
      ) : (
        <table className="events-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Date</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>
                  <img src={event.image} alt={event.name} />
                </td>
                <td>{event.name}</td>
                <td>{event.date}</td>
                <td>{event.location}</td>
                <td>
                  <button onClick={() => handleEdit(event.id)}>Edit</button>
                  <button onClick={() => handleDelete(event.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewEvents;

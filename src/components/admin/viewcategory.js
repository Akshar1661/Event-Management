import React from "react";
import "./../../assets/css/viewcategory.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const categories = [
  { id: 1, name: "Wedding", image: "https://via.placeholder.com/50" },
  { id: 2, name: "Birthday Party", image: "https://via.placeholder.com/50" },
  { id: 3, name: "Sports Event", image: "https://via.placeholder.com/50" },
  { id: 4, name: "Music Concert", image: "https://via.placeholder.com/50" },
  { id: 5, name: "Art Exhibition", image: "https://via.placeholder.com/50" },
  { id: 6, name: "Corporate Seminar", image: "https://via.placeholder.com/50" },
  { id: 7, name: "Food Festival", image: "https://via.placeholder.com/50" },
  { id: 8, name: "Fashion Show", image: "https://via.placeholder.com/50" },
  { id: 9, name: "Marathon", image: "https://via.placeholder.com/50" },
  { id: 10, name: "Science Fair", image: "https://via.placeholder.com/50" },
  { id: 11, name: "Book Launch", image: "https://via.placeholder.com/50" },
  { id: 12, name: "Film Festival", image: "https://via.placeholder.com/50" },
  { id: 13, name: "Cultural Fest", image: "https://via.placeholder.com/50" },
  { id: 14, name: "Yoga Retreat", image: "https://via.placeholder.com/50" },
  { id: 15, name: "Tech Conference", image: "https://via.placeholder.com/50" },
];

const ViewCategory = () => {
  return (
    <div className="view-category">
      <Helmet>
        <title>View Category | Admin</title>
      </Helmet>

      <div className="events-header">
        <h2>View Categories</h2>
        <Link to="/admin/add-category">
          <button>Add Category</button>
        </Link>
      </div>
      <ul>
        {categories.length === 0 ? (
          <p>No categories available.</p>
        ) : (
          categories.map((category) => (
            <li key={category.id} className="category-item">
              <img src={category.image} alt={category.name} />
              <span>{category.name}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ViewCategory;

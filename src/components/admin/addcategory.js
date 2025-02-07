import React, { useState } from "react";
import "./../../assets/css/addcategory.css";
import { Helmet } from "react-helmet";

const AddCategory = () => {
  const [categoryImage, setCategoryImage] = useState(null);
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    console.log("Category added:", {
      categoryImage,
      categoryName,
    });
  };

  const handleImageChange = (e) => {
    setCategoryImage(e.target.files[0]);
  };

  return (
    <div className="add-category">
      <Helmet>
        <title>Add Category | Admin</title>
      </Helmet>

      <h2>Add New Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select an Image</label>
          <input type="file" onChange={handleImageChange} />
        </div>
        <div className="form-group">
          <label>Category Name</label>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
};

export default AddCategory;

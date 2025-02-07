import "./../../assets/css/changepersonaldetails.css";
import { Helmet } from "react-helmet";

// src/components/ChangeAdminCredentials.js

import React, { useState } from "react";

const ChangePersonalDetails = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle credentials change
    console.log("Credentials changed:", fullname, email);
  };

  return (
    <div className="change-personal-details">
      <Helmet>
        <title>Chanege Personal Details | Admin</title>
      </Helmet>

      <h2>Change Personal Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email Adress</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Change Personal Details</button>
      </form>
    </div>
  );
};

export default ChangePersonalDetails;

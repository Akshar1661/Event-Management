import "./../../assets/css/changecredentials.css";
import { Helmet } from "react-helmet";

// src/components/ChangeAdminCredentials.js

import React, { useState } from "react";

const ChangeAdminCredentials = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [oldpassword, setOldPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle credentials change
    console.log("Credentials changed:", username, password);
  };

  return (
    <div className="change-credentials">
      <Helmet>
        <title>Change Credentials | Admin</title>
      </Helmet>

      <h2>Change Admin Credentials</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>New Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Old Password</label>
          <input
            type="password"
            value={oldpassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Change Credentials</button>
      </form>
    </div>
  );
};

export default ChangeAdminCredentials;

// src/components/AdminAsideMenu.js

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./../../assets/css/adminasidemenu.css";
import { MenuContext } from "../admin/menucontext";

const AdminAsideMenu = () => {
  const { isMenuVisible } = useContext(MenuContext);
  return (
    <aside
      className={`admin-aside-menu ${
        isMenuVisible ? "admin-aside-menu-visible" : "admin-aside-menu-hidden"
      }`}
    >
      <nav>
        <ul>
          <li>
            <Link to="/admin/view-category">View Categories</Link>
          </li>
          <li>
            <Link to="/admin/add-category">Add Category</Link>
          </li>
          <li>
            <Link to="/admin/view-events">View Events</Link>
          </li>
          <li>
            <Link to="/admin/add-event">Add Event</Link>
          </li>
          <li>
            <Link to="/admin/view-users">View Users</Link>
          </li>
          <li>
            <Link to="/admin/change-credentials">Change Credentials</Link>
          </li>
          <li>
            <Link to="/admin/change-personal-details">
              Change Personal Details
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminAsideMenu;

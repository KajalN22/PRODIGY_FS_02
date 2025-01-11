import React from 'react';
import { Link } from 'react-router-dom';
import './AdminPage.css'; // You can create your custom CSS for better styling

const AdminPage = () => {
  return (
    <div className="admin-page-container">
      <h1>Welcome, Admin</h1>

      {/* Navbar links for different admin actions */}
      <div className="navbar">
        <Link to="/admin/employee-list">
          <button className="navbar-button">All Employee List</button>
        </Link>
        <Link to="/admin/employee">
          <button className="navbar-button">View Employee by ID</button>
        </Link>
       
        <Link to="/login">
          <button className="navbar-button">Logout</button>
        </Link>
      </div>

      <div className="admin-content">
        <h2>Manage Employees</h2>
        <p>Click on the above options to manage employees effectively.</p>
      </div>

      {/* Back to Homepage Button */}
      <div className="back-button-container">
        <Link to="/">
          <button className="navbar-button back-button">Back to Homepage</button>
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;

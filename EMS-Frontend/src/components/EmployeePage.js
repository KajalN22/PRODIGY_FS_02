import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EmployeePage.css'; // Import your custom CSS file

const EmployeePage = () => {
  const navigate = useNavigate();

  // Handle navigation to View Profile page
  const handleViewProfile = () => {
    navigate('/employees/view-profile'); // Redirect to the View Profile page
  };

  // Handle navigation to Update Profile page
  const handleUpdateProfile = () => {
    navigate('/employees/update-profile'); // Redirect to the Update Profile page
  };

  // Handle logout logic
  const handleLogout = () => {
    // Add logout functionality here (e.g., clear session, JWT tokens, etc.)
    navigate('/login'); // Redirect to the login page after logout
  };

  return (
    <div className="employee-page">
      <h1>Welcome to Employee Dashboard</h1>
      
      {/* Navigation Bar */}
      <nav className="employee-nav">
        <ul>
          <li>
            <button onClick={handleViewProfile}>View Profile</button>
          </li>
          <li>
            <button onClick={handleUpdateProfile}>Update Profile</button>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
      
      {/* Main Content */}
      <div className="employee-content">
        {/* You can add dynamic content here if needed */}
        <p>Select an option from the navbar to proceed.</p>
      </div>
    </div>
  );
};

export default EmployeePage;

import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleRedirectToLogin = () => {
    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="logout-page">
      <h2>You have been successfully logged out!</h2>
      <button onClick={handleRedirectToLogin} className="redirect-button">
        Go to Login Page
      </button>
    </div>
  );
};

export default Logout;

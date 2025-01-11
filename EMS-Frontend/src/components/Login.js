import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For handling navigation
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('employee'); // Default role set to "employee"
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Make a request to the backend to authenticate the user
    const response = await fetch(`http://localhost:8080/api/users/login?email=${email}&password=${password}`, {
      method: 'POST',
    });

    if (response.ok) {
      const user = await response.json();
      // Check the user's role and redirect accordingly
      if (user && user.role) {
        if (user.role === 'ADMIN') {
          navigate('/admin'); // Redirect to Admin page
        } else if (user.role === 'EMPLOYEE') {
          navigate('/employee'); // Redirect to Employee page
        }
      }
    } else {
      alert('Invalid login credentials');
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register'); // Redirect to the register employee page
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="employee">EMPLOYEE</option>
              <option value="admin">ADMIN</option>
            </select>
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <button 
          type="button" 
          className="register-btn" 
          onClick={handleRegisterRedirect}
        >
          New User? Register Here
        </button>
      </div>
    </div>
  );
};

export default Login;

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './UpdateEmployee.css';

const UpdateEmployee = () => {
  const { id } = useParams(); // Get employee ID from URL
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    myAddress: {
      street: '',
      city: '',
      state: '',
      zipCode: ''
    },
    role: 'EMPLOYEE',
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      const response = await fetch(`http://localhost:8080/api/users/${id}`);
      if (response.ok) {
        const data = await response.json();
        setEmployee(data);
      } else {
        alert('Failed to fetch employee details.');
      }
    };

    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in employee.myAddress) {
      setEmployee({
        ...employee,
        myAddress: {
          ...employee.myAddress,
          [name]: value,
        },
      });
    } else {
      setEmployee({ ...employee, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/users/${id}/update`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employee),
      });

      if (response.ok) {
        alert('Employee updated successfully');
        navigate('/employee-list');
      } else {
        alert('Failed to update employee');
      }
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleBackToEmployeeList = () => {
    navigate('/employee-list'); // Navigate to the employee list page
  };

  return (
    <div className="update-employee-wrapper">
      <div className="update-employee-container">
        <h2>Update Employee</h2>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={employee.firstName}
              onChange={handleChange}
              placeholder={employee.firstName || 'First Name'}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={employee.lastName}
              onChange={handleChange}
              placeholder={employee.lastName || 'Last Name'}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={employee.email}
              onChange={handleChange}
              placeholder={employee.email || 'Email'}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNo"
              value={employee.phoneNo}
              onChange={handleChange}
              placeholder={employee.phoneNo || 'Phone Number'}
            />
          </label>

          {/* Address Section */}
          <fieldset>
            <legend>Address:</legend>
            <label>
              Street:
              <input
                type="text"
                name="street"
                value={employee.myAddress.street}
                onChange={handleChange}
                placeholder={employee.myAddress.street || 'Street'}
                required
              />
            </label>
            <label>
              City:
              <input
                type="text"
                name="city"
                value={employee.myAddress.city}
                onChange={handleChange}
                placeholder={employee.myAddress.city || 'City'}
                required
              />
            </label>
            <label>
              State:
              <input
                type="text"
                name="state"
                value={employee.myAddress.state}
                onChange={handleChange}
                placeholder={employee.myAddress.state || 'State'}
                required
              />
            </label>
            <label>
              Zip Code:
              <input
                type="text"
                name="zipCode"
                value={employee.myAddress.zipCode}
                onChange={handleChange}
                placeholder={employee.myAddress.zipCode || 'Zip Code'}
                required
              />
            </label>
          </fieldset>

          <label>
            Role:
            <input
              type="text"
              name="role"
              value={employee.role}
              onChange={handleChange}
              placeholder={employee.role || 'Role'}
              required
            />
          </label>
          <button type="submit">Update</button>
          <button type="button" onClick={() => navigate('/employee-list')}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateEmployee;

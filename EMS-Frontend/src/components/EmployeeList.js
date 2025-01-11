import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EmployeeList.css'; // Import the CSS file for styling

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch('http://localhost:8080/api/users/');
      const data = await response.json();
      setEmployees(data);
    };

    fetchEmployees();
  }, []);

  const handleBack = () => {
    navigate('/admin'); // Navigates back to the admin page
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/users/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setEmployees(employees.filter((employee) => employee.userId !== id));
        alert('Employee deleted successfully');
      } else {
        alert('Failed to delete employee');
      }
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <div className="employee-list-container">
      <h2>Employee List</h2>

      {/* Table to display the employee list */}
      <table className="employee-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone No</th> {/* Added column for phone number */}
            <th>Address</th> {/* Added column for address */}
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee) => (
              <tr key={employee.userId}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.phoneNo}</td> {/* Added phone number */}
                <td>
                  {employee.myAddress
                    ? `${employee.myAddress.street}, ${employee.myAddress.city}, ${employee.myAddress.state}, ${employee.myAddress.country}, ${employee.myAddress.pincode}`
                    : 'N/A'}
                </td> {/* Added formatted address */}
                <td>{employee.role}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => handleUpdate(employee.userId)}
                  >
                    Update Details
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(employee.userId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (  
            <tr>
              <td colSpan="7">No employees found</td> {/* Adjusted colspan to 7 */}
            </tr>
          )}
        </tbody>
      </table>

      {/* Back button */}
      <button className="back-btn" onClick={handleBack}>
        Back to Admin Page
      </button>
    </div>
  );
};

export default EmployeeList;

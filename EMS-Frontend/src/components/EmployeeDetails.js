import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      const response = await fetch(`http://localhost:8080/api/users/employee/${id}`);
      const data = await response.json();
      setEmployee(data);
    };

    fetchEmployee();
  }, [id]);

  return (
    <div>
      {employee ? (
        <div>
          <h2>Employee Details</h2>
          <p><strong>Name:</strong> {employee.firstName} {employee.lastName}</p>
          <p><strong>Email:</strong> {employee.email}</p>
          <p><strong>Role:</strong> {employee.role}</p>
          {/* Add more employee details here */}
        </div>
      ) : (
        <p>Loading employee details...</p>
      )}
    </div>
  );
};

export default EmployeeDetails;

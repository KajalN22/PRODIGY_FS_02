import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/HomePage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/Contactus'; 
import Login from './components/Login';
import AdminPage from './components/AdminPage';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';
import UpdateEmployee from './components/UpdateEmployee';
import RegisterEmployee from './components/RegisterEmployee';
import EmployeePage from './components/EmployeePage';
import Logout from './components/Logout';



import './App.css';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterEmployee />} />
        <Route path="/logout" element={<Logout />} />


        
        
        {/* Route for Admin page */}
        <Route path="/admin" element={<AdminPage />} />
        
        {/* Routes for employee management */}
        <Route path="/admin/employee-list" element={<EmployeeList />} />
        <Route path="/update/:id" element={<UpdateEmployee />} />

        <Route path="/admin/employee" element={<EmployeeDetails />} />
        {/* Route for login (logout redirection) */}
        <Route path="/login" element={<Login />} />
      
        <Route path="/employee" element={<EmployeePage />} />

        

      </Routes>

      

    </Router>
  );
};

export default App;

// DoctorDashboard.js
import React from 'react';
import './DoctorDashboard.css';

function DoctorDashboard() {
  return (
    <div className="dashboard">
      <h1>Doctor Dashboard</h1>
      <p>Welcome, Doctor! Here you can manage appointments, view patient records, and more.</p>
      <div className="dashboard-buttons">
        <button className="dashboard-button">View Appointments</button>
        <button className="dashboard-button">Patient Records</button>
        {/* <button className="dashboard-button">Settings</button> */}
      </div>
    </div>
  );
}

export default DoctorDashboard;
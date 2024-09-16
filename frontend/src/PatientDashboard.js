// PatientDashboard.js
import React from 'react';
import './PatientDashboard.css';
import {Link} from 'react-router-dom'

function PatientDashboard() {
  return (
    <div className="dashboard">
      <h1>Patient Dashboard</h1>
      <p>Welcome, Patient! Here you can view your health records, manage appointments, and more.</p>
      <div className="dashboard-buttons">
        <button className="dashboard-button">View Health Records</button>
        <button className="dashboard-button">Manage Appointments</button>
        <Link to="/Chatbot" className="dashboard-button">
          <button className="dashboard-button">Open Chatbot</button>
        </Link> {/* Link to PatientDashboard */}
      </div>
    </div>
  );
}

export default PatientDashboard;
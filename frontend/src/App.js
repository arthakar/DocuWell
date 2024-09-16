import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import Profile from './Profile';
import ContactUs from './ContactUs';

import Chatbot from './Chatbot'

import DoctorDashboard from './DoctorDashboard';  // Import DoctorDashboard
import PatientDashboard from './PatientDashboard';  // Import PatientDashboard

import './App.css';
import './Gallery.css';
import Navbar from './Navbar'
import Gallery from './Gallery'; // Import the Gallery component

function Home() {
   return (
      <div>
         <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet"></link>
         <div className="mission">
            <h1 className="mission"> Why choose DocuWell? </h1>
         </div>
         <Gallery /> {/* Add the Gallery component here */}
      </div>
   );
}

function App() {
   return (
     <Router>
       <Navbar/>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/logout" element={<Logout />} />
         <Route path="/contact" element={<ContactUs />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/patient-dashboard" element={<PatientDashboard />} />  {/* Route for PatientDashboard */}
         <Route path="/doctor-dashboard" element={<DoctorDashboard />} />  {/* Route for DoctorDashboard */}
         <Route path="/Chatbot" element={<Chatbot />} />
       </Routes>
     </Router>
   );
 }

export default App;


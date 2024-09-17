import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './PatientDashboard.css';

function PatientDashboard() {
  const [medicines, setMedicines] = useState([]);
  const [newMedicine, setNewMedicine] = useState({ name: '', medicineTaken: false });
  const [error, setError] = useState(null);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    fetchMedicines();
  }, []);

  const fetchMedicines = async () => {
    try {
      const token = await getAccessTokenSilently();
      const res = await axios.get('http://localhost:5001/api/tasks', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMedicines(res.data);
    } catch (err) {
      console.error('Error fetching medicines:', err);
      setError('Failed to fetch medicines. Please try again.');
    }
  };

  const addMedicine = async () => {
    try {
      const token = await getAccessTokenSilently();
      const res = await axios.post('http://localhost:5001/api/tasks', newMedicine, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMedicines([...medicines, res.data]);
      setNewMedicine({ name: '', medicineTaken: false });
    } catch (err) {
      console.error('Error adding medicine:', err);
      setError('Failed to add medicine. Please try again.');
    }
  };

  const deleteMedicine = async (id) => {
    try {
      const token = await getAccessTokenSilently();
      await axios.delete(`http://localhost:5001/api/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMedicines(medicines.filter(medicine => medicine._id !== id));
    } catch (err) {
      console.error('Error deleting medicine:', err);
      setError('Failed to delete medicine. Please try again.');
    }
  };

  const toggleMedicineTaken = async (id, currentStatus) => {
    try {
      const token = await getAccessTokenSilently();
      const res = await axios.patch(`http://localhost:5001/api/tasks/${id}`, 
        { medicineTaken: !currentStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setMedicines(medicines.map(medicine => medicine._id === id ? res.data : medicine));
    } catch (err) {
      console.error('Error updating medicine status:', err);
      setError('Failed to update medicine status. Please try again.');
    }
  };

  return (
    <div className="dashboard">
      <h1>Medicine Tracker</h1>
      {error && <div className="error">{error}</div>}
      <div>
        <input
          type="text"
          placeholder="Medicine Name"
          value={newMedicine.name}
          onChange={(e) => setNewMedicine({ ...newMedicine, name: e.target.value })}
        />
        <button onClick={addMedicine}>Add Medicine</button>
      </div>

      <ul>
        {medicines.map(medicine => (
          <li key={medicine._id}>
            {medicine.name} - {medicine.medicineTaken ? 'Taken' : 'Not Taken'}
            <button onClick={() => toggleMedicineTaken(medicine._id, medicine.medicineTaken)}>
              {medicine.medicineTaken ? 'Mark as Not Taken' : 'Mark as Taken'}
            </button>
            <button onClick={() => deleteMedicine(medicine._id)}>Delete</button>
          </li>
        ))}
      </ul>

      <Link to="/Chatbot">
        <button>Open Chatbot</button>
      </Link>
    </div>
  );
}

export default PatientDashboard;
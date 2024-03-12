// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [surroundingStores, setSurroundingStores] = useState([]);
  const user = JSON.parse(localStorage.getItem('user')) || {};

  useEffect(() => {
    const fetchSurroundingStores = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/stores/surrounding');
        setSurroundingStores(response.data);
      } catch (error) {
        console.error('Error fetching surrounding stores:', error);
      }
    };

    fetchSurroundingStores();
  }, []);

  return (
    <div>
      <h1>Welcome, {user.name || 'Guest'}!</h1>
      <h2>Dashboard</h2>
      <ul>
        {surroundingStores.map((store) => (
          <li key={store.id}>{store.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;

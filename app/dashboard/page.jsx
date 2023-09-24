'use client'
import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

 
  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <div>
      {userData ? (
        <>
          <h1>Welcome to the Dashboard, {userData.lastName}!</h1>
          <p>User Details:</p>
          <ul>
           
            {Object.entries(userData).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h1>Loading...</h1> 
      )}
    </div>
  );
}

export default Dashboard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';


const NotificationList = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    console.log('Fetching notifications...');
    axios.get('http://localhost:8080/api/v1/admin/notifications')
     .then(response => {
        console.log('Response:', response.data);
        setNotifications(response.data);
      })
     .catch(error => {
        console.error('Error:', error);
      });
  }, []);



  return (
    <div>
          <h2>Notifications</h2>
          <ul>
            {notifications.map((notification, index) => (
              <li key={index}>{notification}</li>
            ))}
          </ul>
        </div>
  );
};

export default NotificationList;
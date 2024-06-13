import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Footer from './Footer';


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
  <div className="bg-white min-h-screen">
<Sidebar />
              <div className="mb-16">
              </div>
              <div className="container mx-auto">
                  <div className="bg-white shadow-md rounded-md p-8 mb-8">
                      <h2 className="text-2xl font-bold text-center text-black-500 mb-4">Notifications</h2>
                        <h2></h2>
                          <ul>
                            {notifications.map((notification, index) => (
                              <li key={index}>
                                  <div className="container mx-auto">
                                  <div className="bg-white shadow-md rounded-md p-8 mb-8">
                              {notification}</div></div></li>
                              ))}
                          </ul>
                   </div>

              </div>
      <Footer />
   </div>
  );
};

export default NotificationList;
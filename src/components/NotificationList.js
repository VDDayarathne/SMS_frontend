import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Footer from './Footer';
import UserService from "./service/UserService";

function NotificationList() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchNotifications();
  }, [token]);

  const fetchNotifications = async () => {
    setLoading(true);
    try {
      const response = await UserService.getNotifications(token);
      setNotifications(response);
    } catch (error) {
      console.error(error);
      setNotifications([]);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="bg-white min-h-screen">
      <Sidebar />
      <div className="mb-16">
      </div>
      <div className="container mx-auto">
        <div className="bg-white shadow-md rounded-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-center text-black-500 mb-4">Notifications</h2>
          <ul>
            {notifications?.map((notification, index) => (
              <li key={index}>
                <div className="container mx-auto">
                  <div className="bg-white shadow-md rounded-md p-8 mb-8">
                    <h2>{notification.title}</h2>
                    <p>{notification.message}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotificationList;
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

    <div className="bg-[url('https://wallpaperaccess.com/full/1767847.jpg')] bg-cover bg-center">
      <Sidebar /><br/><br/>
      <div className="dark:bg-white/25 space-y-2">
      </div>
      <div className="rounded-3xl  space-y-2 container mx-auto ">
      <div className="rounded-3xl dark:bg-white/25 space-y-2 shadow-md rounded-3xl p-2 mb-8">
      <h1 className="text-2xl font-bold text-center text-[#23262B] mb-4">Notifications</h1></div>
        <div className="rounded-3xl dark:bg-white/25 space-y-2 shadow-md rounded-3xl p-8 mb-8">

          <ul>
            {notifications?.map((notification, index) => (
              <li key={index}>
                <div className="container mx-auto">
                  <div className="bg-white shadow-md rounded-3xl p-8 mb-8">
                    <h2>{notification.title}</h2>
                    <p>{notification.message}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div><br/><br/>
      <Footer />
    </div>
  );
};

export default NotificationList;
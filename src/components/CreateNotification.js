import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserService from "./service/UserService";
import Footer from './Footer';

function CreateNotification(){
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newNotification = { title, message };
    try {
      const response = await UserService.createNotification(newNotification, token);
      console.log(response.data);
      setTitle('');
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(false);

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

    const handleDeleteNotification = async (notificationId) => {
      try {
        const token = localStorage.getItem('token');
        await UserService.deleteNotification(notificationId, token);
        setNotifications(notifications.filter((notification) => notification.id !== notificationId));
      } catch (error) {
        console.error(error);
      }
    };







  return (
  <>
    <div className="bg-white px-6 py-12 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Add Notifications</h1>
        <p className="mt-3 text-lg text-gray-600">Add Notification</p>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="sm:col-span-2">
          <label htmlFor="title" className="block text-sm font-semibold leading-6 text-gray-900">Title</label>
          <div className="mt-2.5">
            <input
              type="text"
              id="title"
              name="title"
              value={title} onChange={(e) => setTitle(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="description" className="block text-sm font-semibold leading-6 text-gray-900">Description</label>
          <div className="mt-2.5">
            <textarea
              id="description"
              name="description"
              rows="4"
              value={message} onChange={(e) => setMessage(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="mt-10">
          <button
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-indigo-500 dark:bg-gray-700 dark:text-white dark:hover:bg-violate-900 focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleSubmit}
          >
            Create Notification
          </button>
        </div>
      </form>
    </div>


    <div style={{ backgroundColor: '#f4f4f0' }} className="sm:mx-32 lg:mx-32 xl:mx-72">
    <table class="min-w-full divide-y divide-gray-200 overflow-x-auto">
        <thead class="bg-gray-50">
            <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Id
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                </th>
            </tr>
        </thead>

        <tbody class="bg-white divide-y divide-gray-200">
                {notifications?.map((notification, index) => (
                    <tr key={index}>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">{notification.id}</div>
                        </td>
                        <td class="px-6py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">{notification.title}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">{notification.message}</div>
                        </td>

                        <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                            <a href="#" class="ml-2 text-red-600 hover:text-red-900"
                            onClick={() => handleDeleteNotification(notification.id)}>
                            Delete</a>
                        </td>
                    </tr>
                    ))}
                  </tbody>
    </table>
    </div>





        <br/><br/><br/>
        <Footer />
    </>
  );
};

export default CreateNotification;
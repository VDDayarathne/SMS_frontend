import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserService from "./service/UserService";
import Footer from './Footer';
import Sidebar from './Sidebar';

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
      fetchNotifications();
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




    const [confirmDelete, setConfirmDelete] = useState(false);
    const [notificationIdToDelete, setNotificationIdToDelete] = useState(null);
    const handleDeleteNotification = async (notificationId) => {
        setConfirmDelete(true);
        setNotificationIdToDelete(notificationId);
      };

      const handleConfirmDelete = async () => {
        try {
          const token = localStorage.getItem('token');
          await UserService.deleteNotification(notificationIdToDelete, token);
          setNotifications(notifications.filter((notification) => notification.id !== notificationIdToDelete));
        } catch (error) {
          console.error(error);
        } finally {
          setConfirmDelete(false);
        }
      };









  return (
  <div className="bg-[#787578]">
    <div className="px-6 py-12 sm:py-24 lg:px-8">
       <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center rounded-3xl dark:bg-white/50 space-y-2 shadow-md rounded-3xl p-0 mb-8"><br/>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Add Notifications</h1>
        <p className="mt-3 text-lg text-gray-600">Add Notification</p><br/>
      </div>
      <div className="bg-white/50 max-w-2xl rounded-3xl mx-auto"><br/>
      <form className="mx-auto mt-16 max-w-xl sm:mt-5">
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
            className="w-full px-4 py-2 font-bold text-white rounded-full dark:bg-[#787578] dark:text-white dark:hover:text-[#F6AC01] focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleSubmit}
          >
            Create Notification
          </button>
        </div>
      </form><br/>
    </div></div>


    <div className="bg-white rounded-3xl sm:mx-32 lg:mx-32 xl:mx-72 w-250">
    <table class="min-w-full divide-y divide-[#787578] overflow-x-auto mx-auto">
        <thead class="rounded-3xl">
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
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                </th>
            </tr>
        </thead>

        <tbody class="divide-y divide-[#787578]">
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
                            <a href="javascript:void(0)" class="ml-2 text-red-600 hover:text-red-900"
                            onClick={() => handleDeleteNotification(notification.id)}>
                            Delete</a>
                            {confirmDelete && notificationIdToDelete === notification.id && (
                        <div className="fixed z-50 inset-0 overflow-y-auto">
                         <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                           <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                             <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                           </div>

                           <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>


                           <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
                             role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                             <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">

                             </div>
                             <div className="sm:flex sm:items-start">
                               <div
                                 className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                                 <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                               </svg>
                             </div>
                             <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">

                                    <h3 className="text-lg font-medium text-gray-900">Confirm Delete</h3>
                                    <div className="mt-2"></div></div></div>
                                    <p className="text-sm text-gray-500">Are you sure you want to delete this notification?</p>
                                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                      <button className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                                       onClick={handleConfirmDelete}>
                                        Yes, Delete
                                      </button>
                                      <button className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm"
                                      onClick={() => setConfirmDelete(false)}>
                                        No, Cancel
                                      </button>
                                    </div></div></div></div> )}
                        </td>
                    </tr>
                    ))}
                  </tbody>
    </table>
    </div>



        <br/><br/><br/>
        <Sidebar />
        <Footer />

    </div>
  );
};

export default CreateNotification;
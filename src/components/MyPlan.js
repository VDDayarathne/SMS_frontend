import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import axios from 'axios';
import UserService from "./service/UserService";

function MyPlan() {
  const [events, setEvents] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [email, setEmail] = useState(localStorage.getItem('email'));
    const token = localStorage.getItem('token');

    useEffect(() => {
      fetchEvents();
    }, [token, email]);


    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await UserService.getEvents(token);
        setEvents(response.events);

      } catch (error) {
        console.error('Error fetching events:', error);
        setEvents([]);
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const newEvent = { title, description, date, email };
      if (token) {
        UserService.createEvent(newEvent, token)
         .then(response => {
            if (response.data && Array.isArray(response.data)) {
              setEvents([...events,...response.data]);
            } else {
              setEvents([...events, newEvent]);
            }
            setTitle('');
            setDescription('');
            setDate('');
          })
         .catch(error => {
            console.error(error);
          });
      } else {
        console.log('Authentication token is not set');
      }
    };

  return (

    <div className="bg-[#787578] bg-[url('https://papers.co/desktop/wp-content/uploads/papers.co-hi04-lebron-james-nba-basketball-sports-dark-art-bw-29-wallpaper.jpg')] bg-cover bg-center "><br/><br/><br/>
    <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center rounded-3xl dark:bg-white/75 space-y-2 shadow-md rounded-3xl p-0 mb-8"><br/>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Create Your Own Plan</h1>
                <br/><br/>
              </div>
        <div className="bg-white/25 max-w-5xl rounded-3xl mx-auto p-2 mb-8">

            <div className="rounded-3xl dark:bg-white/75 space-y-2 shadow-md p-2 mb-8">
              <div className="border-l-2 border-gray-500 pl-8">
                {events && events.length > 0 && events.map((event, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-600 text-sm">{event.date}</p>
                    </div>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                ))}
              </div></div>

        <div className="rounded-3xl px-6 py-12 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Add A New Event</h1>
            <p className="mt-3 text-lg text-gray-600">Create your own</p>
          </div>
          <form className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="sm:col-span-2">
              <label htmlFor="title" className="block text-sm font-semibold leading-6 text-gray-900">Title</label>
              <div className="mt-2.5">
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="block w-full rounded-3xl border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="date" className="block text-sm font-semibold leading-6 text-gray-900">Date</label>
              <div className="mt-2.5">
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="mt-10">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-[#23262B]/75 rounded-full hover:text-[#F6AC01] dark:bg-[#23262B]/75 dark:text-white focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSubmit}
              >
                Add
              </button>
            </div>
          </form>
        </div>

      </div>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default MyPlan;
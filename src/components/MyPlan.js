import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';
import axios from 'axios';

export default () => {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/events')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { title, description, date };
    axios.post('http://localhost:8080/api/v1/events/addEvent', newEvent)
      .then(response => {
        setEvents([...events, response.data]);
        setTitle('');
        setDescription('');
        setDate('');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
      <Sidebar />

      <div className="max-w-5xl mx-auto mt-8">
        <div className="border-l-2 border-gray-500 pl-8">
          {events.map((event, index) => (
            <div key={index} className="flex flex-col md:flex-row md:justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm">{event.date}</p>
              </div>
              <p className="text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white px-6 py-12 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Add A New Event</h1>
            <p className="mt-3 text-lg text-gray-600">create your own</p>
          </div>
          <form className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Title</label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Share your thoughts..."
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Description</label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Share your thoughts..."
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" />
            <div className="sm:col-span-2">
              <label className="text-lg font-semibold">Date</label> <br />
              <input
                id="datepicker"
                className="border-2 border-gray-300 rounded px-3 py-2 w-56"
                type="text"
                placeholder="Select a date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
            <script>
              flatpickr("#datepicker", {
                // Configuration options for Flatpickr
                // You can customize the appearance and behavior here
              });
            </script>
            <div className="mt-10">
              <button type="submit" className="bg-blue-600 text-white rounded-sm py-2 w-full block" onClick={handleSubmit}>Add</button>
            </div>
          </form>
        </div>

      </div>

      <Footer />

    </>
  );
};
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserService from "./service/UserService";
import Footer from './Footer';
import Sidebar from './Sidebar';

function CreateShedules() {
  const [time, setTime] = useState('');
  const [sport, setSport] = useState('');
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSchedule = { time,date, sport, venue, description };
    try {
      const response = await UserService.createSchedule(newSchedule, token);
      console.log(response.data);
      setTime('');
      setDate('');
      setSport('');
      setVenue('');
      setDescription('');
      setSchedules([...schedules, newSchedule]);

    } catch (error) {
      console.error(error);
    }
  };

  const [schedules, setSchedules] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const fetchSchedules = async () => {
        setLoading(true);
        try {
          const response = await axios.get('http://localhost:8080/api/sport-schedules', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setSchedules(response.data);
        } catch (error) {
          console.error('Error fetching schedules:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchSchedules();
    }, [token]);

    const getSchedulesByDay = (day) => {
      return schedules.filter((schedule) => schedule.date === day);
    };

    const handleDeleteSchedule = async (id) => {

      try {
        const response = await UserService.deleteSchedule(id, token);
        if (response.data) {
          setSchedules(schedules.filter((schedule) => schedule.id!== id));
        }
      } catch (error) {
        console.error(error);
      } finally {
        setSchedules(schedules.filter((schedule) => schedule.id!== id));
      }
    };




  return (
    <>
      <div className="bg-white px-6 py-12 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Create Shedules</h1>
          <p className="mt-3 text-lg text-gray-600">Create Shedules</p>
        </div>
        <form className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="sm:col-span-2">
            <label htmlFor="time" className="block text-sm font-semibold leading-6 text-gray-900">Time Range</label>
            <div className="mt-2.5">
              <input
                type="text"
                id="time"
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

        <div className="sm:col-span-2">
          <label htmlFor="description" className="block text-sm font-semibold leading-6 text-gray-900">Date (Monday/Tuesday/Wednesday/Thursday/Friday) </label>
          <div className="mt-2.5">
            <textarea
              id="date"
              name="date"
              rows="4"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600sm:text-sm sm:leading-6"
            />
          </div>
        </div>


          <div className="sm:col-span-2">
            <label htmlFor="sport" className="block text-sm font-semibold leading-6 text-gray-900">Sport</label>
            <div className="mt-2.5">
              <textarea
                id="sport"
                name="sport"
                rows="4"
                value={sport}
                onChange={(e) => setSport(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="venue" className="block text-sm font-semibold leading-6 text-gray-900">Venue</label>
            <div className="mt-2.5">
              <textarea
                id="venue"
                name="venue"
                rows="4"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="mt-10">
            <button
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-indigo-500 dark:bg-gray-700 dark:text-white dark:hover:bg-violate-900 focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleSubmit}
            >
              Create Schedule
            </button>
          </div>
        </form>
      </div>

      <div style={{ backgroundColor: '#f4f4f0' }} className="sm:mx-32 lg:mx-32 xl:mx-72">
              <table class="min-w-full divide-y divide-gray-200 overflow-x-auto">
                  <thead class="bg-gray-50">
                      <tr>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Date
                          </th>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Time
                          </th>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Sport
                          </th>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Venue
                          </th>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Actions
                          </th>
                      </tr>
                  </thead>

                  <tbody class="bg-white divide-y divide-gray-200">
                  {schedules.map((schedulesItem) => (
                        <tr key={schedulesItem.index}>
                              <td class="px-6 py-4 whitespace-nowrap">
                                  <div class="text-sm text-gray-900">{schedulesItem.date}</div>
                              </td>
                              <td class="px-6py-4 whitespace-nowrap">
                                  <div class="text-sm text-gray-900">{schedulesItem.time}</div>
                              </td>
                              <td class="px-6py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{schedulesItem.sport}</div>
                            </td>
                            <td class="px-6py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{schedulesItem.venue}</div>
                            </td>
                             <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                                  <a href="javascript:void(0)" class="ml-2 text-red-600 hover:text-red-900"
                                  onClick={() => handleDeleteSchedule(schedulesItem.id)}>
                                  Delete</a>
                              </td>
                          </tr>
                          ))}
                        </tbody>
              </table>
              </div>

        <Sidebar />
      <Footer />
    </>
  );
}

export default CreateShedules;
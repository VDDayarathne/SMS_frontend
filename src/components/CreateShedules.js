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
  const [deleteId, setDeleteId] = useState(null);

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
      fetchSchedules();


    } catch (error) {
      console.error(error);
    }
  };



  const [schedules, setSchedules] = useState([]);
      const [loading, setLoading] = useState(false);



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

        useEffect(() => {
          fetchSchedules();
        }, [token]);


      const getSchedulesByDay = (day) => {
        return schedules.filter((schedule) => schedule.date === day);
      };




  const handleDeleteSchedule = async (id) => {
          setDeleteId(id);
          fetchSchedules();
        };

        const handleConfirmDelete = async () => {
          try {

            const response = await UserService.deleteSchedule(deleteId, token);
            if (response.data) {
              setSchedules(schedules.filter((schedule) => schedule.id !== deleteId));
            }
          } catch (error) {
            console.error(error);
          } finally {
            setDeleteId(null);
            fetchSchedules();
          }
        };

        const handleCancelDelete = () => {
          setDeleteId(null);

        };










  return (
    <div className="bg-[#787578]"><br/>
      <div className="px-6 py-12 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center rounded-3xl dark:bg-white/50 space-y-2 shadow-md rounded-3xl p-0 mb-8"><br/>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Create Shedules</h1>
          <p className="mt-3 text-lg text-gray-600">Create Schedules</p><br/>
        </div>
        <div className="bg-white/50 max-w-2xl rounded-3xl mx-auto"><br/>
        <form className="mx-auto mt-16 max-w-xl sm:mt-5">
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
              className="w-full px-4 py-2 font-bold text-white rounded-full dark:bg-[#787578] dark:text-white dark:hover:text-[#F6AC01] focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleSubmit}
            >
              Create Schedule
            </button>
          </div>
        </form><br/>
      </div></div>

      <div className="bg-white rounded-3xl sm:mx-32 lg:mx-32 xl:mx-72 w-250">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead class="rounded-3xl">
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

                  <tbody class="divide-y divide-[#787578]">
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
              </div></div>

              {deleteId && (
                  <div className="fixed z-50 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                      <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                      </div>

                      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                      <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
                        role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                          <button type="button" data-behavior="cancel" className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <span className="sr-only">Close</span>

                          </button>
                        </div>
                        <div className="sm:flex sm:items-start">
                          <div
                            className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                            <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                              Confirmation
                            </h3>
                            <div className="mt-2">
                              <p className="text-sm text-gray-500">
                                Are you sure you want to delete this schedule?
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                          <button type="button" data-behavior="commit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-[#787578] hover:text-[#F6AC01] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={handleConfirmDelete}
                          >
                            Yes, Delete
                          </button>
                          <button type="button" data-behavior="cancel" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-[#F6AC01] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm"
                            onClick={handleCancelDelete}
                          >
                            No, Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}


        <Sidebar />
      <Footer />
    </div>
  );
}

export default CreateShedules;
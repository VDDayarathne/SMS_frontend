import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
// import axios from 'axios';
// import UserService from "./service/UserService";
// import Footer from './Footer';
// import Sidebar from './Sidebar';

// Mock UserService for demo
const UserService = {
  createSchedule: async (data, token) => ({ data: { ...data, id: Date.now() } }),
  deleteSchedule: async (id, token) => ({ data: true })
};

function CreateShedules() {
  const [time, setTime] = useState('');
  const [sport, setSport] = useState('');
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [deleteId, setDeleteId] = useState(null);
  const [schedules, setSchedules] = useState([
    { id: 1, time: '9:00 AM - 11:00 AM', date: 'Monday', sport: 'Basketball', venue: 'Main Court', description: 'Training session' },
    { id: 2, time: '2:00 PM - 4:00 PM', date: 'Wednesday', sport: 'Football', venue: 'Stadium A', description: 'Team practice' }
  ]);
  const [loading, setLoading] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const token = localStorage.getItem('token') || 'demo-token';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSchedule = { time, date, sport, venue, description };
    try {
      const response = await UserService.createSchedule(newSchedule, token);
      console.log(response.data);
      setTime('');
      setDate('');
      setSport('');
      setVenue('');
      setDescription('');
      setSchedules([...schedules, { ...newSchedule, id: Date.now() }]);
      setIsFormVisible(false);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSchedules = async () => {
    setLoading(true);
    try {
      // Mock API call
      setTimeout(() => setLoading(false), 500);
    } catch (error) {
      console.error('Error fetching schedules:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSchedules();
  }, [token]);

  const handleDeleteSchedule = async (id) => {
    setDeleteId(id);
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
    }
  };

  const handleCancelDelete = () => {
    setDeleteId(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-50 to-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6 transform hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
              Schedule Management
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Create and manage sports schedules with our professional scheduling system
            </p>
          </div>
        </div>
      </div>

      <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-8 bg-gradient-to-b from-white to-white rounded-full mr-4"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Issuing Register</h2>
                </div>
                <p className="text-lg text-white mb-6 leading-relaxed">
                  Comprehensive register for managing and tracking equipment distribution
                </p>
                <a href="/issueregister" className="group/btn inline-flex items-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-white to-white text-white font-semibold rounded-xl hover:from-white hover:to-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Manage Equipment
                  </button>
                  <svg className="ml-3 w-5 h-5 text-white transform group-hover/btn:translate-x-2 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Action Bar */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Sports Schedules</h2>
            <p className="text-gray-600 mt-1">Manage your training and event schedules</p>
          </div>
          <button
            onClick={() => setIsFormVisible(!isFormVisible)}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-800 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            {isFormVisible ? 'Hide Form' : 'Create Schedule'}
          </button>
        </div>

        {/* Create Form */}
        <div className={`transform transition-all duration-500 ease-in-out ${isFormVisible ? 'translate-y-0 opacity-100 max-h-screen' : '-translate-y-4 opacity-0 max-h-0 overflow-hidden'}`}>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-12 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Create New Schedule</h3>
                <p className="text-gray-600">Fill in the details to create a new sports schedule</p>
              </div>
            </div>

            <div onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Time Range */}
                <div className="group">
                  <label htmlFor="time" className="block text-sm font-semibold text-gray-900 mb-2">
                    Time Range
                  </label>
                  <input
                    type="text"
                    id="time"
                    name="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder="e.g., 9:00 AM - 11:00 AM"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 transition-all duration-300 group-hover:border-gray-300"
                  />
                </div>

                {/* Date */}
                <div className="group">
                  <label htmlFor="date" className="block text-sm font-semibold text-gray-900 mb-2">
                    Day of Week
                  </label>
                  <select
                    id="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 transition-all duration-300 group-hover:border-gray-300"
                  >
                    <option value="">Select a day</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Sport */}
                <div className="group">
                  <label htmlFor="sport" className="block text-sm font-semibold text-gray-900 mb-2">
                    Sport
                  </label>
                  <input
                    type="text"
                    id="sport"
                    name="sport"
                    value={sport}
                    onChange={(e) => setSport(e.target.value)}
                    placeholder="e.g., Basketball, Football, Tennis"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 transition-all duration-300 group-hover:border-gray-300"
                  />
                </div>

                {/* Venue */}
                <div className="group">
                  <label htmlFor="venue" className="block text-sm font-semibold text-gray-900 mb-2">
                    Venue
                  </label>
                  <input
                    type="text"
                    id="venue"
                    name="venue"
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                    placeholder="e.g., Main Court, Stadium A"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 transition-all duration-300 group-hover:border-gray-300"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="group">
                <label htmlFor="description" className="block text-sm font-semibold text-gray-900 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Add any additional details about the schedule"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 transition-all duration-300 group-hover:border-gray-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:from-emerald-700 hover:to-emerald-800 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Create Schedule
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Schedules Table */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="px-8 py-6 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Current Schedules</h3>
                <p className="text-gray-600 text-sm">View and manage existing schedules</p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Day</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Sport</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Venue</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {schedules.map((schedulesItem, index) => (
                  <tr key={schedulesItem.id} className="hover:bg-blue-50 transition-colors duration-200 group">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></div>
                        <span className="text-sm font-medium text-gray-900">{schedulesItem.date}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-700">{schedulesItem.time}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                        {schedulesItem.sport}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-700">{schedulesItem.venue}</span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDeleteSchedule(schedulesItem.id)}
                        className="inline-flex items-center px-3 py-1 text-xs font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 hover:text-red-700 transition-all duration-200 hover:scale-105"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {schedules.length === 0 && (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-500 text-lg">No schedules created yet</p>
              <p className="text-gray-400 text-sm mt-1">Click "Create Schedule" to get started</p>
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity backdrop-blur-sm" onClick={handleCancelDelete}></div>
            
            <div className="inline-block align-bottom bg-white rounded-2xl px-6 pt-6 pb-6 text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full animate-in zoom-in duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                  <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Delete Schedule
                  </h3>
                  <p className="text-sm text-gray-600">
                    Are you sure you want to delete this schedule? This action cannot be undone.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex space-x-3 justify-end">
                <button
                  type="button"
                  onClick={handleCancelDelete}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleConfirmDelete}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                >
                  Delete Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />

    </div>
  );
}

export default CreateShedules;
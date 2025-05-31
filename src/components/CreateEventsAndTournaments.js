import React, { useState, useEffect } from 'react';
import UserService from "./service/UserService";
import Footer from './Footer';
import Sidebar from './Sidebar';


function CreateEventsAndTournaments() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [deleteId, setDeleteId] = useState(null);
  const token = localStorage.getItem('token');

  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTournaments();
  }, []);

    useEffect(() => {
      fetchTournaments();
    }, [token]);

    const fetchTournaments = async () => {
    setLoading(true);
      try {
        const response = await UserService.getTournaments(token);
        setTournaments(response);
      } catch (error) {
        console.error(error);
        setTournaments([]);
      }finally {
        setLoading(false);
      }
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTournament = { title, description, image };
    try {
      const response = await UserService.createTournament(newTournament, token);
      console.log(response.data);
      setTitle('');
      setDescription('');
      setImage('');
      fetchTournaments();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTournament = async (tournamentId) => {
    setDeleteId(tournamentId);
  };

  const handleConfirmDelete = async () => {
        try {
          const token = localStorage.getItem('token');
          await UserService.deleteTournament(deleteId, token);
          setTournaments(tournaments.filter((tournament) => tournament.id !== deleteId));
          setDeleteId(null);
        } catch (error) {
          console.error(error);
        }
      };

  const handleCancelDelete = () => {
    setDeleteId(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Gradient */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="transform transition-all duration-700 hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-white rounded-full shadow-xl">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                Events & Tournaments
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Create and manage professional sporting events with our comprehensive tournament management system
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">

          {/* Create Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
                <h2 className="text-2xl font-bold text-white">Create New Event</h2>
                <p className="text-blue-100 mt-1">Add a new tournament or event</p>
              </div>

              <form className="p-8 space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="title" className="block text-sm font-semibold text-gray-900">
                    Event Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 
                             focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300
                             hover:border-gray-300 hover:shadow-sm"
                    placeholder="Enter event title..."
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="block text-sm font-semibold text-gray-900">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 
                             focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300
                             hover:border-gray-300 hover:shadow-sm resize-none"
                    placeholder="Describe the event details..."
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="image" className="block text-sm font-semibold text-gray-900">
                    Image URL
                  </label>
                  <textarea
                    id="image"
                    name="image"
                    rows="3"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 
                             focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300
                             hover:border-gray-300 hover:shadow-sm resize-none"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-6 
                           rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 
                           hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-200
                           group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Create Event
                    <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </form>
            </div>
          </div>

          {/* Events List Section */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 py-6">
                <h2 className="text-2xl font-bold text-white">Existing Events</h2>
                <p className="text-emerald-100 mt-1">Manage your tournaments and events</p>
              </div>

              {loading ? (
                <div className="flex items-center justify-center py-16">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
              ) : tournaments.length === 0 ? (
                <div className="text-center py-16 px-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gray-100 rounded-full">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Events Yet</h3>
                  <p className="text-gray-600">Create your first tournament to get started!</p>
                </div>
              ) : (
                <div className="overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            ID
                          </th>
                          <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Event Title
                          </th>
                          <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {tournaments.map((tournament) => (
                          <tr key={tournament.id} className="hover:bg-blue-50 transition-colors duration-200 group">
                            <td className="px-8 py-6 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mr-3">
                                  <span className="text-sm font-bold text-blue-700">#{tournament.id}</span>
                                </div>
                              </div>
                            </td>
                            <td className="px-8 py-6 whitespace-nowrap">
                              <div className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
                                {tournament.title}
                              </div>
                            </td>
                            <td className="px-8 py-6 whitespace-nowrap">
                              <button
                                onClick={() => handleDeleteTournament(tournament.id)}
                                className="inline-flex items-center px-4 py-2 bg-red-50 text-red-700 font-medium rounded-lg
                                         hover:bg-red-100 hover:text-red-800 transition-all duration-200 transform hover:scale-105
                                         focus:outline-none focus:ring-2 focus:ring-red-200"
                              >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity backdrop-blur-sm"
              onClick={handleCancelDelete}></div>
            <div className="inline-block align-bottom bg-white rounded-2xl px-6 pt-5 pb-4 text-left overflow-hidden 
                          shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-8
                          animate-pulse"
              style={{ animation: 'modalSlideIn 0.3s ease-out' }}>
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full 
                              bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-xl leading-6 font-bold text-gray-900 mb-2">
                    Delete Tournament
                  </h3>
                  <p className="text-gray-600">
                    Are you sure you want to delete this tournament? This action cannot be undone.
                  </p>
                </div>
              </div>

              <div className="mt-8 sm:flex sm:flex-row-reverse gap-3">
                <button
                  type="button"
                  onClick={handleConfirmDelete}
                  className="w-full inline-flex justify-center rounded-xl border border-transparent shadow-sm px-6 py-3 
                           bg-red-600 text-base font-medium text-white hover:bg-red-700 transform transition-all duration-200
                           hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 
                           sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Yes, Delete
                </button>
                <button
                  type="button"
                  onClick={handleCancelDelete}
                  className="mt-3 w-full inline-flex justify-center rounded-xl border border-gray-300 shadow-sm px-6 py-3 
                           bg-white text-base font-medium text-gray-700 hover:bg-gray-50 transform transition-all duration-200
                           hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
                           sm:mt-0 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>

      {/* Mock Sidebar and Footer for demo */}
      <div className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600">© 2025 SportsPro Management System. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default CreateEventsAndTournaments;

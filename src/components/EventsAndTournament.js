import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';
import UserService from "./service/UserService";

function EventsAndTournaments() {
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('token');

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

  return(
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header Section */}
        <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-24 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('https://sfondo.info/i/original/a/0/8/83208.jpg')] bg-cover bg-center"></div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full animate-bounce"></div>
          
          <div className="relative z-10 container mx-auto px-6">
            <div className="text-center">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <svg className="w-5 h-5 text-white mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                </svg>
                <span className="text-white font-medium">Events & Tournaments</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Upcoming Tournaments
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Discover and participate in exciting sports tournaments. From local competitions to championship events.
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="py-16">
          <div className="container mx-auto px-6">
            
            {/* Loading State */}
            {loading && (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Loading Tournaments</h3>
                <p className="text-gray-600">Please wait while we fetch the latest tournaments...</p>
              </div>
            )}

            {/* Empty State */}
            {!loading && tournaments.length === 0 && (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">No Tournaments Available</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  There are currently no tournaments scheduled. Check back later for upcoming events and competitions.
                </p>
              </div>
            )}

            {/* Tournaments Grid */}
            {!loading && tournaments.length > 0 && (
              <>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Featured Tournaments
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Join these exciting tournaments and showcase your skills. Registration is now open for upcoming events.
                  </p>
                </div>

                <div className="grid gap-8 max-w-6xl mx-auto">
                  {tournaments.map((tournament, index) => (
                    <div 
                      key={index}
                      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                    >
                      <div className="flex flex-col lg:flex-row">
                        {/* Tournament Image */}
                        <div className="lg:w-2/5 relative overflow-hidden">
                          <img 
                            src={tournament.image} 
                            alt={tournament.title}
                            className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                          
                          {/* Tournament Status Badge */}
                          <div className="absolute top-4 left-4">
                            <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              Open Registration
                            </span>
                          </div>
                        </div>

                        {/* Tournament Content */}
                        <div className="lg:w-3/5 p-8 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center mb-4">
                              <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mr-3">
                                Tournament #{index + 1}
                              </span>
                              <div className="flex items-center text-gray-500 text-sm">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                                Verified Event
                              </div>
                            </div>
                            
                            <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                              {tournament.title}
                            </h3>
                            
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                              {tournament.description}
                            </p>

                            {/* Tournament Features */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                              <div className="flex items-center text-gray-700">
                                <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                                Professional Event
                              </div>
                              <div className="flex items-center text-gray-700">
                                <svg className="w-5 h-5 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M17 3H5c-1.11 0-2 .9-2 2v2c0 1.11.89 2 2 2h14v2c0 1.11-.89 2-2 2H5c-1.11 0-2-.89-2-2V9H1V7h2V5c0-2.21 1.79-4 4-4h12c1.11 0 2 .89 2 2v2h-2V3z"/>
                                </svg>
                                Registration Open
                              </div>
                              <div className="flex items-center text-gray-700">
                                <svg className="w-5 h-5 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                                </svg>
                                Multiple Categories
                              </div>
                              <div className="flex items-center text-gray-700">
                                <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                                Prizes & Awards
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold flex items-center justify-center group/btn">
                              <svg className="w-5 h-5 mr-2 group-hover/btn:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                              </svg>
                              Register Now
                            </button>
                            <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-semibold flex items-center justify-center">
                              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                              Learn More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Compete?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of athletes competing in our professional tournaments. 
              Register now and take your game to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold shadow-lg">
                Browse All Tournaments
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                Contact Organizers
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EventsAndTournaments;
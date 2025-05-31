import React from 'react';
import Footer from './Footer';
import CreateNotification from './CreateNotification';
import CreateNews from './CreateNews';

export default function Example() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center">
            {/* Logo/Brand Icon */}
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-8 shadow-xl transform hover:scale-105 transition-all duration-300">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">SMS Sabra</span>
              <br />
              <span className="text-3xl md:text-4xl text-blue-600">Admin Dashboard</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light">
              Your comprehensive sports management solution
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12 space-y-8">
        
        {/* Issuing Register Card */}
        <div className="group bg-white rounded-2xl   duration-500 border border-white overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-8 bg-gradient-to-b from-white to-white rounded-full mr-4"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white"></h2>
                </div>
                <p className="text-lg text-white mb-6 leading-relaxed">
                </p>
                <a href="/issueregister" className="group/btn inline-flex items-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-white to-white text-white font-semibold rounded-xl transform transition-all duration-300">
                  </button>
                  <svg className="ml-3 w-5 h-5 text-white transform transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-8 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full mr-4"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Issuing Register</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Comprehensive register for managing and tracking equipment distribution
                </p>
                <a href="/issueregister" className="group/btn inline-flex items-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Manage Equipment
                  </button>
                  <svg className="ml-3 w-5 h-5 text-blue-600 transform group-hover/btn:translate-x-2 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* News Card */}
        <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-8 bg-gradient-to-b from-purple-600 to-purple-700 rounded-full mr-4"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">News</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Stay connected with the latest updates and exciting news from our sports community
                </p>
                <a href="/createnews" className="group/btn inline-flex items-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Manage News
                  </button>
                  <svg className="ml-3 w-5 h-5 text-purple-600 transform group-hover/btn:translate-x-2 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Events and Tournaments Card */}
        <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-8 bg-gradient-to-b from-emerald-600 to-emerald-700 rounded-full mr-4"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Events and Tournaments</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  There's no sense in going to a tournament if you don't believe that you can win it
                </p>
                <a href="/createtournament" className="group/btn inline-flex items-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-emerald-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Manage Events
                  </button>
                  <svg className="ml-3 w-5 h-5 text-emerald-600 transform group-hover/btn:translate-x-2 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications Card */}
        <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-8 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full mr-4"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Notifications</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Never miss a beat! Check your notifications for important updates and alerts
                </p>
                <a href="/createnotification" className="group/btn inline-flex items-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Manage Notifications
                  </button>
                  <svg className="ml-3 w-5 h-5 text-blue-600 transform group-hover/btn:translate-x-2 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scheduler Card */}
        <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-8 bg-gradient-to-b from-purple-600 to-purple-700 rounded-full mr-4"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Scheduler</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Plan ahead and stay organized. Schedule practices, games, and events with our intuitive scheduler
                </p>
                <a href="/createshedules" className="group/btn inline-flex items-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Manage Schedule
                  </button>
                  <svg className="ml-3 w-5 h-5 text-purple-600 transform group-hover/btn:translate-x-2 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Inventory Card */}
        <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-8 bg-gradient-to-b from-emerald-600 to-emerald-700 rounded-full mr-4"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Inventory</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Keep track of your sports gear and equipment. Manage your inventory efficiently and never run out of essentials
                </p>
                <a href="/addinventory" className="group/btn inline-flex items-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-emerald-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Manage Inventory
                  </button>
                  <svg className="ml-3 w-5 h-5 text-emerald-600 transform group-hover/btn:translate-x-2 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
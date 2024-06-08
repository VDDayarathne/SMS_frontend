import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';

class HelpPage extends Component {
  render() {
    return (
      <div className="bg-white">
        <div className="mb-20">
          <Sidebar />


        </div>
        <div className="max-w-sm mx-auto p-4">
          <div className="bg-white shadow-md rounded p-4">
            <h2 className="text-2xl font-bold text-center mb-4">HELP</h2>
            <div className="p-4">
              <p className="text-lg text-gray-600 mb-4">
                For assistance related to the Sabaragamuwa University Sports Center website, users can contact the Department of Sports Sciences and Physical Education at the Faculty of Applied Sciences.
              </p>
              <div className="flex items-center mb-4">
                <div className="w-1/4">
                  <button className="bg-gray-100 p-2 rounded-full mb-2">

                  </button>
                </div>
                <div className="w-3/4">
                  <p className="text-lg text-gray-600">
                    Sabaragamuwa University of Sri Lanka, P.O. Box 02, Belihuloya, Sri Lanka.
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-1/4">
                  <button className="bg-gray-100 p-2 rounded-full mb-2">

                  </button>
                </div>
                <div className="w-3/4">
                  <p className="text-lg text-gray-600">
                    +94 45-3609846
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-1/4">
                  <button className="bg-gray-100 p-2 rounded-full">

                  </button>
                </div>
                <div className="w-3/4">
                  <p className="text-lg text-gray-600">
                    sspe@appsc.sab.ac.lk
                  </p>
                </div>
              </div>
              <p className="text-lg text-gray-600 mt-4">
                The department's staff are available to provide support and information regarding sports center facilities, membership inquiries, event scheduling, and any other related queries. Whether seeking information about facility bookings, membership registration, or general inquiries, users are encouraged to utilize these contact details for prompt assistance and guidance from the dedicated team at the Department of Sports Sciences and Physical Education.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default HelpPage;
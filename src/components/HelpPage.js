import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';



export default function HelpPage() {
  return (
    <div className="bg-white">
    <Sidebar />
      <div className="mb-16"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-md p-8">
          <h2 className="text-2xl font-bold text-center text-be4347 mb-4 text-black-500">HELP</h2>
          <div className="px-4">
            <p className="text-base text-justify text-gray-700 mb-6">
              For assistance related to the Sabaragamuwa University Sports Center website, users can contact the Department of Sports Sciences and Physical Education at the Faculty of Applied Sciences.
            </p>
            <div className="flex items-center mb-4">
              <span className="font-bold text-red-600 mr-2">Location:</span>
              <p className="text-base text-gray-700">Sabaragamuwa University of Sri Lanka, P.O. Box 02, Belihuloya, Sri Lanka.</p>
            </div>
            <div className="flex items-center mb-4">
              <span className="font-bold text-red-600 mr-2">Hotline:</span>
              <p className="text-base text-gray-700">+94 45-3609846</p>
            </div>
            <div className="flex items-center">
              <span className="font-bold text-red-600 mr-2">Email:</span>
              <p className="text-base text-gray-700">sspe@appsc.sab.ac.lk</p>
            </div>
            <p className="text-base text-justify text-gray-700 mt-6">
              The department's staff are available to provide support and information regarding sports center facilities, membership inquiries, event scheduling, and any other related queries. Whether seeking information about facility bookings, membership registration, or general inquiries, users are encouraged to utilize these contact details for prompt assistance and guidance from the dedicated team at the Department of Sports Sciences and Physical Education.
            </p>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
}

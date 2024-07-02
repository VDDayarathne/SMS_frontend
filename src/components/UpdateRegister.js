import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Profile from './Profile';
import UserService from "./service/UserService";

function UpdateRegister() {





  return (
    <>
      <Sidebar />
      <div style={{ backgroundColor: '#f4f4f0' }} className="sm:mx-32 lg:mx-32 xl:mx-72">
              <div className="flex justify-between container mx-auto">
                <div className="w-full">
                  <div className="mt-4 px-4">
                    <h1 className="text-3xl font-semibold py-7 px-5">Sports Center - Sabaragamuwa University of Sri Lanka</h1>
                    <h1 className="font-thinner justify-center flex text-4xl pt-10 px-5">Update Issuing Register</h1>


                    <form className="mx-5 my-5">
                      <label className="relative block p-3 border-2 border-black rounded" htmlFor="name">
                        <span className="text-md font-semibold text-zinc-900">Description</span>
                        <input
                          className="w-full bg-transparent p-0 text-sm text-gray-500 focus:outline-none"
                          id="name"
                          name="name"
                          value="#"
                          type="text"
                          placeholder="name"
                        />
                      </label>
                      <label className="relative block p-3 border-2 mt-5 border-black rounded" htmlFor="bio">
                        <span className="text-md font-semibold text-zinc-900">Student ID</span>
                        <input
                          className="w-full p-0 text-sm border-none bg-transparent text-gray-500 focus:outline-none"
                          id="bio"
                          type="text"
                          name="bio"
                          value="#"
                          placeholder="Write Your Bio"
                        />
                      </label>
                      <label className="relative block p-3 border-2 mt-5 border-black rounded" htmlFor="upi">
                        <span className="text-md font-semibold text-zinc-900">Items</span>
                        <input
                          className="w-full read-only:bg-zinc-800 p-0 text-sm bg-transparent text-gray-500 focus:outline-none"
                          id="upi"
                          type="email"
                          name="email"
                          value="#"
                          placeholder="ie: example@gmail.com"
                        />
                      </label>
                      <label className="relative block p-3 border-2 mt-5 border-black rounded" htmlFor="paypal">
                        <span className="text-md font-semibold text-zinc-900">Return Time</span>
                        <input
                          className="w-full read-only:bg-zinc-800 p-0 text-sm bg-transparent text-gray-500 focus:outline-none"
                          id="paypal"
                          type="text"
                          name="faculty"
                          value="#"
                        />
                      </label>
                      <br /><br />
                      <div class="mb-6 text-center">
                          <button
                              class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-indigo-500 dark:bg-gray-700 dark:text-white dark:hover:bg-violate-900 focus:outline-none focus:shadow-outline"
                              type="button"

                          >
                              Submit
                          </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
      <Footer />
    </>
  );
}

export default UpdateRegister;
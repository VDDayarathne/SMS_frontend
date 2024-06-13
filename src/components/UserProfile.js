import React, { useState } from "react";
/*import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";*/
import Sidebar from './Sidebar';
import Footer from './Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Sidebar />
      <div style={{ backgroundColor: '#f4f4f0' }} className="sm:mx-32 lg:mx-32 xl:mx-72">
              <div className="flex justify-between container mx-auto">
                <div className="w-full">
                  <div className="mt-4 px-4">
                    <h1 className="text-3xl font-semibold py-7 px-5">Sabaragamuva Sports Center</h1>
                    <h1 className="font-thinner flex text-4xl pt-10 px-5">Setup Your profile</h1>

                    <div className="flex justify-center mt-5">
                      <label htmlFor="profile-picture-upload" className="relative cursor-pointer">
                        <img
                          src={""}
                          alt="Profile"
                          className="w-full h-full md:w-80 md:h-80 rounded-full border-4 border-black object-cover"
                        />
                        <input
                          id="profile-picture-upload"
                          type="file"
                          accept="image/*"
                          className="absolute inset-100 w-full h-full opacity-50 cursor-pointer"

                        />
                      </label>
                    </div>
                    <br /><br />
                    <form className="mx-5 my-5">
                      <label className="relative block p-3 border-2 border-black rounded" htmlFor="name">
                        <span className="text-md font-semibold text-zinc-900">Name</span>
                        <input
                          className="w-full bg-transparent p-0 text-sm text-gray-500 focus:outline-none"
                          id="name"
                          type="text"
                          placeholder="First name"
                        />
                      </label>
                      <div className="mt-5">
                        <label className="input-field inline-flex items-baseline border-2 border-black rounded p-4">
                          <span className="flex-none text-dusty-blue-darker select-none leading-none"></span>
                          <div className="flex-1 leading-none">
                            <input
                              id="handle"
                              type="text"
                              className="w-full pl-1 bg-transparent focus:outline-none"
                              name="handle"
                              placeholder="Last name"
                            />
                          </div>
                        </label>
                      </div>
                      <label className="relative block p-3 border-2 mt-5 border-black rounded" htmlFor="bio">
                        <span className="text-md font-semibold text-zinc-900">Bio</span>
                        <input
                          className="w-full p-0 text-sm border-none bg-transparent text-gray-500 focus:outline-none"
                          id="bio"
                          type="text"
                          placeholder="Write Your Bio"
                        />
                      </label>
                      <label className="relative block p-3 border-2 mt-5 border-black rounded" htmlFor="upi">
                        <span className="text-md font-semibold text-zinc-900">Email Id</span>
                        <input
                          className="w-full read-only:bg-zinc-800 p-0 text-sm bg-transparent text-gray-500 focus:outline-none"
                          id="upi"
                          type="text"
                          placeholder="ie: example@gmail.com"
                        />
                      </label>
                      <label className="relative block p-3 border-2 mt-5 border-black rounded" htmlFor="paypal">
                        <span className="text-md font-semibold text-zinc-900">Faculty / Department</span>
                        <input
                          className="w-full read-only:bg-zinc-800 p-0 text-sm bg-transparent text-gray-500 focus:outline-none"
                          id="paypal"
                          type="text"
                        />
                      </label>
                      <label className="relative block p-3 border-2 mt-5 border-black rounded" htmlFor="paypal">
                        <span className="text-md font-semibold text-zinc-900">Index Number</span>
                        <input
                          className="w-full read-only:bg-zinc-800 p-0 text-sm bg-transparent text-gray-500 focus:outline-none"
                          id="paypal"
                          type="text"
                        />
                      </label>
                      <button className="mt-5 border-2 px-5 py-2 rounded-lg border-black font-black translate-y-2 ">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
      <Footer />
    </>
  );
}

export default App;
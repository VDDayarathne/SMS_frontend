import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import UserService from "./service/UserService";
import axios from "axios";

function UpdateRegister() {
  const navigate = useNavigate();

      const location = useLocation();
      const registerId = location.search.split('=')[1];

    const [registerData, setRegisterData] = useState({
      issuingTime: '',
      returningTime: null,
      items: [],
      description: '',
      studentId: ''
    });

     useEffect(() => {
        fetchRegisterData(registerId);
      }, [registerId]);

      const fetchRegisterData = async (registerId) => {
        try {
          const token = localStorage.getItem('token');
          const response = await UserService.getItemIssuingRegisterById(registerId, token);
          console.log('Response:', response);
          const { issuingTime, returningTime, items, description, studentId } = response;
          setRegisterData({ issuingTime, returningTime, items, description, studentId });
        } catch (error) {
          console.error('Error fetching register data:', error);
        }
      };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      if (name === 'items') {
        setRegisterData((prevRegisterData) => ({
          ...prevRegisterData,
          items: value.split(',').map(item => item.trim())
        }));
      } else {
        setRegisterData((prevRegisterData) => ({
          ...prevRegisterData,
          [name]: value
        }));
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const token = localStorage.getItem('token');
        const res = await UserService.updateItemIssuingRegister(registerId, registerData, token);
        console.log(res);
        navigate("/issueregister");
      } catch (error) {
        console.error('Error updating register:', error);
        alert(error);
      }
    };

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
                      <label className="relative block p-3 border-2 border-black rounded" htmlFor="description">
                        <span className="text-md font-semibold text-zinc-900">Description</span>
                        <input
                          className="w-full bg-transparent p-0 text-sm text-gray-500 focus:outline-none"
                          id="description"
                          name="description"
                          value={registerData.description}
                            onChange={handleInputChange}
                        />
                      </label>
                      <label className="relative block p-3 border-2 mt-5 border-black rounded" htmlFor="studentId">
                        <span className="text-md font-semibold text-zinc-900">Student ID</span>
                        <input
                          className="w-full p-0 text-sm border-none bg-transparent text-gray-500 focus:outline-none"
                          id="studentId"
                          type="text"
                          name="studentId"
                          value={registerData.studentId}
                            onChange={handleInputChange}
                        />
                      </label>
                      <label className="relative block p-3 border-2 mt-5 border-black rounded" htmlFor="items">
                        <span className="text-md font-semibold text-zinc-900">Items</span>
                        <input
                          className="w-full read-only:bg-zinc-800 p-0 text-sm bg-transparent text-gray-500 focus:outline-none"
                          id="items"
                          type="items"
                          name="items"
                          value={registerData.items.join(', ')}
                            onChange={handleInputChange}

                        />
                      </label>
                      <label className="relative block p-3 border-2 mt-5 border-black rounded" htmlFor="returningTime">
                        <span className="text-md font-semibold text-zinc-900">Return Time</span>
                        <input
                          className="w-full read-only:bg-zinc-800 p-0 text-sm bg-transparent text-gray-500 focus:outline-none"
                          id="returningTime"
                          type="text"
                          name="returningTime"
                          value={registerData.returningTime}
                            onChange={handleInputChange}
                        />
                      </label>
                      <br /><br />
                      <div class="mb-6 text-center">
                          <button
                              class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-indigo-500 dark:bg-gray-700 dark:text-white dark:hover:bg-violate-900 focus:outline-none focus:shadow-outline"
                              type="button"
                              onClick={handleSubmit}
                          >
                              Update
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
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserService from "./service/UserService";
import Footer from './Footer';
import Sidebar from './Sidebar';

function IssuingRegister(){
const [issuingRegisters, setIssuingRegisters] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchIssuingRegisters();
  }, [token]);

  const fetchIssuingRegisters = async () => {
    try {
      const data = await UserService.getIssuingRegisters(token);
      setIssuingRegisters(data);
    } catch (error) {
      console.error(error);
    }
  };



    const [description, setDescription] = useState('');
    const [studentId, setStudentId] = useState('');
    const [items, setItems] = useState('');
    const [returningTime, setReturningTime] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
      const newIssuingRegister = {
        description,
        studentId,
        items: items.split(',').map(item => item.trim()),
        returningTime
      };

      try {
        const response = await UserService.createItemIssuingRegister(newIssuingRegister, token);
              console.log(response.data);
        setDescription('');
        setStudentId('');
        setItems('');
        setReturningTime('');
        fetchIssuingRegisters();

      } catch (error) {
        console.error(error);
      }
    };

    const handleDelete = async (registerId) => {
      try {
        const token = localStorage.getItem("token");
        await UserService.deleteIssuingRegister(registerId, token);
        fetchIssuingRegisters(); // refresh the table
      } catch (error) {
        console.error(error);
      }
    };



 return (
  <>
<section>

<div className="bg-white px-6 py-12 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Issuing Register</h1>
        <p className="mt-3 text-lg text-gray-600"></p>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="sm:col-span-2">
          <label htmlFor="description" className="block text-sm font-semibold leading-6 text-gray-900">Description</label>
          <div className="mt-2.5">
            <input
              type="text"
              id="description"
              name="description"
              value={description} onChange={(e) => setDescription(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="studentId" className="block text-sm font-semibold leading-6 text-gray-900">Student Id</label>
          <div className="mt-2.5">
            <textarea
              id="studentId"
              name="studentId"
              rows="4"
              value={studentId} onChange={(e) => setStudentId(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
              <label htmlFor="items" className="block text-sm font-semibold leading-6 text-gray-900">Items</label>
              <div className="mt-2.5">
                <input
                  type="text"
                  id="items"
                  name="items"
                  value={items} onChange={(e) => setItems(e.target.value)}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
        <div className="sm:col-span-2">
              <label htmlFor="returningtime" className="block text-sm font-semibold leading-6 text-gray-900">Return Date & Time</label>
              <div className="mt-2.5">
                <input
                  type="text"
                  id="returningtime"
                  name="returningtime"
                  value={returningTime} onChange={(e) => setReturningTime(e.target.value)}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


        <div className="mt-10">
          <button
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-indigo-500 dark:bg-gray-700 dark:text-white dark:hover:bg-violate-900 focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleSubmit}
          >
            Issue
          </button>
        </div>
      </form>
    </div>





<div style={{ backgroundColor: '#f4f4f0' }} className="sm:mx-32 lg:mx-32 xl:mx-72">
  <table class="min-w-full divide-y divide-gray-200 overflow-x-auto">
      <thead class="bg-gray-50">
          <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Issuing Time
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student ID
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Items
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Return Time
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
              </th>
          </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        {issuingRegisters?.map((register, index) => (
          <tr key={index}>
              <td class="px-6 py-4 whitespace-nowrap">
                   <div class="text-sm text-gray-900">{register.issuingTime}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                   <div class="text-sm text-gray-900">{register.description}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{register.studentId}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{register.items.join(", ")}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{register.returningTime}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                  <a href={`/updateregister?id=${register.id}`} class="text-green-600 hover:text-green-900">Edit</a>
                  <a href="javascript:void(0)" class="ml-2 text-red-600 hover:text-red-900"
                  onClick={() => handleDelete(register.id)}>
                  Delete</a>
              </td>
          </tr>
          ))}
       </tbody>
  </table>
</div></section>


  <br/><br/><br/>
      <Footer />
      <Sidebar />
      </>

    );
  };

  export default IssuingRegister;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Footer from './Footer';
import UserService from "./service/UserService";
import { useNavigate, useParams } from 'react-router-dom';

function UpdateInventory() {
    const token = localStorage.getItem('token');
    const { inventoryId } = useParams();
    const [inventoryData, setInventoryData] = useState({
        description: '',
        quantity: '',
        sportCategory: {
          id: '',
          name: '',
        },
        equipment: {
          id: '',
          name: '',
        },
      });

      const handleInputChange = (event) => {
        if (event.target.name === 'portCategory.id' || event.target.name === 'equipment.id') {
          setInventoryData((prevState) => ({
           ...prevState,
            [event.target.name.split('.')[0]]: { id: parseInt(event.target.value) },
          }));
        } else if (event.target.name === 'equipment.name') {
          setInventoryData((prevState) => ({
           ...prevState,
            equipment: {...prevState.equipment, name: event.target.value },
          }));
        } else {
          setInventoryData((prevState) => ({
           ...prevState,
            [event.target.name]: event.target.value,
          }));
        }
      };

      const handleSubmit = async (event) => {
        event.preventDefault();
        try {

          const response = await UserService.updateInventory(inventoryId, inventoryData, token);
          console.log(response);
          navigate("/addinventory");
          // Redirect to the inventory list page or display a success message
        } catch (error) {
          console.error(error);
        }
      };

     const [inventories, setInventories] = useState([]);
       const [loading, setLoading] = useState(false);
       const [error, setError] = useState(null);

       const [selectedSportCategory, setSelectedSportCategory] = useState(null);

       const navigate = useNavigate();

         useEffect(() => {
           const fetchInventory = async () => {
             setLoading(true);
             try {
               const response = await UserService.getInventory(inventoryId, token); // fetch the specific inventory data
               setInventoryData(response);
             } catch (error) {
               setError(error);
             } finally {
               setLoading(false);
             }
           };
           fetchInventory();
         }, [inventoryId, token]);




    return(<>
<div className="bg-white px-6 py-12 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Inventory</h1>
          <p className="mt-3 text-lg text-gray-600">Update To the Inventory</p>
        </div>
        <form className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit}>

        <div className="sm:col-span-2">
            <label htmlFor="id" className="block text-sm font-semibold leading-6 text-gray-900">ID</label>
            <div className="mt-2.5">
              <input
                type="text"
                id="id"
                name="id"
                readOnly={true}
                value={inventoryData.id}
                  onChange={handleInputChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

        <div className="sm:col-span-2">
            <label htmlFor="sportCategoryId" className="block text-sm font-semibold leading-6 text-gray-900">Sport Category ID</label>
            <div className="mt-2.5">
              <input
                type="text"
                id="sportCategoryId"
                name="sportCategoryId"
                readOnly={true}
                value={inventoryData.sportCategory.id}
                  onChange={handleInputChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
          <label htmlFor="sportCategory" className="block text-sm font-semibold leading-6 text-gray-900">Sport Category</label>
          <div className="mt-2.5">
            <input
              type="text"
              id="sportCategory"
              name="sportCategory"
              readOnly={true}
              value={inventoryData.sportCategory.name}
                onChange={handleInputChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

          <div className="sm:col-span-2">
            <label htmlFor="equipmentId" className="block text-sm font-semibold leading-6 text-gray-900">Equipment ID</label>
            <div className="mt-2.5">
              <input
                type="text"
                id="equipmentId"
                name="equipmentId"
                readOnly={true}
                value={inventoryData.equipment.id}
                   onChange={handleInputChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
          <label htmlFor="equipmentId" className="block text-sm font-semibold leading-6 text-gray-900">Equipment Name</label>
          <div className="mt-2.5">
              <input
                type="text"
                id="equipment.name"
                name="equipment.name"
                readOnly={true}
                value={inventoryData.equipment.name}
                onChange={handleInputChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"
              />
            </div>
          </div>
         <div className="sm:col-span-2">
          <label htmlFor="description" className="block text-sm font-semibold leading-6 text-gray-900">Description</label>
          <div className="mt-2.5">
            <textarea
              type="text"
              id="description"
              name="description"
              value={inventoryData.description}
                onChange={handleInputChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="quantity" className="block text-sm font-semibold leading-6 text-gray-900">Quantity</label>
          <div className="mt-2.5">
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={inventoryData.quantity}
                onChange={handleInputChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600sm:text-sm sm:leading-6"
            />
          </div>
        </div>




          <div className="mt-10">
            <button
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-indigo-500 dark:bg-gray-700 dark:text-white dark:hover:bg-violate-900 focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleSubmit}
            >
              Update
            </button>
          </div>
        </form>
      </div>

    <Footer />
    <Sidebar />
      </>

 )}
  export default UpdateInventory;
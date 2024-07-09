import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Footer from './Footer';
import UserService from "./service/UserService";
import { useNavigate } from 'react-router-dom';


function AddInventory() {

  const [inventories, setInventories] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('token');
  const [selectedSportCategory, setSelectedSportCategory] = useState(null);

    const navigate = useNavigate();
    const [equipmentNames, setEquipmentNames] = useState([]);
    const [newEquipment, setNewEquipment] = useState(false);
    const [newEquipmentName, setNewEquipmentName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [sportCategoryId, setSportCategoryId] = useState('');
    const [equipmentId, setEquipmentId] = useState('');
    const [equipmentName, setEquipmentName] = useState('');
    const [deleteId, setDeleteId] = useState(null);




  useEffect(() => {
    fetchInventories();
  }, [token]);

  const fetchInventories = async () => {
    setLoading(true);
    try {
      const response = await UserService.getInventories(token);
      setInventories(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSportCategoryChange = (event) => {
      setSelectedSportCategory(event.target.value);
    };

    const filteredInventories = selectedSportCategory
        ? inventories.filter((inventory) => inventory.sportCategory.name === selectedSportCategory)
        : inventories;



    const handleSubmit = async (e) => {
      e.preventDefault();

      const inventoryData = {
        description,
        quantity,
        sportCategory: {
          id: sportCategoryId,

        },
        equipment: {
          name: equipmentName,
        },
      };

      try {
        const response = await UserService.createInventory(inventoryData, token);
        console.log(response.data);
        fetchInventories();
        navigate("/addinventory");

        setDescription('');
            setQuantity('');
            setSportCategoryId('');
            setEquipmentName('');


      } catch (error) {
        console.error(error);
      }
    };

    const handleDelete = async (inventoryId) => {
        setDeleteId(inventoryId); // show confirmation box
      };

      const handleConfirmDelete = async () => {
        try {
          await UserService.deleteInventory(deleteId, token);
          fetchInventories();
          setDeleteId(null); // hide confirmation box
        } catch (error) {
          console.error(error);
        }
      };

      const handleCancelDelete = () => {
        setDeleteId(null); // hide confirmation box
      };







    return(<>
<div className="bg-white px-6 py-12 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Inventory</h1>
          <p className="mt-3 text-lg text-gray-600">Add To the Inventory</p>
        </div>
        <form className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit}>

                    <div className="sm:col-span-2">
                        <label htmlFor="sport" className="block text-sm font-semibold leading-6 text-gray-900">Sport Category</label>
                        <select id="sport"
                              name="sport"
                              value={sportCategoryId}
                              onChange={(e) => setSportCategoryId(e.target.value)}
                            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-black-400"
                          >
                            <option value="">Select a sport category</option>
                            <option value="1">Cricket</option>
                              <option value="2">Rugger</option>
                              <option value="3">Badminton</option>
                              <option value="4">Table Tennis</option>
                              <option value="5">Hockey</option>
                              <option value="6">Net Ball</option>
                              <option value="7">Basket Ball</option>
                              <option value="8">Foot Ball</option>
                              <option value="9">Volley Ball</option>
                              <option value="10">Swimming</option>

                        </select>
                    </div>

          <div className="sm:col-span-2">
            <label htmlFor="equipmentname" className="block text-sm font-semibold leading-6 text-gray-900">Equipment Name</label>
            <div className="mt-2.5">
              <input
                type="text"
                id="equipmentname"
                name="equipmentname"
                value={equipmentName}
                onChange={(e) => setEquipmentName(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
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
              Add Inventory
            </button>
          </div>
        </form>
      </div>


      <div style={{ backgroundColor: '#f4f4f0' }} className="sm:mx-32 lg:mx-32 xl:mx-72">

                  <div className="sm:col-span-2">
                      <label htmlFor="sport" className="block text-sm font-semibold leading-6 text-gray-900">Sport Category</label>
                      <select
                          id="sport"
                          name="sport"
                          value={sportCategoryId}
                          onChange={handleSportCategoryChange}
                          class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-black-400"
                          required
                        >
                          <option value="">Select a sport category</option>
                          <option value="cricket">Cricket</option>
                          <option value="elle">Elle</option>
                          <option value="football">Foot Ball</option>
                          <option value="rugger">Rugger</option>
                          <option value="tennis">Tennis</option>
                          <option value="swimming">Swimming</option>
                          <option value="badminton">Badminton</option>
                          <option value="net ball">Net Ball</option>
                          <option value="basket ball">Basket Ball</option>
                          <option value="rugger">Rugger</option>
                          <option value="baseball">BaseBall</option>
                          <option value="hockey">Hockey</option>
                      </select>
                  </div>


        <table class="min-w-full divide-y divide-gray-200 overflow-x-auto">
            <thead class="bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Sport Category
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Equipment Name
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Description
                      </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Quantity
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                    </th>

                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                         Actions
                     </th>

                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
               {filteredInventories.map((inventory, index) => (
                <tr key={index}>

                    <td class="px-6 py-4 whitespace-nowrap">
                         <div class="text-sm text-gray-900">{inventory.id}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                         <div class="text-sm text-gray-900">{inventory.sportCategory.name}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                         <div class="text-sm text-gray-900">{inventory.equipment.name}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                         <div class="text-sm text-gray-900">{inventory.description}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                         <div class="text-sm text-gray-900">{inventory.quantity}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                         <div class="text-sm text-gray-900">{inventory.updatedAt}</div>
                    </td>

                    <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                       <a href={`/updateinventory/${inventory.id}`} class="text-green-600 hover:text-green-900">Edit</a>
                       <a href="javascript:void(0)" class="ml-2 text-red-600 hover:text-red-900"
                           onClick={() => handleDelete(inventory.id)}> Delete</a>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>

             {deleteId && (
               <div className="fixed z-50 inset-0 overflow-y-auto">
                         <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                           <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                             <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                           </div>

                           <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>


                           <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
                             role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                             <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">

                             </div>
                             <div className="sm:flex sm:items-start">
                               <div
                                 className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                                 <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                               </svg>
                             </div>
                             <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                              <h3 className="text-lg leading-6 font-medium text-gray-900">Confirm Delete</h3>
                              <div className="mt-2"></div></div></div>
                     <p className="text-sm text-gray-500">Are you sure you want to delete this inventory?</p>
                     <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                       <button type="button" data-behavior="commit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                       onClick={handleConfirmDelete}
                       >
                         Yes, Delete
                       </button>
                       <button type="button" data-behavior="cancel" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm"
                         onClick={handleCancelDelete}
                       >
                         No, Cancel
                       </button>
                     </div></div></div></div> )}

    <Footer />
    <Sidebar />
      </>

   );
 }

 export default AddInventory;





import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import UserService from "./service/UserService";


function Inventory() {
  const [inventories, setInventories] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('token');
  const [selectedSportCategory, setSelectedSportCategory] = useState(null);

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


    return(
<section><br/><br/><br/>
<div style={{ backgroundColor: '#f4f4f0' }} className="sm:mx-32 lg:mx-32 xl:mx-72">

            <div className="sm:col-span-2">
                <label htmlFor="sport" className="block text-sm font-semibold leading-6 text-gray-900">Sport Category</label>
                <select
                    id="sport"
                    name="sport"
                    value={selectedSportCategory}
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
                    <option value="netball">Net Ball</option>
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
                  Sport
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

          </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
         {filteredInventories.map((inventory, index) => (
          <tr key={index}>
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



          </tr>))}

       </tbody>
  </table>
</div>
<Sidebar />
<Footer />
</section>
  );
}

export default Inventory;
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import UserService from "./service/UserService";
import { useNavigate } from 'react-router-dom';

function AddInventory() {
  const [inventories, setInventories] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('token');
  const [selectedSportCategory, setSelectedSportCategory] = useState('');
  const navigate = useNavigate();

  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [sportCategoryId, setSportCategoryId] = useState('');
  const [equipmentName, setEquipmentName] = useState('');
  const [deleteId, setDeleteId] = useState(null);

  const sportCategories = [
    { id: '1', name: 'Cricket' },
    { id: '2', name: 'Rugger' },
    { id: '3', name: 'Badminton' },
    { id: '4', name: 'Table Tennis' },
    { id: '5', name: 'Hockey' },
    { id: '6', name: 'Net Ball' },
    { id: '7', name: 'Basket Ball' },
    { id: '8', name: 'Foot Ball' },
    { id: '9', name: 'Volley Ball' },
    { id: '10', name: 'Swimming' },
  ];

  useEffect(() => {
    fetchInventories();
    // eslint-disable-next-line
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

  // Filtering by sport category ID for consistency
  const filteredInventories = selectedSportCategory
    ? inventories.filter((inventory) => inventory.sportCategory?.id === selectedSportCategory)
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
      await UserService.createInventory(inventoryData, token);
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

  const handleDelete = (inventoryId) => {
    setDeleteId(inventoryId);
  };

  const handleConfirmDelete = async () => {
    try {
      await UserService.deleteInventory(deleteId, token);
      fetchInventories();
      setDeleteId(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelDelete = () => {
    setDeleteId(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ...Header and Issuing Register Section (unchanged)... */}
      {/* Hero Header Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-6 shadow-lg">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
              </svg>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4">
              Inventory Management
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Efficiently manage and track all sports equipment with our comprehensive inventory system
            </p>
          </div>
        </div>
      </div>

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

      {/* Add Inventory Form */}
      <div className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="bg-white shadow-2xl rounded-3xl border border-gray-100 overflow-hidden transform hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
              <h2 className="text-3xl font-bold text-white flex items-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                Add New Equipment
              </h2>
              <p className="text-blue-100 mt-2">Add equipment to your sports inventory</p>
            </div>
            
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Sport Category */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-900">
                      Sport Category
                    </label>
                    <select
                      value={sportCategoryId}
                      onChange={(e) => setSportCategoryId(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white hover:border-gray-300"
                      required
                    >
                      <option value="">Select a sport category</option>
                      {sportCategories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* Equipment Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-900">
                      Equipment Name
                    </label>
                    <input
                      type="text"
                      value={equipmentName}
                      onChange={(e) => setEquipmentName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-300 hover:border-gray-300"
                      placeholder="Enter equipment name"
                      required
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-300 hover:border-gray-300 resize-none"
                    placeholder="Enter equipment description"
                    required
                  />
                </div>

                {/* Quantity */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-900">
                    Quantity
                  </label>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-300 hover:border-gray-300"
                    placeholder="Enter quantity"
                    min="1"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
                  >
                    <svg className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                    </svg>
                    Add to Inventory
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Inventory List Section */}
      <div className="px-6 py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          {/* Filter Section */}
          <div className="mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
                  </svg>
                  Filter Inventory
                </h3>
                <div className="min-w-64">
                  <select
                    value={selectedSportCategory}
                    onChange={handleSportCategoryChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white hover:border-gray-300"
                  >
                    <option value="">All Categories</option>
                    {sportCategories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Inventory Table */}
          <div className="bg-white shadow-2xl rounded-3xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-6 py-4 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
                Current Inventory ({filteredInventories.length} items)
              </h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {['ID', 'Sport Category', 'Equipment Name', 'Description', 'Quantity', 'Date', 'Actions'].map((header) => (
                      <th key={header} className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {loading ? (
                    <tr>
                      <td colSpan="7" className="px-6 py-12 text-center">
                        <div className="flex flex-col items-center justify-center">
                          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                          <p className="text-gray-500">Loading inventory...</p>
                        </div>
                      </td>
                    </tr>
                  ) : filteredInventories.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="px-6 py-12 text-center">
                        <div className="flex flex-col items-center justify-center">
                          <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
                          </svg>
                          <p className="text-gray-500 text-lg">No inventory items found</p>
                          <p className="text-gray-400">Add some equipment to get started</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    filteredInventories.map((inventory) => (
                      <tr key={inventory.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <span className="text-sm font-bold text-blue-600">{inventory.id}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                            {inventory.sportCategory?.name}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-semibold text-gray-900">{inventory.equipment?.name}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-600 max-w-xs truncate">{inventory.description}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                            {inventory.quantity}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{inventory.updatedAt}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-3">
                            <a
                              href={`/updateinventory/${inventory.id}`}
                              className="inline-flex items-center px-3 py-2 text-emerald-600 hover:text-emerald-900 hover:bg-emerald-50 rounded-lg transition-all duration-200 group"
                            >
                              <svg className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                              </svg>
                              Edit
                            </a>
                            <button
                              onClick={() => handleDelete(inventory.id)}
                              className="inline-flex items-center px-3 py-2 text-red-600 hover:text-red-900 hover:bg-red-50 rounded-lg transition-all duration-200 group"
                            >
                              <svg className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                              </svg>
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
            <div className="inline-block align-bottom bg-white rounded-3xl px-6 pt-5 pb-4 text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-8 animate-bounce-in">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-xl leading-6 font-bold text-gray-900">
                    Confirm Delete
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to delete this inventory item? This action cannot be undone.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 sm:flex sm:flex-row-reverse gap-3">
                <button
                  type="button"
                  onClick={handleConfirmDelete}
                  className="w-full inline-flex justify-center rounded-xl border border-transparent shadow-lg px-6 py-3 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-200 sm:w-auto sm:text-sm transform hover:scale-105 transition-all duration-200"
                >
                  Yes, Delete
                </button>
                <button
                  type="button"
                  onClick={handleCancelDelete}
                  className="mt-3 w-full inline-flex justify-center rounded-xl border border-gray-300 shadow-lg px-6 py-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-blue-200 sm:mt-0 sm:w-auto sm:text-sm transform hover:scale-105 transition-all duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <Sidebar />
    </div>
  );
}

export default AddInventory;

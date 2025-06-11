import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import UserService from "./service/UserService";

function Inventory() {
  const [inventories, setInventories] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('token');
  const [selectedSportCategory, setSelectedSportCategory] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetchInventories();
    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 100);
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

  const getSportIcon = (sport) => {
    const icons = {
      cricket: '🏏',
      elle: '🏃',
      football: '⚽',
      rugger: '🏈',
      tennis: '🎾',
      swimming: '🏊',
      badminton: '🏸',
      netball: '🏐',
      'basket ball': '🏀',
      baseball: '⚾',
      hockey: '🏒'
    };
    return icons[sport?.toLowerCase()] || '🏆';
  };

  const getQuantityColor = (quantity) => {
    if (quantity > 50) return 'text-emerald-600 bg-emerald-50';
    if (quantity > 20) return 'text-amber-600 bg-amber-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <section className="min-h-screen from-slate-900 via-slate-800 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <div className={`relative z-10 pt-20 pb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg animate-bounce">
              <span className="text-3xl">📦</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-800 to-purple-200 bg-clip-text text-transparent mb-4">
              Sports Inventory
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Manage and track your sports equipment with our advanced inventory system
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 px-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto">
          {/* Filter Section */}
          <div className="mb-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-xl">🎯</span>
                </div>
                <h2 className="text-2xl font-bold text-grey-700">Filter by Sport Category</h2>
              </div>
              
              <div className="relative">
                <select
                  id="sport"
                  name="sport"
                  value={selectedSportCategory || ''}
                  onChange={handleSportCategoryChange}
                  className="w-full px-6 py-4 bg-grey/10 backdrop-blur-sm border border-white/30 rounded-2xl text-grey-600 placeholder-slate-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-300 hover:bg-white/15 cursor-pointer text-lg appearance-none"
                >
                  <option value="" className="bg-slate-800 text-white">All Categories</option>
                  <option value="cricket" className="bg-slate-800 text-white">🏏 Cricket</option>
                  <option value="elle" className="bg-slate-800 text-white">🏃 Elle</option>
                  <option value="football" className="bg-slate-800 text-white">⚽ Football</option>
                  <option value="rugger" className="bg-slate-800 text-white">🏈 Rugger</option>
                  <option value="tennis" className="bg-slate-800 text-white">🎾 Tennis</option>
                  <option value="swimming" className="bg-slate-800 text-white">🏊 Swimming</option>
                  <option value="badminton" className="bg-slate-800 text-white">🏸 Badminton</option>
                  <option value="netball" className="bg-slate-800 text-white">🏐 Netball</option>
                  <option value="basket ball" className="bg-slate-800 text-white">🏀 Basketball</option>
                  <option value="baseball" className="bg-slate-800 text-white">⚾ Baseball</option>
                  <option value="hockey" className="bg-slate-800 text-white">🏒 Hockey</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Inventory Table */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden hover:shadow-blue-500/20 transition-all duration-500">
            {/* Table Header */}
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-8 py-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <span className="text-xl">📊</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-grey-500">Equipment Inventory</h3>
                  <p className="text-slate-800">
                    {filteredInventories.length} items {selectedSportCategory && `in ${selectedSportCategory}`}
                  </p>
                </div>
              </div>
            </div>

            {/* Loading State */}
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-grey-300 text-lg">Loading inventory...</span>
                </div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                {filteredInventories.length === 0 ? (
                  <div className="text-center py-20">
                    <div className="w-24 h-24 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-4xl">📭</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">No Equipment Found</h3>
                    <p className="text-slate-400">
                      {selectedSportCategory 
                        ? `No equipment found for ${selectedSportCategory}` 
                        : 'No equipment in inventory'}
                    </p>
                  </div>
                ) : (
                  <table className="min-w-full divide-y divide-white/10">
                    <thead className="bg-black/5">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                          Sport Category
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                          Equipment
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                          Description
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                          Quantity
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {filteredInventories.map((inventory, index) => (
                        <tr 
                          key={index} 
                          className="hover:bg-white/5 transition-all duration-300 group"
                          style={{
                            animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`
                          }}
                        >
                          <td className="px-6 py-6">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300">
                                {getSportIcon(inventory.sportCategory.name)}
                              </div>
                              <div>
                                <div className="text-lg font-semibold text-white capitalize">
                                  {inventory.sportCategory.name}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-6">
                            <div className="text-lg font-medium text-white group-hover:text-blue-300 transition-colors duration-300">
                              {inventory.equipment.name}
                            </div>
                          </td>
                          <td className="px-6 py-6">
                            <div className="text-slate-300 max-w-xs">
                              {inventory.description}
                            </div>
                          </td>
                          <td className="px-6 py-6">
                            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold ${getQuantityColor(inventory.quantity)} group-hover:scale-105 transition-transform duration-300`}>
                              {inventory.quantity} units
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="h-20"></div>
      <Sidebar />
      <Footer />

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Inventory;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserService from "./service/UserService";
import Footer from './Footer';
import Sidebar from './Sidebar';

function CreateNews(){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const token = localStorage.getItem('token');
  const [deleteId, setDeleteId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newNews = { title, description };
    try {
      const response = await UserService.createNews(newNews, token);
      console.log(response.data);
      setTitle('');
      setDescription('');

      axios.get('http://localhost:8080/adminuser/latest-news', {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then(response => {
              setNews(response.data.data);
            })
            .catch(error => {
              console.error(error);
            });

    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteNews = async (newsId) => {
      setDeleteId(newsId);
    };

    const handleConfirmDelete = async () => {
      try {
        const token = localStorage.getItem("token");
        await UserService.deleteNews(deleteId, token);
        setNews((prevNews) => prevNews.filter((news) => news.id !== deleteId));
        setDeleteId(null);
      } catch (error) {
        console.error(error);
      }
    };

    const handleCancelDelete = () => {
      setDeleteId(null);
    };

  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/adminuser/latest-news', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        setNews(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header Section */}
      <div className="px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Page Title Card */}
          <div className="text-center mb-12 transform transition-all duration-500 hover:scale-105">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
              Create News
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Share the latest updates and announcements with your sports community
            </p>
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

          {/* Create News Form Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden transform transition-all duration-300 hover:shadow-3xl">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white">Add New Article</h2>
              <p className="text-blue-100 mt-1">Fill in the details below to create a news post</p>
            </div>
            
            <div className="px-8 py-8">
              <form className="space-y-8">
                {/* Title Input */}
                <div className="group">
                  <label htmlFor="title" className="block text-sm font-semibold leading-6 text-gray-900 mb-3">
                    News Title
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={title} 
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Enter a compelling news title..."
                      className="block w-full rounded-2xl border-0 px-6 py-4 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-lg transition-all duration-300 hover:shadow-xl focus:shadow-xl transform hover:-translate-y-1"
                    />
                  </div>
                </div>

                {/* Description Textarea */}
                <div className="group">
                  <label htmlFor="description" className="block text-sm font-semibold leading-6 text-gray-900 mb-3">
                    Article Content
                  </label>
                  <div className="relative">
                    <textarea
                      id="description"
                      name="description"
                      rows="6"
                      value={description} 
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Write your news content here..."
                      className="block w-full rounded-2xl border-0 px-6 py-4 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-lg transition-all duration-300 hover:shadow-xl focus:shadow-xl transform hover:-translate-y-1 resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="group relative w-full flex justify-center items-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                    </svg>
                    Create News Article
                    <svg className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* News Management Section */}
      <div className="px-6 pb-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            {/* Table Header */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-8 py-6">
              <h2 className="text-2xl font-bold text-white">News Management</h2>
              <p className="text-gray-300 mt-1">Manage your published news articles</p>
            </div>

            {/* Table Content */}
            <div className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-8 py-6 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span>ID</span>
                        </div>
                      </th>
                      <th className="px-8 py-6 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                          <span>News Title</span>
                        </div>
                      </th>
                      <th className="px-8 py-6 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                          <span>Actions</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {news.map((newsItem, index) => (
                      <tr 
                        key={newsItem.id}
                        className="hover:bg-blue-50 transition-all duration-300 transform hover:scale-[1.02] group"
                      >
                        <td className="px-8 py-6 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-sm">#{newsItem.id}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <div className="flex items-center">
                            <div>
                              <div className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                                {newsItem.title}
                              </div>
                              <div className="text-sm text-gray-500 mt-1">
                                Article #{index + 1}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-6 whitespace-nowrap">
                          <button
                            onClick={(e) => {e.preventDefault();handleDeleteNews(newsItem.id);}}
                            className="group relative inline-flex items-center px-6 py-3 text-sm font-semibold text-red-600 bg-red-50 rounded-xl hover:bg-red-100 hover:text-red-700 focus:outline-none focus:ring-4 focus:ring-red-200 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                          >
                            <svg className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                            </svg>
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Empty State */}
            {news.length === 0 && (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No news articles yet</h3>
                <p className="text-gray-500">Create your first news article to get started</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity backdrop-blur-sm" aria-hidden="true"></div>
            
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            {/* Modal */}
            <div className="inline-block align-bottom bg-white rounded-3xl px-8 pt-8 pb-6 text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-gray-200 animate-pulse">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-r from-red-100 to-red-200 sm:mx-0">
                  <svg className="h-8 w-8 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-6 sm:text-left">
                  <h3 className="text-2xl leading-6 font-bold text-gray-900">
                    Delete Confirmation
                  </h3>
                  <div className="mt-4">
                    <p className="text-lg text-gray-600">
                      Are you sure you want to delete this news article? This action cannot be undone.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 sm:flex sm:flex-row-reverse gap-4">
                <button 
                  type="button" 
                  onClick={handleConfirmDelete}
                  className="group w-full inline-flex justify-center items-center rounded-2xl border border-transparent shadow-lg px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-base font-semibold text-white hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 sm:ml-3 sm:w-auto transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                  Yes, Delete
                </button>
                <button 
                  type="button" 
                  onClick={handleCancelDelete}
                  className="mt-3 w-full inline-flex justify-center items-center rounded-2xl border border-gray-300 shadow-lg px-6 py-3 bg-white text-base font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:mt-0 sm:w-auto transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Sidebar />
      <Footer />
    </div>
  );
};

export default CreateNews;
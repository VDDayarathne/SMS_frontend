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
  <div className="bg-[#787578]">
    <div className="px-6 py-12 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center rounded-3xl dark:bg-white/50 space-y-2 shadow-md rounded-3xl p-0 mb-8"><br/>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Add News</h1><br/>
             <p className="mt-3 text-lg text-gray-600"></p>
           </div>
           <div className="bg-white/50 max-w-2xl rounded-3xl mx-auto"><br/>
      <form className="mx-auto mt-16 max-w-xl sm:mt-5">
        <div className="sm:col-span-2">
          <label htmlFor="title" className="block text-sm font-semibold leading-6 text-gray-900">Title</label>
          <div className="mt-2.5">
            <input
              type="text"
              id="title"
              name="title"
              value={title} onChange={(e) => setTitle(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="description" className="block text-sm font-semibold leading-6 text-gray-900">Description</label>
          <div className="mt-2.5">
            <textarea
              id="description"
              name="description"
              rows="4"
              value={description} onChange={(e) => setDescription(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="mt-10">
          <button
            className="w-full px-4 py-2 font-bold text-white bg-[#787578] rounded-full hover:text-[#F6AC01] dark:text-white focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleSubmit}
          >
            Create News
          </button>
        </div>
      </form><br/></div>
    </div>



    <div className="bg-white rounded-3xl sm:mx-32 lg:mx-32 xl:mx-72 w-250">
      <table class="min-w-full divide-y divide-[#787578] overflow-x-auto w-250">
            <thead class="rounded-3xl w-250">
                <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Id
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                      </th>
                </tr>
            </thead>

            <tbody class="rounded-3xl divide-y divide-gray-200">
                    {news.map((newsItem) => (
                    	<tr key={newsItem.index}>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{newsItem.id}</div>
                            </td>
                            <td class="px-6py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{newsItem.title}</div>
                            </td><td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                                <a href="javascript:void(0)" class="ml-2 text-red-600 hover:text-red-900"
                                onClick={(e) => {e.preventDefault();handleDeleteNews(newsItem.id);}}
                                  >
                                  Delete</a>
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
                      <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                        Confirmation
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to delete this news?
                        </p>
                      </div>
                    </div>
                  </div>
    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button type="button" data-behavior="commit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-[#787578] hover:text-[#F6AC01] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={handleConfirmDelete}
                    >
                      Yes, Delete
                    </button>
                    <button type="button" data-behavior="cancel" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 text-base font-medium text-gray-700 bg-white hover:text-[#F6AC01] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm"
                      onClick={handleCancelDelete}
                    >
                      No, Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}


       <br/><br/><br/>
       <Sidebar />
    <Footer />

    </div>

  );
};

export default CreateNews;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserService from "./service/UserService";
import Footer from './Footer';

function CreateNews(){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newNews = { title, description };
    try {
      const response = await UserService.createNews(newNews, token);
      console.log(response.data);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error(error);
    }
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
  <>
    <div className="bg-white px-6 py-12 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Add News</h1>
        <p className="mt-3 text-lg text-gray-600">Add News</p>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20">
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
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-indigo-500 dark:bg-gray-700 dark:text-white dark:hover:bg-violate-900 focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleSubmit}
          >
            Create News
          </button>
        </div>
      </form>
    </div>



    <div style={{ backgroundColor: '#f4f4f0' }} className="sm:mx-32 lg:mx-32 xl:mx-72">
        <table class="min-w-full divide-y divide-gray-200 overflow-x-auto">
            <thead class="bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Id
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                    </th>
                </tr>
            </thead>

            <tbody class="bg-white divide-y divide-gray-200">
                    {news.map((newsItem) => (
                    	<tr key={newsItem.index}>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{newsItem.id}</div>
                            </td>
                            <td class="px-6py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{newsItem.title}</div>
                            </td><td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                                <a href="#" class="ml-2 text-red-600 hover:text-red-900">Delete</a>
                            </td>
                        </tr>
                        ))}
                      </tbody>
        </table>
        </div>


       <br/><br/><br/>
    <Footer />
    </>

  );
};

export default CreateNews;
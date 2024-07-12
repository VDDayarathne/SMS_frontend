import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Footer';
import Sidebar from './Sidebar';
import UserService from "./service/UserService";


  const LatestNews = () => {
    const [news, setNews] = useState([]);
    const token = localStorage.getItem('token');

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


    return(

<div className="bg-[#787578]">
<div>
    <div className="sm:mx-32 lg:mx-32 xl:mx-72">
    <ul className="p-4 lg:p-8S justify-center rounded-3xl dark:bg-white/25 space-y-2 dark:text-[#23262B]">
        {news.map((newsItem) => (
        <li key={newsItem.index}>
            <article>
                <div className="grid p-4 overflow-hidden md:grid-cols-5 rounded-3xl lg:p-6 xl:grid-cols-12 bg-white hover:dark:bg-gray-200">
                    <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9 text-[#23262B]">{newsItem.title}</h3>
                    <time datetime="" className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-600">{newsItem.createdAt}</time>
                    <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-700">{newsItem.description}</p>
                </div>
            </article>
        </li>
        ))}
    </ul>
    </div>

    {
      <React.Fragment>

      <Sidebar />
      </React.Fragment>
    }
    </div><Footer />

</div>

 );
};

export default LatestNews;
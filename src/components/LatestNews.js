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

<>
<div style={{ backgroundColor: '#f4f4f0' }} className="sm:mx-32 lg:mx-32 xl:mx-72">
<ul className="p-4 lg:p-8S justify-center dark:bg-gray-100 dark:text-gray-800">
	{news.map((newsItem) => (
	<li key={newsItem.index}>
		<article>
            <a rel="noopener noreferrer" href="https://www.sab.ac.lk/app/department-sports-sciences-and-physical-education-shines-south-asian-youth-table-tennis" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-50">
                <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">{newsItem.title}</h3>
                <time datetime="" className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-600">{newsItem.createdAt}</time>
                <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-700">{newsItem.description}</p>
                </a>
        </article>
	</li>
	))}
</ul>

    {
      <React.Fragment>
      <Footer />
      <Sidebar />
      </React.Fragment>
    }
    </div>

</>

 );
};

export default LatestNews;
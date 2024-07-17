import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import axios from 'axios';
import UserService from "./service/UserService";

const Staff = () => {
  const contacts = [
    {
      name: "Director",
      title: "Sampath Fernando",
      email: "sfernando@gmail.com",
      phone: "+45 381 77 983",
      imgSrc: "https://source.unsplash.com/100x100/?portrait?1"
    },
    {
      name: "Kanishka Yapa",
      title: "Lecturer",
      email: "kanishka@gmail.com",
      phone: "+45 381 77 983",
      imgSrc: "https://source.unsplash.com/100x100/?portrait?1"
    },
    {
      name: "Sampath",
      title: "Lecturer",
      email: "sfernando@gmail.com",
      phone: "+45 381 77 983",
      imgSrc: "https://source.unsplash.com/100x100/?portrait?1"
    },
    {
      name: "Sampath",
      title: "Lecturer",
      email: "sfernando@gmail.com",
      phone: "+45 381 77 983",
      imgSrc: "https://source.unsplash.com/100x100/?portrait?1"
    },
    {
          name: "Director",
          title: "Sampathth Fernando",
          email: "sfernando@gmail.com",
          phone: "+45 381 77 983",
          imgSrc: "https://source.unsplash.com/100x100/?portrait?1"
        },
        {
          name: "Kanishkaa Yapa",
          title: "Lecturer",
          email: "kanishka@gmail.com",
          phone: "+45 381 77 983",
          imgSrc: "https://source.unsplash.com/100x100/?portrait?1"
        },
        {
          name: "Sampathth",
          title: "Lecturer",
          email: "sfernando@gmail.com",
          phone: "+45 381 77 983",
          imgSrc: "https://source.unsplash.com/100x100/?portrait?1"
        },
        {
          name: "Sampathth",
          title: "Lecturer",
          email: "sfernando@gmail.com",
          phone: "+45 381 77 983",
          imgSrc: "https://source.unsplash.com/100x100/?portrait?1"
        }
  ];

  const ContactCard = ({ name, title, email, phone, imgSrc }) => (
    <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-white/75 dark:text-gray-800 rounded-3xl">
      <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0 rounded-3xl">
        <img src={imgSrc} alt={`${name}'s portrait`} className="object-cover object-center w-full h-full rounded dark:bg-gray-500 rounded-3xl" />
      </div>
      <div className="flex flex-col space-y-4 rounded-3xl">
        <div>
          <h2 className="text-2xl font-semibold">{name}</h2>
          <span className="text-sm dark:text-gray-600">{title}</span>
        </div>
        <div className="space-y-1">
          <span className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
              <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
            </svg>
            <span className="dark:text-gray-600">{email}</span>
          </span>
          <span className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phone number" className="w-4 h-4">
              <path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
            </svg>
            <span className="dark:text-gray-600">{phone}</span>
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#787578]">
      <Sidebar /><br/><br/>
      <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center rounded-3xl bg-white/75 space-y-2 shadow-md rounded-3xl p-0 mb-8"><br/>
           <h1 className="text-4xl text-center text-[#23262B] font-bold mb-8">Staff</h1>
           <br/><br/>
         </div>

      <div className=" bg-[#787578] sm:mx-32 lg:mx-32 xl:mx-72 rounded-3xl mx-auto">
      <div className="py-5 bg-white/25 rounded-3xl p-4 mb-4 items-center justify-center mx-auto">
      <div className="grid grid-cols-2 text-sm gap-x-5 gap-y-5 rounded-3xl mx-auto">
        {contacts.map((contact, index) => (
          <ContactCard
            key={index}
            name={contact.name}
            title={contact.title}
            email={contact.email}
            phone={contact.phone}
            imgSrc={contact.imgSrc}
          />
        ))}
      </div></div></div><br/><br/>
      <Footer />
    </div>
  );
};

export default Staff;
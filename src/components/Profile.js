import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import UpdateProfile from './UpdateProfile';
import UserService from "./service/UserService";


function ProfilePage() {
    const [profileInfo, setProfileInfo] = useState({});

    useEffect(() => {
        fetchProfileInfo();
    }, []);

    const fetchProfileInfo = async () => {
        try {

            const token = localStorage.getItem('token'); // Retrieve the token from localStorage
            const response = await UserService.getYourProfile(token);
            setProfileInfo(response.ourUsers);
        } catch (error) {
            console.error('Error fetching profile information:', error);
        }
    };


  return (

    <div className="bg-[#787578] bg-[url('https://wallpaperaccess.com/full/1767847.jpg')] bg-cover bg-center"><br/><br/><br/>
    <Sidebar />
    <div className="mx-auto p-2 mb-8">
    <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center rounded-3xl dark:bg-white/50 space-y-2 shadow-md rounded-3xl p-0 mb-8"><br/>
                <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900">Profile Information</h1>
                <br/><br/>
              </div>
  <div className="bg-white/25 max-w-4xl rounded-3xl mx-auto p-2 mb-8"><br/>
    <div className="bg-white rounded-3xl sm:mx-32 lg:mx-32 ">

        <div class=" border-gray-200 px-4 py-5 sm:p-0">
            <dl class="sm:divide-y sm:divide-gray-200">
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Name
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {profileInfo.name}
                    </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Bio
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {profileInfo.bio}
                    </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Email address
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {profileInfo.email}
                    </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Index Number
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {profileInfo.indexnumber}
                    </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Faculty / Department
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {profileInfo.faculty}
                    </dd>
                </div>
                <div class="mb-6 text-center">
                    <button
                        class="w-full px-4 py-2 font-bold text-white bg-[#787578] rounded-full hover:text-[#F6AC01] dark:bg-[#787578] dark:text-white dark:hover:bg-violate-900 focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                    <Link to={`/updateprofile/${profileInfo.id}`}>
                    Update Your Profile</Link>
                    </button>
                </div>


            </dl>
        </div>
    </div>
    </div>
    </div>
    <Footer />
    </div>
      );
    }

    export default ProfilePage;
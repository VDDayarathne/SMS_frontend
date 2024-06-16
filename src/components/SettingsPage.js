import React, { useState } from 'react';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';*/
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default function SettingsPage() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
    <><Sidebar />
    <div style={{ backgroundColor: '#f4f4f0' }} className="sm:mx-32 lg:mx-32 xl:mx-72">
        <div className="bg-white">
            <div className="mb-16"></div>
            <div className="container mx-auto">
                <div className="max-w-sm mx-auto bg-white shadow-md rounded-md p-8">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-4 text-red-500">SETTINGS</h2>
                    <form>
                        <div className="mb-6">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">User name</label>
                            <input type="text" id="username" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                        <div className="relative mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 px-3 py-2 flex items-center focus:outline-none"
                                onClick={togglePasswordVisibility}
                            >

                            </button>
                        </div>
                        <button
                            type="button"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm bg-red-500 font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={() => navigate('/')}
                        >
                            Change
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </div>
        <Footer />
        </>
    );
}

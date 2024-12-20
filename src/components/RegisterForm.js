import React, { useState } from 'react';
import axios from 'axios';
import LoginForm from './LoginForm';
import UserService from "./service/UserService";
import { useNavigate } from 'react-router-dom';

function RegistrationPage(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'USER',
        faculty: '',
        bio: '',
        indexnumber: ''
    });
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Call the register method from UserService
            const token = localStorage.getItem('token');
            await UserService.register(formData, token);

            // Clear the form fields after successful registration
            setFormData({
                name: '',
                email: '',
                password: '',
                role: '',
                faculty: '',
                bio: '',
                indexnumber: ''
            });
            setRegistrationSuccess(true);
            alert('User registered successfully');
            navigate('/login');

        } catch (error) {
            console.error('Error registering user:', error);
            alert('An error occurred while registering user');
        }
    };

    if (registrationSuccess) {
        return (
            <div className="login-container w-full h-screen flex flex-col items-center justify-center px-4">
                <div className="text-center pb-8">
                    <img src="https://www.freepnglogos.com/uploads/sport-png/sport-steadman-philippon-institute-official-site-16.png" width={150} className="mx-auto" />
                    <div className="mt-5">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Sport Center</h3>
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                    </div>
                </div>
                <button
                    className="w-full px-2 py-2 text-white font-medium bg-gray-700 hover:bg-blue-900 active:bg-blue-900 rounded-lg duration-150"
                    >
                    <a href="/login">
                        Login
                    </a>
                </button>

            </div>
        );
    }

    return (
        <main className="centered-container w-full h-screen flex flex-col items-center justify-center px-4">
            <div className="login-container max-w-sm w-full text-gray-600">
                <div className="text-center">
                    <img src="https://www.freepnglogos.com/uploads/sport-png/sport-steadman-philippon-institute-official-site-16.png" width={150} className="mx-auto" />
                    <div className="login-link mt-5 space-y-1">
                        <h4 className="text-gray-800 text-2xl font-bold sm:text-3xl">Membership of Sport Center</h4>
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl"></h3>
                        <p className="registration-link">Already have an account? <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</a></p>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5"
                >
                    <div className="input-container">
                        <label className="font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            name="email" value={formData.email} onChange={handleInputChange} required
                        />
                    </div>
                    <div className="input-container">
                        <label className="font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            name="password" value={formData.password} onChange={handleInputChange} required
                        />
                    </div>
                    <div className="input-container">
                        <label className="font-medium">
                            Name
                        </label>
                        <input
                            type="name"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            name="name" value={formData.name} onChange={handleInputChange} required
                        />
                    </div>
                    <div className="input-container">
                        <label className="font-medium">
                            Faculty
                        </label>
                        <input
                            type="faculty"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            name="faculty" value={formData.faculty} onChange={handleInputChange} required
                        />
                    </div>
                    <div className="input-container">
                        <label className="font-medium">
                            Index Number
                        </label>
                        <input
                            type="indexnumber"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            name="indexnumber" value={formData.indexnumber} onChange={handleInputChange} required
                        />
                    </div>
                    <div className="input-container">
                        <label className="font-medium">
                            Bio
                        </label>
                        <input
                            type="bio"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            name="bio" value={formData.bio} onChange={handleInputChange} required
                        />
                    </div>
                    {/*<div className="input-container">
                        <label className="font-medium">
                            Role
                        </label>
                        <input
                            type="role"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            name="role" value={formData.role} onChange={handleInputChange} required
                        />
                    </div>*/}
                    <button
                        className="login-button w-full px-4 py-2 text-white font-medium bg-gray-700 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                        Create account
                    </button>
                </form>
                <button className="w-full flex items-center justify-center gap-x-3 py-2.5 mt-5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100" >
                    <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_17_40)">
                            <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                            <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                            <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                            <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                        </g>
                        <defs>
                            <clipPath id="clip0_17_40">
                                <rect width="48" height="48" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    Continue with Google
                </button>
            </div>
        </main>
    )
}

export default RegistrationPage;
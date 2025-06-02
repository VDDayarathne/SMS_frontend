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
            <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-100 flex flex-col items-center justify-center px-4 py-8">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-blue-50/30"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23059669&quot; fill-opacity=&quot;0.03&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
                <div className="relative z-10 w-full max-w-md">
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 space-y-8 text-center transform hover:scale-[1.01] transition-all duration-300">
                        {/* Success Icon */}
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full blur opacity-20 animate-pulse"></div>
                                <div className="relative w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {/* Success Message */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                Welcome to SportsPro!
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Your account has been created successfully
                            </p>
                        </div>
                        {/* Login Button */}
                        <a href="/login" className="block">
                            <button className="group w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-emerald-700 hover:to-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-200 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
                                <span className="flex items-center justify-center space-x-2">
                                    <span>Continue to Login</span>
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </button>
                        </a>
                        {/* Footer Badge */}
                        <div className="inline-flex items-center space-x-2 text-xs text-gray-500 bg-emerald-50/80 px-4 py-2 rounded-full">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                            <span>Account Created Successfully</span>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-100 flex flex-col items-center justify-center px-4 py-8">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/30"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%239333ea&quot; fill-opacity=&quot;0.03&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
            <div className="relative z-10 w-full max-w-lg">
                {/* Main Card Container */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 space-y-8 transform hover:scale-[1.01] transition-all duration-300">
                    {/* Logo and Header Section */}
                    <div className="text-center space-y-6">
                        <div className="flex justify-center">
                            <div className="relative group">
                                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                                <div className="relative w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:-rotate-6 transition-transform duration-300">
                                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                Join SportsPro
                            </h1>
                            <p className="text-gray-600 text-lg">
                                Create your membership account
                            </p>
                            <p className="text-sm text-gray-500">
                                Already have an account?
                                <a href="/login" className="ml-1 font-semibold text-purple-600 hover:text-purple-700 transition-colors duration-200">
                                    Sign in
                                </a>
                            </p>
                        </div>
                    </div>
                    {/* Registration Form */}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Email Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 block">
                                Email Address
                            </label>
                            <div className="relative group">
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 text-gray-900 bg-white/50 border border-gray-200 rounded-xl outline-none focus:border-purple-600 focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all duration-300 group-hover:border-gray-300"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        </div>
                        {/* Password Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 block">
                                Password
                            </label>
                            <div className="relative group">
                                <input
                                    type="password"
                                    required
                                    className="w-full px-4 py-3 text-gray-900 bg-white/50 border border-gray-200 rounded-xl outline-none focus:border-purple-600 focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all duration-300 group-hover:border-gray-300"
                                    placeholder="Create a password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        </div>
                        {/* Name Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 block">
                                Full Name
                            </label>
                            <div className="relative group">
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 text-gray-900 bg-white/50 border border-gray-200 rounded-xl outline-none focus:border-purple-600 focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all duration-300 group-hover:border-gray-300"
                                    placeholder="Enter your full name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        </div>
                        {/* Two Column Layout for Faculty and Index */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 block">
                                    Faculty
                                </label>
                                <div className="relative group">
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 text-gray-900 bg-white/50 border border-gray-200 rounded-xl outline-none focus:border-purple-600 focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all duration-300 group-hover:border-gray-300"
                                        placeholder="Your faculty"
                                        name="faculty"
                                        value={formData.faculty}
                                        onChange={handleInputChange}
                                    />
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 block">
                                    Index Number
                                </label>
                                <div className="relative group">
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 text-gray-900 bg-white/50 border border-gray-200 rounded-xl outline-none focus:border-purple-600 focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all duration-300 group-hover:border-gray-300"
                                        placeholder="Your index number"
                                        name="indexnumber"
                                        value={formData.indexnumber}
                                        onChange={handleInputChange}
                                    />
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </div>
                            </div>
                        </div>
                        {/* Bio Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 block">
                                Bio
                            </label>
                            <div className="relative group">
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 text-gray-900 bg-white/50 border border-gray-200 rounded-xl outline-none focus:border-purple-600 focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all duration-300 group-hover:border-gray-300"
                                    placeholder="Tell us about yourself"
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleInputChange}
                                />
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        </div>
                        {/* Create Account Button */}
                        <button
                            type="submit"
                            className="group relative w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-200 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                        >
                            <span className="relative flex items-center justify-center space-x-2">
                                <span>Create Account</span>
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </button>
                    </form>
                    {/* Divider */}
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500">Or continue with</span>
                        </div>
                    </div>
                    {/* Google Sign Up */}
                    <button className="group w-full flex items-center justify-center space-x-3 py-3 px-4 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-gray-100 transition-all duration-300 transform hover:-translate-y-0.5">
                        <svg className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_17_40)">
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
                        <span className="group-hover:text-gray-900 transition-colors duration-300">Continue with Google</span>
                    </button>
                </div>
                {/* Footer Badge */}
                <div className="text-center mt-8">
                    <div className="inline-flex items-center space-x-2 text-xs text-gray-500 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span>Secure Registration Process</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default RegistrationPage;
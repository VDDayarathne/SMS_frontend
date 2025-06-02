import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import UserService from "./service/UserService";



function LoginForm({ onLogin }) {

     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [error, setError] = useState('')
     const navigate = useNavigate();

     const handleSubmit = async (e) => {
         e.preventDefault();

         try {
             const userData = await UserService.login(email, password)
             console.log(userData)
             if (userData.token) {
                 localStorage.setItem('token', userData.token)
                 onLogin(userData);
                 navigate('/dashboard')

             }else{
                 setError(userData.message)
             }

         } catch (error) {
             console.log(error)
             setError(error.message)
             setTimeout(()=>{
                 setError('');
             }, 5000);
         }
     }




    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center px-4 py-8">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%232563eb&quot; fill-opacity=&quot;0.03&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
            
            <div className="relative z-10 w-full max-w-md">
                {/* Main Card Container */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 space-y-8 transform hover:scale-[1.01] transition-all duration-300">
                    
                    {/* Logo and Header Section */}
                    <div className="text-center space-y-6">
                        <div className="flex justify-center">
                            <div className="relative group">
                                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                                <div className="relative w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:-rotate-6 transition-transform duration-300">
                                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                Welcome Back
                            </h1>
                            <p className="text-gray-600 text-lg">
                                Sign in to your SportsPro account
                            </p>
                        </div>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm animate-pulse">
                            {error}
                        </div>
                    )}

                    {/* Login Form */}
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
                                    className="w-full px-4 py-3 text-gray-900 bg-white/50 border border-gray-200 rounded-xl outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all duration-300 group-hover:border-gray-300"
                                    placeholder="Enter your email"
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
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
                                    className="w-full px-4 py-3 text-gray-900 bg-white/50 border border-gray-200 rounded-xl outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all duration-300 group-hover:border-gray-300"
                                    placeholder="Enter your password"
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center space-x-3">
                                <input 
                                    type="checkbox" 
                                    id="remember-me-checkbox" 
                                    className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                />
                                <label htmlFor="remember-me-checkbox" className="text-gray-600 cursor-pointer hover:text-gray-800 transition-colors duration-200">
                                    Remember me
                                </label>
                            </div>
                            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                                Forgot password?
                            </a>
                        </div>

                        {/* Sign In Button */}
                        <button
                            type="submit"
                            className="group relative w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                        >
                            <span className="relative flex items-center justify-center space-x-2">
                                <span>Sign In</span>
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

                    {/* Google Sign In */}
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

                    {/* Sign Up Link */}
                    <p className="text-center text-gray-600">
                        Don't have an account? 
                        <a href="/register" className="ml-1 font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200">
                            Sign up
                        </a>
                    </p>
                </div>

                {/* Footer Badge */}
                <div className="text-center mt-8">
                    <div className="inline-flex items-center space-x-2 text-xs text-gray-500 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span>Secure SportsPro Login</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default LoginForm;
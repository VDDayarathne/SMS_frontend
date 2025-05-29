import React from 'react';

export default () => {
    return (
       <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white w-full">
  
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-10 max-w-7xl mx-auto px-4 py-8">
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 bg-emerald-600 rounded-full animate-bounce"></div>
                <div className="absolute top-40 right-40 w-16 h-16 bg-purple-600 rounded-full animate-ping"></div>
            </div>
            
            {/* Main Footer Content */}
            <div className="relative z-10 px-4 py-16">
                <div className="container max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="flex flex-col lg:flex-row justify-between items-start mb-12 space-y-8 lg:space-y-0">
                        {/* Logo Section */}
                        <div className="lg:w-1/3">
                            <div className="group flex items-center space-x-4 mb-6">
                                <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                                    <img
                                        src="https://www.freepnglogos.com/uploads/sport-png/sport-steadman-philippon-institute-official-site-16.png"
                                        alt="Sport Center Logo"
                                        className="w-10 h-10 object-cover rounded-lg"
                                    />
                                    <div className="absolute inset-0 bg-blue-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                        Sport Center
                                    </h2>
                                    <p className="text-gray-400 text-sm mt-1">Excellence in Sports Management</p>
                                </div>
                            </div>
                            
                            {/* Contact Info */}
                            <div className="space-y-3 text-gray-300">
                                <div className="flex items-start space-x-3 group">
                                    <div className="w-5 h-5 bg-blue-600 rounded-full flex-shrink-0 mt-1 group-hover:bg-emerald-600 transition-colors duration-300"></div>
                                    <div>
                                        <p className="leading-relaxed">
                                            Sport Center, Sabaragamuwa University of Sri Lanka,<br/>
                                            P.O. Box 02, Belihuloya 70140, Sri Lanka
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 group">
                                    <div className="w-5 h-5 bg-emerald-600 rounded-full flex-shrink-0 group-hover:bg-purple-600 transition-colors duration-300"></div>
                                    <p>(+94) 45-2280291 / (+94) 45-2280015</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Newsletter Section */}
                        <div className="lg:w-1/3">
                            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
                            <p className="text-gray-400 mb-4">Get the latest sports news and updates from our center.</p>
                            <div className="flex">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-l-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                                />
                                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-r-xl font-medium hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Links Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
                        {/* Quick Access */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg text-blue-400 uppercase tracking-wide">Quick Access</h3>
                            <ul className="space-y-2">
                                {[
                                    { name: 'Staff', href: '/staff' },
                                    { name: 'Students', href: '#' },
                                    { name: 'Members', href: '#' },
                                    { name: 'FAQ', href: '#' }
                                ].map((link, index) => (
                                    <li key={index} className="group">
                                        <a 
                                            href={link.href}
                                            className="text-gray-300 hover:text-emerald-400 transition-all duration-300 flex items-center space-x-2 group-hover:translate-x-2"
                                        >
                                            <span className="w-0 h-0.5 bg-emerald-400 group-hover:w-4 transition-all duration-300"></span>
                                            <span>{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            
                            <h3 className="font-semibold text-lg text-purple-400 uppercase tracking-wide pt-4">Terms & Policies</h3>
                            <ul className="space-y-2">
                                {[
                                    { name: 'Privacy', href: '/privacy' },
                                    { name: 'Terms of Service', href: '/terms' }
                                ].map((link, index) => (
                                    <li key={index} className="group">
                                        <a 
                                            href={link.href}
                                            className="text-gray-300 hover:text-purple-400 transition-all duration-300 flex items-center space-x-2 group-hover:translate-x-2"
                                        >
                                            <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                                            <span>{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* The University */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg text-blue-400 uppercase tracking-wide">The University</h3>
                            <ul className="space-y-2">
                                {[
                                    { name: 'About Us', href: 'https://www.sab.ac.lk/about-the-university' },
                                    { name: 'Vision & Mission', href: 'https://www.sab.ac.lk/vision-mission' },
                                    { name: 'History', href: 'https://www.sab.ac.lk/history' },
                                    { name: 'Chancellor', href: 'https://www.sab.ac.lk/chancellor' },
                                    { name: 'Vice Chancellor', href: 'https://www.sab.ac.lk/vice-chancellor' },
                                    { name: 'Overview', href: '/overview' }
                                ].map((link, index) => (
                                    <li key={index} className="group">
                                        <a 
                                            href={link.href}
                                            className="text-gray-300 hover:text-emerald-400 transition-all duration-300 flex items-center space-x-2 group-hover:translate-x-2"
                                        >
                                            <span className="w-0 h-0.5 bg-emerald-400 group-hover:w-4 transition-all duration-300"></span>
                                            <span>{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Publications */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg text-purple-400 uppercase tracking-wide">Publications</h3>
                            <ul className="space-y-2">
                                {[
                                    { name: 'Journal of Agricultural Sciences', href: 'https://www.sab.ac.lk/agri-journal' },
                                    { name: 'Akyana – Narrations', href: 'https://www.sab.ac.lk/cikcs/akyana_narrations' },
                                    { name: 'Newsletter', href: 'https://www.sab.ac.lk/crkd/newsletter' },
                                    { name: 'Sinhala Journal', href: 'https://www.sab.ac.lk/crkd/sinhala-journal-about' },
                                    { name: 'SUSL Journal', href: 'https://www.sab.ac.lk/crkd/susl-journal-about' },
                                    { name: 'Online Journal', href: 'https://suslj.sljol.info/' }
                                ].map((link, index) => (
                                    <li key={index} className="group">
                                        <a 
                                            href={link.href}
                                            className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center space-x-2 group-hover:translate-x-2"
                                        >
                                            <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                                            <span>{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Faculties */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg text-emerald-400 uppercase tracking-wide">Faculties</h3>
                            <ul className="space-y-2">
                                {[
                                    { name: 'Agricultural Sciences', href: 'https://www.sab.ac.lk/agri' },
                                    { name: 'Applied Sciences', href: 'https://www.sab.ac.lk/app' },
                                    { name: 'Computing', href: 'https://www.sab.ac.lk/computing' },
                                    { name: 'Geomatics', href: 'https://www.sab.ac.lk/geo' },
                                    { name: 'Management Studies', href: 'https://www.sab.ac.lk/mgmt' },
                                    { name: 'Medicine', href: 'https://www.sab.ac.lk/med' },
                                    { name: 'Social Sciences & Languages', href: 'https://www.sab.ac.lk/fssl' },
                                    { name: 'Technology', href: 'https://www.sab.ac.lk/tech' },
                                    { name: 'Graduate Studies', href: 'https://www.sab.ac.lk/fgs' }
                                ].map((link, index) => (
                                    <li key={index} className="group">
                                        <a 
                                            href={link.href}
                                            className="text-gray-300 hover:text-emerald-400 transition-all duration-300 flex items-center space-x-2 group-hover:translate-x-2"
                                        >
                                            <span className="w-0 h-0.5 bg-emerald-400 group-hover:w-4 transition-all duration-300"></span>
                                            <span>{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Centres */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg text-blue-400 uppercase tracking-wide">Centres</h3>
                            <ul className="space-y-2">
                                {[
                                    { name: 'Computer Studies', href: 'https://www.sab.ac.lk/center-for-computer-studies' },
                                    { name: 'Gender Equity', href: 'https://www.sab.ac.lk/centre-for-gender-equity-and-equalit' },
                                    { name: 'Indigenous Knowledge', href: 'https://www.sab.ac.lk/cikcs' },
                                    { name: 'Distance Learning', href: 'https://www.sab.ac.lk/codl' },
                                    { name: 'Quality Assurance', href: 'https://www.sab.ac.lk/iqac' },
                                    { name: 'Research & Knowledge', href: 'https://www.sab.ac.lk/crkd' },
                                    { name: 'Staff Development', href: 'https://www.sab.ac.lk/sdc' },
                                    { name: 'Career Guidance', href: 'https://www.sab.ac.lk/career-guidance-unit' },
                                    { name: 'Physical Education', href: 'https://www.sab.ac.lk/physical-education' },
                                    { name: 'Business Linkage', href: 'https://www.sab.ac.lk/ublc' }
                                ].map((link, index) => (
                                    <li key={index} className="group">
                                        <a 
                                            href={link.href}
                                            className="text-gray-300 hover:text-purple-400 transition-all duration-300 flex items-center space-x-2 group-hover:translate-x-2"
                                        >
                                            <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                                            <span>{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Departments */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg text-emerald-400 uppercase tracking-wide">Departments</h3>
                            <ul className="space-y-2">
                                {[
                                    { name: 'Academic Establishment', href: 'https://www.sab.ac.lk/academic-establishment' },
                                    { name: 'Capital Works', href: 'https://www.sab.ac.lk/capital-works-planning' },
                                    { name: 'Civil Engineering', href: 'https://www.sab.ac.lk/civil_engineering' },
                                    { name: 'Examinations', href: 'https://www.sab.ac.lk/examination_division' },
                                    { name: 'Finance Division', href: 'https://www.sab.ac.lk/finance-division' },
                                    { name: 'General Administration', href: 'https://www.sab.ac.lk/administration-officers' },
                                    { name: 'Non Academic', href: 'https://www.sab.ac.lk/non-academic-establishment' },
                                    { name: 'Registrar Office', href: 'https://www.sab.ac.lk/registrar_office' },
                                    { name: 'Student Affairs', href: 'https://www.sab.ac.lk/student-affairs' }
                                ].map((link, index) => (
                                    <li key={index} className="group">
                                        <a 
                                            href={link.href}
                                            className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center space-x-2 group-hover:translate-x-2"
                                        >
                                            <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                                            <span>{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Social Media & External Links */}
                    <div className="border-t border-gray-700 pt-8 mb-8">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="flex flex-wrap gap-4">
                                {[
                                    { name: 'Ministry of Higher Education', href: 'https://mohe.gov.lk/index.php?lang=en' },
                                    { name: 'University Grants Commission', href: 'https://www.ugc.ac.lk/' },
                                    { name: 'Ragging Complaint Portal', href: 'https://eugc.ac.lk/rag/' },
                                    { name: 'Maps & Directions', href: 'https://goo.gl/maps/3HXgnoqfSe3VeKPn9' }
                                ].map((link, index) => (
                                    <a 
                                        key={index}
                                        href={link.href}
                                        className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl text-sm text-gray-300 hover:text-white hover:bg-blue-600/30 transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                            
                            {/* Social Icons */}
                            <div className="flex space-x-4">
                                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, index) => (
                                    <div 
                                        key={index}
                                        className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center cursor-pointer transform hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg"
                                    >
                                        <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Copyright Section */}
            <div className="relative z-10 border-t border-gray-700 bg-black/20 backdrop-blur-sm">
                <div className="container max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            © 2024 Sabaragamuwa University of Sri Lanka. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>Made with</span>
                            <div className="w-4 h-4 bg-red-500 rounded-sm animate-pulse"></div>
                            <span>for Sports Excellence</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
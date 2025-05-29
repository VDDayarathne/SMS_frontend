import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mb-8 transform transition-transform duration-300 hover:scale-110 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              About Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the heart of athletic excellence at Sabaragamuwa University Sports Centre
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Welcome Section */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">
                  Welcome to Sabaragamuwa University Sports Centre
                </h2>
              </div>
            </div>
            <div className="px-8 py-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                At the Sabaragamuwa University Sports Centre, we are dedicated to promoting a vibrant and inclusive sports culture within our university community. Our mission is to provide exceptional facilities, support, and opportunities for all students, staff, and faculty members to engage in physical activities, fostering a healthy and active lifestyle.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          
          {/* Mission Card */}
          <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
            </div>
            <div className="px-6 py-6">
              <p className="text-gray-700 leading-relaxed">
                Our mission is to cultivate a dynamic sports environment that encourages physical fitness, teamwork, and personal growth. We aim to inspire individuals to pursue excellence in sports while emphasizing the values of integrity, discipline, and sportsmanship.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
            </div>
            <div className="px-6 py-6">
              <p className="text-gray-700 leading-relaxed">
                Our vision is to become a leading sports centre in the region, recognized for our commitment to quality, innovation, and inclusivity. We strive to create an environment where every individual can explore their athletic potential and develop a lifelong passion for sports.
              </p>
            </div>
          </div>
        </div>

        {/* Facilities Section */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white">Facilities</h3>
              </div>
            </div>
            <div className="px-8 py-8">
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Indoor Complex */}
                <div className="flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-blue-50">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Indoor Sports Complex</h4>
                    <p className="text-gray-600">Equipped with courts for basketball, badminton, chess, carrom, martial arts and volleyball, along with a fully functional gymnasium.</p>
                  </div>
                </div>

                {/* Outdoor Fields */}
                <div className="flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-emerald-50">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Outdoor Fields</h4>
                    <p className="text-gray-600">Expansive fields for cricket, football, and rugby, providing ample space for training and competitions.</p>
                  </div>
                </div>

                {/* Track and Field */}
                <div className="flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-purple-50">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Track and Field</h4>
                    <p className="text-gray-600">A modern track for athletics, complete with facilities for field events such as long jump, high jump, and shot put.</p>
                  </div>
                </div>

                {/* Swimming Pool */}
                <div className="flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-blue-50">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Swimming Pool</h4>
                    <p className="text-gray-600">A well-maintained swimming pool for both recreational and competitive swimming.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Programs & Activities Section */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 py-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white">Programs and Activities</h3>
              </div>
            </div>
            <div className="px-8 py-8">
              <div className="grid md:grid-cols-2 gap-6">
                
                <div className="flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-emerald-50">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Inter-University Competitions</h4>
                    <p className="text-gray-600">Providing opportunities for our athletes to compete at national and international levels.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-blue-50">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Intramural Sports</h4>
                    <p className="text-gray-600">Encouraging friendly competition among students through various intramural leagues and tournaments.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-purple-50">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Fitness Classes</h4>
                    <p className="text-gray-600">Offering group fitness sessions, including yoga, aerobics, and strength training, to promote overall well-being.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-orange-50">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Workshops and Clinics</h4>
                    <p className="text-gray-600">Conducting workshops and skill development clinics to enhance athletic performance and knowledge.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team & Get Involved Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          
          {/* Our Team */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Our Team</h3>
              </div>
            </div>
            <div className="px-6 py-6">
              <p className="text-gray-700 leading-relaxed">
                Our dedicated team of coaches, trainers, and administrative staff is committed to supporting our athletes and ensuring the smooth operation of our sports centre. We work tirelessly to create an inclusive and motivating environment for all members of our community.
              </p>
            </div>
          </div>

          {/* Get Involved */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 001-1v-1a2 2 0 112 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Get Involved</h3>
              </div>
            </div>
            <div className="px-6 py-6">
              <p className="text-gray-700 leading-relaxed">
                Whether you are a seasoned athlete or just starting your fitness journey, the Sabaragamuwa University Sports Centre welcomes you. Join us in our mission to promote health, wellness, and camaraderie through sports. Stay updated with our latest events and activities by following us on our social media channels and visiting our website regularly.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              For more information about our programs, facilities, or to get involved, please contact us:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Address */}
            <div className="bg-white rounded-xl p-6 shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Address</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sabaragamuwa University of Sri Lanka, Pambahinna, P.O. Box 02, Belihuloya, 70140, Sri Lanka
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-xl p-6 shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
              </div>
              <p className="text-gray-600 font-medium">
                +94 (0)45 2280014
              </p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl p-6 shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Email</h4>
              </div>
              <p className="text-gray-600 font-medium">
                info@sab.ac.lk
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
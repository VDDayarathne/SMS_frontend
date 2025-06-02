import React, { useState, useEffect } from 'react';
import { Fragment } from 'react'
// Note: These would be your actual imports in the real component
// import Sidebar from './Sidebar';
import Footer from './Footer';
import FirstPage from './FirstPage';
// import AboutUs from './AboutUs';
// import NotificationList from './NotificationList';
// import AdminDashboard from './AdminDashboard';
// import Profile from './Profile';
// import SettingsPage from './SettingsPage';
// import LoginForm from './LoginForm';
import UserService from "./service/UserService";


// Mock HeadlessUI components
const Disclosure = ({ as: Component = 'nav', children, className }) => {
  const [open, setOpen] = useState(false);
  return (
    <Component className={className}>
      {typeof children === 'function' ? children({ open, setOpen }) : children}
    </Component>
  );
};

const DisclosureButton = ({ children, className, onClick, as: Component = 'button', href }) => {
  if (Component === 'a') {
    return <a href={href} className={className}>{children}</a>;
  }
  return <button className={className} onClick={onClick}>{children}</button>;
};

const DisclosurePanel = ({ children, className }) => (
  <div className={className}>{children}</div>
);

// Mock icons
const BellIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
  </svg>
);

const Bars3Icon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const XMarkIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: true },
  /*{ name: 'Membership', href: '/login', current: false },*/
  { name: 'Sport Shedules', href: '/sport-shedule', current: false },
  { name: 'Inventory', href: '/inventory', current: false },
  { name: 'MyPlan', href: '/myplan', current: false },
  { name: 'Profile', href: '/userprofile', current: false },
  { name: 'About us', href: '/about-us', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '/userprofile' },
  { name: 'Settings', href: '/settings' },
  { name: 'Sign out', href: '/login' },
]





function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Example({ user }){
    const [isUserMenuOpen, setUserMenuOpen] = useState(false);

      const toggleUserMenu = () => {
        setUserMenuOpen(!isUserMenuOpen);
      };


      useEffect(() => {
        fetchProfileInfo();
      }, []);

      const fetchProfileInfo = async () => {
        try {
          const token = localStorage.getItem('token');
          const response = await UserService.getYourProfile(token);
          setProfileInfo(response.ourUsers);
        } catch (error) {
          console.error('Error fetching profile information:', error);
        }
      };

      const [profileInfo, setProfileInfo] = useState({});

  return (
    <>
      <div className="min-h-full bg-blue-50">
        {/* Modern SportsPro Header */}
        <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 shadow-2xl relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600"></div>
          
          <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <h1 className="flex items-center text-3xl font-bold tracking-tight text-white group">
                <div className="relative mr-4">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300 group-hover:scale-105 border border-white/20">
                    <img 
                      src="https://www.freepnglogos.com/uploads/sport-png/sport-steadman-philippon-institute-official-site-16.png" 
                      width={32} 
                      height={32} 
                      className="brightness-0 invert object-contain" 
                      alt="SportsPro"
                    />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 w-14 h-14 bg-white/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div>
                  <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    SportsPro
                  </span>
                  <div className="text-sm font-normal text-blue-100 -mt-1">
                    Sports Management System
                  </div>
                </div>
              </h1>
              
              {/* Quick Stats - Optional Enhancement */}
              <div className="hidden lg:flex items-center space-x-6 text-white/80">
                <div className="text-center">
                  <div className="text-lg font-bold text-white">12</div>
                  <div className="text-xs">Active Events</div>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-lg font-bold text-white">148</div>
                  <div className="text-xs">Members</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Modern Navigation */}
        <Disclosure as="nav" className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-blue-100 sticky top-0 z-30">
          {({ open, setOpen }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-1">
                        {navigation.map((item, index) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600',
                              'rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md group relative overflow-hidden'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {/* Animated background for active item */}
                            {item.current && (
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
                            )}
                            
                            <span className="relative flex items-center">
                              {item.name}
                              {/* Slide-in arrow for non-current items */}
                              {!item.current && (
                                <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              )}
                            </span>
                          </a>
                        ))}
                        
                        {/* Admin Dashboard Link */}
                        {profileInfo.role === 'ADMIN' && (
                          <a
                            href="/admin"
                            className="rounded-xl px-4 py-2.5 text-sm font-medium text-purple-600 hover:bg-purple-50 hover:text-purple-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md group border border-purple-200 hover:border-purple-300"
                          >
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                              </svg>
                              Admin Dashboard
                              <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Right side - Notifications */}
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <a href="/notification" className="group">
                        <button
                          type="button"
                          className="relative rounded-xl p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                          
                          {/* Notification badge */}
                          <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-xs font-bold text-white flex items-center justify-center animate-pulse">
                          </span>
                          
                          {/* Hover glow effect */}
                          <div className="absolute inset-0 rounded-xl bg-blue-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                        </button>
                      </a>
                    </div>
                  </div>
                  
                  {/* Mobile menu button */}
                  <div className="-mr-2 flex md:hidden">
                    <DisclosureButton 
                      className="relative inline-flex items-center justify-center rounded-xl bg-white p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg"
                      onClick={() => setOpen(!open)}
                    >
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </DisclosureButton>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation Panel */}
              <DisclosurePanel className="md:hidden bg-white/95 backdrop-blur-sm border-t border-blue-100">
                <div className="space-y-2 px-4 pb-3 pt-4">
                  {navigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current 
                          ? 'bg-blue-600 text-white shadow-lg' 
                          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600',
                        'block rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 hover:shadow-md'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <span className="flex items-center justify-between">
                        {item.name}
                        {item.current && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </span>
                    </DisclosureButton>
                  ))}
                  
                  {/* Mobile Admin Dashboard */}
                  {profileInfo.role === 'ADMIN' && (
                    <DisclosureButton
                      as="a"
                      href="/admin"
                      className="block rounded-xl px-4 py-3 text-base font-medium text-purple-600 hover:bg-purple-50 hover:text-purple-700 transition-all duration-300 border border-purple-200"
                    >
                      <span className="flex items-center">
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        Admin Dashboard
                      </span>
                    </DisclosureButton>
                  )}
                </div>
                
                {/* Mobile User Section */}
                <div className="border-t border-blue-200 bg-blue-50/50 pb-3 pt-4">
                  <div className="flex items-center px-5 mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        {profileInfo.name?.charAt(0) || 'U'}
                      </div>
                      <div>
                        <div className="text-base font-medium text-gray-800">{profileInfo.name || 'User'}</div>
                        <div className="text-sm text-gray-500">{profileInfo.role || 'Member'}</div>
                      </div>
                    </div>
                    
                    <a href="/notification" className="ml-auto">
                      <button
                        type="button"
                        className="relative rounded-xl p-2 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:bg-blue-100"
                      >
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs font-bold text-white flex items-center justify-center">
                          3
                        </span>
                      </button>
                    </a>
                  </div>
                  
                  <div className="space-y-1 px-4">
                    {userNavigation.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-xl px-4 py-2 text-base font-medium text-gray-700 hover:bg-white hover:text-blue-600 transition-all duration-300"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </div>
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>

        {/* Main Content Area */}
        
            <React.Fragment>
              <FirstPage />
              <Footer />
            </React.Fragment>
          
      </div>
    </>
  )
}

export default Example;
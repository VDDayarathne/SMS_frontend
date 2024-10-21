import React, { useState, useEffect } from 'react';
import { Fragment } from 'react'
import Sidebar from './Sidebar';
import Footer from './Footer';
import FirstPage from './FirstPage';
import AboutUs from './AboutUs';
import NotificationList from './NotificationList';
import AdminDashboard from './AdminDashboard';
import Profile from './Profile';
import SettingsPage from './SettingsPage';
import LoginForm from './LoginForm';
import UserService from "./service/UserService";


import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

/*const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://th.bing.com/th/id/R.d2c893f55930c7cb5bfe41538be295d7?rik=RCCbETsRGcm2iQ&pid=ImgRaw&r=0',
}*/
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
      <div className="min-h-full">

          <header className="bg-[#F6AC01] shadow">
                <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">

                  <h1 className="flex flex-raw text-3xl font-bold tracking-tight text-gray-900">
                        <img src="https://www.freepnglogos.com/uploads/sport-png/sport-steadman-philippon-institute-official-site-16.png" width={50} height={50} className="mr-5 max-w-[50px] object-contain" />
                        Sabaragamuwa University of Sri Lanka - Sport Center
                  </h1>
                </div>
              </header>
        <Disclosure as="nav" className="bg-white">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">

                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-white text-[#23262B]'
                                : 'text-[#2362B] hover:text-gray-500',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                        {profileInfo.role === 'ADMIN' && (
                            <a
                              href="/admin"
                              className="rounded-md px-3 py-2 text-sm font-medium text-[#23262B]  hover:text-gray-500"
                            >
                              Admin Dashboard
                            </a>
                          )}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="relative rounded-full  p-1 text-[#2362B] hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                      <a href="/notification">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" /></a>
                      </button>

                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <DisclosureButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-[#2362B] hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
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

              <DisclosurePanel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-white text-[#23262B]' : 'text-gray-800 hover:text-[#23262B]',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                  {profileInfo.role === 'ADMIN' && (
                    <DisclosureButton
                      href="/admin"
                      className="block rounded-md px-3 py-2 text-base font-medium text-[#23262B] hover:text-gray-500"
                    >
                      Admin Dashboard
                    </DisclosureButton>
                  )}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">


                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-[#23262B] hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-[#23262B] hover:text-gray-500"
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


        <main className="bg-[#787578] shadow">
          <div className="mx-auto max-w-7xl py-1 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
      </div>

      {
                  <React.Fragment>
                  <FirstPage />
                  <Footer />


                  </React.Fragment>
                /*
                  This example requires updating your template:

                  ```
                  <html class="h-full bg-gray-100">
                  <body class="h-full">
                  ```\
                      <img src="https://tse3.mm.bing.net/th?id=OIP.ZPwpsmm0qeQ4p28dC2afRAHaHa&pid=Api&P=0&h=180" width={50} className="mx-auto" />

                */}


    </>



  )
  }
 export default Example;


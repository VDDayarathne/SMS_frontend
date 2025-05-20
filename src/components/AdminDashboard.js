import React from 'react';
import Footer from './Footer';
import CreateNotification from './CreateNotification';
import CreateNews from './CreateNews';



export default function Example() {
  return (
    <div className="bg-[#787578]">
    <div className="bg-[#787578] sm:mx-32 lg:mx-32 xl:mx-72">

    <section className="m-4 md:m-4 dark:bg-[#787578] dark:text-[#23262B]">
        <br/><br/>
          <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-20 md:px-10 lg:px-32 xl:max-w-3xl">
              <h1 className="text-4xl font-bold leading-none sm:text-5xl">"Welcome to the SMS Sabra"
              			<span className="dark:text-blue-900">Admin Dashboard!</span>
              		</h1>
              <p className="px-8 mt-8 mb-12 text-lg text-[#23262B]">"Your sports world!!"</p>
          </div>
      </section>
      <div className=" bg-white/25 rounded-3xl p-4 mb-4">
      <div className="container mx-auto transform duration-500 hover:-translate-y-5 transform duration-300">
      <div className="bg-white shadow-md rounded-3xl p-8 mb-8">
        <div className="flex-col">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">Issuing Register</h2>
            <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">Register of Issuing Equipments</p>
            <a className="inline-flex items-center space-x-2 text-sm dark:text-violet-600" href="/issueregister">


                <button className="px-8 py-3 m-2 text-lg bg-[#787578] border rounded-3xl dark:text-[#23262B] dark:border-gray-300 hover:text-[#F6AC01]">Modify</button>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
            </a>
        </div></div>
    </div>

      <div className="container mx-auto">
         <div className="bg-white shadow-md rounded-3xl p-8 mb-8 transform duration-500 hover:-translate-y-5 transform duration-300">
              <div className="flex-col ">
                  <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">News</h2>
                  <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">Join with us for exciting news updates</p>
                  <a className="inline-flex items-center space-x-2 text-sm dark:text-violet-600" href="/createnews">

                  <button className="px-8 py-3 m-2 text-lg bg-[#787578] border rounded-3xl dark:text-[#23262B] dark:border-gray-300 hover:text-[#F6AC01]">Modify</button>
                      <
                          svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                  </a>
              </div>
          </div></div>
          <div className="container mx-auto transform duration-500 hover:-translate-y-5 transform duration-300">
            <div className="bg-white shadow-md rounded-3xl p-8 mb-8">
              <div className="flex-col">
                  <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">Events and Tournaments</h2>
                  <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">There's no sense in going to a tournament if you don't believe that you can win it.</p>
                  <a className="inline-flex items-center space-x-2 text-sm dark:text-violet-600" href="/createtournament">


                      <button className="px-8 py-3 m-2 text-lg bg-[#787578] border rounded-3xl dark:text-[#23262B] dark:border-gray-300 hover:text-[#F6AC01]">Modify</button>

                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                  </a>
              </div></div>
          </div>
          <div className="container mx-auto transform duration-500 hover:-translate-y-5 transform duration-300">
             <div className="bg-white shadow-md rounded-3xl p-8 mb-8">
              <div className="flex-col">
                  <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">Notifications</h2>
                  <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">Never miss a beat! Check your notifications for important updates and alerts.</p>
                  <a className="inline-flex items-center space-x-2 text-sm dark:text-violet-600" href="/createnotification">

                  <button className="px-8 py-3 m-2 text-lg bg-[#787578] border rounded-3xl dark:text-[#23262B] dark:border-gray-300 hover:text-[#F6AC01]">Modify</button>

                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                  </a>
              </div>
          </div></div>

          <div className="container mx-auto transform duration-500 hover:-translate-y-5 transform duration-300">
            <div className="bg-white shadow-md rounded-3xl p-8 mb-8">
              <div className="flex-col">
                  <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">Scheduler</h2>
                  <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">Plan ahead and stay organized. Schedule practices, games, and events with our intuitive scheduler.</p>
                  <a className="inline-flex items-center space-x-2 text-sm dark:text-violet-600" href="/createshedules">

                  <button className="px-8 py-3 m-2 text-lg bg-[#787578] border rounded-3xl dark:text-[#23262B] dark:border-gray-300 hover:text-[#F6AC01]">Modify</button>

                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                  </a>
              </div>
          </div></div>

          <div className="container mx-auto transform duration-500 hover:-translate-y-5 transform duration-300">
            <div className="bg-white shadow-md rounded-3xl p-8 mb-8">
              <div className="flex-col">
                  <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">Inventory</h2>
                  <p className="flex-1 mb-4 text-base leading-relaxed dark:text-gray-600">Keep track of your sports gear and equipment. Manage your inventory efficiently and never run out of essentials.</p>
                  <a className="inline-flex items-center space-x-2 text-sm dark:text-violet-600" href="/addinventory">

                  <button className="px-8 py-3 m-2 text-lg bg-[#787578] border rounded-3xl dark:text-[#23262B] dark:border-gray-300 hover:text-[#F6AC01]">Modify</button>

                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                  </a>
              </div>
          </div>
          </div>
          </div>
          </div>
          <Footer />
      </div>

  )
}

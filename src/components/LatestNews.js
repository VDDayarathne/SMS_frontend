import React from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';


export default () => {
    return(

<>
<div style={{ backgroundColor: '#f4f4f0' }} className="sm:mx-32 lg:mx-32 xl:mx-72">
<ul className="p-4 lg:p-8S justify-center dark:bg-gray-100 dark:text-gray-800">
	<li>
		<article>
        			<a rel="noopener noreferrer" href="https://www.sab.ac.lk/app/department-sports-sciences-and-physical-education-shines-south-asian-youth-table-tennis" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-50">
        				<h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">Department of Sports Sciences and Physical Education Shines at South Asian Youth Table Tennis Championship 2024</h3>
        				<time datetime="" className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-600">Jun 02, 2024</time>
        				<p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-700">It is delighted to announce that both current students and alumni from the Department of Sports Sciences and Physical Education have actively participated in various capacities at the South Asian Youth Table Tennis Championship 2024 in Kandy, organized by the Table Tennis Association of Sri Lanka and the Asian Table Tennis Union.</p>
        				</a>
        		</article>
	</li>
	<li>
        		<article>
        			<a rel="noopener noreferrer" href="https://www.sab.ac.lk/app/outdoor-recreation-and-leadership-event" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-50">
        				<h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">Outdoor Recreation And Leadership Event</h3>
        				<time datetime="" className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-600">Sep 22, 2023</time>
        				<p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-700">The fourth year students of the Department of Sports Sciences and Physical Education completed </p>
        			</a>
        		</article>
    </li>
	<li>
		<article>
			<a rel="noopener noreferrer" href="https://www.sab.ac.lk/app/out-press-april-2024" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-50">
				<h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">OUT OF THE PRESS- APRIL 2024</h3>
				<time datetime="" className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-600">May 06, 2024</time>
				<p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-700">Check out some of the publications by members of staff of the faculty in April 2024 at https://www.sab.ac.lk/app/publications</p>
			</a>
		</article>
	</li>
	<li>
		<article>
        			<a rel="noopener noreferrer" href="https://www.sab.ac.lk/app/department-sports-sciences-and-physical-education-conducts-basic-rope-handling-program" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-50">
        				<h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">Department of Sports Sciences and Physical Education Conducts Basic Rope Handling Program</h3>
        				<time datetime="" className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-600">May 03, 2024</time>
        				<p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-700">In Year III Semester I, students from the Department of Sports Sciences and Physical Education engaged in the Basic Rope Handling program as a part of Outdoor Recreation and Leadership, and Teaching Outdoor Pursuits and Contemporary Activities. </p>
        			</a>
        </article>
	</li>

</ul>

{
                  <React.Fragment>
                  <Footer />
                  <Sidebar />
                  </React.Fragment>
                }
                </div>

</>

)
}
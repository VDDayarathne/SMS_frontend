import React from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';

export default () => {
    return(
    <>

    {
      <React.Fragment>
      <Sidebar />
      </React.Fragment>
    }

<section className="dark:bg-gray-100 dark:text-gray-800">



	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="https://www.sab.ac.lk/app/department-sports-sciences-and-physical-education-shines-south-asian-youth-table-tennis" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
			<img src="https://www.sab.ac.lk/app/sites/default/files/gallery-article/1_30.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Department of Sports Sciences and Physical Education Shines at South Asian Youth Table Tennis Championship 2024</h3>
				<span className="text-xs dark:text-gray-600">June 2, 2024</span>
				<p>It is delighted to announce that both current students and alumni from the Department of Sports Sciences and Physical Education have actively participated in various capacities at the South Asian Youth Table Tennis Championship 2024 in Kandy, organized by the Table Tennis Association of Sri Lanka and the Asian Table Tennis Union. 
					Their roles ranged from organizing committee members and executive members to lady chaperones, umpires, liaison officers, and more.</p>
			</div>
		</a>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<a rel="noopener noreferrer" href="https://www.sab.ac.lk/app/out-press-april-2024" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://www.sab.ac.lk/app/sites/default/files/articles/April%202024.PNG" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">OUT OF THE PRESS- APRIL 2024</h3>
					<span className="text-xs dark:text-gray-600">May 6, 2024</span>
					<p>Check out some of the publications by members of staff of the faculty in April 2024 at https://www.sab.ac.lk/app/publications</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="https://www.sab.ac.lk/app/outdoor-recreation-and-leadership-event" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://www.sab.ac.lk/app/sites/default/files/styles/medium/public/articles/IMG-20230922-WA0001.jpg?itok=f_KbG6-C" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Outdoor Recreation And Leadership Event</h3>
					<span className="text-xs dark:text-gray-600">Sep 22, 2023</span>
					<p>The fourth year students of the Department of Sports Sciences and Physical Education completed the 5 km white water rafting with level I to Level III rapids and canyoning activities at Kelani River, Kithulgala on September 29th. 
						It was organized as part of their coursework on Outdoor Recreation and Leadership and the team was led by Mr. Pathum Weerakkody and the staff members of the department</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="https://www.sab.ac.lk/app/winners-sspe-presentations" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://www.sab.ac.lk/app/sites/default/files/styles/medium/public/articles/pic_1.jpg?itok=DsYf4Xcz" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Winners At SSPE Presentations</h3>
					<span className="text-xs dark:text-gray-600"> Mar 08, 2023</span>
					<p>The Final Year Undergraduate Research Presentations of the Department of Sport Sciences and Physical Education came to an end on 7th March, 2023 and following students won awards for their performances</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="https://www.sab.ac.lk/app/when-kids-meet-dung-beetles" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://www.sab.ac.lk/app/sites/default/files/styles/medium/public/articles/Pic_4.jpg?itok=6yGpAiLC" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">When Kids Meet Dung Beetles</h3>
					<span className="text-xs dark:text-gray-600">Jan 08, 2023</span>
					<p>About 50 school children from Belihuloya gathered at our faculty to learn and appreciate the role</p>
				</div>
			</a>
		</div>
		<div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Load more posts...</button>
		</div>
	</div>
</section>

{
                  <React.Fragment>
                  <Footer />

                  </React.Fragment>
                }

</>
)
}
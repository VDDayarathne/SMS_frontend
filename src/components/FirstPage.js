import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return(


<section className="p-4 lg:p-8  dark:text-[#23262B] bg-[url('https://blog.evsolutions.com/hs-fs/hubfs/Man_Running_FootCloseUp.jpg?width=911&name=Man_Running_FootCloseUp.jpg')] bg-cover bg-center">
	<div className="container mx-auto space-y-8 py-1 sm:px-6 lg:px-8">
		<div className="flex flex-col overflow-hidden rounded-3xl shadow-sm lg:flex-row transform duration-500 hover:-translate-y-5 transform duration-300">
			<img src="https://www.sportanddev.org/sites/default/files/styles/d13_standard/public/media/sport_for_one_humanity.png?h=425113d4&itok=VkFyyW75" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<span className="text-xs uppercase dark:text-gray-600"></span>
				<h3 className="text-3xl font-bold">Get in touch with latest news</h3>
				<p className="my-6 dark:text-gray-600">Winning isn't everything, but wanting to win is.</p>
				<Link to="/Latest-news">
				<button type="button" className="self-start text-[#23262B] hover:text-[#F6AC01]">Latest news</button>
				</Link>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-3xl shadow-sm lg:flex-row-reverse transform duration-500 hover:-translate-y-5 transform duration-300">
			<img src="https://th.bing.com/th/id/OIP.lCT5NvIAmCQn5pTUQ9oumwHaEo?w=640&h=400&rs=1&pid=ImgDetMain" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<span className="text-xs uppercase dark:text-[#23262B]"></span>
				<h3 className="text-3xl font-bold text-[#23262B]">Access to the tournament</h3>
				<p className="my-6 dark:text-gray-600">The Masters is the one tournament with a timeless quality, where legends are celebrated.</p>
				<Link to="/Event-Tournament">
				<button type="button" className="self-start text-[#23262B] hover:text-[#F6AC01]">Events and tournaments</button>
				</Link>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-3xl shadow-sm lg:flex-row transform duration-500 hover:-translate-y-5 transform duration-300">
			<img src="https://th.bing.com/th/id/OIP.e60Yp_NPBQJofSpW-ENGZAHaDB?w=1838&h=752&rs=1&pid=ImgDetMain" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<span className="text-xs uppercase dark:text-[#23262B]"></span>
				<h3 className="text-3xl font-bold text-[#23262B]">Quick access and create a path of success</h3>
				<button type="button" className="self-start text-[#23262B] hover:text-[#F6AC01]">
				<a href="/staff">Staff</a></button>
				<button type="button" className="self-start text-[#23262B] hover:text-[#F6AC01]">Students</button>
				<button type="button" className="self-start text-[#23262B] hover:text-[#F6AC01]">Members</button>
			</div>
		</div>
	</div>
</section>
)
}
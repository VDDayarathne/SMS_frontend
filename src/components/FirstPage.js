import React from 'react';

export default () => {
    return(


<section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://www.sportanddev.org/sites/default/files/styles/d13_standard/public/media/sport_for_one_humanity.png?h=425113d4&itok=VkFyyW75" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<span className="text-xs uppercase dark:text-gray-600">Join, it's free</span>
				<h3 className="text-3xl font-bold">Get in touch with latest news</h3>
				<p className="my-6 dark:text-gray-600">Winning isn't everything, but wanting to win is.</p>
				<button type="button" className="self-start">Latest news</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src="https://th.bing.com/th/id/OIP.lCT5NvIAmCQn5pTUQ9oumwHaEo?w=640&h=400&rs=1&pid=ImgDetMain" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<span className="text-xs uppercase dark:text-gray-600">Join, it's free</span>
				<h3 className="text-3xl font-bold">Access to the tournament</h3>
				<p className="my-6 dark:text-gray-600">The Masters is the one tournament with a timeless quality, where legends are celebrated.</p>
				<button type="button" className="self-start">Events and tournaments</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://th.bing.com/th/id/OIP.e60Yp_NPBQJofSpW-ENGZAHaDB?w=1838&h=752&rs=1&pid=ImgDetMain" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<span className="text-xs uppercase dark:text-gray-600">Join, it's free</span>
				<h3 className="text-3xl font-bold">Quick access and create a path of success</h3>
				<button type="button" className="self-start">Staff</button>
				<button type="button" className="self-start">Students</button>
				<button type="button" className="self-start">Members</button>
			</div>
		</div>
	</div>
</section>
)
}
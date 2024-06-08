import React from 'react';
import LoginForm from './LoginForm';


export default () => {
    return(
<section className="p-6 dark:bg-gray-100 dark:text-gray-800">
	<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
		<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
			<span className="block mb-2 dark:text-violet-600">Sport Management System</span>
			<h1 className="text-5xl font-extrabold dark:text-gray-900">League Sabra</h1>
			<p className="my-8">
				<span className="font-medium dark:text-gray-900">Enter name and e mail</span>If you are a internal student please enter university e mail.
			</p>
			<form noValidate="" action="" className="self-stretch space-y-3">
				<div>
					<label htmlFor="name" className="text-sm sr-only">Your name</label>
					<input id="name" type="text" placeholder="Your name" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div>
					<label htmlFor="lastname" className="text-sm sr-only">Email address</label>
					<input id="lastname" type="text" placeholder="Email address" className="w-full rounded-md focus:ring focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<button type="button" className="w-full py-2 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">
				<a href="/login">
				Join with us
				</a>
				</button>
			</form>
		</div>
		<img src="https://media.licdn.com/dms/image/C5622AQGlXFxC6Y4t_g/feedshare-shrink_800/0/1624074619967?e=2147483647&v=beta&t=lRpw5VtxFE13VlXbwnCKMb5xm9kdyPsu3rYClP1r3dQ" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
	</div>
</section>
)
}
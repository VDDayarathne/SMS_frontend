import React from 'react';
import LoginForm from './LoginForm';


export default () => {
    return(
<section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl">"Welcome to the Ultimate Sport Management System – Elevate Your Game!"
			<span className="dark:text-blue-900">Join our community</span>Your sports world at a glance
		</h1>
		<p className="px-8 mt-8 mb-12 text-lg">"Your sports world at a glance – manage teams, track progress, and plan events all from one place."</p>
		<div className="flex flex-wrap justify-center">
			<button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-blue-900 dark:text-gray-50">
			<a href="/login">
			Sign In</a></button>
			<button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-900 dark:border-gray-300">Learn more</button>
		</div>
	</div>
</section>

)
}
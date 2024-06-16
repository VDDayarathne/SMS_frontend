import React from 'react';


export default () => {
    return(

<div style={{ backgroundColor: '#f4f4f0' }} className="sm:mx-32 lg:mx-32 xl:mx-72">
<div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-24" />
			</colgroup>
			<thead className="dark:bg-gray-300">
				<tr className="text-left">
					<th className="p-3">Inventory #</th>
					<th className="p-3">Client</th>
					<th className="p-3">Issued</th>
					<th className="p-3">Due</th>
					<th className="p-3 text-right">Amount</th>
					<th className="p-3">Status</th>
				</tr>
			</thead>
			<tbody>
				<tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Badminton racket B1</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2024</p>
						<p className="dark:text-gray-600">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2024</p>
						<p className="dark:text-gray-600">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>No fee</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
							<span>Pending</span>
						</span>
					</td>
				</tr>
				<tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Cricket bat A2</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2024</p>
						<p className="dark:text-gray-600">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2024</p>
						<p className="dark:text-gray-600">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$2</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
							<span>Pending</span>
						</span>
					</td>
				</tr>
				<tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Cricket bat B5</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2024</p>
						<p className="dark:text-gray-600">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2024</p>
						<p className="dark:text-gray-600">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$8</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
							<span>Pending</span>
						</span>
					</td>
				</tr>
				<tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p>97412378923</p>
					</td>
					<td className="p-3">
						<p>Cricket Ball A1</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2024</p>
						<p className="dark:text-gray-600">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2024</p>
						<p className="dark:text-gray-600">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$9</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
							<span>Pending</span>
						</span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
</div>
)
}
import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';
import UserService from "./service/UserService";

function EventsAndTournaments() {
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchTournaments();
  }, [token]);

  const fetchTournaments = async () => {
  setLoading(true);
    try {
      const response = await UserService.getTournaments(token);
      setTournaments(response);
    } catch (error) {
      console.error(error);
      setTournaments([]);
    }finally {
      setLoading(false);
    }
  };


return(
    <>
<div className="bg-[#787578]">
    {
      <React.Fragment>
      <Sidebar />
      </React.Fragment>
    }
<div className="bg-[#787578] sm:mx-32 lg:mx-32 xl:mx-72">
<section className="dark:bg-[#787578] rounded-3xl dark:bg-white/25 space-y-2 dark:text-gray-800">
    <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<div className="block max-w-sm rounded-3xl gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline dark:bg-gray-50">
		<ul>
		{tournaments.map((tournament, index) => (
		<li key={index}>
			<img src={tournament.image} alt="" className="object-cover w-full h-64 rounded-3xl sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{tournament.title}</h3>
                <p>{tournament.description}</p>
			</div>
			</li>
			 ))}
		  </ul>
		</div>

	</div>
</section>
</div>

{
  <React.Fragment>
  <Footer />
  </React.Fragment>
}
</div>
</>
  );
};

export default EventsAndTournaments;
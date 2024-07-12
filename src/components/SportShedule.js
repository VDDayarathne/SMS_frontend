import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';
import axios from 'axios';

function SportShedule() {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchSchedules = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:8080/api/sport-schedules', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSchedules(response.data);
      } catch (error) {
        console.error('Error fetching schedules:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();
  }, [token]);

  const getSchedulesByDay = (day) => {
    return schedules.filter((schedule) => schedule.date === day);
  };

  return (
  <>
  <div className=" bg-[#787578]">
    <div className=" bg-[#787578] sm:mx-32 lg:mx-32 xl:mx-72">
      <section className="bg-[#787578] py-20 rounded-3xl">

        <div className="container mx-auto p-4">
        <div className=" bg-white/25 rounded-3xl p-1 mb-4">
          <h1 className="text-3xl font-bold justify-center flex mb-0">Sport Schedules</h1><br/></div>
        <section className=" bg-white/25 rounded-3xl p-4 mb-4">
        <div className="bg-white rounded-3xl">
          <h2 className="text-[#23262B] justify-center flex font-bold mb-8">MONDAY</h2>
          <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sport
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Venue
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {getSchedulesByDay('Monday').map((schedule, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {schedule.time}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{schedule.sport}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{schedule.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{schedule.venue}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>


          <br /><br />
        <div className="bg-white rounded-3xl">
          <h2 className="text-[#23262B] justify-center flex font-bold mb-8">TUESDAY</h2>
          <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sport
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Venue
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                  {getSchedulesByDay('Tuesday').map((schedule, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          {schedule.time}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{schedule.sport}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{schedule.description}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{schedule.venue}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
          </table>
          </div>

          <br /><br />
        <div className="bg-white rounded-3xl">
          <h2 className="text-[#23262B] justify-center flex font-bold mb-8">WEDNESDAY</h2>
          <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sport
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Venue
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                  {getSchedulesByDay('Wednesday').map((schedule, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {schedule.time}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{schedule.sport}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{schedule.description}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{schedule.venue}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
          </table>
          </div>

          <br /><br />
        <div className="bg-white rounded-3xl">
          <h2 className="text-[#23262B] justify-center flex font-bold mb-8">THURSDAY</h2>
          <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sport
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Venue
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {getSchedulesByDay('Thursday').map((schedule, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      {schedule.time}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{schedule.sport}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{schedule.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{schedule.venue}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>

          <br /><br />
        <div className="bg-white rounded-3xl">
          <h2 className="text-[#23262B] justify-center flex font-bold mb-8">FRIDAY</h2>
          <table className="min-w-full divide-y divide-gray-200 overflow-x-auto rounded-3xl">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sport
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Venue
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {getSchedulesByDay('Friday').map((schedule, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {schedule.time}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{schedule.sport}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{schedule.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{schedule.venue}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          </div></section>



        </div>
      </section>
    </div>
    </div>
    <Sidebar />
    <Footer />

    </>
  );

}

export default SportShedule;
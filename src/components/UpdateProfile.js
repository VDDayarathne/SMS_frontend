import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Profile from './Profile';
import UserService from "./service/UserService";

function UpdateUser() {
  const navigate = useNavigate();
  const { userId } = useParams();


  const [userData, setUserData] = useState({
    name: '',
    bio: '',
    email: '',
    indexnumber: '',
    faculty: '',
    role: ''

  });

  useEffect(() => {
    fetchUserDataById(userId); // Pass the userId to fetchUserDataById
  }, [userId]); //wheen ever there is a chane in userId, run this

  const fetchUserDataById = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await UserService.getUserById(userId, token); // Pass userId to getUserById
      const { name, bio, email, indexnumber, faculty, role } = response.ourUsers;
      setUserData({ name, bio, email, indexnumber, faculty, role });
      console.log('User id fetched:', userId);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await UserService.updateUser(userId, userData, token);
      console.log(res);
      // Redirect to profile page or display a success message
      navigate("/userprofile");
    } catch (error) {
      console.error('Error updating user profile:', error);
      alert(error);
    }
  };




  return (
    <>
      <Sidebar />
      <div style={{ backgroundColor: '#f4f4f0' }} className="sm:mx-32 lg:mx-32 xl:mx-72">
              <div className="flex justify-between container mx-auto">
                <div className="w-full">
                  <div className="mt-4 px-4">
                    <h1 className="font-thinner justify-center flex text-4xl pt-10 px-5">Sports Center</h1>
                    <h1 className="font-thinner justify-center flex text-4xl text-[#23262B]">Sabaragamuwa University of Sri Lanka</h1>
                    <h1 className="font-thinner justify-center flex text-4xl pt-10 px-5">Setup Your profile</h1>


                    <form className="mx-5 my-5">
                      <label className="relative block p-3 border-2 border-black-700 rounded" htmlFor="name">
                        <span className="text-md font-semibold text-zinc-900">Name</span>
                        <input
                          className="w-full bg-transparent p-0 text-sm text-gray-500 focus:outline-none"
                          id="name"
                          name="name" value={userData.name} onChange={handleInputChange}
                          type="text"
                          placeholder="name"
                        />
                      </label>
                      <label className="relative block p-3 border-2 mt-5 border-black-700 rounded" htmlFor="bio">
                        <span className="text-md font-semibold text-zinc-900">Bio</span>
                        <input
                          className="w-full p-0 text-sm border-none bg-transparent text-gray-500 focus:outline-none"
                          id="bio"
                          type="text" name="bio" value={userData.bio} onChange={handleInputChange}
                          placeholder="Write Your Bio"
                        />
                      </label>
                      <label className="relative block p-3 border-2 mt-5 border-black-700 rounded" htmlFor="upi">
                        <span className="text-md font-semibold text-zinc-900" >Email Id</span>
                        <input
                          className="w-full p-0 text-sm bg-transparent text-gray-500 focus:outline-none"
                          id="upi"
                          readOnly={true}
                          type="email" name="email" value={userData.email} onChange={handleInputChange}
                          placeholder="ie: example@gmail.com"
                        />
                      </label>
                      <label className="relative block p-3 border-2 mt-5 border-black-700 rounded" htmlFor="paypal">
                        <span className="text-md font-semibold text-zinc-900">Faculty / Department</span>
                        <input
                          className="w-full read-only:bg-zinc-800 p-0 text-sm bg-transparent text-gray-500 focus:outline-none"
                          id="paypal"
                          type="text" name="faculty" value={userData.faculty} onChange={handleInputChange}
                        />
                      </label>
                      <label className="relative block p-3 border-2 mt-5 border-black-700 rounded" htmlFor="paypal">
                        <span className="text-md font-semibold text-zinc-900">Index Number</span>
                        <input
                          className="w-full read-only:bg-zinc-800 p-0 text-sm bg-transparent text-gray-500 focus:outline-none"
                          id="paypal"
                          type="text" name="indexnumber" value={userData.indexnumber} onChange={handleInputChange}
                        />
                      </label><br /><br />
                      <div class="mb-6 text-center">
                          <button
                              class="w-full px-4 py-2 font-bold text-white bg-[#787578] rounded-full hover:text-[#F6AC01] dark:bg-[#787578] dark:text-white focus:outline-none focus:shadow-outline"
                              type="button"
                              onClick={handleSubmit}
                          >
                              Submit
                          </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
      <Footer />
    </>
  );
}

export default UpdateUser;
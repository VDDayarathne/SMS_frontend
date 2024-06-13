import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';

const AboutUs = () => {
  return (
  <>
  <Sidebar />
    <div className="py-16 bg-whit items-center justify-center "  >
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 ">
            <h1 className="text-4xl text-center text-gray-900 font-bold mb-8">About Us</h1>
            <section className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                  Welcome to the Sabaragamuwa University Sports Centre!
                </h2>
                <p className="mt-6 text-gray-600">
                  At the Sabaragamuwa University Sports Centre, we are dedicated to promoting a vibrant and inclusive sports culture within our university community. Our mission is to provide exceptional facilities, support, and opportunities for all students, staff, and faculty members to engage in physical activities, fostering a healthy and active lifestyle.
                </p>
              </div>
            </section>
            <section className="mt-12">
              <h3 className="text-3xl text-gray-900 font-bold">Our Mission</h3>
              <p className="mt-4 text-gray-600">
                Our mission is to cultivate a dynamic sports environment that encourages physical fitness, teamwork, and personal growth. We aim to inspire individuals to pursue excellence in sports while emphasizing the values of integrity, discipline, and sportsmanship.
              </p>
            </section>
            <section className="mt-12">
              <h3 className="text-3xl text-gray-900 font-bold">Our Vision</h3>
              <p className="mt-4 text-gray-600">
                Our vision is to become a leading sports centre in the region, recognized for our commitment to quality, innovation, and inclusivity. We strive to create an environment where every individual can explore their athletic potential and develop a lifelong passion for sports.
              </p>
            </section>
            <section className="mt-12">
              <h3 className="text-3xl text-gray-900 font-bold">Facilities</h3>
              <ul className="mt-4 text-gray-600 list-disc pl-5">
                <li>Indoor Sports Complex: Equipped with courts for basketball, badminton, chess, carrom, martial arts and volleyball, along with a fully functional gymnasium.</li>
                <li>Outdoor Fields: Expansive fields for cricket, football, and rugby, providing ample space for training and competitions.</li>
                <li>Track and Field: A modern track for athletics, complete with facilities for field events such as long jump, high jump, and shot put.</li>
                <li>Swimming Pool: A well-maintained swimming pool for both recreational and competitive swimming.</li>
              </ul>
            </section>
            <section className="mt-12">
              <h3 className="text-3xl text-gray-900 font-bold">Programs and Activities</h3>
              <ul className="mt-4 text-gray-600 list-disc pl-5">
                <li>Inter-University Competitions: Providing opportunities for our athletes to compete at national and international levels.</li>
                <li>Intramural Sports: Encouraging friendly competition among students through various intramural leagues and tournaments.</li>
                <li>Fitness Classes: Offering group fitness sessions, including yoga, aerobics, and strength training, to promote overall well-being.</li>
                <li>Workshops and Clinics: Conducting workshops and skill development clinics to enhance athletic performance and knowledge.</li>
              </ul>
            </section>
            <section className="mt-12">
              <h3 className="text-3xl text-gray-900 font-bold">Our Team</h3>
              <p className="mt-4 text-gray-600">
                Our dedicated team of coaches, trainers, and administrative staff is committed to supporting our athletes and ensuring the smooth operation of our sports centre. We work tirelessly to create an inclusive and motivating environment for all members of our community.
              </p>
            </section>
            <section className="mt-12">
              <h3 className="text-3xl text-gray-900 font-bold">Get Involved</h3>
              <p className="mt-4 text-gray-600">
                Whether you are a seasoned athlete or just starting your fitness journey, the Sabaragamuwa University Sports Centre welcomes you. Join us in our mission to promote health, wellness, and camaraderie through sports. Stay updated with our latest events and activities by following us on our social media channels and visiting our website regularly.
              </p>
            </section>
            <section className="mt-12">
              <h3 className="text-3xl text-gray-900 font-bold">Contact Us</h3>
              <p className="mt-4 text-gray-600">
                For more information about our programs, facilities, or to get involved, please contact us:
              </p>
              <ul className="mt-4 text-gray-600 list-disc pl-5">
                <li>Address: Sabaragamuwa University of Sri Lanka, Pambahinna, P.O. Box 02, Belihuloya, 70140, Sri Lanka</li>
                <li>Phone: +94 (0)45 2280014</li>
                <li>Email: info@sab.ac.lk</li>
              </ul>
            </section>
          </div>
        </div>
        <Footer />
        </>
  );
};

export default AboutUs;

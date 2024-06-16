import React from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';

function Swimming() {
  return (
    <>

    {
              <React.Fragment>
              <Sidebar />
              </React.Fragment>
            }
            <div style={{ backgroundColor: '#f4f4f0' }} className="sm:mx-32 lg:mx-32 xl:mx-72">
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto p-4">
          <h5 className="text-2xl font-bold mb-2">LeagueSabra</h5>
          <h4 className="text-3xl font-bold mb-5">Swimming</h4>
        </div>
      </section>

      <section className="relative py-20">
        <div className="container mx-auto p-4">
          <h3 className="text-2xl font-bold mb-2">Accessible 25m Swimming Pool</h3>
          <p className="text-lg leading-relaxed mb-5 w-5/6">
            Our modern swimming facilities cater to individuals of all abilities, including both LeagueSabra Members and those opting for Pay
            As You Play access.
          </p>
          <p className="text-lg leading-relaxed mb-5 w-5/6">
            The indoor 25m Swimming Pool is designed with inclusivity in mind, featuring amenities such as an accessibility hoist, lane
            swimming ropes, and designated areas for recreational use. Regular activities hosted here include Aqua Fit classes, family swim
            sessions, swimming lessons, and RLSSUK-accredited certifications.
          </p>

          <div className="flex flex-wrap justify-center mb-5">
            <div className="w-full xl:w-1/2 lg:w-1/2 md:w-1/2 mb-5 md:mb-0">
              <div className="relative mb-5">
                <img src="./swimming-img-1.jpg" className="w-full h-64 object-cover" alt="" />
                <img src="./swimming-img-2.jpg" className="absolute bottom-0 right-0 w-1/2 h-1/2 object-cover" alt="" />
              </div>
            </div>

            <div className="w-full xl:w-1/2 lg:w-1/2 md:w-1/2 my-auto">
              <h2 className="text-3xl font-bold mb-2">Swimming Lessons</h2>
              <p className="text-lg leading-relaxed mb-5">
                LeagueSabra offers swimming lessons tailored for both adults and children, with varying levels of
                support to suit individual learning needs.
              </p>
              <p className="text-lg leading-relaxed mb-5">
                Adult lessons, divided into Beginners and Improvers levels, focus on enhancing water confidence,
                refining technique, and ensuring safety.
              </p>
              <p className="text-lg leading-relaxed mb-5">
                Children's lessons adhere to Swim programme, providing a structured and progressive teaching
                syllabus suitable for all ages, with clear stages Of advancement.
              </p>
              <div className="mt-5">
                <a href="/swimming-lessons" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                  Lessons
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center mb-5">
            <div className="w-full">
              <div className="relative mb-5">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full xl:w-2/3 lg:w-2/3 md:w-2/3 mb-5">
                    <h2 className="text-2xl font-bold mb-2">Summer Splash With Floats</h2>
                    <p className="text-lg leading-relaxed mb-5">
                      Enjoy quality family time every Sunday during the Summer
                      season with our 60-minute interactive float session in the
                      25m swimming pool. Featuring an array of floats, balls,
                      noodles, and toys, it's an opportunity for everyone to engage
                      and have fun together.
                    </p>
                    <h6 className="mt-4">Registration link : <a href="#">link</a></h6>
                  </div>

                  <div className="w-full xl:w-1/3 lg:w-1/3 md:w-1/3">
                    <div className="relative h-full">
                      <img src="./swimming-img-3.jpg" className="w-full h-full object-cover" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
      {
                    <React.Fragment>
                    <Footer />
                    </React.Fragment>
                  }
    </>
  );
}

export default Swimming;
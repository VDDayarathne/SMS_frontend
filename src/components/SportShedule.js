import React from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';


function SportShedule() {
  return (
    <>
    <div style={{ backgroundColor: '#f4f4f0' }} className="sm:mx-32 lg:mx-32 xl:mx-72">
      <section className="bg-white py-20">
        <div className="container mx-auto p-4">
          <h5 className="text-3xl font-bold mb-4">LeagueSabra</h5>
          <h4 className="text-2xl font-bold mb-8">Sport Schedules</h4>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto p-4">
          <h3 className="text-xl font-bold mb-4">Daily competition schedule</h3>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full xl:w-10/12 mx-auto mb-5">
              <div className="bg-green-100 p-4 rounded">
                <div className="table-responsive">
                  <table className="table table-hover table-striped mb-0">
                    <thead>
                      <tr>
                        <th className="text-center">SPORT</th>
                        <th className="text-center">VENUE</th>
                        <th className="text-center">ZONE</th>
                        <th className="text-center">TEAMS</th>
                        <th className="text-center">DATE & TIME</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className="text-center">Swimming</td>
                        <td className="text-center">Main Swimming pool</td>
                        <td className="text-center">Zone A.B.C</td>
                        <td className="text-center">TEAM 1 VS TEAM 2</td>
                        <td className="text-center">10/06/2024 2 PM</td>
                      </tr>
                      <tr>
                          <td className="text-center">Swimming</td>
                          <td className="text-center">Main Swimming pool</td>
                          <td className="text-center">Zone A.B.C</td>
                          <td className="text-center">TEAM 1 VS TEAM 2</td>
                          <td className="text-center">10/06/2024 2 PM</td>
                      </tr>

                      <tr>
                          <td className="text-center">Swimming</td>
                          <td className="text-center">Main Swimming pool</td>
                          <td className="text-center">Zone A.B.C</td>
                          <td className="text-center">TEAM 1 VS TEAM 2</td>
                          <td className="text-center">10/06/2024 2 PM</td>
                      </tr>
                      <tr>
                          <td className="text-center">Swimming</td>
                          <td className="text-center">Main Swimming pool</td>
                          <td className="text-center">Zone A.B.C</td>
                          <td className="text-center">TEAM 1 VS TEAM 2</td>
                          <td className="text-center">10/06/2024 2 PM</td>
                      </tr>
                      <tr>
                          <td className="text-center">Swimming</td>
                          <td className="text-center">Main Swimming pool</td>
                          <td className="text-center">Zone A.B.C</td>
                          <td className="text-center">TEAM 1 VS TEAM 2</td>
                          <td className="text-center">10/06/2024 2 PM</td>
                      </tr>
                      <tr>
                          <td className="text-center">Swimming</td>
                          <td className="text-center">Main Swimming pool</td>
                          <td className="text-center">Zone A.B.C</td>
                          <td className="text-center">TEAM 1 VS TEAM 2</td>
                          <td className="text-center">10/06/2024 2 PM</td>
                      </tr>
                      <tr>
                          <td className="text-center">Swimming</td>
                          <td className="text-center">Main Swimming pool</td>
                          <td className="text-center">Zone A.B.C</td>
                          <td className="text-center">TEAM 1 VS TEAM 2</td>
                          <td className="text-center">10/06/2024 2 PM</td>
                      </tr>

                      {/* more table rows */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4 mt-5">Competition Schedule</h3>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full xl:w-8/12 mx-auto">
              <div className="bg-white p-4 rounded">
                <div className="table-responsive">
                  <table className="table table-hover table-striped mb-0">
                    <thead>
                      <tr>
                        <th className="text-center">NO.</th>
                        <th className="text-center">TEAMS</th>
                        <th className="text-center">DATE & TIME</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className="text-center">01.</td>
                        <td className="text-center">TEAM 1 VS TEAM 2</td>
                        <td className="text-center">10/06/2024 2 PM</td>
                      </tr>
                      <tr>
                          <td className="text-center">01.</td>
                          <td className="text-center">TEAM 1 VS TEAM 2</td>
                          <td className="text-center">10/06/2024 2 PM</td>
                      </tr>

                      <tr>
                          <td className="text-center">02.</td>
                          <td className="text-center">TEAM 1 VS TEAM 2</td>
                          <td className="text-center">10/06/2024 2 PM</td>
                      </tr>
                      <tr>
                          <td className="text-center">03.</td>
                          <td className="text-center">TEAM 1 VS TEAM 2</td>
                          <td className="text-center">10/06/2024 2 PM</td>
                      </tr>
                      <tr>
                          <td className="text-center">04.</td>
                          <td className="text-center">TEAM 1 VS TEAM 2</td>
                          <td className="text-center">10/06/2024 2 PM</td>
                      </tr>
                      <tr>
                          <td className="text-center">05.</td>
                          <td className="text-center">TEAM 1 VS TEAM 2</td>
                          <td className="text-center">10/06/2024 2 PM</td>
                      </tr>
                      <tr>
                          <td className="text-center">06.</td>
                          <td className="text-center">TEAM 1 VS TEAM 2</td>
                          <td className="text-center">10/06/2024 2 PM</td>
                      </tr>

                      {/* more table rows */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      { <React.Fragment>
            <Footer />
            <Sidebar />
      </React.Fragment>
      }



    </>
  );
}

export default SportShedule;
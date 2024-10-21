import React from 'react';
import PrivacyPage from './PrivacyPage';
import TermsPage from './TermsPage';


export default () => {
    return(

<footer className="px-4 divide-y dark:bg-[#787578] dark:text-[#23262B]">
	<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/3">
			<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
				<div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-white-600">
				<img
                    src="https://www.freepnglogos.com/uploads/sport-png/sport-steadman-philippon-institute-official-site-16.png"
                    alt="Provider logo"
                    className="w-full h-full rounded-full object-cover"
                  />

				</div>
				<span className="self-center text-2xl font-semibold">Sport Center</span>
			</a>
		</div>
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase dark:text-white/75">Quick Access</h3>
				<ul className="space-y-1">
					<li className="hover:text-[#F6AC01]">
						<a rel="noopener noreferrer" href="/staff">Staff</a>
					</li>
					<li className="hover:text-[#F6AC01]">
						<a rel="noopener noreferrer" href="#">Students</a>
					</li>
					<li className="hover:text-[#F6AC01]">
						<a rel="noopener noreferrer" href="#">Members</a>
					</li>
					<li className="hover:text-[#F6AC01]">
						<a rel="noopener noreferrer" href="#">FAQ</a>
					</li>
				</ul>
				<br/>
				<h3 className="tracking-wide uppercase dark:text-white/75">Terms and policies</h3>
                <ul className="space-y-1">
                    <li className="hover:text-[#F6AC01]">
                        <a rel="noopener noreferrer" href="/privacy">Privacy</a>
                    </li>
                    <li className="hover:text-[#F6AC01]">
                        <a rel="noopener noreferrer" href="terms">Terms of Service</a>
                    </li>
                </ul>
			</div>



			<div className="space-y-3">
                <h3 className="tracking-wide uppercase dark:text-white/75">The University</h3>
                <ul className="space-y-1">
                    <li className="hover:text-[#F6AC01]">
                        <a rel="noopener noreferrer" href="https://www.sab.ac.lk/about-the-university">About Us</a>
                    </li>
                    <li className="hover:text-[#F6AC01]">
                        <a rel="noopener noreferrer" href="https://www.sab.ac.lk/vision-mission">Vision & Mission</a>
                    </li>
                    <li className="hover:text-[#F6AC01]">
                        <a rel="noopener noreferrer" href="https://www.sab.ac.lk/history">History</a>
                    </li>
                    <li className="hover:text-[#F6AC01]">
                        <a rel="noopener noreferrer" href="https://www.sab.ac.lk/chancellor">Chancellor</a>
                    </li>
                    <li className="hover:text-[#F6AC01]">
                        <a rel="noopener noreferrer" href="https://www.sab.ac.lk/vice-chancellor">Vice Chancellor</a>
                    </li>
                    <li className="hover:text-[#F6AC01]">
                        <a rel="noopener noreferrer" href="Overview">Overview</a>
                    </li>

                </ul>
            </div>
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase dark:text-white/75">Publications</h3>
				<ul className="space-y-1">
					<li className="hover:text-[#F6AC01]">
						<a rel="noopener noreferrer" href="https://www.sab.ac.lk/agri-journal ">Journal of Agricultural Sciences</a>
					</li>
					<li className="hover:text-[#F6AC01]">
						<a rel="noopener noreferrer" href="https://www.sab.ac.lk/cikcs/akyana_narrations">Akyana – Narrations</a>
					</li>
					<li className="hover:text-[#F6AC01]">
						<a rel="noopener noreferrer" href="https://www.sab.ac.lk/crkd/newsletter">Newsletter</a>
					</li>
					<li className="hover:text-[#F6AC01]">
						<a rel="noopener noreferrer" href="https://www.sab.ac.lk/crkd/sinhala-journal-about">Sinhala Journal</a>
					</li>
					<li className="hover:text-[#F6AC01]">
						<a rel="noopener noreferrer" href="https://www.sab.ac.lk/crkd/susl-journal-about">SUSL Journal</a>
					</li>
					<li className="hover:text-[#F6AC01]">
						<a rel="noopener noreferrer" href="https://suslj.sljol.info/">Online Journal</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
                <h3 className="tracking-wide uppercase dark:text-white/75">Faculties</h3>
                <ul className="space-y-1">
                    <li className="hover:text-[#F6AC01]">
                        <a rel="noopener noreferrer" href="https://www.sab.ac.lk/agri">Agricultural Sciences</a>
                    </li>
                    <li className="hover:text-[#F6AC01]">
                        <a rel="noopener noreferrer" href="https://www.sab.ac.lk/app">Applied Sciences</a>
                    </li>
                    <li className="hover:text-[#F6AC01]">
                        <a rel="noopener noreferrer" href="https://www.sab.ac.lk/computing">Computing</a>
                    </li>
                    <li className="hover:text-[#F6AC01]">
                        <a rel="noopener noreferrer" href="https://www.sab.ac.lk/geo">Geomatics</a>
                    </li>
                    <li className="hover:text-[#F6AC01]">
                        <a rel="noopener noreferrer" href="https://www.sab.ac.lk/mgmt">Management Studies</a>
                    </li>
                    <li className="hover:text-[#F6AC01]">
                        <a rel="noopener noreferrer" href="https://www.sab.ac.lk/med">Medicine</a>
                    </li>
                    <li className="hover:text-[#F6AC01]">
                        <a rel="noopener noreferrer" href="https://www.sab.ac.lk/fssl ">Social Sciences & Languages</a>
                    </li>
                    <li className="hover:text-[#F6AC01]">
                        <a rel="noopener noreferrer" href="https://www.sab.ac.lk/tech">Technology</a>
                    </li>
                    <li className="hover:text-[#F6AC01]">
                        <a rel="noopener noreferrer" href="https://www.sab.ac.lk/fgs">Graduate Studies</a>
                    </li>
                </ul>
            </div>

            <div className="space-y-3">
                <h3 className="tracking-wide uppercase dark:text-white/75">Centres</h3>
                <ul className="space-y-1">
                    <li className="hover:text-[#F6AC01]">
                        <a rel="noopener noreferrer" href="https://www.sab.ac.lk/center-for-computer-studies">Centre for Computer Studies</a>
                    </li>
                    <li className="hover:text-[#F6AC01]">
                        <a rel="noopener noreferrer" href="https://www.sab.ac.lk/centre-for-gender-equity-and-equalit">Centre for Gender Equity and Equality</a>
                    </li>
                    <li className="hover:text-[#F6AC01]">
                        <a rel="noopener noreferrer" href="https://www.sab.ac.lk/cikcs">Centre for Indigenous Knowledge and Community Studies</a>
                    </li>
                    <li className="hover:text-[#F6AC01]">
                        <a rel="noopener noreferrer" href="https://www.sab.ac.lk/codl">Centre for Open and Distance Learning</a>
                    </li>
                    <li className="hover:text-[#F6AC01]">
                        <a rel="noopener noreferrer" href="https://www.sab.ac.lk/iqac">Centre for Quality Assurance</a>
                    </li>
                    <li className="hover:text-[#F6AC01]">
                        <a rel="noopener noreferrer" href="https://www.sab.ac.lk/crkd">Centre for Research and Knowledge Dissemination</a>
                    </li>
                    <li className="hover:text-[#F6AC01]">
                        <a rel="noopener noreferrer" href="https://www.sab.ac.lk/sdc">Staff Development Center</a>
                    </li>
                    <li className="hover:text-[#F6AC01]">
                        <a rel="noopener noreferrer" href="https://www.sab.ac.lk/career-guidance-unit">Career Guidance Unit</a>
                    </li>
                    <li className="hover:text-[#F6AC01]">
                        <a rel="noopener noreferrer" href="https://www.sab.ac.lk/physical-education">Department of Physical Education</a>
                    </li>
                    <li className="hover:text-[#F6AC01]">
                        <a rel="noopener noreferrer" href="https://www.sab.ac.lk/ublc ">University Business Linkage Cell</a>
                    </li>
                </ul>
            </div>
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase dark:text-white/75">Departments</h3>
				<ul className="space-y-1">
					<li className="hover:text-[#F6AC01]">
						<a rel="noopener noreferrer" href="https://www.sab.ac.lk/academic-establishment">Academic Establishment</a>
					</li>
					<li className="hover:text-[#F6AC01]">
						<a rel="noopener noreferrer" href="https://www.sab.ac.lk/capital-works-planning">Capital Works</a>
					</li>
					<li className="hover:text-[#F6AC01]">
						<a rel="noopener noreferrer" href="https://www.sab.ac.lk/civil_engineering">Civil Engineering</a>
					</li>
					<li className="hover:text-[#F6AC01]">
						<a rel="noopener noreferrer" href="https://www.sab.ac.lk/examination_division">Examinations Division</a>
					</li>
					<li className="hover:text-[#F6AC01]">
						<a rel="noopener noreferrer" href="https://www.sab.ac.lk/finance-division">Finance Division</a>
					</li>
					<li className="hover:text-[#F6AC01]">
						<a rel="noopener noreferrer" href="https://www.sab.ac.lk/administration-officers">General Administration</a>
					</li>
					<li className="hover:text-[#F6AC01]">
						<a rel="noopener noreferrer" href="https://www.sab.ac.lk/non-academic-establishment">Non Academic Establishment</a>
					</li>
					<li className="hover:text-[#F6AC01]">
						<a rel="noopener noreferrer" href="https://www.sab.ac.lk/registrar_office">Registrar Office</a>
					</li>
					<li className="hover:text-[#F6AC01]">
						<a rel="noopener noreferrer" href="https://www.sab.ac.lk/student-affairs">Student Affairs</a>
					</li>
				</ul>
            </div>

			<div className="space-y-3">
				<h3 className="tracking-wide uppercase dark:text-white/75">Quick Access</h3>
				<ul className="space-y-1">
					<li className="hover:text-[#F6AC01]">
						<a rel="noopener noreferrer" href="https://mohe.gov.lk/index.php?lang=en">Ministry of Higher Education</a>
					</li>
					<li className="hover:text-[#F6AC01]">
						<a rel="noopener noreferrer" href="https://www.ugc.ac.lk/">University Grants Commission</a>
					</li>
					<li className="hover:text-[#F6AC01]">
						<a rel="noopener noreferrer" href="https://eugc.ac.lk/rag/">Ragging Complaint Portal</a>
					</li>
					<li className="hover:text-[#F6AC01]">
						<a rel="noopener noreferrer" href="https://goo.gl/maps/3HXgnoqfSe3VeKPn9">Maps & Directions</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="uppercase dark:text-white/75">About</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Sport Center,
							Sabaragamuwa University of Sri Lanka,
							P.O. Box 02,
							Belihuloya 70140,
							Sri Lanka'</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">(+94) 45-2280291 / (+94) 45-2280015</a>
					</li>
					<li className="hover:text-[#F6AC01]">
						<a rel="noopener noreferrer" href="https://www.sab.ac.lk/about-the-university" >About University</a>
					</li>
				</ul>
			</div>


		</div>
	</div>
	<div className="py-6 text-sm text-center dark:text-[#23262B] py-4 sm:px-6 lg:px-8">© Sabaragamuwa University of Sri Lanka 2024. All rights reserved.</div>
</footer>
)
}
import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default function TermsOfServicePage() {
  return (
  <>
  <Sidebar />
  <div style={{ backgroundColor: '#f4f4f0' }} className="sm:mx-32 lg:mx-32 xl:mx-72">
    <div className="bg-white">
      <div className="mb-16"></div>
      <div className="container mx-auto">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-md p-8">
          <h2 className="text-2xl font-bold text-center text-red-600 mb-4">TERMS OF SERVICES</h2>
          <div className="px-4">
            <p className="text-base text-justify text-gray-700 mb-6">
              Creating terms for the Sabaragamuwa University Sports Center website involves outlining the rules, guidelines, and agreements that govern users' interactions and responsibilities while using the platform. These terms typically include sections on user conduct, membership policies, facility usage regulations, and liability disclaimers. User conduct guidelines should emphasize respectful behavior, adherence to facility rules, and compliance with university policies to ensure a safe and enjoyable environment for all participants. Membership policies should detail eligibility criteria, registration procedures, fee structures, and the rights and obligations of members, including terms of membership cancellation or suspension.
            </p>
            <p className="text-base text-justify text-gray-700 mb-6">
              Additionally, the terms should outline facility usage regulations, including booking procedures, operational hours, and safety protocols. It's essential to include liability disclaimers to clarify the limitations of responsibility for the sports center regarding injuries, damages, or losses incurred during facility use or participation in sports activities. These terms aim to establish clear expectations, protect the sports center from legal liabilities, and promote fair and equitable access to facilities and services for all users. Regular updates to these terms may be necessary to reflect changes in policies, facility operations, or legal requirements, ensuring transparency and accountability in managing the Sabaragamuwa University Sports Center website.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>

    <Footer />
    </>
  );
}

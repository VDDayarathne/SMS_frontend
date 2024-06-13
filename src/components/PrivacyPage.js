import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default function PrivacyPage() {
  return (
  <>
  <Sidebar />
    <div className="bg-white">
      <div className="mb-16"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-md py-8 px-4"> {/* Increased elevation with additional padding */}
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4 text-black">PRIVACY</h2> {/* Changed text color to #be4347 */}
          <div className="px-4">
            <p className="text-base text-justify text-gray-700 mb-6">
              To ensure privacy on the Sabaragamuwa University Sports Center website, robust measures should be implemented to safeguard personal information and uphold user confidentiality.
            </p>
            <p className="text-base text-justify text-gray-700 mb-6">
              Firstly, the website should adhere to data protection regulations such as the General Data Protection Regulation (GDPR) or local privacy laws, ensuring that all personal data collected from users, including names, contact details, and membership information, is securely stored and processed with explicit consent from individuals. This involves implementing encryption techniques for data transmission and storage, restricting access to sensitive information to authorized personnel only, and regularly updating security protocols to mitigate risks of unauthorized access or data breaches.
            </p>
            <p className="text-base text-justify text-gray-700 mb-6">
              Furthermore, the privacy policy of the Sabaragamuwa University Sports Center website should be transparent and easily accessible to users. It should clearly outline how personal information is collected, used, and protected, including details on third-party data sharing practices if applicable. Users should have the option to review and update their personal information, as well as the ability to opt out of receiving promotional communications or sharing their data for marketing purposes.
            </p>
            <p className="text-base text-justify text-gray-700 mb-6">
              Regular audits and assessments of privacy practices should be conducted to ensure ongoing compliance with privacy standards and to address any emerging risks or vulnerabilities promptly. By prioritizing privacy measures, the Sabaragamuwa University Sports Center website can foster trust among its users and demonstrate its commitment to safeguarding their sensitive information.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

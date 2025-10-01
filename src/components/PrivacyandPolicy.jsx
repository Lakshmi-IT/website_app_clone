import React from "react";

export default function PrivacyandPolicy() {
  return (
    <div className="bg-white min-h-screen pb-10">
      <div className="max-w-3xl mx-auto px-6 py-10">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-center text-[#042048] mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-700 text-base leading-relaxed mb-4">
          Istriwala ("we," "our," or "us") respects your privacy and is
          committed to protecting the personal information you share with us.
          This Privacy Policy explains how we collect, use, and safeguard your
          information when you use our mobile application and services.
        </p>

        {/* Section 1 */}
        <h2 className="text-lg font-semibold mt-6 mb-2">
          1. Information We Collect
        </h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          • Personal Information: Name, phone number, address, and payment
          details when you create an account or place a booking. <br />
          • Usage Information: App activity, service history, and preferences to
          improve user experience. <br />
          • Location Data: If enabled, to provide accurate pickup and delivery
          services.
        </p>

        {/* Section 2 */}
        <h2 className="text-lg font-semibold mt-6 mb-2">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          • To process and manage bookings. <br />
          • To communicate about orders, offers, and updates. <br />
          • To improve our services and user experience. <br />
          • To comply with legal and regulatory requirements.
        </p>

        {/* Section 3 */}
        <h2 className="text-lg font-semibold mt-6 mb-2">
          3. Sharing of Information
        </h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          • We do not sell or rent your personal information. <br />
          • Information may be shared with trusted service partners only for
          fulfilling your order. <br />
          • We may disclose information if required by law or to protect the
          rights and safety of our users and services.
        </p>

        {/* Section 4 */}
        <h2 className="text-lg font-semibold mt-6 mb-2">4. Data Security</h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          • We use appropriate technical and organizational measures to protect
          your data from unauthorized access, loss, or misuse. <br />
          • However, no method of transmission over the internet is 100% secure,
          and we cannot guarantee absolute security.
        </p>

        {/* Section 5 */}
        <h2 className="text-lg font-semibold mt-6 mb-2">5. User Rights</h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          • You can access, update, or delete your personal information from
          your account settings. <br />
          • You may opt out of receiving promotional messages at any time.
        </p>

        {/* Section 6 */}
        <h2 className="text-lg font-semibold mt-6 mb-2">
          6. Children’s Privacy
        </h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          • Our services are not intended for users under the age of 13. We do
          not knowingly collect personal data from children.
        </p>

        {/* Section 7 */}
        <h2 className="text-lg font-semibold mt-6 mb-2">
          7. Changes to Privacy Policy
        </h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          • We may update this Privacy Policy from time to time. Updates will be
          posted in the app and are effective once published.
        </p>

        {/* Section 8 */}
        <h2 className="text-lg font-semibold mt-6 mb-2">8. Contact Us</h2>
        <p className="text-gray-700 text-base leading-relaxed">
          • If you have any questions about this Privacy Policy or our data
          practices, please contact us: <br />
          📧{" "}
          <a
            href="mailto:istriwala3366@gmail.com"
            className="text-blue-600 underline"
          >
            istriwala3366@gmail.com
          </a>
          <br />
          📞{" "}
          <a href="tel:+918125423366" className="text-blue-600 underline">
            +91 8125423366
          </a>
        </p>
      </div>
    </div>
  );
}

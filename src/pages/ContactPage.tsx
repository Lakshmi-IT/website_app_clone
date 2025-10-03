import React from "react";
import {
  FaUsers,
  FaClock,
  FaSmile,
  FaMapMarkerAlt,
  FaQuestionCircle,
  FaTruck,
  FaTshirt,
  FaShieldAlt,
} from "react-icons/fa";

const ContactScreen = () => {
  const serviceAreas = [
    "Currency Nagar Vijayawada",
    "Beside CSR Kalyanamandapam, Tadepalli, Guntur District.",
  ];

  const faqs = [
    {
      question: "What is your turnaround time?",
      answer:
        "Our standard turnaround time is 24-48 hours for regular washing and ironing. Dry cleaning may take up to 72 hours depending on the garment type.",
      icon: <FaClock className="text-[#042048] text-xl" />,
    },
    {
      question: "Do you offer same-day service?",
      answer:
        "Yes, we offer same-day service for urgent requirements with a small additional charge. Please call us before 10 AM for same-day pickup and delivery.",
      icon: <FaTruck className="text-[#042048] text-xl" />,
    },
    {
      question: "How do you handle delicate fabrics?",
      answer:
        "We have specialized processes for delicate fabrics including silk, wool, and designer garments. Our trained professionals ensure proper care for each fabric type.",
      icon: <FaTshirt className="text-[#042048] text-xl" />,
    },
    {
      question: "What if my clothes get damaged?",
      answer:
        "We take full responsibility for any damage caused during our service. We offer compensation or replacement as per our service guarantee policy.",
      icon: <FaShieldAlt className="text-[#042048] text-xl" />,
    },
  ];

  const stats = [
    { icon: <FaUsers className="text-white text-2xl" />, number: "5000+", label: "Happy Customers" },
    { icon: <FaClock className="text-white text-2xl" />, number: "24-48hrs", label: "Turnaround Time" },
    { icon: <FaSmile className="text-white text-2xl" />, number: "99%", label: "Satisfaction Rate" },
    { icon: <FaMapMarkerAlt className="text-white text-2xl" />, number: "25+", label: "Service Areas" },
  ];

  return (
    <div className="bg-white min-h-screen mb-10">
      {/* Hero Section */}
      <div className="bg-[#042048] text-center px-6 py-6">
        <h1 className="text-xl font-bold text-white mb-2">Contact Us</h1>
        <p className="text-md text-indigo-200 max-w-2xl mx-auto">
          Get in touch with Andhra Pradesh's most trusted Ironing service. We're
          here to help with all your clothing care needs.
        </p>
      </div>

      {/* Service Areas */}
      <div className="px-6 py-10">
        <h2 className="text-2xl font-bold text-center mb-2">Service Areas</h2>
        <p className="text-gray-700 text-center mb-6">
          We currently serve these areas in Andhra Pradesh with free pickup and delivery
        </p>

        <div className="space-y-3 max-w-xl mx-auto">
          {serviceAreas.map((area, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-100 p-3 rounded-lg shadow-sm"
            >
              <FaMapMarkerAlt className="text-[#042048] text-lg" />
              <span className="ml-3 text-gray-800 text-base">{area}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="px-6 py-10 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-700 text-center mb-6">
          Quick answers to common questions about our Ironing services
        </p>

        <div className="space-y-4 max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow-md flex items-start gap-3"
            >
              {faq.icon}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#042048] mb-3">
                {stat.icon}
              </div>
              <p className="text-xl font-bold text-[#042048]">{stat.number}</p>
              <p className="text-sm text-[#042048]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;

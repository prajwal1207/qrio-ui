import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { SOCIAL_LINKS } from "../../constants/constant";

const ContactPage = () => {
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});

  const validateForm = () => {
    const newErrors: any = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted successfully", formData);
    } else {
      setErrors(formErrors);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <main>
      <section className="text-white min-h-screen flex  items-center justify-center p-4">
        <div className="w-1/2 "></div>
        <div className="w-1/2 max-w-2xl p-10 bg-gray-900 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: "Name", name: "name", type: "text" },
              { label: "Email", name: "email", type: "email" },
              { label: "Phone", name: "phone", type: "tel" },
              { label: "Company", name: "company", type: "text" },
              { label: "Subject", name: "subject", type: "text" },
            ].map(({ label, name, type }) => (
              <div key={name}>
                <label className="block text-sm font-medium mb-2">
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-gray-700 border-2 border-transparent focus:border-gradient-to-r from-purple-500 to-pink-500 rounded-lg focus:outline-none`}
                  placeholder={`Enter your ${label.toLowerCase()}`}
                />
                {errors[name] && (
                  <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
                )}
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 border-2 border-transparent focus:border-gradient-to-r from-purple-500 to-pink-500 rounded-lg focus:outline-none"
                rows={4}
                placeholder="Enter your message"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg hover:opacity-80 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className=" flex flex-col md:flex-row justify-between items-center  p-8 rounded-xl shadow-lg text-white">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-4 text-gray-100">Our Address</h3>
          <div className="space-y-3 text-gray-300">
            <p className="flex items-center gap-2 text-lg">
              <FaMapMarkerAlt className="text-blue-400" />{" "}
              {SOCIAL_LINKS.ADDRESS}
            </p>
            <p className="flex items-center gap-2 text-lg">
              <FaPhoneAlt className="text-green-400" />
              {SOCIAL_LINKS.CONTACT}
            </p>
            <p className="flex items-center gap-2 text-lg">
              <FaEnvelope className="text-red-400" /> {SOCIAL_LINKS.EMAIL}
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <iframe
              title="Google Map"
              className="w-full h-full border-none"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.067315391517!2d75.88898027587526!3d22.725739227339055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd362ddb5a7b%3A0xeb0d40010b0af295!2sNavneet%20Plaza%2C%20Old%20Palasia%2C%20Indore%2C%20Madhya%20Pradesh%20452001!5e0!3m2!1sen!2sin!4v1738320111055!5m2!1sen!2sin"
              allowFullScreen
            ></iframe>
          </div>
          ``
        </div>
      </section>
    </main>
  );
};

export default ContactPage;

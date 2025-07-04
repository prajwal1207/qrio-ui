import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { SOCIAL_LINKS } from "../../constants/constant";
import { LeftGradiantEffect, RightGradiantEffect } from "../home";

const ContactPage = () => {
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    phone: "",
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
   <main className="text-white min-h-screen py-16 h-auto my-28 px-4 sm:px-8">
  <section className="h-[50vh] relative flex justify-center items-center text-center">
    <RightGradiantEffect />
    <LeftGradiantEffect />
    <div className="relative">
      <span className="absolute top-10 -left-10 text-white text-5xl sm:text-7xl">✦</span>
      <h1 className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-bold uppercase text-transparent stroke-1 stroke-white">
        GET IN TOUCH
      </h1>
      <span className="absolute -bottom-5 -right-2 text-white text-3xl sm:text-4xl">✦</span>
      <span className="absolute bottom-2 -right-10 text-white text-5xl sm:text-6xl">✦✦</span>
    </div>
  </section>

  <section className="flex flex-col md:flex-row gap-4 justify-center items-stretch mt-12">
    {/* Form */}
    <div className="flex-1 p-6 sm:p-10 bg-gradient-to-br from-purple-900 to-gray-900 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
      <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">
        We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["name", "email", "phone", "company"].map((field) => (
          <div key={field}>
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`Enter your ${field}`}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-pink-500 focus:outline-none text-sm sm:text-base"
            />
            {errors[field] && (
              <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
            )}
          </div>
        ))}
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-pink-500 focus:outline-none text-sm sm:text-base"
            rows={4}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-lg text-white font-bold hover:opacity-90 transition"
        >
          Submit
        </button>
      </form>
    </div>

    {/* Contact Info + Map */}
    <div className="flex-1 p-6 sm:p-10 bg-black border-2 border-purple-700 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none flex flex-col space-y-6 justify-center">
      <h3 className="text-3xl sm:text-4xl font-bold">Our Address</h3>
      <div className="text-gray-300 space-y-2 text-sm sm:text-lg">
        <p className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-blue-400" />
          {SOCIAL_LINKS.ADDRESS}
        </p>
        <p className="flex items-center gap-2">
          <FaPhoneAlt className="text-green-400" />
          {SOCIAL_LINKS.CONTACT}
        </p>
        <p className="flex items-center gap-2">
          <FaEnvelope className="text-red-400" />
          {SOCIAL_LINKS.EMAIL}
        </p>
      </div>
      <div className="w-full h-[40vh] sm:h-[60vh] overflow-hidden rounded-lg shadow-lg">
        <iframe
          title="Google Map"
          className="w-full h-full border-none"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.067315391517!2d75.88898027587526!3d22.725739227339055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd362ddb5a7b%3A0xeb0d40010b0af295!2sNavneet%20Plaza%2C%20Old%20Palasia%2C%20Indore%2C%20Madhya%20Pradesh%20452001!5e0!3m2!1sen!2sin!4v1738320111055!5m2!1sen!2sin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </section>

  <div className="mt-12 border-t border-gray-700"></div>
</main>

  );
};

export default ContactPage;

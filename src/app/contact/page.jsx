"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-amber-50 to-orange-50 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Have questions, feedback, or want to collaborate? Fill out the form
            below and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto bg-amber-50 p-10 rounded-lg shadow-lg">
          {submitted && (
            <p className="text-green-600 font-medium mb-6 text-center">
              Thank you! Your message has been submitted.
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            Email:{" "}
            <a
              href="mailto:support@foodlovers.com"
              className="text-amber-600 hover:text-amber-700"
            >
              support@foodlovers.com
            </a>
          </p>
          <p className="text-gray-600 text-lg mb-4">
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className="text-amber-600 hover:text-amber-700"
            >
              +1 234 567 890
            </a>
          </p>
          <p className="text-gray-600 text-lg">
            Address: 123 Culinary Street, Flavor Town, Foodland
          </p>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Explore Delicious Recipes?
          </h2>
          <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto">
            Join thousands of food lovers and start your culinary journey today.
          </p>
          <a
            href="/signup"
            className="btn bg-white hover:bg-gray-100 text-amber-600 font-bold py-3 px-10 rounded-lg transition duration-200 inline-block"
          >
            Sign Up Now
          </a>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage(
        "Thank you for your message! We'll get back to you within 24 hours."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <div className="bg-white min-h-screen">
      {" "}
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 border-b border-gray-200 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-black/60 to-black/40 absolute z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Professional surveying consultation"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Get in <span className="font-light">Touch</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Ready to start your land surveying project? Contact YiscoTechGlobal
            Ltd for professional consultation and competitive quotes.
          </p>
        </div>
      </section>
      {/* Contact Information & Form */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-12">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="mr-6">
                    <Phone className="text-black" size={24} strokeWidth={1} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Phone
                    </h3>
                    <a
                      href="tel:+15551234567"
                      className="text-gray-600 hover:text-black transition-colors text-lg"
                    >
                      +234 706 136-1575
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Mon-Fri 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-6">
                    <Mail className="text-black" size={24} strokeWidth={1} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:yiscotechglobal01@gmail.com, yisco4yekeen89@gmail.com "
                      className="text-gray-600 hover:text-black transition-colors text-lg"
                    >
                      yiscotechglobal01@gmail.com, yisco4yekeen89@gmail.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      We&apos;ll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-6">
                    <MapPin className="text-black" size={24} strokeWidth={1} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">
                      Office Address
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      24 Ifelodun street, <br /> off Ejigbo/Idimu road, <br />
                      Ifelodun, Lagos State
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-12 p-6 border border-gray-200 bg-gray-50">
                <h3 className="text-lg font-semibold text-black mb-3">
                  💬 WhatsApp
                </h3>
                <p className="text-gray-600 mb-4">
                  For quick responses and immediate assistance
                </p>
                <a
                  href="https://wa.me/15551234567?text=Hello! I'm interested in your land surveying services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-black text-white px-6 py-2 font-medium hover:bg-gray-800 transition-colors"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-12">
                Request a Quote
              </h2>

              {submitMessage && (
                <div className="mb-6 p-4 bg-gray-100 border border-gray-300">
                  <p className="text-gray-800">{submitMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-1 focus:ring-black focus:border-black bg-white"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-1 focus:ring-black focus:border-black bg-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-1 focus:ring-black focus:border-black bg-white"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Service Type *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-1 focus:ring-black focus:border-black bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="land-property-survey">
                        Land & Property Survey
                      </option>
                      <option value="topographic-mapping">
                        Topographic Mapping
                      </option>
                      <option value="boundary-reestablishment">
                        Boundary Reestablishment
                      </option>
                      <option value="construction-layout">
                        Construction Layout
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-black mb-2"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-1 focus:ring-black focus:border-black bg-white"
                    placeholder="Please describe your project, location, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="ml-2" strokeWidth={1} />
                    </>
                  )}
                </button>
              </form>

              <p className="text-sm text-gray-500 mt-4">
                * Required fields. We respect your privacy and will never share
                your information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

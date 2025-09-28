"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { faqs } from "../assets/support";

export default function Support() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("technical");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [ticketId, setTicketId] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      const id = "TCK-" + Math.floor(Math.random() * 900000 + 100000);
      setTicketId(id);
      setSubmitting(false);
    }, 600);
  };

  if (ticketId) {
    return (
      <section className="max-w-4xl mx-auto p-6 space-y-4">
        <h2 className="text-3xl font-bold text-green-900">Kisan Support</h2>
        <div className="bg-green-100 p-6 rounded-xl shadow-md">
          <p className="text-green-800 font-medium">
            <strong>Thank you!</strong> Your request was submitted successfully.
          </p>
          <p className="text-green-700">Ticket ID: {ticketId}. We’ll reply to {email} soon.</p>
          <div className="flex gap-4 mt-4">
            <Link to="/community" className="px-4 py-2 border border-green-800 text-green-800 rounded hover:bg-green-50">
              Go to Community
            </Link>
            <Link to="/blog" className="px-4 py-2 bg-green-800 text-white rounded hover:bg-green-900">
              Read the Blog
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold text-green-900">Kisan Support</h2>
        <p className="text-green-700">Need help? Submit a request or browse FAQs below.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form onSubmit={onSubmit} className="bg-green-50 p-6 rounded-xl shadow-md space-y-4">
          <h3 className="text-xl font-semibold text-green-900">Contact Support</h3>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="technical">Technical</option>
            <option value="billing">Billing</option>
            <option value="account">Account</option>
            <option value="other">Other</option>
          </select>
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="5"
            className="w-full p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-green-800 text-white p-3 rounded hover:bg-green-900 disabled:bg-green-400"
          >
            {submitting ? "Submitting..." : "Submit Request"}
          </button>
        </form>

        {/* Quick Help & FAQs */}
        <div className="space-y-6">
          {/* Quick Help */}
          <div className="bg-green-50 p-6 rounded-xl shadow-md space-y-4">
            <h3 className="text-xl font-semibold text-green-900">Quick Help</h3>
            <div className="flex flex-wrap gap-3">
              <Link to="/Broadcast" className="px-4 py-2 border border-green-600 text-green-700 rounded hover:bg-green-100">
                Community
              </Link>
              <Link to="/Vlog" className="px-4 py-2 border border-green-600 text-green-700 rounded hover:bg-green-100">
                Blog
              </Link>
              <Link to="/contact" className="px-4 py-2 border border-green-600 text-green-700 rounded hover:bg-green-100">
                Contact
              </Link>
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-green-50 p-6 rounded-xl shadow-md space-y-2">
            <h3 className="text-xl font-semibold text-green-900">FAQs</h3>
            {faqs.map((item, idx) => (
              <details key={idx} className="border-b border-green-200 py-2">
                <summary className="cursor-pointer font-medium text-green-800">{item.q}</summary>
                <p className="mt-1 text-green-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
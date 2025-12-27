
"use client";
import { useState } from 'react';
import { PHONE_NUMBER, SITE_NAME, CITY } from '@/lib/constants';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  function validate() {
    const errs: typeof errors = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'Valid email is required.';
    if (!form.message.trim()) errs.message = 'Message is required.';
    return errs;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  }

  return (
    <>
      <section className="hero">
        <span className="text-5xl mb-2">📞</span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-blue-900">Contact {SITE_NAME}</h1>
          <p className="text-lg text-gray-800 mb-4">Call us at <a href={`tel:${PHONE_NUMBER}`} className="text-blue-700 underline">{PHONE_NUMBER}</a> or use the form below. We’re here to listen and help you find the right support.</p>
          <div className="text-sm text-gray-700 mt-2">No pressure, just caring help for Austin homeowners.</div>
      </section>
      <div className="callout">We respond quickly to all inquiries. Your information is kept private and never shared.</div>
      <div className="flex justify-center">
        {submitted ? (
            <div className="p-6 bg-[#f7f6f3] border border-green-300 rounded-xl shadow max-w-md w-full text-center font-semibold text-green-900">Thank you! We’ve received your message and will reach out with care.</div>
        ) : (
          <form className="bg-white rounded-xl shadow p-8 max-w-md w-full space-y-6 border-t-4 border-blue-400" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="name" className="block font-medium mb-1">Name</label>
              <input id="name" name="name" type="text" className="w-full border rounded px-3 py-2" value={form.name} onChange={handleChange} aria-invalid={!!errors.name} aria-describedby="name-error" required />
              {errors.name && <div id="name-error" className="text-red-600 text-sm mt-1">{errors.name}</div>}
            </div>
            <div>
              <label htmlFor="email" className="block font-medium mb-1">Email</label>
              <input id="email" name="email" type="email" className="w-full border rounded px-3 py-2" value={form.email} onChange={handleChange} aria-invalid={!!errors.email} aria-describedby="email-error" required />
              {errors.email && <div id="email-error" className="text-red-600 text-sm mt-1">{errors.email}</div>}
            </div>
            <div>
              <label htmlFor="message" className="block font-medium mb-1">Message</label>
              <textarea id="message" name="message" className="w-full border rounded px-3 py-2" rows={5} value={form.message} onChange={handleChange} aria-invalid={!!errors.message} aria-describedby="message-error" required />
              {errors.message && <div id="message-error" className="text-red-600 text-sm mt-1">{errors.message}</div>}
            </div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-full font-bold focus:outline-none focus:ring-2 focus:ring-blue-400">Send Message</button>
          </form>
        )}
      </div>
    </>
  );
}

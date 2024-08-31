import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Contact Form Submission from Help Code It');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:michael@helpcodeit.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <Helmet>
        <title>Contact Us | Help Code It</title>
        <meta
          name="description"
          content="Get in touch with Help Code It. We're here to answer your questions and help you with your coding needs."
        />
        <link rel="canonical" href="https://www.helpcodeit.com/contact" />
      </Helmet>

      <h1 className="mb-8 text-4xl font-bold">Contact Us</h1>

      <div className="max-w-2xl mx-auto">
        <p className="mb-6">
          Have a question or want to get in touch? Fill out the form below, and we'll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="5"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
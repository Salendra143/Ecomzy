import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-6">
          Have a question or need assistance? We're here to help! Reach out to us via email or phone, and our customer support team will get back to you as soon as possible.
        </p>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p className="text-gray-700">support@ecomzy.com</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Phone</h2>
          <p className="text-gray-700">1-800-123-4567</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

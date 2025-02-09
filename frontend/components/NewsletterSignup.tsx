import React from 'react';

const NewsletterSignup = () => {
  return (
    <section className="py-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Stay Updated</h2>
      <p className="text-gray-600 mb-4">Sign up for exclusive deals and updates.</p>
      <div className="flex justify-center">
        <input type="email" placeholder="Enter your email" className="p-2 rounded-l-lg border border-gray-300" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700">Subscribe</button>
      </div>
    </section>
  );
};

export default NewsletterSignup;
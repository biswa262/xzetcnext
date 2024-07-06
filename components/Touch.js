// components/Touch.js
import React from 'react';

const Touch = () => {
  return (
    <div className="contact-section flex justify-between px-20 ml-40">
      <div className="contact-info w-2/5">
        <h3 className="text-2xl font-bold">Office Location</h3>
        <p className="text-gray-500">
          123 Dorchester Street<br />
          Boston Massachusetts<br />
          02125 United States
        </p>
        <h3 className="text-2xl font-bold mt-6">Phone Number</h3>
        <p className="text-gray-500">+1 (617)572-3122</p>
        <h3 className="text-2xl font-bold mt-6">Email Address</h3>
        <p className="text-gray-500">email@domain.com</p>
        <h3 className="text-2xl font-bold mt-6">Working Hours</h3>
        <p className="text-gray-500">9AM TO 6PM EST</p>
      </div>
      <div className="form-container w-3/5">
        <form action="/submit-form" method="post" className="w-full">
          <div className="flex mb-4">
            <input type="text" id="name" name="name" placeholder="Name" className="w-1/2 px-2 py-1 border border-gray-300 rounded-md mr-2" />
            <input type="email" id="_replyto" name="_replyto" placeholder="Email" className="w-1/2 px-2 py-1 border border-gray-300 rounded-md ml-2" />
          </div>
          <input type="text" id="subject" name="subject" placeholder="Subject" className="w-full px-2 py-1 border border-gray-300 rounded-md mb-4" /><br />
          <textarea id="message" name="message" placeholder="Message" className="w-full px-2 py-1 border border-gray-300 rounded-md mb-4"></textarea><br />
          <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">Send Messages</button>
        </form>
      </div>
    </div>
  );
};

export default Touch;

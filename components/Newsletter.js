// components/Newsletter.js
import React from 'react';

const Newsletter = () => {
  return (
    <div className="newslet w-full h-60vh bg-gray-600 flex justify-center items-center p-5 mt-24 rounded-md">
      <div className="nl text-center">
        <p className="head text-4xl text-white font-black">
          Subscribe To Newsletter
        </p>
        <p className="para mb-2 text-white text-lg">
          Donec purus est, tincidunt eu sodales quis, vehicula quis enim. <br />
          Morbi dapibus, tellus a gravida faucibus, elit ipsum.
        </p>
        <form action="#" className="flex flex-col items-center mt-12 ">
          <input 
            type="email" 
            name="email" 
            placeholder="Enter your email address" 
            required
            className="p-3 border border-gray-300 rounded-md w-full h-14 mb-4 text-lg" 
          />
          <button 
            type="submit"
            className="p-3 bg-purple-600 text-white rounded-md w-full cursor-pointer w-96 h-14 text-lg hover:bg-purple-700"
          >
            Subscribe
          </button>
        </form>
        <p className="priv text-center mt-8 text-sm text-white">
          We don't share your personal information with anyone or company. <br />
          Check out our <a href="#" className="text-indigo-600 font-light no-underline">Privacy Policy</a> for more
          information.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;

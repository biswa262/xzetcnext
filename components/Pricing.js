// components/Pricing.js
import React from 'react';

const Pricing = () => {
  return (
    <div>


    <div className="pricing flex justify-center gap-2 mb-4 mt-8">
      <div className="card bg-gray-100 border border-gray-300 rounded-lg p-4 text-center transition-transform duration-300 ease-in-out transform scale-95 h-[30rem] w-[24rem] hover:scale-105 hover:border-purple-600 hover:border-b-4">
        <i className="fas fa-layer-group text-2xl"></i>
        <h3 className="text-lg font-semibold mt-4 mb-2">Basic</h3>
        <p>$19/Month</p>
        <p>2 users</p>
        <p>Standard Support</p>
        <p>15 GB storage</p>
        <button type="button" className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">Purchase</button>
      </div>

      <div className="relative card bg-gray-100 border border-gray-300 rounded-lg p-4 text-center transition-transform duration-300 ease-in-out transform scale-110 h-[30rem] w-[24rem] hover:scale-115 hover:border-purple-600 hover:border-b-4">
        <span className="ribbon bg-black text-white absolute top-0 left-0 px-2 py-1 transform -rotate-45">Popular</span>
        <i className="far fa-heart text-2xl"></i>
        <h3 className="text-lg font-semibold mt-4 mb-2">Pro</h3>
        <p>$29/Month</p>
        <p>4 users</p>
        <p>30 GB storage</p>
        <p>Priority Support</p>
        <button type="button" className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">Purchase</button>
      </div>

      <div className="card bg-gray-100 border border-gray-300 rounded-lg p-4 text-center transition-transform duration-300 ease-in-out transform scale-95 h-[30rem] w-[24rem] hover:scale-105 hover:border-purple-600 hover:border-b-4">
        <i className="fas fa-sun text-2xl"></i>
        <h3 className="text-lg font-semibold mt-4 mb-2">Premium</h3>
        <p>$39/Month</p>
        <p>7 users</p>
        <p>50 GB storage</p>
        <p>Priority Support</p>
        <button type="button" className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">Purchase</button>
      </div>   
    </div>
    <div class="iphone">
      <img src="/images/iphone.png" alt="iphone" class="block mx-auto mt-20"/>
    </div>
    </div>
  );
};

export default Pricing;

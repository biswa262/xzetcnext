import React from 'react';

const Repeating = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-md mt-8 mb-16 text-center">
      <h2 className="text-3xl font-bold text-black mb-4">{title}</h2>
      <p className="text-gray-500 text-lg mb-2">
        {description}
      </p>
    </div>
  );
};

export default Repeating;

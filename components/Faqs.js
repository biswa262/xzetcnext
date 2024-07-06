// components/Faqs.js
import React from 'react';

const faqs = [
  {
    question: "How do I create an accordion?",
    answer: "The tags <em>details</em> and <em>summary</em> have you covered."
  },
  {
    question: "What is the meaning of life?",
    answer: "Who knows?"
  },
  {
    question: "What is the capital of France?",
    answer: "Paris."
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter."
  }
];

const Faqs = () => {
  return (
    <div className="questions space-y-4 p-4 max-w-3xl mx-auto flex flex-col items-center">
      {faqs.map((faq, index) => (
        <details key={index} className="w-full p-4 border border-gray-300 rounded-lg">
          <summary className="cursor-pointer font-semibold text-lg">
            {faq.question}
          </summary>
          <div className="mt-2 text-gray-700" dangerouslySetInnerHTML={{ __html: faq.answer }} />
        </details>
      ))}
      <p className="still text-center mt-8 w-full">
        <a href="#" className="text-blue-500 hover:underline italic">
          Still have questions? Click here
        </a>
      </p>
    </div>
  );
};

export default Faqs;

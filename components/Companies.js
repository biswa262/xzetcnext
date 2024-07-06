import React from 'react';

const Companies = () => {
  return (
    <div className="flex justify-start items-center mt-5 overflow-hidden space-x-32 text-2xl font-bold">
      <div className="animate-moveLeftRight">Company A</div>
      <div className="animate-moveLeftRight">Company B</div>
      <div className="animate-moveLeftRight">Company A1</div>
      <div className="animate-moveLeftRight">Company B1</div>
      <div className="animate-moveLeftRight">Company A2</div>
      <div className="animate-moveLeftRight">Company B2</div>
    </div>
  );
};

export default Companies;

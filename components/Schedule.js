import React from 'react';
import Image from 'next/image';
import DoneIcon from '@mui/icons-material/Done';

const Schedule = () => {
  return (
    <div className="schedule flex mt-20">
      <div className="schedule_text flex-1 ml-20 break-words">
        <p className="track-heading text-2xl font-bold mb-4">Built For Your Daily Schedule</p>
        <p className="track-heading-details text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        </p>
        <ul className="track-heading-details-points list-none text-gray-600 text-lg mb-8">
          <li className="mb-4 pl-4 flex items-center">
            <DoneIcon className="text-purple-700 mr-2" />
            Ut fringilla est at nunc suscipit dictum. Nulla facilisi. Phasellus dignissim nibh eget imperdiet venenatis.
          </li>
          <li className="mb-4 pl-4 flex items-center">
            <DoneIcon className="text-purple-700 mr-2" />
            Nullam egestas tincidunt lectus, sagittis eros vestibulum in. Vestibulum finibus iaculis sagittis. Suspendisse viverra luctus.
          </li>
          <li className="mb-4 pl-4 flex items-center">
            <DoneIcon className="text-purple-700 mr-2" />
            Suspendisse at volutpat magna, vitae mattis metus. Integer posuere eu erat at pharetra. Aliquam ut pharetra diam.
          </li>
          <li className="mb-4 pl-4 flex items-center">
            <DoneIcon className="text-purple-700 mr-2" />
            Donec luctus, sem vel molestie efficitur, metus libero mollis neque, sed scelerisque arcu nisl eu lectus.
          </li>
          <li className="mb-4 pl-4 flex items-center">
            <DoneIcon className="text-purple-700 mr-2" />
            Fusce neque magna, fringilla ac vulputate at, venenatis a eros. Donec accumsan commodo tortor sed fringilla.
          </li>
        </ul>
        <button
          className="learn bg-purple-700 text-black hover:text-white hover:bg-purple-900 transform hover:scale-110 transition-transform duration-200 ease-in-out h-12 w-32 rounded text-lg font-light border-none cursor-pointer">
          Learn More
        </button>
      </div>
      <div className="schedule_part flex-1 flex items-center justify-center">
        <Image src="/images/schedulenaxos.png" alt="schedule_phone" width={500} height={500} />
      </div>
    </div>
  );
};

export default Schedule;

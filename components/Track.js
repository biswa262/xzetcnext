import React from 'react';
import Image from 'next/image';
import CompassIcon from '@mui/icons-material/Explore';
import LifeRingIcon from '@mui/icons-material/Support';
import LinkIcon from '@mui/icons-material/Link';

const Track = () => {
  return (
    <div className="track flex flex-col lg:flex-row mt-40">
      <div className="track-img flex-1">
        <Image src="/images/tracknaxos.png" alt="Track" className="w-9/12 h-auto ml-8" width={500} height={500} />
      </div>
      <div className="track-details flex-1 flex flex-col p-4">
        <p className="track-heading text-black font-medium text-3xl lg:text-4xl">Track Time From Anywhere</p>
        <p className="track-heading-details text-gray-500 text-lg lg:text-xl mt-4 w-9/12">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        </p>
        <div className="track-cards-container flex flex-col space-y-4 mt-12">
          <div className="track-card group flex items-center bg-white shadow-md rounded-lg p-4 transform transition duration-300 ease-in-out hover:bg-purple-700 hover:scale-105 w-9/12">
            <CompassIcon className="text-3xl ml-4 transition duration-300 ease-in-out group-hover:text-white" />
            <div className="track-card-in flex flex-col ml-8">
              <p className="track-card-details text-black font-medium text-xl transition duration-300 ease-in-out group-hover:text-white">
                Easy To Use
              </p>
              <p className="track-card-details-item text-gray-500 text-base transition duration-300 ease-in-out group-hover:text-white">
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
              </p>
            </div>
          </div>
          <div className="track-card group flex items-center bg-white shadow-md rounded-lg p-4 transform transition duration-300 ease-in-out hover:bg-purple-700 hover:scale-105 w-9/12">
            <LifeRingIcon className="text-3xl ml-4 transition duration-300 ease-in-out group-hover:text-white" />
            <div className="track-card-in flex flex-col ml-8">
              <p className="track-card-details text-black font-medium text-xl transition duration-300 ease-in-out group-hover:text-white">
                Monitor & Manage
              </p>
              <p className="track-card-details-item text-gray-500 text-base transition duration-300 ease-in-out group-hover:text-white">
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
              </p>
            </div>
          </div>
          <div className="track-card group flex items-center bg-white shadow-md rounded-lg p-4 transform transition duration-300 ease-in-out hover:bg-purple-700 hover:scale-105 w-9/12">
            <LinkIcon className="text-3xl ml-4 transition duration-300 ease-in-out group-hover:text-white" />
            <div className="track-card-in flex flex-col ml-8">
              <p className="track-card-details text-black font-medium text-xl transition duration-300 ease-in-out group-hover:text-white">
                Stay Connected
              </p>
              <p className="track-card-details-item text-gray-500 text-base transition duration-300 ease-in-out group-hover:text-white">
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;

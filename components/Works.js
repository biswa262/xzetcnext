import React from 'react';
import StorageIcon from '@mui/icons-material/Storage';
import PhoneIcon from '@mui/icons-material/Phone';
import EditIcon from '@mui/icons-material/Edit';

const Work = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex space-x-4">
        <div className="w-96 h-80 bg-white border rounded-lg flex flex-col justify-start items-center text-center group hover:bg-purple-700 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg">
          <StorageIcon className="text-5xl mt-4 group-hover:text-white transition duration-300" />
          <p className="card-details text-black font-medium mt-4 group-hover:text-white transition duration-300">
            Your Data In Cloud
          </p>
          <div className="flex-grow flex flex-col justify-center mb-10">
            <p className="card-details-item text-gray-500 group-hover:text-white transition duration-300">
              Lorem ipsum dolor sit amet, conseda adipiscing elit. Aenean commodo ligula eget dolor massa.
            </p>
          </div>
        </div>
        <div className="w-96 h-80 bg-white border rounded-lg flex flex-col justify-start items-center text-center group hover:bg-purple-700 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg">
          <PhoneIcon className="text-5xl mt-4 group-hover:text-white transition duration-300" />
          <p className="card-details text-black font-medium mt-4 group-hover:text-white transition duration-300">
            24/7 Support
          </p>
          <div className="flex-grow flex flex-col justify-center mb-10">
            <p className="card-details-item text-gray-500 group-hover:text-white transition duration-300">
              Lorem ipsum dolor sit amet, conseda adipiscing elit. Aenean commodo ligula eget dolor massa.
            </p>
          </div>
        </div>
        <div className="w-96 h-80 bg-white border rounded-lg flex flex-col justify-start items-center text-center group hover:bg-purple-700 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg">
          <EditIcon className="text-5xl mt-4 group-hover:text-white transition duration-300" />
          <p className="card-details text-black font-medium mt-4 group-hover:text-white transition duration-300">
            Exclusive Design
          </p>
          <div className="flex-grow flex flex-col justify-center mb-10">
            <p className="card-details-item text-gray-500 group-hover:text-white transition duration-300">
              Lorem ipsum dolor sit amet, conseda adipiscing elit. Aenean commodo ligula eget dolor massa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

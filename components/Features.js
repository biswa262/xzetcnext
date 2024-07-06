import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js
import SettingsIcon from '@mui/icons-material/Settings';
import LockIcon from '@mui/icons-material/Lock';
import ChatIcon from '@mui/icons-material/Chat';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import DescriptionIcon from '@mui/icons-material/Description';
import ShareIcon from '@mui/icons-material/Share';
const Features = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {/* First column */}
      <div>
        {/* Feature 1 */}
        <div className="flex flex-col p-4 mb-14">
          <div className="flex flex-row items-center mb-4">
          <SettingsIcon className="text-black mr-2" fontSize='large'/>
            <p className="text-3xl font-bold">Custom shortcuts</p>
          </div>
          <p className="text-gray-500 text-base leading-loose">Semper a augue suscipit, luctus neque purus ipsum neque dolor
            primis libero tempus velna culpa expedita.</p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col p-4 mb-14">
          <div className="flex flex-row items-center mb-4">
          <LockIcon className="text-black mr-2" fontSize='large'/>
            <p className="text-3xl font-bold">Secure Integration</p>
          </div>
          <p className="text-gray-500 text-base leading-loose">Semper a augue suscipit, luctus neque purus ipsum neque dolor
            primis libero tempus velna culpa expedita.</p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col p-4">
          <div className="flex flex-row items-center mb-4">
          <ChatIcon className="text-black mr-2" fontSize='large'/>
            <p className="text-3xl font-bold">Free Live chat</p>
          </div>
          <p className="text-gray-500 text-base leading-loose">Semper a augue suscipit, luctus neque purus ipsum neque dolor
            primis libero tempus velna culpa expedita.</p>
        </div>
      </div>

      {/* Second column */}
      <div className="flex justify-center mt-8 mb-10">
        <Image src="/images/nexos-awesome.png" alt="app interface" width={400} height={300} className="max-w-md" />
      </div>

      {/* Third column */}
      <div>
        {/* Feature 4 */}
        <div className="flex flex-col p-4 mb-14">
          <div className="flex flex-row items-center mb-4">
          <ShareIcon className="text-black mr-2" fontSize='large'/>
            <p className="text-3xl font-bold">Social Share</p>
          </div>
          <p className="text-gray-500 text-base leading-loose">Semper a augue suscipit, luctus neque purus ipsum neque dolor
            primis libero tempus velna culpa expedita.</p>
        </div>

        {/* Feature 5 */}
        <div className="flex flex-col p-4 mb-14">
          <div className="flex flex-row items-center mb-4">
            <DescriptionIcon className="text-black mr-2" fontSize='large'/>
            <p className="text-3xl font-bold">Merge Files</p>
          </div>
          <p className="text-gray-500 text-base leading-loose">Semper a augue suscipit, luctus neque purus ipsum neque dolor
            primis libero tempus velna culpa expedita.</p>
        </div>

        {/* Feature 6 */}
        <div className="flex flex-col p-4">
          <div className="flex flex-row items-center mb-4">
            <AccessAlarmIcon className="text-black mr-2" fontSize='large'/>
           <p className="text-3xl font-bold">Action Reminder</p>
          </div>
          <p className="text-gray-500 text-base leading-loose">Semper a augue suscipit, luctus neque purus ipsum neque dolor
            primis libero tempus velna culpa expedita.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;

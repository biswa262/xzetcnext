import React from 'react';

const Video = () => {
  return (
    <div id="video-container" className="w-full h-72 bg-gray-500 flex justify-center items-center">
      <a
        href="https://www.youtube.com/watch?v=4JFHZKfoldw"
        target="video-popup"
        id="play-button"
        className="px-5 py-3 rounded cursor-pointer bg-purple-700 text-black font-semibold"
        rel="noopener noreferrer"
      >
        Play Video
      </a>
    </div>
  );
};

export default Video;

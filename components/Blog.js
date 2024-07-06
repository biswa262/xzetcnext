// components/Blog.js
import React from 'react';

const blogPosts = [
  {
    imgSrc: "/images/house.jpg",
    altText: "Image 1",
    date: "Alex June, Feb 2024",
    title: "Assorted Color Buildings and Sea in Riomaggiore",
    description: "Quisque dui at erat auctor pulvinar nisl felis, "
  },
  {
    imgSrc: "/images/mountain.jpg",
    altText: "Image 2",
    date: "Maithili Ras, December 2023",
    title: "Aerial Photography of Snowy Mountain Ranges",
    description: "Quisque dui at erat auctor pulvinar nisl felis, "
  },
  {
    imgSrc: "/images/road.jpg",
    altText: "Image 3",
    date: "Koufu Das, March 2024",
    title: "Forest Highway With Green Leaves",
    description: "Quisque dui at erat auctor pulvinar nisl felis, "
  }
];

const Blog = () => {
  return (
    <div className="blogCard flex gap-4 mb-4 justify-center">
      {blogPosts.map((post, index) => (
        <div 
          key={index}
          className="group card bg-white rounded-lg overflow-hidden shadow-md flex-1 h-96 max-w-sm transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100 hover:bg-opacity-80 "
        >
          <img src={post.imgSrc} alt={post.altText} className="w-full h-40 object-cover" />
          <div className="p-4">
            <p className="text-sm text-gray-600">{post.date}</p>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600">{post.title}</h3>
            <p className="text-base text-gray-700 leading-relaxed">{post.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;

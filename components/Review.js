"use client";
import { useState, useRef, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const Review = () => {
  const carouselRef = useRef(null); 
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    { name: 'Alice', image: 'https://i.pravatar.cc/150?img=1', review: 'Amazing course!' },
    { name: 'Bob', image: 'https://i.pravatar.cc/150?img=2', review: 'Highly recommended.' },
    { name: 'Carol', image: 'https://i.pravatar.cc/150?img=3', review: 'Learned so much!' },
    { name: 'David', image: 'https://i.pravatar.cc/150?img=4', review: 'Great value for money.' },
    { name: 'Emily', image: 'https://i.pravatar.cc/150?img=5', review: 'Exceeded my expectations!' },
    { name: 'David', image: 'https://i.pravatar.cc/150?img=6', review: 'Exceeded my expectations!' },
    { name: 'Rayn', image: 'https://i.pravatar.cc/150?img=7', review: 'Exceeded my expectations!' },
  ];

  const handleScroll = () => {
    if (carouselRef.current) {
      const newIndex = Math.round(carouselRef.current.scrollLeft / carouselRef.current.offsetWidth);
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const currentRef = carouselRef.current; // Store current ref for cleanup
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []); // Empty dependency array ensures useEffect runs only once after mount

  return (
    <div className="flex overflow-x-auto snap-x snap-mandatory" ref={carouselRef}>
      {reviews.map((review, index) => (
        <div key={index} className="snap-center flex-none w-[300px] mx-4 text-center">
          <Avatar src={review.image} alt={review.name} sx={{ width: 100, height: 100, margin: '0 auto' }} />
          <Typography variant="h6" sx={{ marginTop: 1 }}>{review.name}</Typography>
          <Typography 
            variant="body2"
            className={`mt-2 transition-opacity ${currentIndex === index ? 'opacity-100' : 'opacity-30'}`}
          >
            {review.review}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default Review;

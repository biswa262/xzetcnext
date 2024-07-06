// components/Screenshots.js
"use client"
import React, { useState } from 'react';
import { Box, Grid, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images = [
  '/images/ss1.jpg',
  '/images/ss2.jpg',
  '/images/ss3.jpg',
  '/images/ss4.jpg',
  '/images/ss5.jpg',
];

const Screenshots = () => {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 4;

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const visibleImages = [];
  for (let i = 0; i < itemsPerPage; i++) {
    visibleImages.push(images[(index + i) % images.length]);
  }

  return (
    <Box>
      <Grid container spacing={2}>
        {visibleImages.map((image, i) => (
          <Grid item xs={3} key={i}>
            <Box
              component="img"
              sx={{
                width: '90%',
                height: '90%',
                borderRadius: 2,
                boxShadow: 3,
                padding:3
              }}
              src={image}
              alt={`Screenshot ${index + i + 1}`}
            />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" mt={2}>
        <IconButton onClick={prevSlide}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton onClick={nextSlide}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Screenshots;

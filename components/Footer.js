// components/Footer.js
import React from 'react';
import { Box, Typography, Card, CardContent, CardActionArea, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn,Instagram } from '@mui/icons-material';
const Footer = () => {
  return (
    <>
      <div className="footer bg-black flex justify-between py-20 px-10 sm:px-20">
        <div className="footCol flex-1">
          <p className="logo text-white">Naxos</p>
          <p className="about text-gray-400 text-sm mt-2">Lorem ipsum dolor sit amet consectetur,<br />adipisicing elit. Suscipit quasi perspiciatis</p>
          <div className="flex mt-4 justify-left">
          <IconButton sx={{ color: 'white', }}>
                    <Facebook sx={{ fontSize: '1.5rem' }}/>
                  </IconButton>
                  <IconButton sx={{ color: 'white', }}>
                    <Twitter sx={{ fontSize: '1.5rem' }}/>
                  </IconButton>
                  <IconButton  sx={{ color: 'white', }}>
                    <LinkedIn sx={{ fontSize: '1.5rem' }}/>
                  </IconButton>
                  <IconButton  sx={{ color: 'white', }}>
                    <Instagram sx={{ fontSize: '1.5rem' }}/>
                  </IconButton>
          </div>
        </div>
        <div className="footCol flex-1 flex flex-wrap sm:flex-nowrap">
          <div className="innerCol flex-1 mb-6 sm:mb-0">
            <p className="font-semibold text-white">Useful Links</p>
            <p className="i-links text-gray-400 text-sm mt-2">Support</p>
            <p className="i-links text-gray-400 text-sm">Privacy Policy</p>
            <p className="i-links text-gray-400 text-sm">Terms & Conditions</p>
            <p className="i-links text-gray-400 text-sm">Affiliate Program</p>
            <p className="i-links text-gray-400 text-sm">Careers</p>
          </div>
          <div className="innerCol flex-1 ml-10">
            <p className="font-semibold text-white">Product Help</p>
            <p className="i-links text-gray-400 text-sm mt-2">FAQ</p>
            <p className="i-links text-gray-400 text-sm">Reviews</p>
            <p className="i-links text-gray-400 text-sm">Features</p>
            <p className="i-links text-gray-400 text-sm">Feedback</p>
            <p className="i-links text-gray-400 text-sm">API</p>
          </div>
        </div>
        <div className="footCol flex-1">
          <p className="font-semibold text-white">Download</p>
          <div className="paragraph mt-2">
            <p className="plat text-gray-400 text-sm">Available on</p>
            <p className="download text-white">Play Store</p>
          </div>
          <div className="paragraph mt-2">
            <p className="plat text-gray-400 text-sm">Download on</p>
            <p className="download text-white">App Store</p>
          </div>
        </div>
      </div>
      <div className="copyr bg-black text-center"> {/* Updated to center align */}
        <p className="text-white">
          Copyright © 2024 Naxos. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;

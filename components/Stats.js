import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DownloadIcon from '@mui/icons-material/Download';
import LockIcon from '@mui/icons-material/Lock';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import StarIcon from '@mui/icons-material/Star';

const stats = [
  { icon: DownloadIcon, value: 2067, description: 'Total Download' },
  { icon: LockIcon, value: 982, description: 'Happy Clients' },
  { icon: SmartphoneIcon, value: 890, description: 'Active Users' },
  { icon: StarIcon, value: 537, description: 'App Rates' },
];

const Stats = () => {
  return (
    <Box
      sx={{
        height: '18rem',
        backgroundColor: 'gray',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <IconComponent sx={{ fontSize: '3rem' }} />
            <Typography variant="h4" fontWeight="bold" mt={2}>
              {stat.value}
            </Typography>
            <Typography variant="h6" mt={1}>
              {stat.description}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default Stats;
 
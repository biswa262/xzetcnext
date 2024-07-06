import React from 'react';
import Image from 'next/image';
import { Box, Typography, Card, CardContent, CardActionArea, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';

const teamMembers = [
  { name: 'Rachel', role: 'CEO', image: '/images/naxos_p1.png', social: { facebook: '#', twitter: '#', linkedin: '#' } },
  { name: 'Ross', role: 'MD', image: '/images/naxos_p2.png', social: { facebook: '#', twitter: '#', linkedin: '#' } },
  { name: 'Rani', role: 'Manager', image: '/images/naxos_p3.png', social: { facebook: '#', twitter: '#', linkedin: '#' } },
  { name: 'Raku', role: 'Manager', image: '/images/naxos_p3.png', social: { facebook: '#', twitter: '#', linkedin: '#' } },
];

const Team = () => {
  return (
    <Box sx={{ mt: 6, mb: 12, textAlign: 'center' }}>
      <Typography variant="h3" component="p" fontWeight="extrabold" color="black">
        Our Team
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 5 }}>
        Donec purus est, tincidunt eu sodales quis, vehicula quis enim. <br />
        Morbi dapibus, tellus a gravida faucibus, elit ipsum.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: 3,
          maxWidth: 'lg',
          mx: 'auto',
        }}
      >
        {teamMembers.map((member, index) => (
          <Box key={index} sx={{ flex: '1 1 20%', textAlign: 'center', position: 'relative' }}>
            <Card
              sx={{
                backgroundColor: 'white',
                border: '1px solid',
                borderColor: 'grey.300',
                boxShadow: 1,
                overflow: 'hidden',
                transition: 'background-color 0.3s',
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
              }}
            >
              <CardActionArea sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: 370,
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(63, 81, 181, 0.7)',
                      opacity: 0,
                      transition: 'opacity 0.3s',
                      '&:hover': { opacity: 0.8 },
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: 0,
                    transition: 'opacity 0.5s',
                    '&:hover': { opacity: 2 },
                  }}
                >
                  <IconButton href={member.social.facebook} sx={{ color: '#ba68c8', }}>
                    <Facebook sx={{ fontSize: '2.5rem' }}/>
                  </IconButton>
                  <IconButton href={member.social.twitter} sx={{ color: '#ba68c8', }}>
                    <Twitter sx={{ fontSize: '2.5rem' }}/>
                  </IconButton>
                  <IconButton href={member.social.linkedin} sx={{ color: '#ba68c8', }}>
                    <LinkedIn sx={{ fontSize: '2.5rem' }}/>
                  </IconButton>
                </Box>
              </CardActionArea>
            </Card>
            <CardContent sx={{ py: 2 }}>
              <Typography variant="h5" component="span" fontWeight="bold" sx={{ display: 'block', mb: 1 }}>
                {member.name}
              </Typography>
              <Typography variant="body2" component="span">
                {member.role}
              </Typography>
            </CardContent>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Team;

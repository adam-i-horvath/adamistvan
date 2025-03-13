import React from 'react';
import { Card, CardMedia, Box } from '@mui/material';

const WebsiteCard = ({ website, onClick }) => {
  const imagePath = `/assets/img/${website.image}`;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2, // Optional: add padding for better spacing
        width: '100%',
        flexWrap: 'wrap',
        gap: 2, // Optional: to add space between items when wrapping
      }}
    >
      <Card
        sx={{
          width: '100%',
          backgroundColor: 'var(--frosted-pearl)',
          borderRadius: '15px',
          display: 'flex',
          border: '1px solid var(--active-stone)',
          boxShadow: 'none',
        }}
      >
        <CardMedia
          component="img"
          height="300px"
          image={imagePath}
          alt={website.name}
          sx={{
            cursor: 'pointer',
            objectFit: 'scale-down',
            filter: 'var(--invert-color)',
          }}
          onClick={onClick}
        />
      </Card>
    </Box>
  );
};

export default WebsiteCard;

import React from 'react';
import { Card, CardContent, CardMedia } from '@mui/material';
import './Kartya_dev.css';

const KartyaDev = ({ project }) => {
  const imagePath = require(`../../assets/img/${project.image}`);
  return (
    <Card className="kartya__dev_container">
      <CardContent className="kartya__dev_main">
        <h2 className="kartya__dev_title">{project.title}</h2>
        <p className="kartya__description">{project.description}</p>
        <CardMedia
          component="img"
          height="250"
          image={imagePath}
          alt={project.image}
          style={{ borderRadius: '5px' }}
        />
      </CardContent>
    </Card>
  );
};

export default KartyaDev;

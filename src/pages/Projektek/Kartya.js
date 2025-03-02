import React from 'react';
import { Card, CardContent, CardMedia } from '@mui/material';
import './Kartya.css';

const Kartya = ({ project }) => {
  const imagePath = require(`../../assets/img/${project.image}`);
  return (
    <Card className="kartya__container">
      <CardContent className="kartya__main">
        <h2 className="kartya__title">{project.title}</h2>
        <p className="kartya__description">{project.description}</p>
        <CardMedia
          component="img"
          height="250"
          image={imagePath}
          alt={project.image}
        />
      </CardContent>
    </Card>
  );
};

export default Kartya;

import React from 'react';
import { Card, CardContent, Typography, Button, Stack } from '@mui/material';
import { GitHub, Star, ForkRight, Code, Update } from '@mui/icons-material';
import './Kartya.css';

const Kartya = ({ project }) => {
  return (
    <Card className="kartya__container">
      <CardContent className="kartya__main">
        <Typography variant="h6" className="kartya__title">
          {project.name}
        </Typography>

        {project.description && (
          <Typography variant="body2" className="kartya__description">
            {project.description}
          </Typography>
        )}

        <Stack spacing={1} className="kartya__info">
          <Typography variant="body2">
            <Code fontSize="small" /> <strong>Nyelv:</strong>{' '}
            {project.language || 'Ismeretlen'}
          </Typography>
          <Typography variant="body2">
            <Star fontSize="small" /> <strong>Csillagok:</strong>{' '}
            {project.stargazers_count}
          </Typography>
          <Typography variant="body2">
            <ForkRight fontSize="small" /> <strong>Forkok:</strong>{' '}
            {project.forks_count}
          </Typography>
          <Typography variant="body2">
            <Update fontSize="small" /> <strong>Frissítve:</strong>{' '}
            {new Date(project.updated_at).toLocaleDateString('hu-HU')}
          </Typography>
        </Stack>
        <div className="kartya__button__container">
          <Button
            variant="contained"
            color="primary"
            startIcon={<GitHub />}
            href={project.html_url}
            target="_blank"
            className="kartya__button"
          >
            <div className="Button">Megnyitás a GitHubon</div>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Kartya;

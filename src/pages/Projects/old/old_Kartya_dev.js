import React from 'react';
import { Card, CardContent, CardMedia, Typography, Link } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './Kartya_dev.css';

const KartyaDev = ({ project }) => {
  const desktopImagePath = require(`../../assets/img/${project.desktopImage}`);
  const mobileImagePath = require(`../../assets/img/${project.mobileImage}`);

  return (
    <Card className="kartya__dev_container">
      <CardContent className="kartya__dev_main">
        {/* Title with link */}
        <Typography variant="h5" component="div" className="kartya__dev_title">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="kartya__dev_link"
          >
            {project.title}
            <OpenInNewIcon className="kartya__dev_icon" />
          </Link>
        </Typography>

        <p className="kartya__description">{project.description}</p>

        <div className="kartya__img">
          <div className="kartya__img_desktop">
            <CardMedia
              component="img"
              image={desktopImagePath}
              alt="Desktop View"
              className="kartya__img_full"
            />
          </div>
          <div className="kartya__img_mobile">
            <CardMedia
              component="img"
              image={mobileImagePath}
              alt="Mobile View"
              className="kartya__img_full"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default KartyaDev;

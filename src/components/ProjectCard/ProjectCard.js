import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardActionArea,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation(); // Use the useTranslation hook

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Fetch the translated description using the descriptionKey
  const translatedDescription = t(project.descriptionKey);

  return (
    <>
      <Card
        sx={{
          borderRadius: '20px',
          backgroundColor: 'var(--project-card-bg)',
          boxShadow: 'none',
          position: 'relative', // Needed for absolute positioning of the icon
          transition: 'transform 0.3s ease', // Smooth transition for the transform property
          '&:hover': {
            transform: 'scale(1.05)', // Scale up by 5% on hover
          },
        }}
      >
        <CardActionArea onClick={handleClickOpen}>
          <CardMedia
            component="img"
            height="200"
            image={project.image}
            alt={project.title}
            sx={{
              backgroundColor: '--project-card-bg)',
              border: 'none',
            }}
          />
        </CardActionArea>

        {/* Icon in the top right corner */}
        <TouchAppIcon
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            color: 'var(fixed-icon-color)',
            fontSize: '1.5rem', // Adjust the size of the icon
            pointerEvents: 'none', // Ensure the icon doesn't interfere with clicks
          }}
        />
      </Card>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: 'var(--frosted-pearl)', // Set background color to red
            color: 'var(--text-color)',
          },
        }}
      >
        <DialogTitle>{project.title}</DialogTitle>
        <CardMedia
          component="img"
          height="190"
          image={project.image}
          alt={project.title}
          sx={{
            filter: 'var(--fill-bw)',
            border: 'none',
            width: '200px',
            height: '60px',
            margin: '0 auto',
          }}
        />
        <DialogContent>
          <Typography sx={{ fontSize: '0.8rem' }}>
            {translatedDescription} {/* Use the translated description */}
          </Typography>
        </DialogContent>
        <CardMedia
          component="img"
          width="200"
          image={project.webimage}
          alt={project.title}
          sx={{
            backgroundColor: '--navy-void)',
            border: 'none',
            width: '350px',
            height: '150px',
            margin: '0 auto',
          }}
        />
        <DialogActions>
          <Button
            href={project.url}
            target="_blank"
            color="primary"
            sx={{ color: 'var(--primary-color)' }}
          >
            {t('visit_website')} {/* Use translation for button text */}
          </Button>
          <Button onClick={handleClose} sx={{ color: 'var(--primary-color)' }}>
            {t('close')} {/* Use translation for button text */}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProjectCard;

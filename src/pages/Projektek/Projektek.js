import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import WebsiteCard from '../../components/WebsiteDialog/WebsiteCard';
import WebsiteDialog from '../../components/WebsiteDialog/WebsiteDialog';
import websitesData from '../../components/WebsiteDialog/websites.json';
import './Projektek.css'; // Import the CSS file
import t from '../../utils/t';

const Projektek = () => {
  const [websites, setWebsites] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedWebsite, setSelectedWebsite] = useState(null);

  useEffect(() => {
    setWebsites(websitesData); // Load website data from the JSON
  }, []);

  const handleDialogOpen = (website) => {
    setSelectedWebsite(website);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <div className="projects">
      <h1>{t('p_t')}</h1>
      <Box className="projektek-container">
        {websites.map((website) => (
          <WebsiteCard
            key={website.name}
            website={website}
            onClick={() => handleDialogOpen(website)}
          />
        ))}
      </Box>
      {selectedWebsite && (
        <WebsiteDialog
          open={openDialog}
          onClose={handleDialogClose}
          website={selectedWebsite}
        />
      )}
    </div>
  );
};

export default Projektek;

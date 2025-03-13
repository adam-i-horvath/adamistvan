import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  Link,
} from '@mui/material';

const WebsiteDialog = ({ open, onClose, website }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle
      sx={{
        textTransform: 'uppercase',
        backgroundColor: 'var(--frosted-pearl)',
        color: 'var(--text-color)',
      }}
    >
      {website.name}
    </DialogTitle>
    <DialogContent
      sx={{
        backgroundColor: 'var(--frosted-pearl)',
        color: 'var(--text-color)',
      }}
    >
      <Typography variant="body1">{website.description}</Typography>
      <Link href={website.link} target="_blank" rel="noopener noreferrer">
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Visit Website
        </Button>
      </Link>
    </DialogContent>
    <DialogActions
      sx={{
        backgroundColor: 'var(--frosted-pearl)',
      }}
    >
      <Button onClick={onClose} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
);

export default WebsiteDialog;

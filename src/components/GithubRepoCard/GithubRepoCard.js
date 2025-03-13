import React, { useState, useEffect } from 'react';
import {
  Card,
  CardActionArea,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import GitHubIcon from '@mui/icons-material/GitHub'; // GitHub icon
import { useTranslation } from 'react-i18next';

const GithubRepoCard = () => {
  const [repos, setRepos] = useState([]); // State to store repositories
  const [open, setOpen] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState(null); // State to store the selected repo
  const { t } = useTranslation();

  // Check if the screen is mobile
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Fetch GitHub repositories
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/adam-i-horvath/repos'
        );
        const data = await response.json();
        // Sort repositories by creation date (newest first) and take the first 4
        const sortedRepos = data
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(0, 4); // Only fetch 4 repositories
        setRepos(sortedRepos);
      } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
      }
    };

    fetchRepos();
  }, []);

  const handleClickOpen = (repo) => {
    setSelectedRepo(repo);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRepo(null);
  };

  return (
    <>
      {/* Display repository cards in a Box */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          padding: '16px',
          justifyContent: isMobile ? 'center' : 'flex-start',
        }}
      >
        {repos.map((repo) => (
          <Box
            key={repo.id}
            sx={{
              width: isMobile ? '100%' : 'calc(25% - 12px)', // 4 cards in a row on desktop, 1 column on mobile
              minWidth: '200px', // Minimum width for each card
            }}
          >
            <Card
              sx={{
                borderRadius: '20px',
                backgroundColor: 'var(--project-card-bg)',
                boxShadow: 'none',
                position: 'relative',
                transition: 'transform 0.3s ease',
                height: '100%', // Ensure all cards have the same height
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardActionArea
                onClick={() => handleClickOpen(repo)}
                sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}
              >
                {/* GitHub icon instead of avatar */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '140px',
                  }}
                >
                  <GitHubIcon
                    sx={{
                      fontSize: '4rem',
                      color: 'var(fixed-icon-color',
                    }}
                  />
                </Box>
                <Typography
                  variant="h6"
                  sx={{ padding: '16px', textAlign: 'center', flexGrow: 1 }}
                >
                  {repo.name}
                </Typography>
              </CardActionArea>

              {/* Icon in the top right corner */}
              <TouchAppIcon
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  color: 'var(--fixed-touch-icon)',
                  fontSize: '1.5rem',
                  pointerEvents: 'none',
                }}
              />
            </Card>
          </Box>
        ))}
      </Box>

      {/* Dialog to show repository details */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: 'var(--frosted-pearl)',
            color: 'var(--text-color)',
          },
        }}
      >
        {selectedRepo && (
          <>
            <DialogTitle>{selectedRepo.name}</DialogTitle>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '140px',
                backgroundColor: 'var(--frosted-pearl)',
              }}
            >
              <GitHubIcon
                sx={{
                  fontSize: '4rem',
                  color: 'var(--text-color)',
                }}
              />
            </Box>
            <DialogContent>
              <Typography sx={{ fontSize: '0.8rem' }}>
                {selectedRepo.description || t('no_description')}
              </Typography>
              <Typography sx={{ fontSize: '0.8rem', marginTop: '16px' }}>
                <strong>{t('created_at')}:</strong>{' '}
                {new Date(selectedRepo.created_at).toLocaleDateString()}
              </Typography>
              <Typography sx={{ fontSize: '0.8rem' }}>
                <strong>{t('last_updated')}:</strong>{' '}
                {new Date(selectedRepo.updated_at).toLocaleDateString()}
              </Typography>
              <Typography sx={{ fontSize: '0.8rem' }}>
                <strong>{t('language')}:</strong>{' '}
                {selectedRepo.language || t('unknown')}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button
                href={selectedRepo.html_url}
                target="_blank"
                color="primary"
                sx={{ color: 'var(--primary-color)' }}
              >
                {t('visit_repository')}
              </Button>
              <Button
                onClick={handleClose}
                sx={{ color: 'var(--primary-color)' }}
              >
                {t('close')}
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
};

export default GithubRepoCard;

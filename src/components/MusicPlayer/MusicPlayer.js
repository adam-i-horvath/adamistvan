import React, { useState, useRef, useEffect } from 'react';
import { IconButton, Slider, Box, Typography } from '@mui/material';
import { PlayArrow, Pause, VolumeUp } from '@mui/icons-material';

const MusicPlayer = ({ src, title = 'Custom Track' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(50);
  const audioRef = useRef(new Audio(src));

  useEffect(() => {
    const audio = audioRef.current;
    const updateProgress = () =>
      setProgress((audio.currentTime / audio.duration) * 100);

    audio.addEventListener('timeupdate', updateProgress);
    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (_, newValue) => {
    const audio = audioRef.current;
    audio.currentTime = (newValue / 100) * audio.duration;
    setProgress(newValue);
  };

  const handleVolumeChange = (_, newValue) => {
    const audio = audioRef.current;
    audio.volume = newValue / 100;
    setVolume(newValue);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: 'var(--navbar-background-color)',
        borderRadius: 2,
        width: '100%',
        color: 'var(--text-color)',
      }}
    >
      <Typography
        variant="h6"
        style={{
          fontSize: '0.8rem',
          paddingTop: '10px',
        }}
        gutterBottom
      >
        {title}
      </Typography>
      <IconButton onClick={togglePlay} sx={{ color: 'var(--primary-color)' }}>
        {isPlaying ? (
          <Pause sx={{ fontSize: '3rem' }} />
        ) : (
          <PlayArrow sx={{ fontSize: '3rem' }} />
        )}
      </IconButton>
      <Slider
        value={progress}
        px
        onChange={handleProgressChange}
        aria-label="Progress"
        sx={{ width: '80%', color: 'var(--primary-color)' }}
      />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '80%',
          paddingBottom: '10px',
        }}
      >
        <VolumeUp sx={{ mr: 1 }} />
        <Slider
          value={volume}
          onChange={handleVolumeChange}
          aria-label="Volume"
          sx={{
            width: '100%',
            color: 'var(--primary-color)',
          }}
        />
      </Box>
    </Box>
  );
};

export default MusicPlayer;

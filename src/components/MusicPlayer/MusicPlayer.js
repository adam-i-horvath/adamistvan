import React, { useState, useRef, useEffect } from 'react';
import { IconButton, Slider, Box, Typography } from '@mui/material';
import { PlayArrow, Pause, VolumeUp, VolumeOff } from '@mui/icons-material';

const MusicPlayer = ({ src, title = 'Custom Track' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef(new Audio(src));

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
      setCurrentTime(audio.currentTime);
    };

    const onLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
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
    if (!isMuted) {
      audio.volume = newValue / 100;
      setVolume(newValue);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (isMuted) {
      audio.volume = volume / 100; // Restore previous volume
    } else {
      audio.volume = 0; // Mute audio
    }
    setIsMuted(!isMuted);
  };

  // Format time to MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
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
      <Box sx={{ width: '80%', display: 'flex', alignItems: 'center' }}>
        <Typography
          variant="body2"
          sx={{
            width: '10%',
            textAlign: 'center',
            paddingRight: '18px', // Added some space on the right side of the current time
          }}
        >
          {formatTime(currentTime)}
        </Typography>
        <Slider
          value={progress}
          onChange={handleProgressChange}
          aria-label="Progress"
          sx={{ width: '80%', color: 'var(--primary-color)' }}
        />
        <Typography
          variant="body2"
          sx={{
            width: '10%',
            textAlign: 'center',
            paddingLeft: '10px', // Added some space on the left side of the duration
          }}
        >
          {formatTime(duration)}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '80%',
          paddingBottom: '10px',
        }}
      >
        <IconButton onClick={toggleMute} sx={{ color: 'var(--primary-color)' }}>
          {isMuted ? (
            <VolumeOff sx={{ fontSize: '2rem' }} />
          ) : (
            <VolumeUp sx={{ fontSize: '2rem' }} />
          )}
        </IconButton>
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

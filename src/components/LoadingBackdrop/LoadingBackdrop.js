import { useState, useEffect } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

const LoadingBackdrop = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete(); // Notify parent when loading is done
    }, 1000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <Backdrop
      open={loading}
      sx={{
        color: 'var(--primary-color)',
        backgroundColor: 'var(--background-color)',
        zIndex: (theme) => theme.zIndex.drawer + 10000,
      }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default LoadingBackdrop;

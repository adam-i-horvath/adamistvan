import React from 'react';
import t from '../../utils/t';
import { Box } from '@mui/material';

const UnderDev = () => {
  return (
    <div className="underDev">
      <Box
        sx={{
          textAlign: 'center',
          fontSize: '0.8rem',
          textTransform: 'uppercase',
          color: 'var(--active-stone)',
        }}
      >
        {t('underdev')}
      </Box>
    </div>
  );
};

export default UnderDev;

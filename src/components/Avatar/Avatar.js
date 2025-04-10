import * as React from 'react';

import Stack from '@mui/material/Stack';

import Avatar from '@mui/material/Avatar';

export default function LetterAvatars({ reviewerName }) {
  // const theme = useTheme();
  const firstLetter =
    typeof reviewerName === 'string' && reviewerName.length > 0
      ? reviewerName.charAt(0).toUpperCase()
      : '?';

  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        sx={{
          color: '#E44848',
          backgroundColor: '#F2F4F7',
          width: '60px',
          height: '60px',
          fontSize: '24px',
          fontWeight: 600,
          '&:hover': {
            transform: 'scale(1.05)',
            transition: 'all 0.3s ease',
          },
        }}
      >
        {firstLetter}
      </Avatar>
    </Stack>
  );
}

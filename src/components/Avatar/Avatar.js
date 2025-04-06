import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { AvatarStyled } from './Avatar.styled';
// import { deepOrange, deepPurple } from '@mui/material/colors';

export default function LetterAvatars({ reviewerName }) {
  const firstLetter =
    typeof reviewerName === 'string' && reviewerName.length > 0
      ? reviewerName.charAt(0).toUpperCase()
      : '?';

  return (
    <Stack direction="row" spacing={2}>
      <AvatarStyled>{firstLetter}</AvatarStyled>
    </Stack>
  );
}

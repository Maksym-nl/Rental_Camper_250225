import * as React from 'react';
import Rating from '@mui/material/Rating';

export default function HalfRating() {
  return <Rating name="half-rating" defaultValue={0} precision={0.5} />;
}

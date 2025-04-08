import * as React from 'react';
import Rating from '@mui/material/Rating';

export default function HalfRating({ rating }) {
  return (
    <Rating name="half-rating" defaultValue={rating} precision={0.5} readOnly />
  );
}

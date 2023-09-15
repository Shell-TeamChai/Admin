import React from 'react';

function RatingStars({ rating }) {
  const MAX_STARS = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = MAX_STARS - fullStars - (hasHalfStar ? 1 : 0);

  const starIcons = [];
  for (let i = 0; i < fullStars; i++) {
    starIcons.push('★');
  }

  if (hasHalfStar) {
    starIcons.push('½★');
  }

  for (let i = 0; i < emptyStars; i++) {
    starIcons.push('☆');
  }

  return <div>{starIcons.join(' ')}</div>;
}

export default RatingStars;

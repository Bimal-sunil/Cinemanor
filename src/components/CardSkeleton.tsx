import React from 'react';
import '../styles/CardSkeleton.css'

function CardSkeleton() {
  return (
    <div className='card-skeleton'>
        <div className="card-image-skeleton skeleton-content"></div>
        <div className="card-details-skeleton skeleton-content"></div>
        <div className="card-details-skeleton skeleton-content"></div>
    </div>
  )
}

export default CardSkeleton
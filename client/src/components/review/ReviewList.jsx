import React from 'react';
import _ from 'underscore';
import { FullCircle } from '../../css/style';
import { filterMonths, isPlural } from '../../helpers/functions';


const ReviewList = ({ reviews, times }) => (
  <div>
    {reviews.length !== 0
      ? 
        (reviews = filterMonths(times, reviews),
        console.log(reviews),
        reviews.map(({ 
          _id,
          username,
          location,
          contributions,
          rating,
          title,
          review,
          dateOfReview,
          dateOfTrip,
          tripType,
          helpful 
        }) => (
          <div key={_id}>
            <p>{username} wrote a review {dateOfReview}</p>
            <p>
              &#x1F4CD; {location} 
              <span> &#8226; </span>
              {contributions} contribution{isPlural(contributions)}
              <span> &#8226; </span>
              {helpful} helpful vote{isPlural(helpful)}
            </p>
            <p>{_.range(0, rating).map((val) => <span><FullCircle /> </span>)}</p>
            <p><b>{title}</b></p>
            <p>{review}</p>
            <p><b>Date of experience: </b>{dateOfTrip}</p>
            <p>{helpful} helpful vote{isPlural(helpful)}</p>
            <p>&#x1F44D; Helpful &#x1F4E8;	Share</p>
            <hr />
          </div>
        ))
        )
      : null 
    }
  </div>
);

export default ReviewList;

import React from 'react';
import Header from './Header';
import Languages from './Languages';
import TimeOfYear from './TimeOfYear';
import TravelerType from './TravelerType';
import { FullCircle, HalfCircle, TransparentCircle } from '../css/style';
import { isPlural } from '../helper/helper';
import ReviewList from './review/ReviewList';
import * as _ from 'underscore';

const data = 
[
  {
    "_id": [0, 0],
    "username": "Dallas48",
    "location": "Littelfort, Maryland",
    "contributions": 1,
    "rating": 2,
    "title": "Quia at ea exercitationem.",
    "review": "Cumque et omnis. Veniam et corporis fugiat sapiente quisquam nulla recusandae. Aut quis aut ut. Cum deleniti sunt voluptatem praesentium eos necessitatibus similique rem. Doloremque consequuntur inventore quia officiis et voluptatem laudantium placeat. Possimus laborum veniam doloribus et velit consectetur natus.",
    "dateOfReview": "March 2016",
    "dateofTrip": "January 2016",
    "tripType": "Business",
    "helpful": 390,
  },
];

const App = () => (
  <ReviewList reviews={data} />
);

export default App;

const reviews = [
  {
      "_id": [
          2,
          0
      ],
      "username": "Gaston94",
      "location": "North Glennieville, Oklahoma",
      "contributions": 251,
      "rating": 5,
      "title": "Dolores nobis aperiam et.",
      "review": "Voluptatem iste molestias voluptatem et architecto architecto. Enim cumque reprehenderit. Soluta aut blanditiis ea.",
      "dateOfReview": "December 2019",
      "dateOfTrip": "October 2019",
      "tripType": "Friends",
      "helpful": 481
  },
  {
      "_id": [
          2,
          1
      ],
      "username": "Emilia_Kozey91",
      "location": "Schillerside, California",
      "contributions": 520,
      "rating": 5,
      "title": "Assumenda sint velit blanditiis.",
      "review": "Quo voluptates dignissimos molestiae. Qui dolorem ab et tenetur et quia beatae. Est iste dolorum molestiae adipisci nulla nemo sequi. Quis totam in pariatur nam adipisci et sapiente distinctio et. Quaerat quia distinctio facere.",
      "dateOfReview": "December 2016",
      "dateOfTrip": "March 2016",
      "tripType": "Family (teens)",
      "helpful": 57
  },
  {
      "_id": [
          2,
          2
      ],
      "username": "Domenic.Blanda36",
      "location": "North Lonie, Michigan",
      "contributions": 585,
      "rating": 5,
      "title": "Possimus suscipit unde iure asperiores aperiam sequi nam voluptate nisi.",
      "review": "Dolor cupiditate et earum sunt. Illo praesentium itaque. Voluptatum sit qui molestias rerum aliquam quaerat et. Voluptatum molestiae consequatur quae repudiandae. Eum fugit quae unde eveniet qui. Rerum officia et.",
      "dateOfReview": "September 2020",
      "dateOfTrip": "June 2020",
      "tripType": "Solo",
      "helpful": 734
  },
  {
      "_id": [
          2,
          3
      ],
      "username": "Norval.West13",
      "location": "South Zackeryview, California",
      "contributions": 25,
      "rating": 1,
      "title": "Veritatis ad eaque consequatur minima nihil qui.",
      "review": "Consequatur facilis perferendis. Quasi eveniet est est rerum. Consectetur quo qui mollitia.",
      "dateOfReview": "October 2019",
      "dateOfTrip": "January 2019",
      "tripType": "Couples",
      "helpful": 889
  },
  {
      "_id": [
          2,
          4
      ],
      "username": "Randi99",
      "location": "Sigmundside, Tennessee",
      "contributions": 446,
      "rating": 1,
      "title": "Nobis voluptas quae.",
      "review": "Et laborum facere dolore asperiores atque aliquam aut. Perferendis blanditiis nobis est corporis neque molestiae nostrum eos. Dolorem ut voluptatem magnam autem id a qui. Sint quasi hic ex voluptate cupiditate animi.",
      "dateOfReview": "November 2018",
      "dateOfTrip": "April 2018",
      "tripType": "Couples",
      "helpful": 857
  },
  {
      "_id": [
          2,
          5
      ],
      "username": "Dion_Heathcote",
      "location": "Armstrongburgh, Indiana",
      "contributions": 957,
      "rating": 3,
      "title": "Possimus sed ducimus voluptatem veniam facilis voluptas reprehenderit non doloremque.",
      "review": "Rerum soluta ea in. Qui deserunt ducimus exercitationem et inventore. Suscipit quidem qui ut. Voluptas ex a consequatur ipsum praesentium facere fuga. Omnis ratione ut quis nam nesciunt totam ducimus. Sed ut repellendus natus rerum vel qui.",
      "dateOfReview": "October 2017",
      "dateOfTrip": "July 2017",
      "tripType": "Solo",
      "helpful": 878
  },
  {
      "_id": [
          2,
          6
      ],
      "username": "Rudolph_Flatley30",
      "location": "West Howard, Arkansas",
      "contributions": 282,
      "rating": 1,
      "title": "Officia nam odit quo corporis consequuntur laudantium expedita non.",
      "review": "Ut commodi veniam rerum qui veniam eius. Qui asperiores est laboriosam repudiandae. Blanditiis quod nihil et est hic harum molestiae accusantium.",
      "dateOfReview": "August 2020",
      "dateOfTrip": "January 2020",
      "tripType": "Business",
      "helpful": 669
  },
  {
      "_id": [
          2,
          7
      ],
      "username": "Timothy91",
      "location": "North Jackson, North Carolina",
      "contributions": 10,
      "rating": 1,
      "title": "Doloribus rerum deserunt.",
      "review": "Excepturi qui sit fugit. Similique ab est qui assumenda. Velit sit omnis non autem vitae. Maxime dolores praesentium. Non aperiam quia id cum sit veniam consequatur.",
      "dateOfReview": "October 2016",
      "dateOfTrip": "August 2016",
      "tripType": "Friends",
      "helpful": 300
  },
  {
      "_id": [
          2,
          8
      ],
      "username": "Hans_Turner",
      "location": "Rauland, Oregon",
      "contributions": 555,
      "rating": 2,
      "title": "Quam laboriosam beatae aliquam.",
      "review": "Eveniet odit laboriosam cumque rerum pariatur voluptatem consequatur voluptatum. Aut molestiae sed eligendi officia. Sapiente repellat delectus similique itaque libero.",
      "dateOfReview": "May 2015",
      "dateOfTrip": "January 2015",
      "tripType": "Family (teens)",
      "helpful": 61
  },
  {
      "_id": [
          2,
          9
      ],
      "username": "Shyanne_Jones",
      "location": "East Ted, Alabama",
      "contributions": 958,
      "rating": 2,
      "title": "Et totam pariatur voluptas consequatur amet recusandae provident.",
      "review": "Similique rerum et quam qui non beatae recusandae nobis. Deserunt qui aut quaerat cumque. Et magni ad facere aspernatur sunt perferendis.",
      "dateOfReview": "November 2019",
      "dateOfTrip": "October 2019",
      "tripType": "Solo",
      "helpful": 509
  }
]; 


const times = [
  { 'Mar-May': false },
  { 'Jun-Aug': true },
  { 'Sep-Nov': false },
  { 'Dec-Feb': true },
];

const months = [
  { 'Mar-May': ['March', 'April', 'May'] },
  { 'Jun-Aug': ['June', 'July', 'August' ]},
  { 'Sep-Nov': ['September', 'October', 'November'] },
  { 'Dec-Feb': ['December', 'January', 'February'] },
];

const selectedMonths = times.reduce((accum, time, index) => {
  const [key] = Object.keys(time);

  time[key] ? accum.push(...months[index][key]) : false;

  return accum;
}, []);

const regexMonths = new RegExp(selectedMonths.reduce((accum, month, index) => {
  index !== selectedMonths.length - 1 ? accum += `${month}.*|` : accum += `${month}.*)`;

  return accum;
}, '('));

// console.log(selectedMonths);
// console.log(regexMonths);

const types = [
  { Families: false },
  { Couples: false },
  { Solo: false },
  { Business: false },
  { Friends: false },
];

const selectedTypes = types.reduce((accum, type) => {
  const [key] = Object.keys(type); 

  type[key] ? accum.push(key) : null;

  return accum;
}, []);

const regexTypes = selectedTypes.reduce((accum, type, index) => {
  index !== selectedTypes.length - 1 ? accum += `${type}|` : accum += `${type})`;

  return accum;
}, '(')

// console.log(regexTypes)

// const oct = 'October';
// const jan = 'January';
// const regex = new RegExp(`(${oct}.*|${jan}.*)`);
// const result = reviews.filter(review => regex.test(review.dateOfTrip));
// console.log(result);

const ratings = [
  { Excellent: true },
  { 'Very Good': false }, 
  { Average: true },
  { Poor: false }, 
  { Terrible: true },
];

const max = 5; 

const selectedRatings = ratings.reduce((accum, rate, index) => {
  const [key] = Object.keys(rate);

  rate[key] ? accum.push(max - index) : false;

  return accum;
}, []);

const regexRatings = new RegExp(selectedRatings.reduce((accum, rate, index) => {
  index !== selectedRatings.length - 1 ? accum += `${rate}|` : accum += `${rate})`;

  return accum;
}, '('));

console.log(selectedRatings);
console.log(regexRatings);

const results = reviews.filter(({ rating }) => regexRatings.test(rating));
console.log(results); 

import axios from 'axios';
import React, { Component, lazy, Suspense } from 'react';
import { ReviewsBox } from '../css/style';
import { /* filterMonths, filterRatings, filterTypes, */ filterAll, filterSearch, isPlural } from '../helpers/functions';
import AES from 'crypto-js/aes';
import UTF8 from 'crypto-js/enc-utf8';
import dotenv from 'dotenv';

dotenv.config();
const key = process.env.REVIEW_LIST_KEY || '';

const FlexBox = lazy(() => import('./FlexBox'));
const Header = lazy(() => import('./Header'));
const Languages = lazy(() => import('./Languages'));
const TravelerRating = lazy(() => import('./TravelerRating'));
// const ReviewList = lazy(() => import('./ReviewList.jsx'));
const Search = lazy(() => import('./Search'));
const TimeOfYear = lazy(() => import('./TimeOfYear'));
const TravelerType = lazy(() => import('./TravelerType'));
const renderLoader = () => <p>Loading...</p>;

class App extends Component {
  /**
   * Constructor; initializes internal component state.
   * @param {Object} props - Short for properties; has all the values passed from parent component.
   */
  constructor(props) {
    super(props); // Sets `this.props`. Otherwise, when accessing `this.props`, would be `undefined`

    this.state = {
      travelerRating: {
        Excellent: false,
        'Very Good': false,
        Average: false,
        Poor: false,
        Terrible: false,
      },
      timeOfYear: {
        'Mar-May': false,
        'Jun-Aug': false,
        'Sep-Nov': false,
        'Dec-Feb': false,
      },
      travelerType: {
        Families: false,
        Couples: false,
        Solo: false,
        Business: false,
        Friends: false,
      },
      language: {
        'All languages': 1586,
        English: 1557,
        Spanish: 11,
        French: 3,
        Hebrew: 3,
        Portuguese: 3,
        Danish: 1,
        German: 1,
        Italian: 1,
        Japanese: 1,
        Korean: 1,
        Dutch: 1,
        Polish: 1,
        Swedish: 1,
        'Chinese (Sim.)': 1,
      },
      selectedLang: '',
      search: '',
      reviews: [],
    };

    this.handleLangChange = this.handleLangChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleTimeOfYearChange = this.handleTimeOfYearChange.bind(this);
    this.handleTravelerTypeChange = this.handleTravelerTypeChange.bind(this);
    this.updateReviewListHelpful = this.updateReviewListHelpful.bind(this);
  }

  /**
   * Invoked immediately after `<App />` is mounted.
   * Loads data from a remote endpoint.
   * Uses React setState() to update `<App />`s `reviews` property to the loaded data.
   */
  componentDidMount() {
    axios.get('/reviews')
      .then(({ data: reviews }) => {
        // Iterate `reviews` to encrypt each document's `_id` field's elements.
        for (let i = 0; i < reviews.length; i += 1) {
          const { _id } = reviews[i];
          reviews[i]._id = [AES.encrypt(`${_id[0]}`, key).toString(), AES.encrypt(`${_id[1]}`, key).toString()];
        }

        this.setState({ reviews })
      })
      .catch(console.error);
  }

  /**
   * Handles change in `<Languages />`'s `props`.
   * Uses React setState() to update `<App />`s `selectedLang` property.
   * @param {Object} event - The `Event` interface; a reference to the object onto which the event
   * was dispatched.
   * @param {Object} event.target - The `target` property of the `Event` interface is a reference to
   * the object onto which the event was dispatched.
   * @param {string} event.target.name - The native DOM `name` attribute.
   */
  handleLangChange(event) {
    const { target: { name } } = event;

    this.setState({
      selectedLang: name,
    });
  }

  /**
   * Handles change in `<TravelerRating>`'s `props`.
   * Uses React setState() to update `<App />`s `travelerRating` property.
   * @param {Object} event - The `Event` interface; a reference to the object onto which the event
   *                         was dispatched.
   * @param {Object} event.target - The `target` property of the `Event` interface is a reference to
   * the object onto which the event was dispatched.
   * @param {string} event.target.name - The native DOM `name` attribute.
   * @param {boolean} event.target.checked - The native `checked` DOM attribute.
   */
  handleRatingChange(event) {
    const { name, checked } = event.target;
    const travelerRating = Object.assign({}, this.state.travelerRating); // Object copy.
    
    travelerRating[name] = checked;

    this.setState({
      travelerRating,
    });
  }

  /**
   * Handles change in `<Search>`'s `props`.
   * Uses React setState() to update `<App />`s `search` property.
   * @param {Object} event - The `Event` interface; a reference to the object onto which the event
   *                         was dispatched.
   * @param {Object} event.target - The `target` property of the `Event` interface is a reference to
   * the object onto which the event was dispatched.
   * @param {string} event.target.name - The native DOM `name` attribute.
   * @param {string} event.target.value - The value of the native `name` DOM attribute.
   */
  handleSearchChange(event) {
    const { name, value } = event.target; // {string} `name` - A native DOM attr; equals to 'search'

    this.setState({
      [name]: value, // 'search': value
    });
  }

  /**
   * Handles submit in `<Search>`'s `props`.
   * Cancels the event.
   * @param {Object} event - The `Event` interface; a reference to the object onto which the event
   *                         was dispatched.
   */
  handleSearchSubmit(event) {
    event.preventDefault();
  }

  /**
   * Handle change in `<TimeOfYear>`'s `props`.
   * @param {Object} event - The `Event` interface; a reference to the object onto which the event
   *                         was dispatched.
   * @param {string} event.target.name - The native DOM `name` attribute.
   * @param {boolean} event.target.checked - The native `checked` DOM attribute.
   */
  handleTimeOfYearChange(event) {
    const { name, checked } = event.target;
    const timeOfYear = Object.assign({}, this.state.timeOfYear); // Object copy.

    timeOfYear[name] = checked;

    this.setState({
      timeOfYear,
    });
  }

  /**
   * Handle change in TravelerType's `props`
   * @param {Object} event - The `Event` interface; a reference to the object onto which the event
   *                         was dispatched.
   * @param {string} event.target.name - The native DOM `name` attribute.
   * @param {boolean} event.target.checked - The native `checked` DOM attribute.
   */
  handleTravelerTypeChange(event) {
    const { name, checked } = event.target;
    const travelerType = Object.assign({}, this.state.travelerType); // Object copy.

    travelerType[name] = checked;

    this.setState({
      travelerType,
    });
  }

  /**
   * Handle `<ReviewList>`'s `onClick` event for `helpful` count button. 
   * PUT request to update the database for a review.
   * @param {Object} event - The `Event` interface; a reference to then object onto which the event
   *                         was dispatched.
   */
  updateReviewListHelpful(event) {
    const parentIdEncrypted = event.target.getAttribute('data-parent-id');
    const childIdEncrypted = event.target.getAttribute('data-child-id');
    console.log(event.target)
    console.log('hello', parentIdEncrypted, childIdEncrypted);
    axios.put('/reviews', { parentIdEncrypted, childIdEncrypted }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then(({ data: reviews }) => {
        // Iterate `reviews` to encrypt each document's `_id` field's elements.
        for (let i = 0; i < reviews.length; i += 1) {
          const { _id } = reviews[i];
          reviews[i]._id = [AES.encrypt(`${_id[0]}`, key).toString(), AES.encrypt(`${_id[1]}`, key).toString()];
        }

        this.setState({ reviews })
      })
      .catch(console.error);
  }

  /**
   * Render components as viewable elements in a browser.
   * @returns {JSX} JSX element
   */
  render() {
    const {
      language,
      travelerRating,
      reviews,
      search,
      selectedLang,
      timeOfYear,
      travelerType,
    } = this.state;

    return (
      <Suspense fallback={renderLoader()}>
        <Header />
        <ReviewsBox>
          <TravelerRating
            travelerRating={travelerRating}
            handleChange={this.handleRatingChange}
          />
          <TravelerType
            travelerType={travelerType}
            handleChange={this.handleTravelerTypeChange}
          />
          <TimeOfYear
            timeOfYear={timeOfYear}
            handleChange={this.handleTimeOfYearChange}
          />
          <Languages
            language={language}
            selected={selectedLang}
            handleChange={this.handleLangChange}
          />
        </ReviewsBox>
        <Search
          handleChange={this.handleSearchChange}
          handleSubmit={this.handleSearchSubmit}
        />
        {/* <ReviewList
          travelerRating={travelerRating}
          reviews={reviews}
          target={search}
          timeOfYear={timeOfYear}
          travelerType={travelerType}
          updateHelpful={this.updateReviewListHelpful}
        /> */}
        <FlexBox reviews={filterSearch(search, filterAll(reviews, travelerRating, timeOfYear, travelerType))} updateHelpful={this.updateReviewListHelpful}/>
      </Suspense>
    );
  }
}

export default App;

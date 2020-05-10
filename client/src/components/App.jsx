import axios from 'axios';
import React, { Component } from 'react';
import Header from './Header';
import Languages from './Languages';
import Ratings from './Ratings';
import ReviewList from './review/ReviewList';
import TimeOfYear from './TimeOfYear';
import TravelerType from './TravelerType';
import { ratings, types, times, languages } from '../helpers/reviewsGridConfig';


class App extends Component {
  /**
   * Constructor
   * @param {Object} props - Short for properties; has all the values passed from parent component.
   */
  constructor(props) {
    super(props); // Sets `this.props`. Otherwise, when accessing `this.props`, would be `undefined`

    this.state = {
      ratings,
      times,
      types,
      languages,
      selectedLang: '',
      reviews: [],
    };

    this.handleLangChange = this.handleLangChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleTravelerChange = this.handleTravelerChange.bind(this);
    this.updateHelpful = this.updateHelpful.bind(this);
  }

  /**
   * PUT request - update `helpful` count for a review
   * @param {Object} event - The `Event` interface; a reference to then object onto which the event
   *                         was dispatched.
   */
  updateHelpful(event) {
    const { id } = event.target; // {String} `id` - e.g. '2,1' where '2' listing ID; '1' review ID
    const _id = id.split(',').map(num => Number.parseInt(num)); // {Array} `_id` - e.g. [2, 1]

    axios.put('/reviews', { _id })
      .then(({ data: reviews }) => this.setState({ reviews }))
      .catch(console.error);
  }

  /**
   * Handle change in Languages' `props`
   * @param {Object} target - The `target` property of the `Event` interface is a reference to the
   *                          object onto which the event was dispatched.
   * @param {String} name - The native DOM `name` attribute.
   * @param {String} selectedLang - An alias for `name` parameter.
   */
  handleLangChange({ target: { name: selectedLang } }) {
    this.setState({
      selectedLang,
    });
  }


  handleRatingChange(event) {
    const { name, checked } = event.target; // destructuring
    const index = event.target.getAttribute('index'); // index - A custom DOM attribute
    const ratings = [...this.state.ratings]; // array copy

    ratings[index] = {
      [name]: checked,
    };
    
    
    this.setState({
      ratings,
    });
  }


  /**
   * Handle change in TimeOfYear's `props`
   * @param {Object} event - The `Event` interface; a reference to the object onto which the event
   *                         was dispatched.
   */
  handleTimeChange(event) {
    const { name, checked } = event.target; // destructuring
    const index = event.target.getAttribute('index'); // index - A custom DOM attribute
    const times = [...this.state.times]; // array copy

    times[index] = {
      [name]: checked,
    };
    
    
    this.setState({
      times,
    });
  }


  /**
   * Handle change in TravelerType's `props`
   * @param {Object} event - The `Event` interface; a reference to the object onto which the event
   *                         was dispatched.
   */
  handleTravelerChange(event) {
    const { name, checked } = event.target; // `name` - A native DOM attribute
                                            // `checked` - A native DOM attribute
    const index = event.target.getAttribute('index'); // `index` - A custom DOM attribute
    const types = [...this.state.types]; // array copy

    types[index] = {
      [name]: checked,
    };

    this.setState({
      types,
    });
  }

  /**
   * Axios GET request - Initialize App's `reviews`
   */
  componentDidMount() {
    axios.get('/reviews')
      .then(({ data: reviews }) => this.setState({ reviews }))
      .catch(console.error);
  }


  /**
   * Render
   * @returns JSX element
   */
  render() {
    const { languages, ratings, reviews, selectedLang, times, types } = this.state;
    return (
      <div>
        <Header />
        <Ratings ratings={ratings} handleChange={this.handleRatingChange} />
        <TravelerType types={types} handleChange={this.handleTravelerChange} />
        <TimeOfYear times={times} handleChange={this.handleTimeChange} />
        <Languages languages={languages} selected={selectedLang} handleChange={this.handleLangChange} />
        <ReviewList ratings={ratings} reviews={reviews} times={times} types={types} handleChange={this.updateHelpful} />
      </div>
    );
  }
}
export default App;

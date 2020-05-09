import axios from 'axios';
import React, { Component } from 'react';
import ReviewList from './review/ReviewList';
import { types, times, languages } from '../helpers/reviewsGridConfig';
import TravelerType from './TravelerType';

// import Header from './Header';
import Languages from './Languages';
import TimeOfYear from './TimeOfYear';
// import TravelerType from './TravelerType';

class App extends Component {
  /**
   * Constructor
   * @param {Object} props - Short for properties; has all the values passed from parent component.
   */
  constructor(props) {
    super(props); // Sets `this.props`. Otherwise, when accessing `this.props`, would be `undefined`

    this.state = {
      types,
      times,
      languages,
      selectedLang: '',
      reviews: [],
    };

    this.handleLangChange = this.handleLangChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleTravelerChange = this.handleTravelerChange.bind(this);
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


  // initial
  componentDidMount() {
    axios.get('/reviews')
      .then(({ data }) => this.setState({ reviews: data }))
      .catch(console.error);
  }


  render() {
    const { languages, reviews, selectedLang, times, types } = this.state;
    return (
      <div>
        <TravelerType types={types} handleChange={this.handleTravelerChange} />
        <TimeOfYear times={times} handleChange={this.handleTimeChange} />
        <Languages languages={languages} selected={selectedLang} handleChange={this.handleLangChange} />
        <ReviewList reviews={reviews} />
      </div>
    );
  }
}
export default App;

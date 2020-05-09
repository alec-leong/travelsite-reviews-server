import axios from 'axios';
import React, { Component } from 'react';
import ReviewList from './review/ReviewList';
import { types, times, languages } from '../helpers/reviewsGridConfig';
import TravelerType from './TravelerType';

// import Header from './Header';
// import Languages from './Languages';
import TimeOfYear from './TimeOfYear';
// import TravelerType from './TravelerType';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      types,
      times,
      languages,
      reviews: [],
    };

    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleTravelerChange = this.handleTravelerChange.bind(this);
  }

  /**
   * Handle change in TravelerType's `props`
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
    const { reviews, times, types } = this.state;
    return (
      <div>
        <TravelerType types={types} handleChange={this.handleTravelerChange} />
        <TimeOfYear times={times} handleChange={this.handleTimeChange} />
        <ReviewList reviews={reviews} />
      </div>
    );
  }
}
export default App;

import axios from 'axios';
import React, { Component } from 'react';
import ReviewList from './review/ReviewList';
import { types, times, languages } from '../helpers/reviewsGridConfig';
import TravelerType from './TravelerType';

// import Header from './Header';
// import Languages from './Languages';
// import TimeOfYear from './TimeOfYear';
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

    this.handleTravelerTypeChange = this.handleTravelerTypeChange.bind(this);
  }

  // handleTravelerTypeChange
  handleTravelerTypeChange(event) {
    const { name, checked } = event.target; // destructuring
    const index = event.target.getAttribute('index'); // index - A custom DOM attribute
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
    const { reviews, types } = this.state;
    return (
      <div>
        <TravelerType types={types} handleChange={this.handleTravelerTypeChange} />
        <ReviewList reviews={reviews} />
      </div>
    );
  }
}
export default App;
